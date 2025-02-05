"use client";
import Image from "next/image";
import { Col, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import { RWebShare } from "react-web-share";
import { IoShareSocial } from "react-icons/io5";
import dynamic from "next/dynamic";
import certification from "@/asserts/certifications/certification.webp";

// Importing images
import icon1 from "@/asserts/certifications/iso1.webp";
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

// Dynamic import for Header to avoid SSR issues
const Header = dynamic(() => import("../compoents/Header"), {
  ssr: false,
});

// Array of image objects
const iconImages = [
  { src: icon1, alt: "Icon 1" },
  { src: icon2, alt: "Icon 2" },
  { src: icon3, alt: "Icon 3" },
  { src: icon4, alt: "Icon 4" },
  { src: icon5, alt: "Icon 5" },
  { src: icon6, alt: "Icon 6" },
  { src: icon7, alt: "Icon 7" },
  { src: icon8, alt: "Icon 8" },
  { src: icon9, alt: "Icon 9" },
  { src: icon10, alt: "Icon 10" },
  { src: icon11, alt: "Icon 11" },
  { src: icon12, alt: "Icon 12" },
  { src: icon13, alt: "Icon 13" },
  { src: icon14, alt: "Icon 14" },
  { src: icon16, alt: "Icon 16" },
  { src: icon17, alt: "Icon 17" },
  { src: icon18, alt: "Icon 18" },
  { src: icon19, alt: "Icon 19" },
  { src: icon20, alt: "Icon 20" },
  { src: icon21, alt: "Icon 21" },
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
                className="d-flex justify-content-center"
                data-aos="fade-up"
              >
                <div>
                  <div className="certificate-container">
                    <div className="certificate-content">
                      <Image
                        onClick={() => imagesrcsend(image)}
                        style={{ cursor: "pointer" }}
                        src={image.src}
                        alt={image.alt}
                        width={300}
                        height={300}
                        layout="intrinsic"
                        priority
                      />
                    </div>
                  </div>
                  <p className="text-center mt-2" style={{ color: "#008AC7" }}>
                    <b>{image.alt}</b>
                  </p>
                </div>
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
  );
};

export default CertificationsPage;
