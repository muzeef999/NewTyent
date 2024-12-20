"use client"
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import "@/app/style/Shipping.css"

const ShippingAddress = ({ handleAccordionClick }) => {


  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const { user } = useSelector((state) => state.auth);
  


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user.id, // Replace with actual user ID
          addresses: [formData],
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Address saved successfully!");
        handleClose();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };
  return (
    <div className='m-4'>
       <div>
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
            <Col>
            </Col>

        </Row >
        <div className='d-flex'>
      
            <Button onSubmit={handleSubmit}  className='saveanddelivery' type="submit">
            SAVE AND DELIVER HERE
            </Button>
       
           <button  onClick={() => handleAccordionClick("flush-collapseTwo")} className="cancel"> CANCEL</button>
       
          </div>
          </div>
    </div>
  )
}

export default ShippingAddress