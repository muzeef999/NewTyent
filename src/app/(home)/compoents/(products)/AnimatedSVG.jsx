import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import waterbody from "@/asserts/Humanbody.png"



const AnimatedSVG = () => {
  



  return (

    <div>
<div style={{backgroundColor:'#008ac7'}}>
        <Row>
            <Col md={6}  className='d-flex justify-content-center align-items-center'>
            <div style={{padding:'50px'}}>
          <h1 style={{fontWeight:'600', color:'#FFF'}}>Tyent's living water = Magical combination of Hydrogen rich + alkaline water </h1>
          <p style={{color:'#FFF'}}>Japanese researchers suggest that ionized hydrogen-rich alkaline water may extend life expectancy by 30–35% by reducing oxidative stress and improving cellular health.</p>
          </div>
            </Col>
            <Col md={6} className='d-flex justify-content-center align-items-center'>
                
            <div style={{width:'80%', height:'auto'}}>
        
            <Image src={waterbody} alt="humanbody" layout='responsive' priority />
            </div>
            </Col>
        </Row>
        </div>
        <svg width="100%" height="auto" viewBox="0 0 1919 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_230_20" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="1919" height="292">
<rect width="1919" height="292" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_230_20)">
<path d="M972 -738C345.5 -775.5 129.5 -721.105 0 -588.381V252.5C152.333 150.237 405.5 22 972 67.5C1424.07 103.809 1804.33 157.049 1921 92.5V-789C1769 -669 1365 -714.476 972 -738Z" fill="#008ac7"/>
</g>
</svg>



    </div>
  );
};

export default AnimatedSVG;
