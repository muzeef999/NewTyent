"use client";
import React, { useEffect, useState } from "react";
import contact from "@/asserts/contactlady.png";
import Image from "next/image";
import style from "../../compoents/Form/Form.module.css";
import FormOnly from "./FormOnly";
import { Col, Row } from "react-bootstrap";
 


const ContactSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time (e.g., data fetching, component mount)
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        width: "100%",
        overflow: "hidden",
        minHeight: "500px",
      }}
    >
      <div className="container">
        <Row>
          <Col
            md={6}
            data-aos="fade-right"
            className="d-flex justify-content-center align-items-center"
          >
            {isLoaded ? (
              <div className={style.card}>
                <Image
                  className={style.conimg}
                  src={contact}
                  alt="Contact"
                  style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                  priority
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "10px",
                  animation: "pulse 1.5s infinite",
                }}
              />
            )}
          </Col>
          <Col md={6}>
            {isLoaded ? (
              <FormOnly />
            ) : (
              <div>
                <div
                  style={{
                    height: "50px",
                    width: "80%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <div
                  style={{
                    height: "50px",
                    width: "100%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <div
                  style={{
                    height: "150px",
                    width: "100%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <div
                  style={{
                    height: "40px",
                    width: "40%",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "8px",
                    animation: "pulse 1.5s infinite",
                  }}
                />
              </div>
            )}
          </Col>
        </Row>
      </div>

      {/* Optional CSS animation */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            background-color: #e0e0e0;
          }
          50% {
            background-color: #f0f0f0;
          }
          100% {
            background-color: #e0e0e0;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
