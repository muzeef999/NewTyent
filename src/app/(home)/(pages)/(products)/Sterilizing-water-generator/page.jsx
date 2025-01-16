"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";

const Page = () => {
  // Sample product data
  const products = [
    {
      src: ["/images/product1.png", "/images/product2.png"],
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTab = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="hbody">
      <Container>
        <Row className="my-5">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div style={{ width: "100%", margin: "30px", position: "relative" }}>
              {products.map((item, i) => (
                <div className="details" key={i}>
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      src={item.src[selectedIndex]}
                      alt="Product Image"
                      width={500}
                      height={500}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="thumb d-flex justify-content-center align-items-center">
                    {item.src.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        width={100}
                        height={100}
                        style={{
                          cursor: "pointer",
                          margin: "5px",
                          border:
                            selectedIndex === index
                              ? "2px solid #0082bc"
                              : "1px solid #ddd",
                        }}
                        onClick={() => handleTab(index)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col md={6} className="d-flex flex-column align-items-start">
            <h2 className="text-primary text-center">
              <b>TIE-N15WR</b>
            </h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Product Name</td>
                  <td>:&nbsp;Sterilizing water generator</td>
                </tr>
                <tr>
                  <td>Model</td>
                  <td>:&nbsp;TIE - N15WR</td>
                </tr>
                <tr>
                  <td>Purpose of Use</td>
                  <td>
                    :&nbsp;Disinfection and sterilization of food, utensils, and
                    other apparatus
                  </td>
                </tr>
                <tr>
                  <td>Places to Use</td>
                  <td>
                    :&nbsp;School, military, hospital, hotel, restaurant, cafe
                  </td>
                </tr>
                <tr>
                  <td>Warranty</td>
                  <td>:&nbsp;3 Years on machine & 15 years on plates</td>
                </tr>
              </tbody>
            </table>

            <p className="text-muted">
              <b>*Depends on input water quality and flow rate</b>
            </p>
            <p className="text-muted">
              <b>(No use of external chemicals, salts, or artificial enhancers)</b>
            </p>

            <Button
              style={{
                backgroundColor: "#0082bc",
                color: "#FFF",
                textTransform: "none",
              }}
            >
              <FaPhoneAlt /> &nbsp;Call To Order
            </Button>
          </Col>
        </Row>

        <Row className="my-5">
          <Col md={8}>
            <p>
              <b>Generative Principle & Purpose of Use</b>
            </p>
            <ul>
              <li>
                <b>Convenient Hygiene Management:</b> Process that does not
                require dilution increases production efficiency.
              </li>
              <li>
                <b>Clean Quality Assurance:</b> Ideal for food sterilization
                without affecting taste or smell.
              </li>
              <li>
                <b>Safe Working Environment:</b> Eco-friendly process with
                minimal residue.
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <Image
              src="/images/product-feature.png"
              alt="Feature Image"
              width={300}
              height={300}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
