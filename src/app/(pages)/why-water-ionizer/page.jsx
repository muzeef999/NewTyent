import React from 'react'
import { Col, Row } from 'react-bootstrap'
import i1 from '@/asserts/i1.png'
import im from '@/asserts/im.png'
import i2 from '@/asserts/i2.png'
import Image from 'next/image'

const page = () => {
  return (
    <div className='container'>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image 
            src={i1} 
            alt="left image water" 
            layout="responsive" 
            width={1000} 
            height={600} 
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image 
            src={im} 
            alt="left image water" 
            layout="responsive" 
            width={1000} 
            height={600} 
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Image 
            src={i2} 
            alt="left image water" 
            layout="responsive" 
            width={1000} 
            height={600} 
          />
        </Col>
      </Row>


            <div className='d-flex justify-content-center align-items-center'>
            <div className="section-title fs-2 text-primary mb-3">Why NO To Bore Water?</div>
            <div className="section-subtitle fs-5 mb-3">
              Bore water often contains high levels of hardness and harmful chemicals.
            </div>
            <ul className="list-unstyled section-content">
              <li>High hardness levels (calcium and magnesium salts)</li>
              <li>Risk of contamination by industrial waste and pesticides</li>
              <li>Can cause kidney stones, digestive issues, and other health problems</li>
            </ul>
            </div>
          
        
          <div>
          
            <div className="section-title fs-2 text-primary mb-3">Why NO To Municipal Water?</div>
            <div className="section-subtitle fs-5 mb-3">
              Municipal water may have harmful chemicals and lack essential minerals.
            </div>
            <ul className="list-unstyled section-content">
              <li>Contains chlorine and trihalomethanes (THMs)</li>
              <li>Pipelines may leach lead and rust into the water</li>
              <li>Lack of essential minerals</li>
            </ul>
          </div>
      

           
           <div>
            <div className="section-title fs-2 text-primary mb-3">Why NO To RO (Reverse Osmosis) Water?</div>
            <div className="section-subtitle fs-5 mb-3">
              RO water lacks beneficial minerals and wastes a lot of water.
            </div>
            <ul className="list-unstyled section-content">
              <li>Devoid of essential minerals, making water "dead" and acidic</li>
              <li>Wastage of water (2-3 liters of water for every liter purified)</li>
              <li>Acidic water can disrupt the body's pH balance</li>
            </ul>
            </div>



            <Row>
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row>


          </div>
        
  )
}

export default page
