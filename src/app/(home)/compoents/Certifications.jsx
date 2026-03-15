import React from 'react';
import Image from 'next/image';
import icon1 from "@/asserts/certifications/1.webp";
import icon2 from "@/asserts/certifications/2.webp";
import icon3 from "@/asserts/certifications/3.webp";
import waterQuality from "@/asserts/certifications/waterQuality.webp";
import icon4 from "@/asserts/certifications/4.webp";
import icon5 from "@/asserts/certifications/5.webp";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';


const Certifications = () => {
  return (
    <>
      <div className="container text-center">
        <h3 className="fw-bold subtitle-tight">International Certifications & Global Trust</h3>
        <center>
          <p
           data-aos="fade-in"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              wordWrap: 'break-word',
              maxWidth: '70%',
            }}
          >
            Tyent components and systems meet the highest international quality standards, including
          </p>
        </center>
        <center>
          <Row className="justify-content-center align-items-center mt-3 mb-2 px-md-5">
            {[icon1, icon2, icon3, waterQuality, icon4, icon5].map((icon, index) => (
              <Col xs={4} sm={4} md={2}
                key={index} 
                 data-aos="zoom-in"
                className="mb-4 d-flex justify-content-center"
              >
                 <div style={{ width: '100%', maxWidth: '145px' }}>
                   <Image 
                    src={icon}
                    alt={`Certification ${index + 1}`}
                    layout='responsive'
                    priority
                    style={{ objectFit: 'contain', userSelect:'none', pointerEvents:'none' }}
                  />
                 </div>
              </Col> 
            ))}
          </Row>
        </center>
     
     <Link  data-aos="fade-up"  style={{textDecoration:'none', color:'#565959'}} className='float-end' href={"/certifications"}>View All &nbsp; <FaArrowRight/></Link>

      </div>
    </>
  );
};

export default Certifications;
