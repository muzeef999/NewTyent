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
import mobileBannerWeb from "@/asserts/mobilecontactbanner.jpg";
import webBannerWeb from "@/asserts/webcontactbanner.jpg"
import "./contact.css"


const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

export const metadata = {
  title: "Contact Tyent India | Premium & Best Water Ionizers Support",
  description:
    "Contact Tyent India for support, inquiries, or business opportunities. Discover certified Ionized alkaline water & hydrogen water ionizers designed for quality and safety.",
};

const headerData = {
  preheading: "Trust, Care & Commitment",
  afterheading: "We're happy to help!",
  img: contactUsBanner,
  animatedText: "Have Questions ?, Need Assistance ? ",
};

const InfoCard = ({ title, slug, image }) => (
  <Col xs={6} sm={6} md={3} className="p-2">
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
            <div className="row">
              <div className="col-md-8 col-lg-6">
                <p className="fw-bold text-white fs-3 mb-1">
                  Trust, Care & Commitment
                </p>

                <p className="fw-bold text-white fs-3 mb-1">
                  Need to Enquire anything ?
                </p>

                <p className="fw-semibold text-white fs-3 mb-0">
                  We're happy to help!
                </p>
              </div>
            </div>
          </div>

        </div>

        <Container>
          <div
            className="contact-toolbar d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4"
            data-aos="fade-down"
          >
            <div className="contact-toolbar-copy mb-3 mb-md-0 text-start">
              <h3 className="contact-toolbar-title m-0 fw-bold">
                You can find us here!
              </h3>
              <p className="contact-toolbar-text m-0 mt-1">
                We would love to connect with you
              </p>
            </div>

            <div className="contact-toolbar-actions d-flex align-items-center gap-2">
              <div className="contact-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#aaa"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Location"
                  className="contact-search-input border-0 bg-transparent ms-2 w-100"
                />
              </div>

              <button
                type="button"
                className="contact-filter-button d-flex align-items-center justify-content-center bg-white"
                aria-label="Filter locations"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                  <line x1="11" y1="18" x2="13" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          {/* <Row className="g-4">
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
                        <b style={{ color: "#291495" }}>{item.title}</b>
                      </h5>
                    </a>
                  </div>
                </Col>
              ))}
            </Row> */}

          <div data-aos="fade-up">
            {(() => {
              const allLocations = Object.values(locationsData);

              const topCities = allLocations.slice(0, 12); // till Guntur
              const remainingCities = allLocations.slice(12); // after Guntur

              return (
                <>
                  <h4
                    className="mb-3"
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
