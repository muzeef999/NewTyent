import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import logo from "@/asserts/logo.png";
import "@/app/style/Story.css";
import { PiPlantLight } from "react-icons/pi";
import { IoHappyOutline } from "react-icons/io5";
import { PiWifiNoneDuotone } from "react-icons/pi";
import { MdOutlineTouchApp } from "react-icons/md";
import corevalues from "@/asserts/aboutus/corevalues.png"
import CoreStrategy from "@/asserts/aboutus/CoreStrategy.png"


const KeyFactCard = ({ value, title, description }) => {
  return (
    <div className="custom-col">
    <Col xs={12} sm={6} md={4} lg={2} className="text-center">
      <h3 className="backgroundplate">{value}</h3>
      <h6>{title}</h6>
      <p>{description}</p>
    </Col>
    </div>
  );
};


const CoreValueCard = ({ icon: Icon, title, description }) => {
  return (
    
      <div className="d-flex align-items-center">
        <div className="global-point">
          <Icon size={32}  />
        </div>
        <div className="m-2 d-flex justify-content-center align-items-center">
          <div>
          <h5 className="mt-3" style={{color:'#008AC7'}}><b>{title}</b></h5>
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
        <Row className="text-center">
          <h2>Who We Are</h2>
          <center>
            <div style={{width:'20%', height:'auto'}}>
              <Image src={logo} alt="logo" layout="responsive" priority />
            </div>
          </center>
        </Row>
      </Container>

      {/* Core Values */}
      <Container>
        <Row>
          <Col md={8}>
            <h2><b>Core Values</b></h2>
            <p className="section-description">
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
          </Col>
          <Col md={4} className="text-center">
           <div style={{width:'100%', height:'auto'}}>
            <Image src ={corevalues} alt="corevalues" layout="responsive" priority />
           </div>
          </Col>
        </Row>
      </Container>

      {/* Core Strategy */}
      <div style={{backgroundColor:'#F8F8F8'}}>
      <Container>
        <div style={{padding:'50px'}}>
        <h2 className="text-center mb-6"><b>Core Strategy</b></h2>
        <Row >
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={{width:'60%', height:'auto'}}>
            <Image src ={CoreStrategy} alt="corevalues" layout="responsive" priority />
           </div>
          </Col>
          <Col md={6}>
            <h4><b>Strategy for Growth</b></h4>
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

        <div style={{ backgroundColor: '#111827', color: '#FFF' }}>
  <Container>
    <div style={{ padding: '50px' }}> {/* Wrapper with padding */}
      <Row>
        <Col md={6}>
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
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={{ width: '60%', height: 'auto' }}>
            <Image src={CoreStrategy} alt="corevalues" layout="responsive" priority />
          </div>
        </Col>
      </Row>
    </div>
  </Container>
</div>

      

      {/* Key Facts */}
      <Container>
  <h2 className="text-center mb-4">Key Facts</h2>
  <Row>
    <KeyFactCard
      value="86+"
      title="Global Presence"
      description="To provide innovative water solutions that improve the health and well-being of individuals and families across India."
    />
    <KeyFactCard
      value="160+"
      title="Technology Patents"
      description="Tyent holds 160+ technology patents, showcasing its commitment to groundbreaking advancements in water ionization."
    />
    <KeyFactCard
      value="29+"
      title="Years of R&D"
      description="Over 29 years of cutting-edge research and development delivering innovative water solutions globally."
    />
    <KeyFactCard
      value="15"
      title="Years Warranty"
      description="Recipient of prestigious design awards, blending innovation and aesthetics for advanced, luxury water ionizers worldwide."
    />
    <KeyFactCard
      value="26"
      title="Design Awards"
      description="Recipient of prestigious design awards, blending innovation and aesthetics for advanced, luxury water ionizers worldwide."
    />
  </Row>
</Container>;
    </div>
  );
};

export default Page;
