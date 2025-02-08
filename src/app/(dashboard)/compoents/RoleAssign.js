"use client"
import React, { useState } from "react";
import { Spinner, Button, Form, Container, Card, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

const RoleAssign = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Search user by phone number
  const searchUser = async () => {
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch(`/api/auth/signup?phoneNumber=${phoneNumber}`);
      const data = await response.json();
      if (response.ok) {
        setUser(data.user);
        setRole(data.user.role);
      } else {
        setMessage(data.error);
        setUser(null);
      }
    } catch (error) {
      setMessage("Error fetching user.");
    }
    setLoading(false);
  };

  // Update user role
  const updateRole = async () => {
    if (!user) {
      setMessage("Please search for a user first.");
      return;
    }
  
    setMessage("");
    setLoading(true);
    try {
      const response = await fetch(`/api/auth/signup`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: user.phoneNumber, role }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Role updated successfully.")
      } else {
        toast.error(data.error)
      }
    } catch (error) {
      toast.error("Error updating role.")
    }
    setLoading(false);
  };
  

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
        <h4 className="text-center mb-3">User Role Management</h4>

        {/* Phone Number Input */}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        {/* Search Button */}
        <Button
          variant="primary"
          className="w-100"
          onClick={searchUser}
          disabled={loading}
        >
          {loading ? <Spinner as="span" animation="border" size="sm" /> : "Search User"}
        </Button>

        {/* User Info & Role Update */}
        {user && (
          <Card className="mt-4 p-3 bg-light">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Phone:</strong> {user.phoneNumber}</p>
            <p><strong>Current Role:</strong> {user.role}</p>

            {/* Role Dropdown */}
            <Form.Select
              className="mt-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">admin</option>
              <option value="manager">manager</option>
              <option value="employee">employee</option>
            </Form.Select>

            {/* Update Button */}
            <Button
              variant="success"
              className="w-100 mt-3"
              onClick={updateRole}
              disabled={loading}
            >
              {loading ? <Spinner as="span" animation="border" size="sm" /> : "Update Role"}
            </Button>
          </Card>
        )}

        {/* Message Display */}
        {message && <Alert className="mt-3" variant="danger">{message}</Alert>}
      </Card>
    </Container>
  );
};

export default RoleAssign;
