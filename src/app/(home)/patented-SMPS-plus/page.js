import dynamic from 'next/dynamic';
import React from 'react'
import smps from '@/asserts/smps.png'
import { Col, Row } from 'react-bootstrap';
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });
import { SlEnergy } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { BiSolidJoystickButton } from "react-icons/bi";
import "@/app/style/Benfits.css"
import smpsplus from "@/asserts/smps.png"





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


  const transformerPower  = [
    {
      title: "Limited Power Control",
      content:
   "Transformers offer fixed power output, leading to inconsistent ionization and fluctuations in pH and ORP levels."
    },
    {
      title: "Production of 11.5 & 2.5 pH Water",
      content:
   "Water ionizers with transformer power supplies lack the power control needed to naturally produce strong 11.5 & 2.5 pH water. As a result, they rely on chemicals, enhancers, or salts to achieve these pH levels"
    },
    {
      title: "Overheating Issues",
      content:
   "Prolonged use causes transformers to overheat, reducing their lifespan and leading to frequent breakdowns."
    },
    {
      title: "Bulky and Noisy",
      content:
   "Transformer units are large, heavy, and noisy, which affects both the design and user experience."
    },
    {
      title: "Energy Inefficiency",
      content:
   "Transformers consume more energy, increasing electricity bills and carbon footprints."
    },
  ];


  const standardSMPS   = [
    {
      title: "Limited Power Control",
      content:
   " Standard SMPS provides limited power adjustments, which can affect the production of stable pH and ORP values."
    },
    {
      title: "Production of 11.5 & 2.5 pH Water",
      content:
   "Water ionizers with SMPS power supplies lack the power control needed to naturally produce strong 11.5 & 2.5 pH water. As a result, they rely on chemicals, enhancers, or salts to achieve these pH levels."
    },
    {
      title: "Lack of Customization",
      content:
   "Regular SMPS systems cannot dynamically adjust power output to meet the needs of varying water quality, resulting in subpar ionization."
    },
    {
      title: "Less Durability",
      content:
  "While better than transformers, standard SMPS can still experience heating issues, affecting its long-term performance."
    },
    
  ];


  const TransformerPower = ({ title, content }) => {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
      >
        
        <div className="ml-4 align-items-center hover-effect" style={{cursor:'pointer'}}>
          <br/>
          <br/>
          <div className='d-flex'>
          <BiSolidJoystickButton style={{width:'40px', height:'40px', backgroundColor:'#565959', color:'#FFF', borderRadius:'50%', padding:'10px'}}/>
          <div>
          <h3 className="m-0 text-start" style={{ color: "#008AC7" }}><b>&nbsp;{title}</b>
          </h3>
          <br/>
          <div className="hover-line"></div>
          </div>
          </div>
          
          <p className="text-start m-2" style={{ color: "#565959" }}>
            {content}
          </p>
        </div>
      </div>
    );
  };
  
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
        basic: "Reliable & High-Performance ",
        preheading: "Advanced Design",
        afterheading: "With Tyent’s Patented SMPS PLUS",
        img: smpsplus,
        animatedText: "More Power, More Efficiency,  More Performance",
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
        <br/>
        <br/>
        <div className='container'>
        <h2 className='text-center'>Why Say<b style={{color:'red'}}> No</b> to Transformer Power Supply <br/>in Water Ionizers ?</h2>
        <p className='text-center'>Tyent’s SMPS PLUS (Switch Mode Power Supply Plus) is a revolutionary upgrade, offering precise power control and advanced <br/> technology to ensure consistent, high-quality water ionization. Unlike transformers and standard SMPS, Tyent's SMPS PLUS <br/> offers dynamic voltage control, allowing for optimal water quality under any condition.</p>
        <Row className='g-2'>
          <Col md={6} className='d-flex justify-content-center align-items-center'> 
           <div className='m-3'>
            <h1><GoDotFill color='red'/>Drawbacks of Transformer Power Supply</h1>
            <p>Tyent’s SMPS PLUS plays a pivotal role in achieving consistently high-quality water. By dynamically adjusting power output, it stabilizes pH and ORP levels, ensuring that every glass of water you drink is packed with maximum antioxidants, hydrogen, and essential minerals. This results in superior hydrogen-rich alkaline water that supports better hydration, detoxification, and overall health.</p>
           </div>
          </Col>
          <Col md={6}>
          {transformerPower.map((iconItem, index) => (
                    <div key={index}>
                      <TransformerPower
                        title={iconItem.title}
                        content={iconItem.content}
                      />
                    </div>
                  ))}
          </Col>
        </Row>
        <br/>
        <br/>
        <h2 className='text-center'>Why Say<b style={{color:'red'}}> No</b> to Standard SMPS Power <br/> Supply in Water Ionizers?</h2>
        <p className='text-center'>SMPS (Switch Mode Power Supply) is a step up from transformers, offering better energy efficiency and compact design.<br/> However, conventional SMPS still has limitations that affect water ionization.</p>
        <Row className='g-2'>
          <Col md={6} className='d-flex justify-content-center align-items-center'> 
           <div className='m-3'>
            <h1><GoDotFill color='red'/>Drawbacks of Standard SMPS Power Supply</h1>
           </div>
          </Col>
          <Col md={6}>
          {standardSMPS.map((iconItem, index) => (
                    <div key={index}>
                      <TransformerPower
                        title={iconItem.title}
                        content={iconItem.content}
                      />
                    </div>
                  ))}
          </Col>
        </Row>

        


      
     
              </div>
    </div>

    
  )
}

export default page 