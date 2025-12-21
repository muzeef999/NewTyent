"use client";
import Image from "next/image";
import { Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { RWebShare } from "react-web-share";
import { IoShareSocial } from "react-icons/io5";
import dynamic from "next/dynamic";
import certification from "@/asserts/certifications/certification.webp";

// Importing images
import kuv from "@/asserts/certifications/15.webp"
import G_pass from "@/asserts/certifications/G-PASS.webp"
import icon1 from "@/asserts/certifications/iso1.webp";
import Tyent_FDA_1 from "@/asserts/certifications/TyentFDA.webp";
import icon2 from "@/asserts/certifications/iso2.webp";
import icon3 from "@/asserts/certifications/iso3.webp";
import icon4 from "@/asserts/certifications/iso4.webp";
import icon5 from "@/asserts/certifications/iso5.webp";
import icon6 from "@/asserts/certifications/iso6.webp";
import icon7 from "@/asserts/certifications/iso7.webp";
import icon8 from "@/asserts/certifications/iso8.webp";
import icon9 from "@/asserts/certifications/iso9.webp";
import icon10 from "@/asserts/certifications/iso10.webp";
import icon11 from "@/asserts/certifications/iso11.webp";
import icon12 from "@/asserts/certifications/iso12.webp";
import icon13 from "@/asserts/certifications/iso13.webp";
import icon14 from "@/asserts/certifications/iso14.webp";
import icon16 from "@/asserts/certifications/iso16.webp";
import icon17 from "@/asserts/certifications/iso17.webp";
import icon18 from "@/asserts/certifications/iso18.webp";
import icon19 from "@/asserts/certifications/iso19.webp";
import icon20 from "@/asserts/certifications/iso20.webp";
import icon21 from "@/asserts/certifications/iso21.webp";
import C_91 from "@/asserts/certifications/91.webp"
import C_92 from "@/asserts/certifications/92.webp"
import C_93 from "@/asserts/certifications/93.webp"
import C_94 from "@/asserts/certifications/94.webp"
import C_95 from "@/asserts/certifications/94.webp"
import Head from "next/head";


// Dynamic import for Header to avoid SSR issues
const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

// Array of image objects
const iconImages = [
  { src: icon1, alt: "ISO 9001 - International standard for quality management" },
  { src: icon2, alt: "ISO 14001 - International standard for quality management" },
  { src: icon3, alt: "ISO 13485 - Medical Device Certificate" },
  { src: icon21, alt: "Tyent Plates/Electrodes Certificate" },
  {src:Tyent_FDA_1, alt: "US FDA - Medical Device manufacturer"},
  { src: icon6, alt: "KFDA - Medical Device manufacturer" },
  { src: icon4, alt: "GMP - Medical Device manufacturer" },
  { src: icon5, alt: "Inno-Biz certification" },
  { src: icon8, alt: "Certificate of Designation of an excellent company - Water Generator" },
  { src: G_pass, alt: "Certificate of Designation of an excellent company - Water  ionizer" },
  { src: icon16, alt: "Tyent certificate of Free sales" },
  { src: icon17, alt: "Tyent - KITA Membership certificate" },
  { src: kuv, alt: "TUV - Tyent European Directives Certificate - Tyent YT-Series " },
  { src: icon7, alt: "TUV - Tyent European Directives Certificate - Tyent NMP-Series" },
  { src: icon19, alt: "TUV - Tyent European Directives Certificate - Tyent UCE PLUS-Series" },
  { src: icon9, alt: "CB Test Certifacte - NMP Series - Safety of electrical and electronic products" },
  { src: icon10, alt: "CB Test Certifacte - UCE Series - Safety of electrical and electronic products" },
  { src: icon18, alt: "CB Test Certifacte - H2- Hybrid Series - Safety of electrical and electronic products" },
  { src: icon11, alt: "RoHS compliant - NMP Series" },
  { src: icon12, alt: "RoHS compliant - UCE Series" },
  { src: icon13, alt: "RoHS compliant - H2- Hybrid, YT Series" },
  { src: icon14, alt: "Tyent R&D certificate" },
  { src: icon20, alt: "Tyent CE certificate - H2-Hybrid" },
  { src: C_91, alt: "EMC Directive certificate" },
  { src: C_92, alt: "EC Declaration of Confirmity Certificate - Hybrid water ionizer" },
  { src: C_93, alt: "EC Declaration of Confirmity Certificate - NMP Series & YT Series." },
  { src: C_94, alt: "EC Declaration of Confirmity Certificate - UCE-Series" },
  { src: C_95, alt: "Promising Company Certificate" },
];

const CertificationsPage = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle image click and set modal image
  const imagesrcsend = (image) => {
    setImg(image);
    setShow(true);
  };

  const headerData = {
    basic: "Certifications & Accreditations",
    preheading: "Building",
    afterheading: "Global Recognition",
    content:
      "At Tyent, every drop of water symbolizes purity, safety, and advanced technology. Our certifications and patents stand as a testament to our unwavering commitment to quality, innovation, and customer well-being. Recognized by world-renowned regulatory bodies and industry leaders, these certifications validate the safety, effectiveness, and reliability of Tyent water ionizers.",
    img: certification,
    animatedText: "Trust, Credibility",
  };

  return (

    <>
    
    
      <Head>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
      </Head>

      
      {/* AMP Google Ads + GA + Conversion */}
      <amp-analytics type="gtag" data-credentials="include">
        <script type="application/json">
          {`
          {
            "vars": {
              "gtag_id": "G-T94BNYD8RB",
              "config": {
                "G-T94BNYD8RB": { "groups": "default" },
                "AW-802308772": { "groups": "default" }
              }
            },
            "triggers": {
              "downloadConversion": {
                "on": "click",
                "selector": "#downloadBtn",
                "vars": {
                  "event_name": "conversion",
                  "send_to": ["AW-802308772/gmjyCLODuIMYEKSFyf4C"]
                }
              }
            }
          }
          `}
        </script>
      </amp-analytics>
    
    
        <div>
      <Header
        basic={headerData.basic}
        preheading={headerData.preheading}
        afterheading={headerData.afterheading}
        content={headerData.content}
        img={headerData.img}
        animatedText={headerData.animatedText}
      />

      <div className="section-spacing">
        <div className="container">
          <Row className="g-5">
            {iconImages.map((image, index) => (
              <Col
                key={index}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={4}
                className="d-flex flex-column justify-content-center align-items-center"
                data-aos="fade-up"
              >
                <div>
                  <div className="certificate-container">
                    <div className="certificate-content" style={{ userSelect:'all', pointerEvents:'auto'}}>
                      <Image
                      style={{ userSelect:'all', pointerEvents:'auto', cursor: "pointer" }}
                        onClick={() => imagesrcsend(image)}
                      
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        layout="intrinsic"
                        priority
                      />
                    </div>
                  </div>
                  
                </div>
                <p className="text-center  mt-2" style={{ color: "#008AC7", width:"90%" }}>
                    <b>{image.alt}</b>
                  </p>
              </Col>
            ))}
          </Row>

          {/* Modal for displaying the clicked image */}
          <Modal show={show} dialogClassName="modal-90w" onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Certificate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div style={{ width: "100%" }}>
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={600}
                    layout="intrinsic"
                    priority
                  />
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <RWebShare
                data={{
                  text: "Tyent Certifications",
                  url: img ? img.src : "",
                  title: "Tyent Certifications",
                }}
                onClick={() => console.log("Shared successfully!")}
              >
                <button className="filterbutton">
                  <IoShareSocial />
                </button>
              </RWebShare>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
    </>
  );
};

export default CertificationsPage;
