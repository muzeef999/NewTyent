"use client";
import React, { useEffect, useState } from "react";
import { Card, Spinner, Table, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import Image from "next/image";

// ✅ Import all product images
import nmp5 from "@/asserts/NMP5.webp";
import nmp7 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import nmp11 from "@/asserts/NMP9.webp";
import uce9 from "@/asserts/Uce.webp";
import uce11 from "@/asserts/Uce.webp";
import uce13 from "@/asserts/Uce.webp";
import hybrid from "@/asserts/Hybrid.webp";
import hRich from "@/asserts/NMP5.webp";

// ✅ Map product name → image
const productImageMap = {
  "NMP-5": nmp5,
  "NMP-7": nmp7,
  "NMP-9": nmp9,
  "NMP-11": nmp11,
  "UCE-9": uce9,
  "UCE-11": uce11,
  "UCE-13": uce13,
  "Hybrid-H2": hybrid,
  "H-Rich": hRich,
};

const Order = () => {
  const userData = useSelector((state) => state.auth.user);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch customer by phone
  useEffect(() => {
    const fetchCustomer = async () => {
      if (!userData?.phoneNumber) return;
      try {
        setLoading(true);
        let phone = userData.phoneNumber;

        if (phone.startsWith("+")) {
          phone = phone.slice(3);
        } else if (phone.startsWith("91")) {
          phone = phone.slice(2);
        }

        const res = await fetch(
          `https://tyent-crm.vercel.app/api/customers?q=${phone}`
        );
        const data = await res.json();

        if (data?.data?.length > 0) {
          const id = data.data[0]._id;
          fetchCustomerDetails(id);
        } else {
          setLoading(false);
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
  }, [userData?.phoneNumber]);

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
    serialNumber,
    price,
    address,
    installedBy,
    marketingManager,
    upcomingServices,
    serviceHistory,
  } = customer;

  // ✅ Get image based on product name
  const productImage = serialNumber?.name
    ? productImageMap[serialNumber.name]
    : null;

  return (
    <div className="container py-4">
      {/* Product Details */}
      <Card className="shadow-lg mb-4 p-4 border-0">
        <div className="d-flex flex-column align-items-center text-left">
          {productImage ? (
            <Image
              src={product.image}
              alt={product.title}
              className="img-fluid product-card"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          ) : (
            <div
              style={{
                width: "400px",
                height: "250px",
                background: "#f5f5f5",
                borderRadius: "12px",
              }}
              className="d-flex align-items-center justify-content-center text-muted"
            >
              No Image Available
            </div>
          )}
          <h4 className="fw-bold mt-2">{serialNumber?.name}</h4>
          <p className="text-muted mb-1">
            <b>Serial No:</b> {serialNumber?._id}
          </p>
          <p className="text-muted mb-1">
            <b>Price:</b> ₹{price?.toLocaleString()}
          </p>
          <p className="text-muted mb-1">
            <b>Address:</b> {address || "N/A"}
          </p>
          <p className="text-muted mb-1">
            <b>Installed By:</b> {installedBy?.name || "N/A"}
          </p>
          <p className="text-muted">
            <b>Marketing Manager:</b> {marketingManager?.name || "N/A"}
          </p>
        </div>
      </Card>

      {/* Upcoming Services */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-primary mb-3 fw-semibold">Upcoming Services</h5>
        <Table bordered hover responsive className="align-middle">
          <thead className="table-primary text-center">
            <tr>
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
                    <Badge bg="warning" text="dark">
                      {service.status}
                    </Badge>
                  </td>
                  <td>{service.serviceType.join(", ")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No upcoming services
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>

      {/* Service History */}
      <Card className="shadow-sm mb-4 p-3">
        <h5 className="text-success mb-3 fw-semibold">Service History</h5>
        <Table bordered hover responsive className="align-middle">
          <thead className="table-success text-center">
            <tr>
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
                <td colSpan="4" className="text-center text-muted">
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
