"use client";
import React, { useEffect, useState } from "react";
import { Card, Spinner, Table, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Order = () => {
  const userData = useSelector((state) => state.auth.user);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);


  // Fetch customer by phone
  useEffect(() => {
    const fetchCustomer = async () => {
      if (!userData?.phoneNumber) return;
      try {
        setLoading(true);
        let phone = userData?.phoneNumber || "";

        // Remove "+" if it exists
        if (phone.startsWith("+")) {
          // Remove '+' and first two digits (country code)
          phone = phone.slice(3); // '+91' → remove '+91'
        } else if (phone.startsWith("91")) {
          // In case number doesn’t have '+'
          phone = phone.slice(2);
        }

        console.log("Fetching customer with phone:", phone);
        const res = await fetch(
          `https://tyent-crm.vercel.app/api/customers?q=${phone}`
        );
        const data = await res.json();

        if (data?.data?.length > 0) {
          const id = data.data[0]._id;
          fetchCustomerDetails(id);
        }
      } catch (error) {
        console.error("Error fetching customer:", error);
        setLoading(false);
      }
    };

    const fetchCustomerDetails = async (id) => {
      try {
        const res = await fetch(
          `https://tyent-crm.vercel.app/api/customers/${id}`
        );
        const details = await res.json();
        setCustomer(details.message);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [userData?.phone]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!customer) {
    return <p className="text-center mt-5">No customer data found.</p>;
  }

  const {
    name,
    contactNumber,
    address,
    serialNumber,
    installedBy,
    marketingManager,
    serviceHistory,
    upcomingServices,
    price,
    remarks,
  } = customer;

  return (
    <div className="container py-4">
      <h3 className="mb-4 text-center fw-bold text-primary">
        Customer Order Summary
      </h3>

      {/* Customer Info */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-secondary mb-3">Customer Information</h5>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Contact:</b> {contactNumber}
        </p>
        <p>
          <b>Address:</b> {address}
        </p>
        <p>
          <b>Price:</b> ₹{price?.toLocaleString()}
        </p>
        <p>
          <b>Remarks:</b> {remarks}
        </p>
      </Card>

      {/* Product Info */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-secondary mb-3">Product Details</h5>
        <p>
          <b>Serial Number:</b> {serialNumber?._id}
        </p>
        <p>
          <b>Product Name:</b> {serialNumber?.name}
        </p>
        <p>
          <b>Installed By:</b> {installedBy?.name}
        </p>
        <p>
          <b>Marketing Manager:</b> {marketingManager?.name}
        </p>
      </Card>

      {/* Upcoming Services */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-secondary mb-3">Upcoming Services</h5>
        <Table bordered hover responsive>
          <thead>
            <tr className="table-primary">
              <th>Visit No</th>
              <th>Date</th>
              <th>Status</th>
              <th>Service Type</th>
            </tr>
          </thead>
          <tbody>
            {upcomingServices?.length > 0 ? (
              upcomingServices.map((service) => (
                <tr key={service._id}>
                  <td>{service.visitNo}</td>
                  <td>{new Date(service.serviceDate).toLocaleDateString()}</td>
                  <td>
                    <Badge bg="warning">{service.status}</Badge>
                  </td>
                  <td>{service.serviceType.join(", ")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No upcoming services
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>

      {/* Service History */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-secondary mb-3">Service History</h5>
        <Table bordered hover responsive>
          <thead>
            <tr className="table-success">
              <th>Visit No</th>
              <th>Date</th>
              <th>Status</th>
              <th>Service Type</th>
            </tr>
          </thead>
          <tbody>
            {serviceHistory?.length > 0 ? (
              serviceHistory.map((service) => (
                <tr key={service._id}>
                  <td>{service.visitNo || "-"}</td>
                  <td>{new Date(service.serviceDate).toLocaleDateString()}</td>
                  <td>
                    <Badge
                      bg={
                        service.status === "CLOSED"
                          ? "secondary"
                          : service.status === "COMPLETED"
                          ? "success"
                          : "info"
                      }
                    >
                      {service.status}
                    </Badge>
                  </td>
                  <td>
                    {service.serviceType.length
                      ? service.serviceType.join(", ")
                      : "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No service history available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Order;
