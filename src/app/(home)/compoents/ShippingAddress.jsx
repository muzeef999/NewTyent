import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
import "@/app/style/Shipping.css";
import { toast } from 'sonner';

const ShippingAddress = ({ handleAccordionClick, refreshAccordionOne  }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const [loading, setLoading] = useState(false); // Spinner state


  const { user } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show spinner
    try {
      const response = await axios.post("/api/shipping", {
        _id: user.id, // Replace with actual user ID
        addresses: [formData],
      });

      if (response.status === 200) {
        toast.success("Address saved successfully!")
        handleAccordionClick("flush-collapseTwo"); 
        refreshAccordionOne(); // Refresh Accordion One
      } else {
        toast.error(`Error: ${response.data.error}`)
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`)
      console.error(error);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <div className="m-4">
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
          {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}&nbsp;&nbsp;
                Saving...
              </>
            ) : (
              "Save and Deliver Here"
            )}
          </Button>
          <button
            onClick={() => handleAccordionClick("flush-collapseTwo")}
            className="cancel"
          >
            CANCEL
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ShippingAddress;
