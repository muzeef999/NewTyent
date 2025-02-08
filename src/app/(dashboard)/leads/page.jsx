"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  Spinner,
  Badge,
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
  setFilteredLeads,
  setLeads,
  updateLead,
} from "../../Redux/leadSlice";
import { fetchManagers } from "../../Redux/managerSlice";
import { useDispatch, useSelector } from "react-redux";
import { AgCharts } from "ag-charts-react";
import { useSession } from "next-auth/react";
import "@/app/style/Dashboard.css"

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

  const [updateData, setUpdateData] = useState({
    id: "",
    assignedTo: "",
    status: "",
  });

  const { leads, filteredLeads, loading } = useSelector((state) => state.leads);
  const { managers, loadingManagers } = useSelector((state) => state.managers);
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [filterType, setFilterType] = useState("date"); // "date" or "month"

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 15; // Number of leads per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  // Slice the leads array to show only the required leads per page
  const paginatedLeads = leads.slice(
    (currentPage - 1) * leadsPerPage,
    currentPage * leadsPerPage
  );



  useEffect(() => {
    dispatch(fetchLeads(userRole, username));
    dispatch(fetchManagers());
  }, [dispatch, userRole, username]);


  const handleUpdateChange = (e) => {
    setUpdateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const filtered = leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt);
      if (filterType === "date") {
        return !selectedDate || leadDate.toDateString() === selectedDate.toDateString();
      } else if (filterType === "month") {
        return (
          !selectedDate ||
          (leadDate.getMonth() === selectedDate.getMonth() &&
            leadDate.getFullYear() === selectedDate.getFullYear())
        );
      }
      return true;
    });
  
    dispatch(setFilteredLeads(filtered));
  }, [selectedDate, filterType, leads, dispatch]);

  const handleFilterChange = (date) => {
    setSelectedDate(date);
  };

  const handleUpdateLead = async (leadId) => {
    try {
      await dispatch(updateLead(updateData));

      const refreshedLeads = leads.map((lead) =>
        lead._id === leadId
          ? {
              ...lead,
              assignedTo: updateData.assignedTo,
              status: updateData.status,
            }
          : lead
      );
      dispatch(setLeads(refreshedLeads));
      dispatch(setFilteredLeads(refreshedLeads));
      setUpdateData({ id: "", assignedTo: "", status: "" });
    } catch (error) {
      console.error("Error updating lead:", error.message);
    }
  };

  const handleFilterByStatus = (status) => {
    const filtered = leads.filter((lead) => lead.status === status);
    dispatch(setFilteredLeads(filtered));
  };

  const calculateCounts = (filteredLeads) => {
    // Count for "Not Assigned"
    const notAssignedCount = filteredLeads.filter(
      (lead) => lead.assignedTo === "Not assigned"
    ).length;

    // Count for "New Leads (Last 24hrs)"
    const newLeadsCount = filteredLeads.filter((lead) => {
      const createdAt = new Date(lead.createdAt);
      const currentTime = new Date();
      const diffTime = currentTime - createdAt;
      const diffHours = diffTime / (1000 * 3600); // Difference in hours
      return diffHours <= 24;
    }).length;

    // Count for "Contacted & Send Details"
    const contactedAndSentDetailsCount = filteredLeads.filter(
      (lead) => lead.status === "Contacted & send details"
    ).length;

    // Count for "Under Follow for Demo"
    const underFollowForDemoCount = filteredLeads.filter(
      (lead) => lead.status === "Under follow for demo"
    ).length;

    // Count for "Demo Done - Closure Follow-Up"
    const demoDoneClosureFollowUpCount = filteredLeads.filter(
      (lead) => lead.status === "Demo done - Closure follow up"
    ).length;

    // Count for "Required Time"
    const requiredTimeCount = filteredLeads.filter(
      (lead) => lead.status === "Required time"
    ).length;

    // Count for "Not Interested"
    const notInterestedCount = filteredLeads.filter(
      (lead) => lead.status === "Not interested"
    ).length;

    // Count for "Installed"
    const installedCount = filteredLeads.filter(
      (lead) => lead.status === "Installed"
    ).length;

    // Return all the counts
    return {
      notAssignedCount,
      newLeadsCount,
      contactedAndSentDetailsCount,
      underFollowForDemoCount,
      demoDoneClosureFollowUpCount,
      requiredTimeCount,
      notInterestedCount,
      installedCount,
    };
  };

  // Get counts dynamically based on filtered leads
  const {
    notAssignedCount,
    newLeadsCount,
    contactedAndSentDetailsCount,
    underFollowForDemoCount,
    demoDoneClosureFollowUpCount,
    requiredTimeCount,
    notInterestedCount,
    installedCount,
  } = calculateCounts(filteredLeads);

  // Chart data
  const followUpChartData = [
    { category: "Not Assigned", count: notAssignedCount },
    { category: "New Leads (Last 24hrs)", count: newLeadsCount },
    {
      category: "Contacted & Send Details",
      count: contactedAndSentDetailsCount,
    },
    { category: "Under Follow for Demo", count: underFollowForDemoCount },
    {
      category: "Demo done - Closure follow up",
      count: demoDoneClosureFollowUpCount,
    },
    { category: "Required time", count: requiredTimeCount },
    { category: "Not interested", count: notInterestedCount },
    { category: "Installed", count: installedCount },
  ];

  // Chart options
  const chartOptions = {
    data: followUpChartData,
    series: [
      {
        type: "pie",
        angleKey: "count", // Use the 'count' value for the pie slice size
        labelKey: "category", // Use the 'category' value as the label
        fills: [
          "#FF5733", // Not Assigned
          "#d6d6d6", // New Leads (Last 24hrs)
          "#007bff", // Contacted & Send Details
          "#ffc107", // Under Follow for Demo
          "#28a745", // Demo Done - Closure Follow-Up
          "#6f42c1", // Required Time
          "#dc3545", // Not Interested
          "#155724", // Installed
        ],
        calloutLabelKey: "category", // This should match 'category'
        sectorLabelKey: "count", // This should match 'count'
        angleKey: "count", // Angle based on 'count'
        calloutLabel: {
          offset: 10,
        },
        sectorLabel: {
          formatter: ({ datum, sectorLabelKey = "count" }) => {
            return `${numFormatter.format(datum[sectorLabelKey])}`; // Format 'count' with number formatting
          },
        },
        tooltip: {
          renderer: ({ datum, angleKey, calloutLabelKey = "category" }) => ({
            data: [
              {
                label: `${datum[calloutLabelKey]}`, // Tooltip showing 'category'
                value: `${datum[angleKey]}`, // Tooltip showing 'count'
              },
            ],
          }),
        },
        title: {
          text: "Follow-Up Categories", // More meaningful title
        },
      },
    ],
    legend: {
      enabled: true, // Enable legend for better understanding of the chart
    },
  };

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
          showMonthYearPicker={filterType === "month"} // Enables month picker
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

          {/* Dynamically render filter buttons */}
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
                backgroundColor: "#FFF", // White background for buttons
                color: statusColors[status] || "#dcdcdc", // Use color from statusColors or default to #dcdcdc
                border: `1px solid ${statusColors[status] || "#dcdcdc"}`, // Optional: Adds a subtle border
                padding: "7px 15px", // Optional: Adjusts button padding
                margin: "3px", // Optional: Adds some spacing between buttons
                cursor: "pointer", // Change cursor to pointer on hover
                borderRadius: "4px", // Optional: Adds rounded corners to buttons
              }}
              onClick={() => handleFilterByStatus(status)} // Call handleFilterByStatus with status
            >
              {status}
            </button>
          ))}
        </Col>

        <Col md={6}>
          <AgCharts options={chartOptions} />
        </Col>
      </Row>
       <hr/>
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
                          <span className="lead-name" title={lead.name}>{lead.name}</span> <br />
                          <SlCalender className="me-1" />
                          {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                        </td>

                        {/* Contact */}
                        <td>
                          <IoMailOpenOutline className="me-1" />
                          <a href={`mailto:${lead.email}`} className="lead-name-email" title={lead.email}>
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
                            <select name="assignedTo" value={updateData.assignedTo} onChange={handleUpdateChange}>
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
                            <select name="status" value={updateData.status} onChange={handleUpdateChange}>
                              <option value="Contacted & send details">Contacted & send details</option>
                              <option value="Under follow for demo">Under follow for demo</option>
                              <option value="Demo done - Closure follow up">Demo done - Closure follow up</option>
                              <option value="Required time">Required time</option>
                              <option value="Not interested">Not interested</option>
                              <option value="Installed">Installed</option>
                            </select>
                          ) : (
                            <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: statusColors[lead.status] || "#dcdcdc" }}>
                              {lead.status}
                            </span>
                          )}
                        </td>

                        {/* Actions */}
                        <td>
                          <Button variant="primary" className="me-1" onClick={() => setUpdateData({ id: lead._id, assignedTo: lead.assignedTo, status: lead.status })}>
                            <MdEdit />
                          </Button>
                          <Button variant="success" className="me-1" onClick={() => handleUpdateLead(lead._id)}>
                            <TiTick />
                          </Button>
                          {userRole === "admin" && (
                            <Button variant="danger" onClick={() => handleDeleteLead(lead._id)}>
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
                <Button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>
                  Previous
                </Button>
                <span className="mx-3">Page {currentPage} of {totalPages}</span>
                <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>
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
