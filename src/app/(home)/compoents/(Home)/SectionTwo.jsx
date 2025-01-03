import React from "react";
import Image from "next/image";
import arraow from "@/asserts/arrowVector.png";
import { Col, Row } from "react-bootstrap";
import "@/app/style/WhyDrinkTyentWater.css";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <Row className="sectiontwo" style={{width:'80%', height:'auto'}}>
        <Col md={6}xs={12} sm={12} style={{aspectRatio:'1/1'}} className="d-flex justify-content-center align-items-center">
        
          <div className="align-items-center text-center mx-auto">
            <h2 className="align-center" style={{ fontWeight: "600" }}>
              Improving <span style={{ color: "#008AC7" }}>Health</span> and{" "}
              <br /> preserving <span style={{ color: "#008AC7" }}>Nature</span>
            </h2>
            <h1 className="big-number">9</h1>
            <p>YEARS OF EXCELLENCE</p>
            <h3 style={{ color: "#008AC7" }}><b>1,000,000+ Users </b></h3>
            <Link href={"/why-tyent"} style={{textDecoration:'none', cursor:'pointer', color:'#405261'}}><p style={{border:'1px solid #405261',display: 'inline-block',padding: '5px 10px', borderRadius:'50px'}}>Explore the <span style={{color:'#008AC7'}}>Tyent.</span></p></Link>
          </div>

        
        </Col>
        <Col md={6} xs={12} sm={12} style={{aspectRatio:'1/1'}}>     
        <div
            className="text-white py-4"
            style={{
              background:
                "linear-gradient(to left, #008AC7 40%, transparent 40%)",
              borderRadius: "32px",height:'auto'
            }}
          >
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-end align-items-end">
                <div
                  className="custom-card shadow-lg p-4 mb-4 bg-white rounded d-flex"
                  style={{ width: "80%", aspectRatio: "1/1" }}
                >
                  <h5 className="card-title fw-bold">Tyent Global</h5>
                  <p className="card-text">
                    Tyent Global has been a leader in water ionization
                    technology since 1995, offering premium, medical-grade
                    hydrogen-rich alkaline water solutions to over 86 countries.
                    Renowned for its advanced Japanese technology and
                    innovation, Tyent empowers millions with healthier, cleaner
                    water worldwide.
                  </p>
                </div>

                <div
                  className="custom-card shadow-lg p-4 bg-white rounded"
                  style={{ width: "80%", aspectRatio: "1/1" }}
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

              <div className="custom-arrow p-4">
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
