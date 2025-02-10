// components/Footer.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "@/asserts/logo.png";
import Link from 'next/link';
import Image from 'next/image';
import { IoHeart } from "react-icons/io5";


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
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/nmp-5"}>Counter-Top Water Ionizers</Link></li>
            <li><Link style={{textDecoration:'none', color:'#000'}} href={"/uce-9"}>Under-Counter Water Ionizers</Link></li>
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
          <div className="d-none d-lg-block" style={{ width: '100%' }}>
  <Image src={logo} alt="logo" />
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
            <p><span style={{fontWeight:'600'}}>Contact Us : </span><br/>
            9182-41-41-81</p>
          </div>
          </Col>
          <Col sm={6} xs={6} md={3}  className='d-flex justify-content-center align-items-center'>
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
  <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
    <p style={{ fontSize: "14px", fontWeight: "400", opacity: 0.7, margin: 0 }}>
      © Tyent INDIA. All Rights Reserved.
    </p>
  </Col>
 
  {/* Right Side: Social Media Icons */}
  <Col xs={12} md={6} className="text-center text-md-end" >
      <div className="d-flex justify-content-center justify-content-md-end gap-3">
        <a href="https://www.facebook.com/TyentIndiaOfficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ userSelect: "all", pointerEvents: "auto",  }}>
          <FaFacebook size={30} color="#316FF6" />
        </a>
        <a href="https://www.linkedin.com/company/tyent-india1/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ userSelect: "all", pointerEvents: "auto",  }} aria-label="LinkedIn">
          <FaLinkedin size={30} color="#0077B5" />
        </a>
        <a href="https://www.instagram.com/tyentindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ userSelect: "all", pointerEvents: "auto",  }}>
          <FaInstagram size={30} color="#E4405F" />
        </a>
        <a href="https://www.youtube.com/@TyentIndia3170" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ userSelect: "all", pointerEvents: "auto",  }}>
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
