"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ComparisonTable = () => {
  const comparisonData = [
    {
      product: "TYENT NMP-5 vs Enagic KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs Enagic KANGEN SD501",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs Enagic KANGEN Super SD501",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
    {
      product: "TYENT NMP-5 vs Enagic KANGEN Jr4",
      features: [
        { feature: "Price", tyent: "160,000/-", kangen: "218,000/-" },
        { feature: "Generates", tyent: "7 Water types", kangen: "5 Water types" },
        { feature: "Plates", tyent: "5", kangen: "4" },
        { feature: "ORP", tyent: "-850", kangen: "-450" },
        { feature: "Warranty", tyent: "3 yr & 15 yr on plates", kangen: "3 years" },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div style={{borderRadius:'17px'}}
>
  <Row>
    {comparisonData.map((product, index) => (
      <Col md={6} key={index} className="mb-4">
        <table className="table table-bordered w-100">
          <thead>
            <tr>
              <th colSpan={3}>
                <h2
                  className="m-0"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "20px",
                    textAlign: "center",
                  }}
                >
                  {product.product}
                </h2>
              </th>
            </tr>
            <tr>
              <th className="text-center" style={{color:'#008AC7'}} >Tyent</th>
              <th className="text-center">Feature</th>
              <th className="text-center">Kangen</th>
            </tr>
          </thead>
          <tbody>
            {product.features.map((row, idx) => (
              <tr key={idx}>
                <td style={{color:'#008AC7', fontWeight:'600'}} className="text-center">{row.tyent}</td>
                <td className="text-center" style={{ fontWeight: "600" }}>
                  {row.feature}
                </td>
                <td className="text-center">{row.kangen}</td>
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
