"use client"
import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'

const Header = ({ basic, preheading, afterheading, content, img, animatedText }) => {

    // Split animatedText into an array of strings
    const animatedTextArray = animatedText.split(",").map(text => text.trim());

    // Prepare the sequence for TypeAnimation by adding each word/phrase with delays
    const sequence = [
        1300, 
        ...animatedTextArray.flatMap(text => [
            text,  // Add the word/phrase
            1300,  // Add a delay after each word/phrase
        ]),
        
    ];

  return (
    <div style={{paddingTop:'2px'}}>
 
      <Row className='m-2 m-md-5' 
        style={{
          background: "linear-gradient(to right, #f1f8fb, #99e0ff)",
          borderRadius: "20px",
        }}
      >
        <Col
  md={6}
  data-aos="fade-up"
  className="d-flex justify-content-center align-items-center"
>
  <div className="p-4">
    <h2 
      className="m-0"  
      style={{ 
        fontWeight: "500", 
        fontSize: 'clamp(20px, 5vw, 40px)'  // Responsive font size, minimum 20px, maximum 40px
      }}
    >
      {basic}
    </h2>
    <br />
    <h2 
      className="m-0" 
      style={{ 
        fontWeight: 700, 
        fontSize: 'clamp(24px, 6vw, 48px)'  // Responsive font size, minimum 24px, maximum 48px
      }}
    >
      {preheading} &nbsp;
      <br/>
      <span style={{ color: "#008AC7" }}>
        <TypeAnimation
          sequence={sequence}   // Use the dynamic sequence here
          speed={60}  // Speed of typing animation
          repeat={Infinity}  // Repeat animation infinitely
        />
      </span>
      <br />
      {afterheading}
      <br />
    </h2>
  </div>
</Col>


        <Col md={6} data-aos="fade-left"  className='d-flex align-items-center justify-contend-end p-0'>
        <div style={{width:'100%', borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}} >
          <Image src={img} alt="image" layout='responsive' priority style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}} />
        </div>
        </Col>
      </Row>
      
    </div>
  )
}

export default Header
