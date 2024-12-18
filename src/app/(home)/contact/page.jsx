import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Form from '../compoents/Form/Form';

const InfoCard = ({ icon: Icon, title, text }) => (
  <Col xs={12} md={6} style={{padding:'10px'}}>
    <div className="custom-card">
    <p className='m-0' style={{fontSize:'20px', fontWeight:600, padding:'10px'}}>{title}</p>
    <div className='d-flex align-items-center'>
      <div className="contennticon"><Icon size={30} /></div>
      <div className="content p-2">
        <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
    </div>
  </Col> 
);

const Page = () => {
  return (
    <div>
      <Container>
        {/* First Row */}
        <Row> {/* Added grid gap and bottom margin for row */}
          <InfoCard
            icon={MdOutlineMailOutline}
            title="Email"
            text="Mail: contact@medilightindia.com"
          />
          <InfoCard
            icon={IoCallOutline}
            title="Contact"
            text="Phone No: +91 91824 14181"
          />
          <InfoCard
            icon={CiLocationOn}
            title="Location"
            text={`8-277/45, UBI Colony, Banjara Hills <br/> Rd Number 3, Hyderabad - 500034.`}
          />
          <InfoCard
            icon={IoTimeOutline}
            title="Timing"
            text="Monday to Friday from 9 AM to 5 PM"
          />
        </Row>
      </Container>

      {/* Form Component */}
      <br />
      <Form />
    </div>
  );
};

export default Page;
