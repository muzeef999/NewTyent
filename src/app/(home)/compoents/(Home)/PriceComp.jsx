"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";


const ComparisonTable = () => {
  const comparisonData = [
    {
      features: [
        {feature: "Feature", tyent: "Tyent NMP-5", kangen: "Kangen Jr4" },
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      features: [
        {feature: "Feature", tyent: "Tyent NMP-7", kangen: "Kangen SD501" },
        { feature: "Price", tyent: "195,000/-", kangen: "277,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "7", kangen: "7" },
        { feature: "ORP", tyent: "-950", kangen: "-631" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    { 
      features: [
        {feature: "Feature", tyent: "Tyent NMP-9", kangen: "Kangen k8" },
        { feature: "Price", tyent: "227,000/-", kangen: "345,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "9", kangen: "8" },
        { feature: "ORP", tyent: "-1050", kangen: "-720" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      features: [
        {feature: "Feature", tyent: "Tyent NMP-11", kangen: "Kangen SD501" },
        { feature: "Price", tyent: "260,000/-", kangen: "378,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "11", kangen: "12" },
        { feature: "ORP", tyent: "-1200", kangen: "-800" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
  ];

  return (
    <div className="container mt-4">
    <div style={{ borderRadius: "17px", padding: "20px", backgroundColor: "#f9f9f9" }}>
      <Row>
        {comparisonData.map((product, index) => (
          <Col md={6} key={index} className="mb-4">
            <table className="table table-bordered w-100">
             
            <tbody>
  {product.features.map((row, idx) => (
    <tr key={idx}>
      <td
        style={{
          backgroundColor: idx === 0 ? "#e9ecef" : "#FFF",
          fontWeight: idx === 0 ? "bold" : "500", // First row bold
          padding: "10px",
          fontSize: idx === 0 ? "1.1rem" : "1rem", // Slightly larger font for the first row
        }}
      >
        {row.feature}:
      </td>
      <td
        style={{
          color: "#008AC7",
          padding: "10px",
          backgroundColor: idx === 0 ? "#e9ecef" : "#FFF",
          fontWeight: idx === 0 ? "bold" : "normal", // First row bold
          textAlign: idx === 0 ? "center" : "start", // Center-align for the first row
        }}
        className={idx === 0 ? "text-center" : "text-start"}
      >
        {row.tyent}
      </td>
      <td
        style={{
          color: "#565959",
          padding: "10px",
          backgroundColor: idx === 0 ? "#e9ecef" : "#FFF",
          fontWeight: idx === 0 ? "bold" : "normal", // First row bold
          textAlign: idx === 0 ? "center" : "start", // Center-align for the first row
        }}
        className={idx === 0 ? "text-center" : "text-start"}
      >
        {row.kangen}
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);
};

export default ComparisonTable;
