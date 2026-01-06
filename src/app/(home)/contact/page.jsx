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
import Head from 'next/head';


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
                image={location.image}
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
    </>
  );
};

export default Page;
