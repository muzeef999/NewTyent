import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import AskyourQuery from "@/asserts/contact/AskyourQuery.webp";
import DealerEnquiry from "@/asserts/contact/DealerEnquiry.webp";
import productDemo from "@/asserts/contact/productDemo.webp";
import ServiceRequest from "@/asserts/contact/ServiceRequest.webp";
import Image from "next/image";
import contactUsBanner from "@/asserts/contactUsBanner.png";
import Link from "next/link";
import { locationsData } from "@/app/(home)/contact/locationData.js";
import Head from 'next/head';
import mobileBannerWeb  from "@/asserts/mobilecontactbanner.jpg";
import webBannerWeb from "@/asserts/webcontactbanner.jpg"
import "./contact.css"


const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

export const metadata = {
  title: "Contact Tyent - Get in Touch with Us",
  description:
    "Have questions? Contact Tyent for inquiries about our water ionizers, services, and support.",
};

const headerData = {
  preheading: "Trust, Care & Commitment",
  afterheading: "We're happy to help!",
  img: contactUsBanner,
  animatedText: "Have Questions ?, Need Assistance ? ",
};

const InfoCard = ({ title, slug, image }) => (
  <Col xs={12} sm={6} md={3} className="p-2">
    <Link
      href={`/contact/${slug}`}
      className="text-decoration-none"
    >
      <div className="location-card">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="location-image"
        />

        <div className="location-overlay">
          <h5 className="location-title">{title}</h5>
        </div>
      </div>
    </Link>
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
    <>
      <Head>
            <script
              async
              custom-element="amp-analytics"
              src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
            />
          </Head>
    
          {/* AMP Google Ads + GA + Conversion */}
          <amp-analytics type="gtag" data-credentials="include">
            <script type="application/json">
              {`
              {
                "vars": {
                  "gtag_id": "G-T94BNYD8RB",
                  "config": {
                    "G-T94BNYD8RB": { "groups": "default" },
                    "AW-802308772": { "groups": "default" }
                  }
                },
                "triggers": {
                  "downloadConversion": {
                    "on": "click",
                    "selector": "#downloadBtn",
                    "vars": {
                      "event_name": "conversion",
                      "send_to": ["AW-802308772/gmjyCLODuIMYEKSFyf4C"]
                    }
                  }
                }
              }
              `}
            </script>
          </amp-analytics>
       
    <div>
      {/* <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      /> */}
      <div className="position-relative w-100  hero-wrapper">

  {/* Desktop Background */}
  <div className="d-none d-md-block">
    <Image
      src={webBannerWeb}
      alt="Contact Background"
      fill
      className="hero-img"
      priority
    />
  </div>

  {/* Mobile Background */}
  <div className="d-block d-md-none">
    <Image
      src={mobileBannerWeb}
      alt="Mobile Contact Background"
      fill
      className="hero-img"
      priority
    />
  </div>

  {/* Overlay */}
  <div className="hero-overlay"></div>

  {/* TEXT CONTENT */}
  <div className="hero-content container">
    <h2 className="fw-bold mb-2">
      Trust, Care & Commitment
    </h2>

    <h4 className="fw-semibold mb-2">
      Need to Enquire anything?
    </h4>

    <p className="mb-0">
      We're happy to help!
    </p>
  </div>

</div>

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
  {(() => {
    const allLocations = Object.values(locationsData);

    const topCities = allLocations.slice(0, 12); // till Guntur
    const remainingCities = allLocations.slice(12); // after Guntur

    return (
      <>
       <h4
          className="mt-5 mb-3"
          style={{ fontWeight: "600" }}
        >
          Top 12 Cities 
        </h4>
        {/* Top Cities */}
        <Row>
          {topCities.map((location, index) => (
            <InfoCard
              key={index}
              slug={location.slug}
              image={location.image}
              title={location.title}
            />
          ))}
        </Row>

        {/* All Cities Heading */}
        <h4
          className="mt-5 mb-3"
          style={{ fontWeight: "600" }}
        >
          All Cities
        </h4>

        {/* Remaining Cities */}
        <Row>
          {remainingCities.map((location, index) => (
            <InfoCard
              key={index}
              slug={location.slug}
              image={location.image}
              title={location.title}
            />
          ))}
        </Row>
      </>
    );
  })()}
</div>

      </Container>
      <div id="top-section"></div>
    </div>
    </>
  );
};

export default Page;
