import dynamic from 'next/dynamic';
import React from 'react'
import smps from '@/asserts/smps.png'
import { Col, Row } from 'react-bootstrap';
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });
import { SlEnergy } from "react-icons/sl";



const controls = [
    {
      title: "Advanced Power Control",
      content:
   " Tyent’s SMPS PLUS delivers dynamic, adjustable power output that adapts to water quality, ensuring precise and stable production of high pH and ORP levels."
    },
    {
      title: "Production of 11.5 & 2.5 pH Water",
      content:
   "Tyent's ionizer uses patented technology to produce 11.5 & 2.5 pH water naturally, without chemicals. It ensures safe, effective cleaning, sanitizing, and health benefits."
    },
    {
      title: "No Overheating Issues",
      content:
  "Unlike transformers, SMPS PLUS remains cool even during long usage, ensuring longevity and uninterrupted performance."
    },
    {
      title: "Energy Efficiency",
      content:
    "SMPS PLUS is energy-efficient, reducing power consumption and offering a more eco-friendly solution."
    },
    {
      title: "Longer Lifespan",
      content:
   "With its enhanced cooling system and dynamic control, SMPS PLUS offers a significantly longer lifespan, reducing maintenance and replacement costs. How Tyent’s SMPS PLUS Impacts Water Quality"
    },
    {
        title: "Compact and Lightweight Design",
        content:
    "Tyent’s SMPS PLUS is compact, silent, and lightweight, enhancing the overall design of the water ionizer."  
    },
  ];

  
const Controls = ({ title, content }) => {
    return (
      <div
        style={{ backgroundColor: "#e9f4fb", height:'270px', borderRadius:'20px' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="ml-4 align-items-center">
          <h3 className="m-4 text-start" style={{ color: "#008AC7" }}>
           <SlEnergy style={{width:'40px', height:'40px', backgroundColor:'#008AC7', color:'#FFF', borderRadius:'50%', padding:'10px'}} /> <b>{title}</b>
          </h3>
          <p className="text-start m-4" style={{ color: "#565959" }}>
            {content}
          </p>
        </div>
      </div>
    );
  };
  

const page = () => {

    const headerData = {
        basic: "Trust, Satisfaction & Transformations",
        preheading: "Hear From Our Real",
        afterheading: "Satisfied Tyent India Customers",
        content:
          "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water.",
        img: smps,
        animatedText: "Health, Wellness, Transformation",
      };

  return (
    <div>
    <Header {...headerData} />

    <div className='container'>
        <h2 className='text-center'>Why Say <b style={{color:'#008AC7'}}>YES to Tyent's</b> SMPS <br/> PLUS Power Supply</h2>
        <p className='text-center'>Tyent’s SMPS PLUS (Switch Mode Power Supply Plus) is a revolutionary upgrade, offering precise power control and advanced <br/> technology to ensure consistent, high-quality water ionization. Unlike transformers and standard SMPS, Tyent's SMPS PLUS <br/> offers dynamic voltage control, allowing for optimal water quality under any condition.</p>
    </div>
 
<div className='container'>
    <Row className="d-flex flex-wrap g-3">
          {controls.map((iconItem, index) => (
            <Col key={index} md={index < 2 ? 6 : index < 5 ? 4 : 6} xs={12} sm={12}>
              <Controls
                title={iconItem.title}
                content={iconItem.content}
              />
            </Col>
          ))}
        </Row>
        </div>
    </div>

    
  )
}

export default page 