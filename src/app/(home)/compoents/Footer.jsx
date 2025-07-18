// components/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

import { IoHeart } from "react-icons/io5";
import Logo from './Logo';


const Footer = () => {
  return (
    <footer  style={{color:'#000', backgroundColor:'#FFF'}}>
      
<div className='py-5'>
      <Container>
      <br/>
        <Row>
          {/* Column 1: Products */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#000", fontWeight:'600' }}>Products</h5>
            <ul className="list-unstyled">
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/counter-top-water-ionizers"}>Counter-Top Water Ionizers</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/under-counter-water-ionizers"}>Under-Counter Water Ionizers</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/hybrid-h2"}>H2-Hybrid series</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/0.1-micron-filters"}>Replacement Filters</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/soap"}>Tyent TMX Beauty Soap</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/Sterilizing-water-generator"}>Stainless Steel Water Bottles</Link></li>
            </ul>
          </Col>

          {/* Column 2: Customers */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#000", fontWeight:'600' }}>Customers</h5>
            <ul className="list-unstyled">
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"#"}>Dealer Opportunity</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/7-types-of-Tyent-water"}>Usage Instructions</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/benefits"}>Health Benefits</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/testimonials"}>Testimonies</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/why-tyent"}>Why Tyent</Link></li>
            </ul>
          </Col>

          {/* Column 3: Technical Information */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#000", fontWeight:'600' }}>Technical Information</h5>
            <ul className="list-unstyled">
              <li><Link style={{textDecoration:'none', color:'#000'}} href={"/tyentvskangen"}>Tyent Vs Enagic Kangen</Link></li>
              <li><Link style={{textDecoration:'none', color:'#000'}} href={"/solid-hybrid-mesh-plates"}>Tyent’s Solid Hybrid Mesh Plates</Link></li>
              <li><Link style={{textDecoration:'none', color:'#000'}} href={"/patented-SMPS-plus"}>Tyent’s Patented SMPS PLUS</Link></li>
              <li><Link style={{textDecoration:'none', color:'#000'}} href={"/0.1-micron-filters"}>Tyent’s .01 Micron Filters</Link></li>
              <li><Link style={{textDecoration:'none', color:'#000'}} href={""}>Tyent Warranty</Link></li>
            </ul>
          </Col>

          {/* Column 4: Product Sales & Service */}
          <Col xs={12} md={3} className="mb-4">
            <h5 style={{ color: "#000", fontWeight:'600' }}>Product Sales & Service</h5>
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
              <Col md={3} style={{ userSelect:'all', pointerEvents:'auto'}}>
          <Link href="/" className="navbar-brand">
          <div className="d-none d-lg-block p-2" style={{ width: '100%' }}>
             <Logo/>
</div>


          </Link>
          </Col>
          <Col md={3}>
          <div>
          <p><span style={{fontWeight:'600'}}> Tyent India Head Office:</span><br/> 
          Medilight Private Limited, 8-277/45, UBI Colony, Banjara Hills Rd Number 3, Hyderabad, Telangana - 500034.
          Landmark:   Near TV9 news office
          </p>
          </div>
          </Col>
          <Col sm={6} xs={6} md={3} className='d-flex justify-content-center align-items-center'>
          <div>


          <p><span style={{fontWeight:'600'}}>CONSUMER POLICY
          </span><br/>
          <Link style={{textDecoration:'none'}} href={"/Cancellation_Returns"}>Cancellation & Returns  </Link><br/>
          <Link style={{textDecoration:'none'}} href={"/Terms_of_Use"}>Terms of Use</Link><br/>
          <Link style={{textDecoration:'none'}} href={"/Security"}>Security</Link><br/>
          <Link style={{textDecoration:'none'}} href={"/Privacy"}>Privacy</Link><br/>
          </p>
          
          </div>
          </Col>
          <Col sm={6} xs={6} md={3}  className='d-flex justify-content-center align-items-center'>
          <Link href={"/"}>
           <Button style={{backgroundColor: "#F8FBFE", border:"none", color:'#000'}}>
           
           I &nbsp; <IoHeart style={{color:'#FF0000'}} size={30}/> Tyent

           </Button> 
           </Link>
      
          </Col>

          </Row>
          </div>


       <hr/>

        {/* Footer Bottom */}
      <Row className="d-flex align-items-center justify-content-between">
  <Col xs={12} md={4}>
   <div className="flex P-0 justify-between items-center">
    <p className="text-sm P-0">
      © {new Date().getFullYear()} All rights reserved.
    </p>
    <Link
      href="https://www.syntaxarts.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-blue-400 hover:text-white transition duration-300 ease-in-out font-semibold tracking-wide"
    >
      Designed & Developed by <span className="text-black font-bold">Syntaxarts</span>
    </Link>
  </div>
  </Col>
 
  {/* Right Side: Social Media Icons */}
  <Col xs={12} md={6} className="text-center text-md-end">
  <div className="d-flex justify-content-center justify-content-md-end gap-3">
    <a style={{cursor:'pointer'}} 
      href="https://www.facebook.com/TyentIndiaOfficial/" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Facebook"
    >
      <FaFacebook size={30} color="#316FF6" />
    </a>
    <a 
      href="https://www.linkedin.com/company/tyent-india1/posts/?feedView=all" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="LinkedIn"
    >
      <FaLinkedin size={30} color="#0077B5" />
    </a>
    <a 
      href="https://www.instagram.com/tyentindia/" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Instagram"
    >
      <FaInstagram size={30} color="#E4405F" />
    </a>
    <a 
      href="https://www.youtube.com/@TyentIndia3170" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="YouTube"
    >
      <FaYoutube size={30} color="#FF0000" />
    </a>
  </div>
</Col>
</Row>






      </Container>
      </div>
    </footer>
  );
};

export default Footer;
