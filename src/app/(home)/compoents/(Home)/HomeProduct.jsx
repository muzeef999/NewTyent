"use client";
import React, { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import uce from "@/asserts/Uce.webp";
import hybrid from "@/asserts/Hybrid.webp";
import soap from "@/asserts/soap/soap.png"
import bottle from "@/asserts/bottle/bottle-500ml.jpg";
import filter from "@/asserts/filter/filter2.webp"
import TIEN20 from "@/asserts/watergen/TIE_N20.webp"
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/style/AppBar.css"
import "@/app/style/ResponsiveBanner.css"
import home_small_banner from "@/asserts/home_small_banner.webp"



const ProductData = [
  {
    products: [
      {
        title: "NMP-5",
        image: nmp5,
        link: "/nmp-5",
      },
      {
        title: "NMP-9",
        image: nmp9,
        link: "/nmp-9",
      },
      {
        title: "UCE-9",
        image: uce,
        link: "/uce-9",
      },
      {
        title: "HYBRID H2",
        image: hybrid,
        link: "/hybrid-h2",
      },
    ],
  },
  {
    category: "NMP Series",
    products: [
      {
        title: "NMP-5",
        image: nmp5,
        link: "/nmp-5",
      },
      {
        title: "NMP-7",
        image: nmp5,
        link: "/nmp-7",
      },
      {
        title: "NMP-9",
        image: nmp9,
        link: "/nmp-9",
      },
      {
        title: "NMP-11",
        image: nmp9,
        link: "/nmp-11",
      },
    ],
  },
  {
    category: "UCE Series",
    products: [
      {
        title: "Tyent UCE-9 Plus",
        image: uce,
        link: "/uce-9",
      },
      {
        title: "Tyent UCE-11 Plus",
        image: uce,
        link: "/uce-11",
      },
      {
        title: "Tyent UCE-13 Plus",
        image: uce,
        link: "/uce-13",
      },
    ],
  },
  {
    category: "Tyent H2",
    products: [
      {
        title: "Tyent H2",
        image: hybrid,
        link: "/hybrid-h2",
      },
    ],
  },

  
];

const HomeProduct = ({ isProductOpen }) => {
  const [activeCategory, setActiveCategory] = useState(ProductData[0].category);

  const router = useRouter(); 

  const sendData = (event, link) => {
    event.preventDefault(); // Prevent default link behavior
    isProductOpen(false); // Close the product menu
    if (link) {
      router.push(link); // Navigate to the specified link
    }
  };


  return (
    <div className="container">
      <Row>
      <div>
        <br/>
        {/* Filter Tabs */}
<Nav className="d-flex  justify-content-center align-items-center  nav-container-home">
  {ProductData.map((section, idx) => (
    <Nav.Item key={section.category || `section-${idx}`} style={{padding:'10px'}}>
      <h5 style={{fontSize:'20px'}}
        className={`product-selection-filter-Home ${
          activeCategory === section.category ? "active-Home" : ""
        }`}
        onClick={() => setActiveCategory(section.category)}
      >
        {section.category || "All Products"}
      </h5>
    </Nav.Item>
  ))}
</Nav>
            <br/>
          </div>
        <Col md={6} className="d-flex justify-content-center align-item-center">
           <div style={{width:'100%', height:'auto'}}>
            <Image src={home_small_banner} alt="home_small_banner" layout="responsive" priority  style={{objectFit:'cover', borderRadius:'10px'}}/>
           </div>
        </Col>
        <Col md={6}>
          {/* Product Sections */}

          {ProductData.map(
            (section, idx) =>
              activeCategory === section.category && (
                <div key={idx} className="mb-5">
                  <Row>
                    {section.products.map((product, index) => (
                      <Col key={index} xs={6} sm={6} md={6} lg={6}>
                      <Link
                        href={product.link || "#"}
                        passHref
                        onClick={(event) => sendData(event, product.link)}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="d-flex flex-column justify-content-center"
                          onClick={(event) => sendData(event, product.link)}
                        >
                          {/* Product Image */}
                          <Image
                            src={product.image}
                            alt={product.title}
                            className="img-fluid product-card"
                            style={{
                              maxWidth: "95%",
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

export default HomeProduct;
