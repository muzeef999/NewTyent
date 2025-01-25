import React from 'react';
import Image from 'next/image';
import icon1 from "@/asserts/certifications/1.png";
import icon2 from "@/asserts/certifications/2.png";
import icon3 from "@/asserts/certifications/3.png";
import icon4 from "@/asserts/certifications/4.png";
import icon5 from "@/asserts/certifications/5.png";
import icon6 from "@/asserts/certifications/6.png";
import waterQuality from "@/asserts/certifications/waterQuality.png"
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';


const Certifications = () => {
  return (
    <>
      <div className="container text-center">
        <h2 style={{ color: '#008AC7', fontWeight: '600' }}>Certifications</h2>
        <center>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              wordWrap: 'break-word',
              maxWidth: '70%',
            }}
          >
            Tyent water ionizer has more than 160+ International patents and certified by all International quality certification authorities.
          </p>
        </center>
        <center>
          <Row className="row justify-content-center">
            {[icon1, icon2, icon3,waterQuality, icon4, icon5].map((icon, index) => (
              <Col xs={4} sm={4} md={2}
                key={index} 
                className="mb-3 d-flex justify-content-center"
              >
                 <Image
                  src={icon}
                  alt={`Certification ${index + 1}`}
                  layout='responsive'
                  priority
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 100px" // Use responsive sizes based on screen width
                />
              </Col>
            ))}
          </Row>
        </center>
     
     <Link style={{textDecoration:'none', color:'#565959'}} className='float-end' href={"/certifications"}>View All &nbsp; <FaArrowRight/></Link>

      </div>
    </>
  );
};

export default Certifications;
