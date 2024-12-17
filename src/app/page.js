"use client"
import { Col, Row } from "react-bootstrap";
import Cursor from "./compoents/Cursor/Cursor";
import CustomizedTables from "./compoents/CustomizedTables";
import Form from "./compoents/Form/Form";
import PriceComp from "./compoents/PriceComp";
import WhyDrinkTyentWater from "./compoents/(Home)/WhyDrinkTyentWater";
import ContactSection from "./compoents/(Home)/ContactSection";
import WhyTyent from "./compoents/(Home)/WhyTyent";
import SectionTwo from "./compoents/(Home)/SectionTwo";
import ResponsiveProductPage from "./compoents/ProductData";
import Certifications from "./compoents/Certifications";
import Slider from "./compoents/Slider";
import Video from "./compoents/Video";
import SlickSlider from "./compoents/SlickSlider";
import Maps from "./compoents/Maps";

const Home = () => {

  return (
    <div>
     <Slider />
     <br/>
     <br/>
      <SectionTwo />
       <br/>
       <br/>
       <br/>
     <WhyDrinkTyentWater />
     <br/>
     <br/>
      <WhyTyent />
      <br/>
      <br/>
      <div className="container">
        <Row>
          <Col md={6} className="d-flex justify-content-center alin-items-center" style={{backgroundColor:'#008AC7', color:'#FFF'}}>
          <div style={{padding:'60px'}}>
            <h2 style={{fontWeight:600}}>Why Tyent ?</h2>
            <p style={{fontSize:'18px'}}>Tyent, a medical-grade water ionizer manufactured by TAEYOUNG E&T, is available in 86+ countries. Since more than 3 decades Tyent is known for its advanced Japanese technology, Tyent follows traditional marketing and offers end-to-end service with an in-house team handling demos, installations, and after-sales support, focusing customer satisfaction and brand trust.</p>
          </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center alin-items-center" style={{backgroundColor:'#f2f2f2', color:'#000'}}>
          <div style={{padding:'60px'}}>
            <h2 style={{fontWeight:600}}>What is Kangen ?</h2>
            <p style={{fontSize:'18px'}}>Kangen, a medical-grade water ionizer manufactured by Enagic & Co, is available in 26+ countries., relies on an MLM business model, doubling prices as 49% of costs go to commissions for 30 middlemen. Unlike other ionizers, Kangen lacks manpower for demo, installation and after-sales doorstep service globally, Focusing revenue generation over end customer satisfaction.</p>
          </div>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>
      <br/>
      <CustomizedTables />
      <br/>
      <br/>
      <PriceComp />
      <br/>
      <br/>
       <Certifications />
      <br/>
      <br/>
      <h1 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>Technical excellence with global availability</h1>
      <Video />
      <br/>
      <h1 className="text-center" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333' }}>  Our Valued Clients</h1>
       <br/>
      <SlickSlider />
      <br/>
      <br/>
      <Maps />
      <br/>
      <br/>
      <ContactSection />
      <br/>
      <br/>

      <Form />
     
    </div>
  )
}
export default Home;
