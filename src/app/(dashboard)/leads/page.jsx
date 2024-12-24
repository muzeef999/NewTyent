"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Container, Row, Col, InputGroup, Button, Spinner, Badge } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://tyent.co.in'; // Fallback URL



const LeadsPage = () => {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("");
  const [updateData, setUpdateData] = useState({ id: "", assignedTo: "", status: "" });
  const [managers, setManagers] = useState([]);
  const [loadingManagers, setLoadingManagers] = useState(true);

  // Define color mapping for lead status
  const statusColors = {
    "New": "#d6d6d6",  // Light Gray for "New"
    "Contacted & send details": "#007bff",  // Blue for "Contacted & send details"
    "Under follow for demo": "#ffc107",  // Yellow for "Under follow for demo"
    "Demo done - Closure follow up": "#28a745",  // Green for "Demo done - Closure follow up"
    "Required time": "#6f42c1",  // Purple for "Required time"
    "Not interested": "#dc3545",  // Red for "Not interested"
    "Installed": "#155724",  // Dark Green for "Installed"
  };

  // Fetch managers with 'manager' role from the users API
  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/auth/signup`);
        const managerList = response.data.users.filter(user => user.role === "manager");
        setManagers(managerList);
        setLoadingManagers(false);
      } catch (error) {
        console.error("Error fetching managers:", error.message);
        setLoadingManagers(false);
      }
    };

    fetchManagers();
  }, []);

  // Fetch leads from the API
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/lead`);
        setLeads(response.data);
        setFilteredLeads(response.data);
      } catch (error) {
        console.error("Error fetching leads:", error.message);
      }
    };

    fetchLeads();
  }, []);

  // Filter leads by selected date and location
  useEffect(() => {
    const filtered = leads.filter((lead) => {
      const leadDate = new Date(lead.createdAt).toDateString();
      const isSameDate = !selectedDate || leadDate === selectedDate.toDateString();
      const matchesLocation =
        !location || lead.location.toLowerCase().includes(location.toLowerCase());

      return isSameDate && matchesLocation;
    });

    setFilteredLeads(filtered);
  }, [selectedDate, location, leads]);

  // Handle updates to the updateData state
  const handleUpdateChange = (e) => {
    setUpdateData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update lead API call
  const handleUpdateLead = async (leadId) => {
    try {
      const response = await axios.put(`${apiUrl}/api/lead`, {
        leadId,
        assignedTo: updateData.assignedTo,
        status: updateData.status,
      });

      console.log("Update Response: ", response.data);

      // Refresh leads list after update
      const refreshedLeads = leads.map((lead) =>
        lead._id === leadId
          ? { ...lead, assignedTo: updateData.assignedTo, status: updateData.status }
          : lead
      );
      setLeads(refreshedLeads);
      setFilteredLeads(refreshedLeads);
      setUpdateData({ id: "", assignedTo: "", status: "" });
    } catch (error) {
      console.error("Error updating lead:", error.message);
    }
  };

  // Handle Delete Lead API call
  const handleDeleteLead = async (leadId) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/lead/${leadId}`);
      console.log("Delete Response: ", response.data);

      // Remove the deleted lead from the list
      const updatedLeads = leads.filter((lead) => lead._id !== leadId);
      setLeads(updatedLeads);
      setFilteredLeads(updatedLeads);
    } catch (error) {
      console.error("Error deleting lead:", error.message);
    }
  };

  // Calculate "Not Assigned Leads" and "New Leads" counts
  const getCounts = () => {
    const notAssignedCount = filteredLeads.filter((lead) => !lead.assignedTo).length;

    const newLeadsCount = filteredLeads.filter((lead) => {
      const createdAt = new Date(lead.createdAt);
      const currentTime = new Date();
      const diffTime = currentTime - createdAt;
      const diffHours = diffTime / (1000 * 3600);
      return diffHours <= 24;
    }).length;

    return { notAssignedCount, newLeadsCount };
  };

  const { notAssignedCount, newLeadsCount } = getCounts();

  return (
    <Container className="py-4">
      <h1 className="mb-4">Leads</h1>

      <Row className="mb-4">
        <Col md={6}>
          <h5>
            <Badge pill variant="warning">Not Assigned Leads: {notAssignedCount}</Badge>
          </h5>
        </Col>
        <Col md={6}>
          <h5>
            <Badge pill variant="success">New Leads: {newLeadsCount}</Badge>
          </h5>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Group controlId="dateFilter">
            <Form.Label>Select Date:</Form.Label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="form-control"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="locationFilter">
            <Form.Label>Enter Location:</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
              />
            </InputGroup>
          </Form.Group>
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
              <Table hover responsive style={{width:'100%', fontSize:'14px'}}>
                <thead>
                  <tr>
                    <th style={{width:'10%'}}>Lead Name</th>
                    <th style={{width:'15%'}}>Contact</th>
                    <th style={{width:'15%'}}>Location</th>
                    <th style={{width:'18%'}}>Message</th>
                    <th style={{width:'15%'}}>Assigned To</th>
                    <th style={{width:'15%'}}>Status</th>
                    <th style={{width:'12%'}}>Update & Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td>
                        <IoPersonOutline /> {lead.name} <br />
                        <SlCalender /> {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                      </td>
                      <td>
                        <IoMailOpenOutline /> {lead.email} <br />
                        <BsTelephone /> {lead.number}
                      </td>
                      <td>{lead.location}</td>
                      
                      <td>{lead.message}</td>
                      <td>
                        {updateData.id === lead._id ? (
                          <Form.Control
                            as="select"
                            name="assignedTo"
                            value={updateData.assignedTo}
                            onChange={handleUpdateChange}
                          >
                            <option value="">Select Manager</option>
                            {managers.map((manager) => (
                              <option key={manager._id} value={manager.name}>
                                {manager.name}
                              </option>
                            ))}
                          </Form.Control>
                        ) : (
                          lead.assignedTo || "Not assigned"
                        )}
                      </td>
                      <td>
                        {updateData.id === lead._id ? (
                          <Form.Control
                            as="select"
                            name="status"
                            value={updateData.status}
                            onChange={handleUpdateChange}
                          >
                            <option value="Contacted & send details" style={{ backgroundColor: "#007bff", color: "white" }}>Contacted & send details</option>
                            <option value="Under follow for demo" style={{ backgroundColor: "#ffc107", color: "black" }}>Under follow for demo</option>
                            <option value="Demo done - Closure follow up" style={{ backgroundColor: "#28a745", color: "white" }}>Demo done - Closure follow up</option>
                            <option value="Required time" style={{ backgroundColor: "#6f42c1", color: "white" }}>Required time</option>
                            <option value="Not interested" style={{ backgroundColor: "#dc3545", color: "white" }}>Not interested</option>
                            <option value="Installed" style={{ backgroundColor: "#155724", color: "white" }}>Installed</option>
                          </Form.Control>
                        ) : (
                          
                      <p className="text-center" style={{ color: statusColors[lead.status] || "#dcdcdc", borderRadius:'50px', border:`1px solid ${statusColors[lead.status] || "#dcdcdc"}`, padding:'5px' }}>
                      {lead.status}
                    </p>
                        )}
                      </td>
                    
                      <td>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setUpdateData({ id: lead._id, assignedTo: lead.assignedTo, status: lead.status });
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
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteLead(lead._id)}
                        >
                          <FaTrash />
                        </Button>
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
