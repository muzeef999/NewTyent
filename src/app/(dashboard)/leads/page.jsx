"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  Table,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaCalendarAlt, FaSearchLocation, FaTrash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import {
  fetchLeads,
  handleDeleteLead,
  setLeads,
  updateLead,
} from "../../Redux/leadSlice";
import { fetchManagers } from "../../Redux/managerSlice";
import { useDispatch, useSelector } from "react-redux";
import { AgCharts } from "ag-charts-react";
import { useSession } from "next-auth/react";
import "@/app/style/Dashboard.css";

const statusColors = {
  New: "#d6d6d6",
  "Contacted & send details": "#007bff",
  "Under follow for demo": "#ffc107",
  "Demo done - Closure follow up": "#28a745",
  "Required time": "#6f42c1",
  "Not interested": "#dc3545",
  Installed: "#155724",
};

const LeadsPage = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { role: userRole, name: username } = session?.user || {};

  // State for updating leads
  const [updateData, setUpdateData] = useState({
    id: "",
    assignedTo: "",
    status: "",
  });

  // Redux state for leads and managers
  const { leads, loading } = useSelector((state) => state.leads);
  const { managers, loadingManagers } = useSelector((state) => state.managers);

  // Filter states
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [filterType, setFilterType] = useState("date"); // "date" or "month"
  const [statusFilter, setStatusFilter] = useState(""); // e.g., "New", "Contacted & send details", etc.

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 15;

  // Fetch leads and managers on mount
  useEffect(() => {
    dispatch(fetchLeads(userRole, username));
    dispatch(fetchManagers());
  }, [dispatch, userRole, username]);

  // Reset pagination when any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedDate, filterType, location, statusFilter]);

  // Compute filtered leads (date/month, location, and status) using useMemo
  const computedFilteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt);
      const dateMatch =
        filterType === "date"
          ? !selectedDate || leadDate.toDateString() === selectedDate.toDateString()
          : !selectedDate ||
            (leadDate.getMonth() === selectedDate.getMonth() &&
             leadDate.getFullYear() === selectedDate.getFullYear());
      const locationMatch =
        !location ||
        (lead.location &&
          lead.location.toLowerCase().includes(location.toLowerCase()));
      let statusMatch = true;
      if (statusFilter) {
        if (statusFilter === "New") {
          const diffHours = (new Date() - leadDate) / (1000 * 3600);
          statusMatch = diffHours <= 24;
        } else {
          statusMatch = lead.status === statusFilter;
        }
      }
      return dateMatch && locationMatch && statusMatch;
    });
  }, [leads, selectedDate, filterType, location, statusFilter]);

  // Sort filtered leads (newest first) using useMemo
  const sortedLeads = useMemo(() => {
    return [...computedFilteredLeads].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }, [computedFilteredLeads]);

  // Compute pagination using useMemo
  const totalPages = useMemo(() => {
    return Math.ceil(sortedLeads.length / leadsPerPage);
  }, [sortedLeads, leadsPerPage]);

  const paginatedLeads = useMemo(() => {
    const start = (currentPage - 1) * leadsPerPage;
    return sortedLeads.slice(start, start + leadsPerPage);
  }, [sortedLeads, currentPage, leadsPerPage]);

  // Handlers with useCallback to avoid unnecessary re-renders
  const handleUpdateChange = useCallback((e) => {
    setUpdateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleFilterChange = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const handleUpdateLead = useCallback(
    async (leadId) => {
      try {
        await dispatch(updateLead(updateData));
        const refreshedLeads = leads.map((lead) =>
          lead._id === leadId
            ? { ...lead, assignedTo: updateData.assignedTo, status: updateData.status }
            : lead
        );
        dispatch(setLeads(refreshedLeads));
        setUpdateData({ id: "", assignedTo: "", status: "" });
      } catch (error) {
        console.error("Error updating lead:", error.message);
      }
    },
    [dispatch, leads, updateData]
  );

  const handleFilterByStatus = useCallback((status) => {
    setStatusFilter((prev) => (prev === status ? "" : status));
  }, []);

  // Count calculations using useMemo
  const counts = useMemo(() => {
    return {
      notAssignedCount: computedFilteredLeads.filter(
        (lead) => lead.assignedTo === "Not assigned"
      ).length,
      newLeadsCount: computedFilteredLeads.filter((lead) => {
        const diffHours = (new Date() - new Date(lead.createdAt)) / (1000 * 3600);
        return diffHours <= 24;
      }).length,
      contactedAndSentDetailsCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Contacted & send details"
      ).length,
      underFollowForDemoCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Under follow for demo"
      ).length,
      demoDoneClosureFollowUpCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Demo done - Closure follow up"
      ).length,
      requiredTimeCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Required time"
      ).length,
      notInterestedCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Not interested"
      ).length,
      installedCount: computedFilteredLeads.filter(
        (lead) => lead.status === "Installed"
      ).length,
    };
  }, [computedFilteredLeads]);

  // Chart data and options using useMemo
  const followUpChartData = useMemo(() => {
    return [
      { category: "Not Assigned", count: counts.notAssignedCount },
      { category: "New Leads (Last 24hrs)", count: counts.newLeadsCount },
      { category: "Contacted & Send Details", count: counts.contactedAndSentDetailsCount },
      { category: "Under Follow for Demo", count: counts.underFollowForDemoCount },
      { category: "Demo done - Closure follow up", count: counts.demoDoneClosureFollowUpCount },
      { category: "Required time", count: counts.requiredTimeCount },
      { category: "Not interested", count: counts.notInterestedCount },
      { category: "Installed", count: counts.installedCount },
    ];
  }, [counts]);

  const chartOptions = useMemo(() => {
    return {
      data: followUpChartData,
      series: [
        {
          type: "pie",
          angleKey: "count",
          labelKey: "category",
          fills: [
            "#FF5733",
            "#d6d6d6",
            "#007bff",
            "#ffc107",
            "#28a745",
            "#6f42c1",
            "#dc3545",
            "#155724",
          ],
          calloutLabelKey: "category",
          sectorLabelKey: "count",
          calloutLabel: { offset: 10 },
          sectorLabel: {
            formatter: ({ datum, sectorLabelKey = "count" }) => `${datum[sectorLabelKey]}`,
          },
          tooltip: {
            renderer: ({ datum, angleKey, calloutLabelKey = "category" }) => ({
              data: [{ label: `${datum[calloutLabelKey]}`, value: `${datum[angleKey]}` }],
            }),
          },
          title: { text: "Follow-Up Categories" },
        },
      ],
      legend: { enabled: true },
    };
  }, [followUpChartData]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col md={6}>
          <div className="p-3 shadow-sm rounded bg-white">
            {/* Filter Type Dropdown */}
            <Form.Group controlId="filterType" className="mb-3">
              <Form.Label className="fw-bold">Filter Type:</Form.Label>
              <Form.Control
                as="select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="form-select"
              >
                <option value="date">Filter by Date</option>
                <option value="month">Filter by Month</option>
              </Form.Control>
            </Form.Group>

            {/* Date/Month Picker */}
            <Form.Group controlId="dateFilter" className="mb-3">
              <Form.Label className="fw-bold">
                <FaCalendarAlt className="me-2 text-primary" />
                Select {filterType === "date" ? "Date" : "Month"}:
              </Form.Label>
              <DatePicker
                selected={selectedDate}
                onChange={handleFilterChange}
                placeholderText={`Select ${filterType === "date" ? "Date" : "Month"}`}
                className="form-control"
                showMonthYearPicker={filterType === "month"}
                dateFormat={filterType === "month" ? "MM/yyyy" : "dd/MM/yyyy"}
              />
            </Form.Group>

            {/* Location Search */}
            <Form.Group controlId="locationFilter">
              <Form.Label className="fw-bold">
                <FaSearchLocation className="me-2 text-secondary" />
                Location:
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                  className="form-control"
                />
              </InputGroup>
            </Form.Group>
          </div>
          <br />
          {/* Status Filter Buttons */}
          {[
            "New",
            "Contacted & send details",
            "Under follow for demo",
            "Demo done - Closure follow up",
            "Required time",
            "Not interested",
            "Installed",
          ].map((status) => (
            <button
              key={status}
              style={{
                backgroundColor: statusFilter === status ? statusColors[status] : "#FFF",
                color: statusFilter === status ? "#FFF" : statusColors[status] || "#dcdcdc",
                border: `1px solid ${statusColors[status] || "#dcdcdc"}`,
                padding: "7px 15px",
                margin: "3px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
              onClick={() => handleFilterByStatus(status)}
            >
              {status}
            </button>
          ))}
        </Col>
        <Col md={6}>
          <AgCharts options={chartOptions} />
        </Col>
      </Row>
      <hr />
      {loadingManagers ? (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <Row>
          <Col>
            {leads.length > 0 ? (
              <div className="table-responsive">
                <Table hover striped bordered className="text-start">
                  <thead className="table-dark">
                    <tr>
                      <th style={{ width: "12%" }}>Lead Name</th>
                      <th style={{ width: "22%" }}>Contact</th>
                      <th style={{ width: "10%" }}>Location</th>
                      <th style={{ width: "20%" }}>Message</th>
                      <th style={{ width: "10%" }}>Assigned To</th>
                      <th style={{ width: "13%" }}>Status</th>
                      <th style={{ width: "14%" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedLeads.map((lead) => (
                      <tr key={lead._id}>
                        {/* Lead Name */}
                        <td>
                          <IoPersonOutline className="me-1" />
                          <span className="lead-name" title={lead.name}>
                            {lead.name}
                          </span>
                          <br />
                          <SlCalender className="me-1" />
                          {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                        </td>
                        {/* Contact */}
                        <td>
                          <IoMailOpenOutline className="me-1" />
                          <a
                            href={`mailto:${lead.email}`}
                            className="lead-name-email"
                            title={lead.email}
                          >
                            {lead.email}
                          </a>
                          <br />
                          <BsTelephone className="me-1" />
                          <a href={`tel:${lead.number}`} className="lead-name-phone">
                            {lead.number}
                          </a>
                        </td>
                        {/* Location */}
                        <td>{lead.location}</td>
                        {/* Message */}
                        <td style={{ wordBreak: "break-word" }}>{lead.message}</td>
                        {/* Assigned To */}
                        <td>
                          {userRole === "admin" && updateData.id === lead._id ? (
                            <select
                              name="assignedTo"
                              value={updateData.assignedTo}
                              onChange={handleUpdateChange}
                            >
                              <option value="">Select Manager</option>
                              {managers.map(({ _id, name }) => (
                                <option key={_id} value={name}>
                                  {name}
                                </option>
                              ))}
                            </select>
                          ) : (
                            lead.assignedTo || "Not assigned"
                          )}
                        </td>
                        {/* Status */}
                        <td>
                          {updateData.id === lead._id ? (
                            <select
                              name="status"
                              value={updateData.status}
                              onChange={handleUpdateChange}
                            >
                              <option value="Contacted & send details">
                                Contacted & send details
                              </option>
                              <option value="Under follow for demo">
                                Under follow for demo
                              </option>
                              <option value="Demo done - Closure follow up">
                                Demo done - Closure follow up
                              </option>
                              <option value="Required time">Required time</option>
                              <option value="Not interested">Not interested</option>
                              <option value="Installed">Installed</option>
                            </select>
                          ) : (
                            <span
                              className="badge rounded-pill px-3 py-2"
                              style={{
                                backgroundColor: statusColors[lead.status] || "#dcdcdc",
                              }}
                            >
                              {lead.status}
                            </span>
                          )}
                        </td>
                        {/* Actions */}
                        <td>
                          <Button
                            variant="primary"
                            className="me-1"
                            onClick={() =>
                              setUpdateData({
                                id: lead._id,
                                assignedTo: lead.assignedTo,
                                status: lead.status,
                              })
                            }
                          >
                            <MdEdit />
                          </Button>
                          <Button
                            variant="success"
                            className="me-1"
                            onClick={() => handleUpdateLead(lead._id)}
                          >
                            <TiTick />
                          </Button>
                          {userRole === "admin" && (
                            <Button
                              variant="danger"
                              onClick={() => dispatch(handleDeleteLead(lead._id))}

                          >
                              <FaTrash />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <div className="text-center mt-3">No leads found</div>
            )}
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  Previous
                </Button>
                <span className="mx-3">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LeadsPage;
