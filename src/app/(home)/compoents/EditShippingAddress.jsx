"use client";

import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "@/app/style/Shipping.css";
import { useSession } from "next-auth/react";

const EditShippingAddress = ({ editAddress, handleEditAccordionClose }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  // Populate form fields with editAddress when the component is rendered or updated
  useEffect(() => {
    if (editAddress) {
      setFormData({
        fullName: editAddress.fullName || "",
        address: editAddress.address || "",
        city: editAddress.city || "",
        country: editAddress.country || "",
        postalCode: editAddress.postalCode || "",
      });
    }
  }, [editAddress]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging: Log the required values
    console.log("Edit Address:", editAddress);
    console.log("Form Data:", formData);

    if (!session?.user?.id) {
      alert("User session is not available. Please log in.");
      return;
    }

    if (!editAddress?._id) {
      alert("Address ID is missing.");
      return;
    }

    try {
      const response = await fetch(`/api/shipping/${session.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressId: editAddress._id, // Ensure address ID is sent
          updatedAddress: formData,  // Ensure updated address details are sent
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Address updated successfully!");
        handleEditAccordionClose(); // Close the edit form on success
      } else {
        console.error("Error:", data);
        alert(`Error: ${data.error || "Unknown error occurred"}`);
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-3">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </Form.Group> 
          </Col>
          <Col>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formCity" className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCountry" className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter country"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formPostalCode" className="mb-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter postal code"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex">
          <Button className="saveanddelivery" type="submit">
            SAVE AND DELIVER HERE
          </Button>
          <button
            onClick={() => handleEditAccordionClose(false)}
            className="cancel"
          >
            CANCEL
          </button>
        </div>
      </Form>
    </div>
  );
};

export default EditShippingAddress;
