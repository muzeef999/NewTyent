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
    <div>
     <br/>
     
      <Row
        style={{
          background: "linear-gradient(to right, #f1f8fb, #99e0ff)",
          margin: "40px",
          borderRadius: "20px",
        }}
      >
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="p-4">
            <h2 className="m-0" style={{ fontWeight: "500" }}>
              {basic}
            </h2>
            <br />
            <h2 className="m-0" style={{ fontWeight: 700 }}>
              {preheading} &nbsp;
              <span style={{ color: "#008AC7" }}>
                <TypeAnimation
                    sequence={sequence}   // Use the dynamic sequence here
                    speed={60}  // Speed of typing animation
                    repeat={Infinity}  // Repeat animation infinitely
                    // preRenderFirstString={false} // Optional: try removing or setting to false
                />
              </span>
              <br/>
              {afterheading}
              <br />
            </h2>
            
          </div>
        </Col>

        <Col md={6} className='d-flex align-items-center justify-contend-end p-0'>
        <div style={{width:'100%', borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}} >
          <Image src={img} alt="image" layout='responsive' priority style={{borderTopRightRadius:'20px', borderBottomRightRadius:'20px'}} />
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default Header
