import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { FaDroplet } from "react-icons/fa6";
import filter from "@/asserts/filter.png";
import Image from "next/image";

const Filter = () => {
  return (
    <Container>
      <br/>
      {/* Section Title */}
      <h2
        className="text-center mb-4"
        style={{
          color: "#008AC7",
          fontWeight: "600",
          fontSize: "2rem", // Default for large screens
        }}
      >
        Unmatched Purity with Tyent's .01 Micron Filters
      </h2>

      {/* Content Section */}
      <Row className="align-items-center">
        {/* Image Column */}
        <Col lg={6} md={12} className="mb-4 text-center">
          <div style={{ width: "100%", overflow: "hidden", borderRadius: "10px" }}>
            <Image src={filter} alt="Filter" layout="responsive" priority />
          </div>
        </Col>

        {/* Content Column */}
        <Col lg={6} md={12}>
          {[
            "Tyent filters are NSF, EPA & ANSI Certified.",
            "Tyent Extreme .01 micron filters remove even the toughest contaminants such as arsenic, chromium VI, etc.",
            "Tyent filters can remove heavy metals, pharmaceuticals, heavy contamination, micro-organisms, bacteria, viruses, algae, fungi.",
          ].map((text, index) => (
            <div className="d-flex align-items-start mb-5" key={index}>
              <FaDroplet
                size={20}
                color="#008AC7"
                style={{
                  margin: "5px 10px 0 0",
                  width: "20px",
                  height: "20px", // Explicitly set width and height
                }}
              />
              <p
                style={{
                  fontSize: "20px", // Default for large screens
                  lineHeight: "1.6",
                  margin: "0",
                  textAlign: "justify", // Align text properly
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
