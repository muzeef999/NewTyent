"use client"
import Image from 'next/image';
import {  Col, Modal, Row } from 'react-bootstrap';
import icon2 from '@/asserts/certifications/iso2.webp';
import icon3 from '@/asserts/certifications/iso3.webp';
import icon4 from '@/asserts/certifications/iso4.webp';
import icon5 from '@/asserts/certifications/iso5.webp';
import icon6 from '@/asserts/certifications/iso6.webp';
import icon7 from '@/asserts/certifications/iso7.webp';
import icon8 from '@/asserts/certifications/iso8.webp';
import icon9 from '@/asserts/certifications/iso9.webp';
import icon10 from '@/asserts/certifications/iso10.webp';
import icon11 from '@/asserts/certifications/iso11.webp';
import icon12 from '@/asserts/certifications/iso12.webp';
import icon13 from '@/asserts/certifications/iso13.webp';
import icon14 from '@/asserts/certifications/iso14.webp';
import icon16 from '@/asserts/certifications/iso16.webp';
import icon17 from '@/asserts/certifications/iso17.webp';
import icon18 from '@/asserts/certifications/iso18.webp';
import icon19 from '@/asserts/certifications/iso19.webp';
import icon20 from '@/asserts/certifications/iso20.webp';
import icon21 from '@/asserts/certifications/iso21.webp';
import { useState } from 'react';
import { RWebShare } from 'react-web-share';
import { IoShareSocial } from "react-icons/io5";
import dynamic from 'next/dynamic';
import certification from "@/asserts/certifications/certification.png"
const Header = dynamic(() => import('../compoents/Header'), {
  ssr: false,
});


// Static icon images array
const iconImages = [
  { src: icon2, alt: 'Icon 2' },
  { src: icon3, alt: 'Icon 3' },
  { src: icon4, alt: 'Icon 4' },
  { src: icon5, alt: 'Icon 5' },
  { src: icon6, alt: 'Icon 6' },
  { src: icon7, alt: 'Icon 7' },
  { src: icon8, alt: 'Icon 8' },
  { src: icon9, alt: 'Icon 9' },
  { src: icon10, alt: 'Icon 10' },
  { src: icon11, alt: 'Icon 10' },
  { src: icon12, alt: 'Icon 10' },
  { src: icon13, alt: 'Icon 10' },
  { src: icon14, alt: 'Icon 10' },
  { src: icon16, alt: 'Icon 10' },
  { src: icon17, alt: 'Icon 10' },
  { src: icon18, alt: 'Icon 10' },
  { src: icon19, alt: 'Icon 10' },
  { src: icon20, alt: 'Icon 10' },
  { src: icon21, alt: 'Icon 10' },
];


const CertificationsPage = () => {
  const [show, setShow] = useState(false);
  const [img, setimg] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imagesrcsend = (event) => {
    setimg(event.target.src);
    setShow(true);
  };


  const headerData = { 
    basic: "Certifications & Accreditations",
    preheading:'Building',
    afterheading: "Global Recognition",
    content: "At Tyent, every drop of water symbolizes purity, safety, and advanced technology. Our certifications and patents stand as a testament to our unwavering commitment to quality, innovation, and customer well-being. Recognized by world-renowned regulatory bodies and industry leaders, these certifications validate the safety, effectiveness, and reliability of Tyent water ionizers.",
    img: certification, // Add image URL if needed
    animatedText: "Trust, Credibility" // Pass the animated text here
  }

  return (

    <div>
    <Header 
        basic={headerData.basic} 
        preheading={headerData.preheading} 
        afterheading={headerData.afterheading}
        content={headerData.content} 
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      />
    
    <div className="container">
      
      <br/>
      <Row className="g-5">
        {iconImages.map((image, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            className="d-flex justify-content-center"
            data-aos={
              index % 3 === 0
                ? "fade-up"
                : index % 3 === 1
                ? "fade-up"
                : "fade-up"
            }
          >
            <div className="certificate-container">
              <div className="certificate-content">
                <Image onClick={imagesrcsend} style={{cursor:'pointer'}}
                  src={image.src}
                  alt={image.alt}
                  width={300} // Fixed width for uniform size
                  height={300} // Fixed height for uniform size
                  layout="intrinsic" // Ensures equal aspect ratio
                  priority
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} dialogClassName="modal-90w" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} style={{ width: "100%" }} />
        </Modal.Body>
        <Modal.Footer>
        <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: img,
          title: "Tyent Certifications",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="filterbutton"><IoShareSocial/></button>
      </RWebShare>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default CertificationsPage;

