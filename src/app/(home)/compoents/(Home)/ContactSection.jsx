import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoSettingsOutline } from "react-icons/io5";
import { BsBox2 } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import "@/app/style/AppBar.css";
import '@/app/style/WhyDrinkTyentWater.css'; // External CSS file for styling

const ContactSection = () => {
  return (
    <div className="contactSectionbg">
      <Container className="text-center text-white">
        <p className="mb-0">Contact TYENT</p>
        <h1 className="fw-bold">CONTACT US FOR MORE INFORMATION</h1>
        <p>TYENT grows together with you</p>
        <Row className="mt-4">
          {/* Card 1 */}
          <Col md={4} className="mb-3">
            <div className="custom-card shadow border-0 d-flex flex-column align-items-center">
              <div className="icon-circle">
                <IoSettingsOutline size={40} color="#008AC7" />
              </div>
              <b className="card-title">Repair Service</b>
              <p className="card-text">Need to repair your TYENT device? Please visit our contact section.</p>
              <Button variant="link" className="text-primary">Click here</Button>
            </div>
          </Col>
          {/* Card 2 */}
          <Col md={4} className="mb-3">
            <div className="custom-card shadow border-0 d-flex flex-column align-items-center">
              <div className="icon-circle">
                <BsBox2 size={30} color="#008AC7" />
              </div>
              <b className="card-title">Product Inquiries</b>
              <p className="card-text">Contact us for all your product questions or concerns.</p>
              <Button variant="link" className="text-primary">Click here</Button>
            </div>
          </Col>
          {/* Card 3 */}
          <Col md={4} className="mb-3">
            <div className="custom-card shadow border-0 d-flex flex-column align-items-center">
              <div className="icon-circle">
                <MdOutlineSupportAgent size={40} color="#008AC7" />
              </div>
              <b className="card-title">Business Inquiries</b>
              <p className="card-text">TYENT Global Support is ready and waiting to talk to you about your TYENT.</p>
              <Button variant="link" className="text-primary">Click here</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
