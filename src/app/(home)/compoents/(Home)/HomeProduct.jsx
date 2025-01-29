"use client";
import React, { useRef, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import uce from "@/asserts/Uce.webp";
import hybrid from "@/asserts/Hybrid.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/app/style/AppBar.css";
import "@/app/style/ResponsiveBanner.css";
import home_small_banner_Mobile from "@/asserts/homeBanners/home_small_banner_Mobile.webp";
import home_small_banner_Desktop from "@/asserts/homeBanners/home_small_banner_Desktop.webp";

const ProductData = [
  {
    category: "Recommended Products",
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
  const [activeCategory, setActiveCategory] = useState("Recommended Products");
  const router = useRouter();
  const thumbRef = useRef(null);

  const scrollToActiveCategory = (index) => {
    const thumbItems = thumbRef.current.children;
    const selectedThumb = thumbItems[index];
    const container = thumbRef.current;

    const containerWidth = container.offsetWidth;
    const thumbWidth = selectedThumb.offsetWidth;
    const thumbLeft = selectedThumb.offsetLeft;

    const scrollTo = thumbLeft - containerWidth / 2 + thumbWidth / 2;
    container.scrollTo({
      left: Math.max(0, scrollTo),
      behavior: "smooth",
    });
  };

  const sendData = (event, link) => {
    event.preventDefault();
    isProductOpen(false);
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className="container">
      <Row>
        <div>
          <br />
          {/* Filter Tabs */}
          <Nav
  ref={thumbRef}
  className="d-flex justify-content-center align-items-center nav-container-home ms-0 ms-md-5 ms-xl-0"
  style={{
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    whiteSpace: "nowrap",
    padding: "10px 0",
    gap: "15px",
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For Internet Explorer and Edge

  }}
>
  {ProductData.map((section, idx) => (
    <Nav.Item
      key={section.category || `section-${idx}`}
      style={{ padding: "10px", flex: "0 0 auto" }}
    >
      <h5   data-aos="fade-in"

        style={{ fontSize: "20px", cursor: "pointer" }}
        className={`product-selection-filter-Home ${
          activeCategory === section.category ? "active-Home" : ""
        }`}
        onClick={() => {
          setActiveCategory(section.category);
          scrollToActiveCategory(idx);
        }}
      >
        {section.category}
      </h5>
    </Nav.Item>
  ))}
</Nav>

          <br />
        </div>
        <Col md={6} className="d-flex justify-content-center align-item-center">
          <div style={{ width: "100%", height: "auto", position: "relative" }}>
            {/* Mobile and Tablet View */}
            <div className="d-block d-md-none pb-2">
              <Image
                src={home_small_banner_Desktop}
                alt="NMP-5 Banner"
                layout="responsive"
                data-aos="zoom-in"

                priority
                style={{
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 10,
                }}
              />
              
            </div>
            {/* Desktop and Larger Devices */}
            <div className="d-none d-md-block">
              <Image
                src={home_small_banner_Mobile}
                alt="NMP-5 Banner"
                layout="responsive"
                priority
                style={{
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 10,
                }}
              />
             
            </div>
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
                          <div className="d-flex flex-column justify-content-center">
                            {/* Product Image */}
                            <Image

                              src={product.image}
                              alt={product.title}
                              data-aos="fade-up"

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


