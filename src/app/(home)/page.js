import { Col, Row } from "react-bootstrap";
import ContactSection from "./compoents/(Home)/ContactSection";
import WhyTyent from "./compoents/(Home)/WhyTyent";
import SectionTwo from "./compoents/(Home)/SectionTwo";
import Certifications from "./compoents/Certifications";
import Slider from "./compoents/Slider";
import Video from "./compoents/Video";
import Maps from "./compoents/Maps";
import TyentLineAnimation from "./compoents/TyentLineAnimation";
import dynamic from "next/dynamic";
import CustomizedTables from "./compoents/CustomizedTables";
import WhyDrinkTyentWater from "./compoents/(Home)/WhyDrinkTyentWater";
import Loading  from "./compoents/Loading"

const PriceComp = dynamic(() => import("./compoents/PriceComp"), {
  ssr: false, 
});
const SlickSlider = dynamic(() => import("./compoents/SlickSlider"), {
  ssr: false, 
});
const Form = dynamic(() => import("./compoents/Form/Form"), {
  ssr: false, 
});

const Home = () => {

  

  const cardDetails = [
    {
      title: "Alkalinity",
      content: `
        Acidic stress is the root cause of all the major lifestyle diseases 
        such as Diabetes, Thyroid, Gastric, Constipation, Acidity, Cancer, 
        Cardiovascular diseases, Chronic respiratory diseases, and Coronary 
        heart diseases. 

        Tyent ionized hydrogen alkaline water is alkaline in nature (with a 
        pH value of drinking water 7pH - 9.5pH) which helps in neutralizing 
        disease-causing acidic nature.
      `,
    },
    {
      title: "Micro-clustered water",
      content: `
        Tyent ionized hydrogen-rich alkaline water is Micro-clustered water. 
        Due to its micro-clustered property, it penetrates faster to all cells 
        and major organs in the human body than regular tap or RO water.

        Tyent Micro-clustered water provides better penetration, better hydration, 
        better detox, and faster supply of minerals.
      `,
    },
    {
      title: "Anti-oxidant Molecular H2",
      content: `
        Tyent ionized hydrogen-rich alkaline water has a selective antioxidant 
        called Molecular hydrogen. Molecular hydrogen is rich in electrons or -ORP 
        which helps in neutralizing free radicals (ROS) and oxidative stress.

        It also helps in reducing inflammation, protecting against oxidative stress, 
        enhancing athletic performance, and supporting gut health too.
      `,
    },
    {
      title: "Natural minerals",
      content: `
        Tyent ionized hydrogen-rich alkaline water is rich in alkaline minerals 
        such as calcium, magnesium, potassium, and sodium.

        Alkaline minerals help in promoting bone health, aiding muscle function, 
        supporting cardiovascular health, boosting immune function, and enhancing 
        metabolism.
      `,
    },
  ];


  return (
    <div>

     <Slider />
     <br/>
     <br/>
      <SectionTwo />
       <br/>
       <br/>
       <br/>
       <div className="container">
      <Row className="align-items-center">
        <Col xs={12} md={3} className="text-start mb-3 mb-md-0">
          <h2 style={{ fontWeight: 700 }} className="d-inline-block">
            Why To Drink <span style={{ color: '#008AC7' }}>Tyent</span>  Water ?
          </h2>
        </Col>
        <Col xs={12} md={9} className="text-end">
          <TyentLineAnimation /> 
        </Col>
      </Row>
      <br />
      <br />
      <Row className="g-4">
        {cardDetails.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <WhyDrinkTyentWater title={card.title} content={card.content} /> {/* Individual card */}
          </Col>
        ))}
      </Row>
    </div>
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
