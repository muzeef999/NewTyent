// components/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "@/asserts/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { IoHeart } from "react-icons/io5";
import { color } from 'framer-motion';


const Footer = () => {
  return (
    <footer  style={{color:'#FFF'}}>
      <svg width="100%" height="auto" viewBox="0 0 1919 280">
  <path d="M952 89.5003C465.5 56.6539 179.5 155.059 1 282V994.5H1919V125.5C1759.5 189.5 1321 114.414 952 89.5003Z" fill="#008ac7" />
</svg>

<div className='py-5' style={{backgroundColor:'#008ac7'}}>
      <Container>
        <Row>
          {/* Column 1: Products */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#FFF", fontWeight:'600' }}>Products</h5>
            <ul className="list-unstyled">
              <li>Counter-Top Water Ionizers</li>
              <li>Under-Counter Water Ionizers</li>
              <li>H2-Hybrid series</li>
              <li>Replacement Filters</li>
              <li>Tyent TMX Beauty Soap</li>
              <li>Stainless Steel Water Bottles</li>
            </ul>
          </Col>

          {/* Column 2: Customers */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#FFF", fontWeight:'600' }}>Customers</h5>
            <ul className="list-unstyled">
              <li>Dealer Opportunity</li>
              <li>Usage Instructions</li>
              <li>Health Benefits</li>
              <li>Testimonies</li>
              <li>Why Tyent</li>
            </ul>
          </Col>

          {/* Column 3: Technical Information */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#FFF", fontWeight:'600' }}>Technical Information</h5>
            <ul className="list-unstyled">
              <li>Tyent Vs Enagic Kangen</li>
              <li>Tyent’s Solid Hybrid Mesh Plates</li>
              <li>Tyent’s Patented SMPS PLUS</li>
              <li>Tyent’s .01 Micron Filters</li>
              <li>Tyent Warranty</li>
            </ul>
          </Col>

          {/* Column 4: Product Sales & Service */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#FFF", fontWeight:'600' }}>Product Sales & Service</h5>
            <ul className="list-unstyled">
              <li>Product Demo: 9182-41-41-81</li>
              <li>Product Support: <a href="mailto:Sravan@medilightindia.com">Sravan@medilightindia.com</a></li>
              <li>Complaints: 912-12-12-555</li>
              <li>Technical Support: <a href="mailto:Technical@MedilightIndia.com">Technical@MedilightIndia.com</a></li>
            </ul>
          </Col>
        </Row>

        <hr/>
          
          <div>
            <Row>
              <Col md={3}>
          <Link href="/" className="navbar-brand">
          <div  style={{width:'100%'}}>
            <Image src={logo} alt="logo"  style={{ filter: "invert(100%) grayscale(100%)"}}/>
            </div>
          </Link>
          </Col>
          <Col md={3}>
          <div>
          <p><span style={{fontWeight:'600'}}> Tyent India Head Offuce:</span><br/> 
          Medilight Private Limited, 8-277/45, UBI Colony, Banjara Hills Rd Number 3, Hyderabad, Telangana - 500034.
          Landmark:   Near TV9 news office
          </p>
          </div>
          </Col>
          <Col md={3} className='d-flex justify-content-center align-items-center'>
          <div>
            <p><span style={{fontWeight:'600'}}>Contact Us : </span><br/>
            9182-41-41-81</p>
          </div>
          </Col>
          <Col md={3}  className='d-flex justify-content-center align-items-center'>
           <Button style={{backgroundColor: "#F8FBFE", border:"none", color:'#000'}}>
           
           I &nbsp; <IoHeart style={{color:'#FF0000'}} size={30}/> Tyent

           </Button>
      
          </Col>

          </Row>
          </div>


       <hr/>

        {/* Footer Bottom */}
        <Row className="d-flex align-items-center justify-content-between">
          {/* Left Side: Copyright Text */}
          <Col xs={12} md={6} className="text-start mb-3 mb-md-0">
            <p style={{ fontSize: "14px", fontWeight: "400", opacity: 0.7 }}>
              © Tyent INDIA. All Rights Reserved.
            </p>
          </Col>

          {/* Right Side: Social Media Icons */}
          <Col xs={12} md={6} className="text-end">
            <div>
              <Link
                href="https://facebook.com"
                target="_blank"
              >
                <FaFacebook size={30} color='#316FF6'/>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                style={{ color: "", margin: "0 10px" }}
              >
                <FaTwitter size={30} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                style={{ color: "", margin: "0 10px" }}
              >
                <FaInstagram size={30} />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                style={{ color: "", margin: "0 10px" }}
              >
                <FaYoutube size={30} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </footer>
  );
};

export default Footer;
