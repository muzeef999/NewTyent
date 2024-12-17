import React from "react";
import { Col, Row } from "react-bootstrap";
import slider1img from "@/asserts/slider/slide1.png"
import Image from "next/image";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Row>
            <Col md={6} className="d-flex justify-content-center align-items-center">
              <div>
                <h1>Happiness comes from </h1>
                <h1 style={{fontWeight:'700', color:'#008ac7'}}>Healthiness</h1>
                <p>Since 2016, Tyent in India has been delivering the best in hydrogen-rich <br/> alkaline water solutions. Discover advanced Japanese technology in water <br/> ionizers and hydrogen generators, delivering pure, enriched water to promote<br/> health and wellness.</p>
              </div>
            </Col>
            <Col md={6}>
            <div style={{width:'100%'}}>
               <Image src={slider1img} alt="slider npm top counter"  layout="responsive" priority/>
            </div>
            </Col>
          </Row>
        </div>
        <div className="carousel-item">
          <Row>
            <Col md={6}>
              <div>
                <h1>Hello2</h1>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
        </div>
        <div className="carousel-item">
          <Row>
            <Col md={6}>
              <div>
                <h1>Hello2</h1>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
