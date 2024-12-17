"use client";
import React, { useState } from "react";
import { Row, Col, Card, Nav } from "react-bootstrap";
import Image from "next/image";
import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.png";
import uce from "@/asserts/Uce.webp";
import "../../style/Nmp.css";
import Link from "next/link";

const ProductData = [
  {
    category: "NMP Series",
    products: [
      {
        title: "NMP-5",
        image:nmp5,
        link:"nmp-5",
        details: [
          { label: "Model", value: "NMP-5" },
          { label: "Ph Range", value: "2.5-11.5*" },
          { label: "ORP Range", value: "upto -850*" },
        ],
      },
      {
        title: "NMP-7",
        image:nmp5,
        link:"nmp-7",
        details: [
          { label: "Model", value: "NMP-7" },
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -950*" },
        ],
      },
      {
        title: "NMP-8",
        image:nmp9,
        link:"nmp-9",
        details: [
          { label: "Model", value: "NMP-8" },
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -950*" },
        ],
      },
      {
        title: "NMP-9",
        image:nmp9,
        link:"nmp-11",
        details: [
          { label: "Model", value: "NMP-9" },
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -950*" },
        ],
      },
    ],
  },
  {
    category: "UCE Series",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
        link:"nmp-5",
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
      {
        title: "Tyent UCE-11 Plus",
        image:uce,
        link:"nmp-5",
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
      {
        title: "Tyent UCE-13 Plus",
        image:uce,
        link:"nmp-5",
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
    ],
  },
  {
    category: "ACE",
    link:"nmp-5",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
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
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
    ],
  },
  {
    category: "Tyent H2",
    link:"nmp-5",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
    ],
  },
  {
    category: "Soap",
    link:"nmp-5",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image:uce,
        details: [
          { label: "Ph Range", value: "2.5-11.5" },
          { label: "ORP Range", value: "upto -1050*" },
        ],
      },
    ],
  },
];

const ResponsiveProductPage = ({setOpen}) => {
  const [activeCategory, setActiveCategory] = useState(ProductData[0].category);
  const [expandedProduct, setExpandedProduct] = useState(null);

  const handleToggle = (index) => {
    setExpandedProduct(expandedProduct === index ? null : index);
  };


  return (
    <div>
      {/* Filter Tabs */}
      <Nav variant="pills" className="justify-content-center mb-4">
        {ProductData.map((section) => (
          <Nav.Item key={section.category}>
            <button
              className={`filterbutton ${
                activeCategory === section.category ? "activebutton" : ""
              }`}
              onClick={() => setActiveCategory(section.category)}
            >
              {section.category}
            </button>
          </Nav.Item>
        ))}
      </Nav>

      {/* Product Sections */}
      {ProductData.map(
        (section, idx) =>
          activeCategory === section.category && (
            <div key={idx} className="mb-5">
              <Row>
                {section.products.map((product, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <Link href={`${product.link}`}   onClick={() => setOpen(false)}>
                    <Card className="h-100 shadow-sm border-0" style={{backgroundColor:'#f1f1ef', textDecoration:'none'}}>
                      <div className="d-flex justify-content-center position-relative">
                        {/* Product Image */}
                        <Image
                          src={product.image}
                          alt={product.title}
                          className="img-fluid"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                          }}
                        />
                      </div>

                     <h5 className="text-center">{product.title}</h5>
                    </Card>
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          )
      )}
 <center>
      <button className="appbardemo text-center">SHOW ALL PRODUCTS</button>
      </center>
      <br/>
    </div>
  );
};

export default ResponsiveProductPage;
