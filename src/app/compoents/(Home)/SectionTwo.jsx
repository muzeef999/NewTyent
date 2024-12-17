import React from 'react'
import logo from "../../../asserts/logo.png"
import Image from "next/image";
import arraow from "../../../asserts/arrowVector.png"
import { Col, Row } from 'react-bootstrap';
import "../../style/WhyDrinkTyentWater.css"

const SectionTwo = () => { 
  return (
    
    <div className="container">
    <Row className="sectiontwo">
      <Col md={5} className="d-flex justify-content-center align-items-center">
      <div className="align-items-center text-center mx-auto">
       <Image src={logo} width={200} alt="logo" />
       <h2 className="align-center" style={{fontWeight:'600'}}>Improving <span style={{color:'#008AC7'}}>Health</span>  and <br/> preserving  <span style={{color:'#008AC7'}}>Nature</span></h2>
       <h1 className="big-number">9</h1>
       <p>YEARS OF EXCELLENCE</p>
       <h3 style={{color:'#008AC7'}}>1,000,000+ Users </h3>
       <p>Explore the Tyent.</p>
      </div>
      </Col>

      <Col md={7}>
      <div className="container-fluid text-white py-5" style={{  background: 'linear-gradient(to left, #008AC7 50%, transparent 50%)', borderRadius:'32px'}}>

<div className="container d-flex justify-content-center align-items-center">

<div className="justify-content-center align-items-center">
 

  <div style={{paddingRight:'30px'}}>
    <div className="custom-card shadow-lg p-4 mb-4 bg-white rounded">
      <h5 className="card-title fw-bold">Tyent Global</h5>
      <p className="card-text">
      Tyent Global has been a leader in water ionization technology since 1995, offering premium, medical-grade hydrogen-rich alkaline water solutions to over 86 countries. Renowned for its advanced Japanese technology and innovation, Tyent empowers millions with healthier, cleaner water worldwide.
      </p>
    </div>
  </div>

 
  <div style={{paddingRight:'30px'}}>
    <div className="custom-card shadow-lg p-4 mb-4 bg-white rounded">
      <h5 className="card-title fw-bold">Tyent India</h5>
      <p className="card-text">
      Since 2016, Tyent India has brought advanced Japanese water ionizers to Indian homes, offering superior, chemical-free water for better health. With 64+ branches and a dedicated team, Tyent is India's top choice for hydrogen-rich alkaline water ionizers, ensuring transparency, quality, and unmatched service.
      </p>
    </div>
  </div>

</div>

<div className="custom-arrow">
  <Image src={arraow} width={50} alt="arrow" />
</div>
</div>
</div>

      </Col>
    </Row>
  </div>
  )
}

export default SectionTwo