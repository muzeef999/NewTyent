"use client";
import React, { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import uce from "@/asserts/Uce.webp";
import hybrid from "@/asserts/hybrid.webp";
import "../../style/Nmp.css";
import Link from "next/link";

const ProductData = [
  {
    category: "Models",
    products: [
      {
        title: "NMP-5",
        image: nmp5,
        link: "nmp-5",
      },
      {
        title: "NMP-9",
        image: nmp9,
        link: "nmp-9",
      },
      {
        title: "UCE-9",
        image: uce,
        link: "nmp-9",
      },
      {
        title: "HYBRID H2",
        image: hybrid,
        link: "nmp-11",
      },
    ],
  },

  {
    category: "NMP Series",
    products: [
      {
        title: "NMP-5",
        image: nmp5,
        link: "nmp-5",
      },
      {
        title: "NMP-7",
        image: nmp5,
        link: "nmp-7",
      },
      {
        title: "NMP-8",
        image: nmp9,
        link: "nmp-9",
      },
      {
        title: "NMP-9",
        image: nmp9,
        link: "nmp-11",
      },
    ],
  },
  {
    category: "UCE Series",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image: uce,
        link: "uce-9",
      },
      {
        title: "Tyent UCE-11 Plus",
        image: uce,
        link: "uce-11",
      },
      {
        title: "Tyent UCE-13 Plus",
        image: uce,
        link: "uce-13",
      },
    ],
  },
  {
    category: "Tyent H2",
    products: [
      {
        title: "Tyent H2",
        image: hybrid,
        link: "tyent-h2",
      },
    ],
  },

  {
    category: "Soap",
    link:"soap",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
      },
    ]
    },
  {
    category: "Water Bottle",
    products: [
      {
        title: "Stainless Steel Water Bottle",
        image: hybrid,
        link: "water-bottle-1",
      },
    ],
  },
  {
    category: "Filter",
    products: [
      {
        title: "Standard Water Filter",
        image: hybrid,
        link: "filter-1",
      },
    ],
  },
  {
    category: "Sterilizing water generator",
    link:"nmp-5",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
      },
    ],
  },
];

const ResponsiveProductPage = ({ isProductOpen }) => {
  const [activeCategory, setActiveCategory] = useState(ProductData[0].category);

  const sendData = () => {
    isProductOpen(false); // Send the data to the parent
  };

  return (
    <div className="container">
      <br/>
      <Row>
        <Col md={4} className="d-flex justify-content-between">
          <div>
            {/* Filter Tabs */}
            <Nav className="flex-column">
              {ProductData.map((section) => (
                <Nav.Item key={section.category}>
                  <p style={{
                        color: section.category === "Models" ? "#757575" :" ",fontSize:section.category === "Models" ? "25px":'' }}
                    className="product-selection-filter p-0 m-0"
                    onClick={() => setActiveCategory(section.category)}
                  >
                    {section.category}
                  </p>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <hr style={{width:'1px', height:'80%', backgroundColor:'#000'}}/>
        </Col>
        <Col md={8}>
          {/* Product Sections */}
          <h4 className="m-2" style={{ color: "#757575" }}>New & Featured</h4>
          {ProductData.map(
            (section, idx) =>
              activeCategory === section.category && (
                <div key={idx} className="mb-5">
                  <Row>
                    {section.products.map((product, index) => (
                      <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Link
                          href={`${product.link}`}
                          onClick={sendData}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="d-flex flex-column justify-content-center">
                            {/* Product Image */}
                            <Image
                              src={product.image}
                              alt={product.title}
                              className="img-fluid"
                              style={{
                                maxWidth: "100%",
                                height: "auto",
                                borderRadius: "10px",
                              }}
                            />
                            <p
                              className="text-start mt-2"
                              style={{
                                color: "#000",
                                fontWeight: "300",
                                fontSize: "16px",
                              }}
                            >
                              {product.title}
                            </p>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              )
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ResponsiveProductPage;
