import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import AskyourQuery from "@/asserts/contact/AskyourQuery.webp";
import DealerEnquiry from "@/asserts/contact/DealerEnquiry.webp";
import productDemo from "@/asserts/contact/productDemo.webp";
import ServiceRequest from "@/asserts/contact/ServiceRequest.webp";
import Image from "next/image";
import contactUsBanner from "@/asserts/contactUsBanner.png";
import Link from "next/link";
import { locationsData } from "@/app/(home)/contact/locationData.js";

const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

export const metadata = {
  title: "Contact Tyent - Get in Touch with Us",
  description:
    " Have questions? Contact Tyent for inquiries about our water ionizers, services, and support.",
};

const headerData = {
  preheading: "Trust, Care & Commitment",
  afterheading: "We're happy to help!",
  img: contactUsBanner,
  animatedText: "Have Questions ?, Need Assistance ? ",
};

const InfoCard = ({ icon: Icon, title, text, slug }) => (
  <Col xs={12} md={4} style={{ padding: "20px" }}>
    <div className="custom-card">
    <Link
      href={`/contact/${slug}`}
      className="text-decoration-none  cursor-pointer"
    >
      <p
        className="m-0"
        style={{ fontSize: "20px", fontWeight: 600, padding: "10px" }}
      >
        {title}
      </p>
      <div className="d-flex align-items-top">
        <div className="contennticon p-1">
          <Icon
            size={20}
            style={{
              backgroundColor: "#008ac7",
              color: "#FFF",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              padding: "10px",
            }}
          />
        </div>
        <div className="content align-items-top">
          <div
            className="text p-1"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </Link>
    </div>
  </Col>
);

const Page = () => {
  const items = [
    { src: productDemo, alt: "Product Demo", title: "Product Demo" },
    { src: DealerEnquiry, alt: "Dealer Enquiry", title: "Dealer Enquiry" },
    { src: ServiceRequest, alt: "Service Request", title: "Service Request" },
    { src: AskyourQuery, alt: "Ask your Query", title: "Ask your Query" },
  ];

  return (
    <div>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      />
      <Container>
        <div className="section-spacing">
          <h3
            className="m-0 text-center"
            style={{ color: "#008AC7", fontWeight: "600" }}
            data-aos="fade-down"
          >
            You can find us here!{" "}
          </h3>
          <p className="text-center" style={{ fontSize: "20px" }}>
            We would love to connect with you
          </p>
          <br />
          <Row className="g-4">
            {items.map((item, index) => (
              <Col
                key={index}
                md={3}
                sm={6}
                xs={6}
                className="text-center"
                data-aos="zoom-in"
              >
                <div>
                  <a href="#top-section" style={{ textDecoration: "none" }}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      priority
                      style={{
                        borderRadius: "20px",
                        userSelect: "all",
                        pointerEvents: "auto",
                      }}
                    />
                    <h5 className="mt-3">
                      <b style={{ color: "#008AC7" }}>{item.title}</b>
                    </h5>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-spacing" data-aos="fade-up">
          {/* First Row */}
          <Row>
            {Object.values(locationsData).map((location, index) => (
              <InfoCard
                key={index}
                slug={location.slug}
                icon={location.icon}
                title={location.title}
                text={location.address}
                metaTitle={location.metaTitle}
                metaDescription={location.metaDescription}
                metaKeywords={location.metaKeywords}
              />
            ))}
          </Row>
        </div>
      </Container>
      <div id="top-section"></div>
    </div>
  );
};

export default Page;
