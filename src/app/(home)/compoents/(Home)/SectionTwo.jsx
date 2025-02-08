"use client";
import React from "react";
import Image from "next/image";
import arraow from "@/asserts/arrowVector.png";
import { Col, Row } from "react-bootstrap";
import "@/app/style/WhyDrinkTyentWater.css";
import Link from "next/link";
import CountUp from "react-countup";

const SectionTwo = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{width:'100%',  position: 'relative' }}>
      <Row className="sectiontwo">
        <Col
          lg={6}
          md={12}
          xs={12}
          sm={12}
          className="d-flex flex-column justify-content-center align-items-center text-center"
          data-aos="fade-left"
        >
          <h2
            className="mt-4 mb-4"
            data-aos="fade-up"
            style={{ fontWeight: "600", lineHeight: "1.3" }}
          >
            Improving <span style={{ color: "#008AC7" }}>Health</span> and{" "}
            <br />
            preserving <span style={{ color: "#008AC7" }}>Nature</span>
          </h2>

          <h1
            data-aos="zoom-in"
            className="big-number"
            style={{ color: "#008AC7", fontSize: "160px", fontWeight: "bold", transform: "scaleY(1.2)", }}
          >
            <CountUp start={0} end={9} duration={1.5} />
          </h1>

          <p
            data-aos="fade-in"
            className="mb-4"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            YEARS OF EXCELLENCE
          </p>

          <h3
            data-aos="fade-in"
            style={{ color: "#008AC7", fontSize: "22px", fontWeight: "bold" }}
          >
            1,000,000+ Users
          </h3>

          <Link
            data-aos="slide-up"
            href="/why-tyent"
            className="explore-link mt-3 mb-4"
            style={{ fontSize: "18px", textDecoration: "none" }}
          >
            Explore the Tyent
          </Link>
        </Col>
        <Col md={12} xs={12} sm={12} lg={6} data-aos="fade-right">
          <div
            className="text-white py-4"
            style={{
              background:
                "linear-gradient(to left, #008AC7 50%, transparent 50%)",
              borderRadius: "32px",
              height: "auto",
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-end align-items-center">
                <div
                  className="custom-card shadow-lg p-4 mb-4 bg-white section2boxwidth"
                  style={{
                    aspectRatio: "1/1",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  data-aos="flip-up"
                >
                  <h5 className="card-title fw-bold">Tyent Global</h5>
                  <p className="card-text">
                    Tyent Global, a leader in water ionization since 1995,
                    delivers premium hydrogen-rich alkaline water solutions to
                    86+ countries. Powered by advanced Japanese technology,
                    Tyent provides healthier, cleaner water to millions
                    globally.
                  </p>
                </div>

                <div
                  data-aos="flip-up"
                  className="custom-card shadow-lg p-4 bg-white section2boxwidth"
                  style={{
                    aspectRatio: "1/1",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h5 className="card-title fw-bold">Tyent India</h5>
                  <p className="card-text">
                    Since 2016, Tyent India has brought advanced Japanese water
                    ionizers to Indian homes, offering superior, chemical-free
                    water for better health. With 64+ branches and a dedicated
                    team, Tyent is India's top choice for hydrogen-rich alkaline
                    water ionizers, ensuring transparency, quality, and
                    unmatched service.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-right"
                className="custom-arrow d-none d-lg-block"
                style={{ paddingRight: "16px" }}
              >
                <Image src={arraow} width={50} alt="arrow" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SectionTwo;
