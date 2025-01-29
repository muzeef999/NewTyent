import { Col, Row } from "react-bootstrap";
import { SiTicktick } from "react-icons/si";
import "@/app/style/AppBar.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const WhyTyent = () => {
  return (
    <section className="container">
      <Row className="align-items-center">
        {/* Left Section */}
        <Col md={6}   data-aos="fade-right" className="mb-4 justify-content-top">
          <h2 className="m-0" style={{ fontSize: "40px", fontWeight: "500"}}>
            Why
            <span
              style={{ color: "#008AC7", fontWeight: "600", fontSize: "70px" }}
            >
              Tyent ?
            </span>
          </h2>
          <br/>
          <p>
            With over three decades of expertise, Tyent delivers the most
            advanced, slim, and sleek water ionizers with updated Japanese
            technology, available in{" "}
            <span className="highlight">86+ countries</span> and renowned for
            exceptional customer satisfaction worldwide.
          </p>
          <div className="video-wrapper mt-4" style={{ borderRadius: "20px", overflow: "hidden" }}>
  <div
    className="ratio ratio-16x9"
    style={{
      borderRadius: "20px",
      overflow: "hidden",
    }}
  >
    <iframe
      src="https://www.youtube.com/embed/VA82Xf6jfv4?rel=0"
      title="YouTube video player"
      className="video-frame"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

        </Col>

        {/* Right Section */}
        <Col md={6}  data-aos="fade-left" className="d-flex flex-column gap-4 judtify-contend-end align-items-center">
          {/* Content Items */}
          {[
            {
              title: "Direct Delivery",
              description:
                "At Tyent we follow a traditional marketing approach, ensuring direct delivery through our authorized distributors without involving MLM or commission agents.",
            },
            {
              title: "Advanced Technology",
              description:
                "Every Tyent water ionizer features advanced Japanese technology plates from Permelac, Japan, and a patented SMPS PLUS power supply, delivering pure, healthy water without the use of chemicals, enhancers, or salts.",
            },
            {
              title: "Affordable and Transparent",
              description:
                "Tyent water ionizers are available at affordable prices, offering 100% transparency and doorstep service to ensure maximum customer satisfaction and unwavering brand trust.",
            },
          ].map((item, index) => (
            <div key={index} data-aos="zoom-in" className="d-flex align-items-start gap-3">
              
                <div className="whytentfont">
                  <SiTicktick size={20} color="#008AC7" />
                </div>
              

              <div>
                <h3
                  className="m-0"
                  style={{ fontWeight: "700", color: "#008AC7" }}
                >
                  {item.title}
                </h3>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
        </Col>
        <Link
            style={{ textDecoration: "none", color: "#565959" }}
            className="d-flex justify-content-end"
            href={"/why-tyent"}
             data-aos="fade-up"
          >
            View All &nbsp; <FaArrowRight />
          </Link>
      </Row>
    </section>
  );
};

export default WhyTyent;
