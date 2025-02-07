import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "@/asserts/logo.png";
import "@/app/style/Story.css";
import { PiPlantLight } from "react-icons/pi";
import { IoHappyOutline } from "react-icons/io5";
import { PiWifiNoneDuotone } from "react-icons/pi";
import { MdOutlineTouchApp } from "react-icons/md";
import corevalues from "@/asserts/aboutus/corevalues.png";
import CoreStrategy from "@/asserts/aboutus/CoreStrategy.png";
import maraketing from "@/asserts/aboutus/maraketing.png";

export const metadata = {
  title: "Tyent Global Presence - Trusted Worldwide",
  description: "Tyent is a globally recognized brand, delivering premium water ionizers to homes and businesses across the world.",
};


const KeyFactCard = ({ value, title, description }) => {
  return (
    <div>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="backgroundplate">{value}</h3>
        <h6>{title}</h6>
        <p className="text-center">{description}</p>
      </Col>
    </div>
  );
};

const CoreValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="global-point">
        <Icon size={32} />
      </div>
      <div className="m-2 d-flex justify-content-center align-items-center">
        <div>
          <h5 className="mt-3" style={{ color: "#008AC7" }}>
            <b>{title}</b>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      {/* Who We Are Section */}
      <Container>
        <Row className="text-center" data-aos="fade-up">
          <h2>Who We Are</h2>
          <center>
            <div style={{ width: "20%", height: "auto" }}>
              <Image src={logo} alt="logo" layout="responsive" priority />
            </div>
          </center>
        </Row>
      </Container>

      {/* Core Values */}
      <Container>
        <Row>
          <Col md={8} className="d-flex justify-content-center align-items-center">
          <div>
            <h2 data-aos="fade-right">
              <b>Core Values</b>
            </h2>
            <p className="section-description" data-aos="fade-right">
              Right from helping you understand the latest procedures to when
              you get discharged, Medfin will assist you every step of the way.
            </p>
            <CoreValueCard
              icon={PiPlantLight}
              title="Our Management value is considered nature and environment"
              description="Nature cycle is the most important for our products."
            />
            <CoreValueCard
              icon={IoHappyOutline}
              title="Be happy? More happy!"
              description="Our products make people more healthy and happier."
            />
            <CoreValueCard
              icon={PiWifiNoneDuotone}
              title="We are Fair and Transparent"
              description="We make fair and transparent culture in the company."
            />
            <CoreValueCard
              icon={MdOutlineTouchApp}
              title="Our mission is 'customer satisfaction'"
              description="We create value for customers and conduct customer satisfaction."
            />
            </div>
          </Col>
          <Col md={4} className="text-center" data-aos="zoom-in">
            <div style={{ width: "80%", height: "auto" }}>
              <Image
                src={corevalues}
                alt="corevalues"
                layout="responsive"
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Core Strategy */}
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Container>
          <div style={{ padding: "50px" }}>
          
            <Row>
              <Col
                md={6}
                data-aos="fade-left"
                className="d-flex justify-content-center align-items-center"
              >
                <div style={{ width: "60%", height: "auto" }}>
                  <Image
                    src={CoreStrategy}
                    alt="corevalues"
                    layout="responsive"
                    priority
                  />
                </div>
              </Col>
              <Col md={6}>
              
                <h4>
                  <b>Strategy for Growth</b>
                </h4>
                <ul>
                  <li>Continuous investment in R&D</li>
                  <li>Expanding export competitiveness</li>
                  <li>Development of future business</li>
                  <li>Establishment of abroad corporations</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div style={{ backgroundColor: "#111827", color: "#FFF" }}>
        <Container>
          <div style={{ padding: "50px" }}>
            {" "}
            {/* Wrapper with padding */}
            <Row>
              <Col md={6} data-aos="fade-right">
                <h4>
                  <b>Strategy for Competitiveness Enhancement</b>
                </h4>
                <ul>
                  <li>Customer-oriented marketing</li>
                  <li>Improving brand awareness</li>
                  <li>Globalization of technology</li>
                  <li>Improving brand value</li>
                </ul>
              </Col>
              <Col
                md={6}
                data-aos="zoom-in"
                className="d-flex justify-content-center align-items-center"
              >
                <div style={{ width: "60%", height: "auto" }}>
                  <Image
                    src={maraketing}
                    alt="corevalues"
                    layout="responsive"
                    priority
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        <h2 data-aos="fade-up" className="text-center mb-5 fw-bold">Key Facts</h2>
        <Row className="g-4 justify-content-center">
          <Col xs={12} sm={6} md={4} lg={4}>
            <KeyFactCard
              value="86+"
              title="Global Presence"
              description="Providing innovative water solutions that improve health and well-being across India."
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <KeyFactCard
              value="160+"
              title="Technology Patents"
              description="160+ patents, showcasing groundbreaking advancements in water ionization."
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <KeyFactCard
              value="29+"
              title="Years of R&D"
              description="29 years of cutting-edge research delivering innovative water solutions globally."
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <KeyFactCard
              value="15"
              title="Years Warranty"
              description="Prestigious design awards blending innovation and aesthetics in luxury water ionizers."
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <KeyFactCard
              value="26"
              title="Design Awards"
              description="Recognized for design excellence in advanced, luxury water ionizers worldwide."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
