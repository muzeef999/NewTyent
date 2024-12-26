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
import { FaTrash } from "react-icons/fa";
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

  useEffect(() => {
    dispatch(fetchLeads(userRole, username));
    dispatch(fetchManagers());
  }, [dispatch, userRole, username]);

  useEffect(() => {
    const filtered = leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt).toDateString();
      const isSameDate =
        !selectedDate || leadDate === selectedDate.toDateString();
      const matchesLocation =
        !location ||
        lead.location.toLowerCase().includes(location.toLowerCase());
      return isSameDate && matchesLocation;
    });
    dispatch(setFilteredLeads(filtered));
  }, [selectedDate, location, leads, dispatch]);

  const handleUpdateChange = (e) => {
    setUpdateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          <Form.Group controlId="dateFilter">
            <Form.Label>Select Date&nbsp;:&nbsp;</Form.Label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="form-control w-90"
            />
          </Form.Group>
          <br />
          <Form.Group controlId="locationFilter" className="d-flex">
            <Form.Label>Location&nbsp;:&nbsp;</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={location}
                style={{ width: "90%", height: "40px" }}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </InputGroup>
          </Form.Group>

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
                padding: "8px 16px", // Optional: Adjusts button padding
                margin: "4px", // Optional: Adds some spacing between buttons
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

      {loadingManagers ? (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        <Row>
          <Col>
            {filteredLeads.length > 0 ? (
              <Table
                hover
                responsive
                style={{ width: "100%", fontSize: "14px" }}
              >
                <thead>
                  <tr>
                    <th style={{ width: "10%" }}>Lead Name</th>
                    <th style={{ width: "15%" }}>Contact</th>
                    <th style={{ width: "15%" }}>Location</th>
                    <th style={{ width: "18%" }}>Message</th>
                    <th style={{ width: "15%" }}>Assigned To</th>
                    <th style={{ width: "15%" }}>Status</th>
                    <th style={{ width: "12%" }}>Update & Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td>
                        <IoPersonOutline /> {lead.name} <br />
                        <SlCalender />{" "}
                        {new Date(lead.createdAt).toLocaleDateString("en-IN")}
                      </td>
                      <td>
                        <IoMailOpenOutline /> {lead.email} <br />
                        <BsTelephone /> {lead.number}
                      </td>
                      <td>{lead.location}</td>
                      <td>{lead.message}</td>
                      <td>
                        <td>
                          {userRole === "admin" ? (
                            updateData.id === lead._id ? (
                              <Form.Control
                                as="select"
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
                              </Form.Control>
                            ) : (
                              lead.assignedTo || "Not assigned"
                            )
                          ) : (
                            lead.assignedTo
                          )}
                        </td>
                      </td>
                      <td>
                        {updateData.id === lead._id ? (
                          <Form.Control
                            as="select"
                            name="status"
                            value={updateData.status}
                            onChange={handleUpdateChange}
                            style={{ cursor: "pointer" }}
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
                            <option value="Not interested">
                              Not interested
                            </option>
                            <option value="Installed">Installed</option>
                          </Form.Control>
                        ) : (
                          <p
                            className="text-center"
                            style={{
                              color: statusColors[lead.status] || "#dcdcdc",
                              borderRadius: "50px",
                              border: `1px solid ${
                                statusColors[lead.status] || "#dcdcdc"
                              }`,
                              padding: "5px",
                            }}
                          >
                            {lead.status}
                          </p>
                        )}
                      </td>
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setUpdateData({
                              id: lead._id,
                              assignedTo: lead.assignedTo,
                              status: lead.status,
                            });
                          }}
                        >
                          <MdEdit />
                        </Button>{" "}
                        <Button
                          variant="success"
                          onClick={() => handleUpdateLead(lead._id)}
                        >
                          <TiTick />
                        </Button>{" "}
                        {userRole === "admin" ? (
                          <>
                            <Button
                              variant="danger"
                              onClick={() =>
                                dispatch(handleDeleteLead(lead._id))
                              }
                            >
                              <FaTrash />
                            </Button>
                          </>
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <div>No leads found</div>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LeadsPage;
