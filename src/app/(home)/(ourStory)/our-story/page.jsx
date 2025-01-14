
import Form from '@/app/(home)/compoents/Form/Form'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'
import { Col, Row } from 'react-bootstrap';
const Mission = dynamic(() => import('@/app/(home)/compoents/(story)/Mission'), { ssr: false });
import whoweare from "@/asserts/about.jpg"
import Vision from '../../compoents/(story)/Vision';
import Management from '../../compoents/(story)/Management';

const page = () => {
  return (
    <div>
      <div className='container'>
        <br/>
        <br/>
      <Row>
        {/* Left Column: Image */}
        <Col md={6} className='d-flex justify-content-center align-items-center'>
          <div style={{width:'90%'}}>
            <Image style={{borderTopLeftRadius:'50%', borderBottomLeftRadius:'50%', borderBottomRightRadius:'50%'}}
              src={whoweare}
              alt="Who We Are"
              layout="responsive"
              priority
            />
          </div>
        </Col>

        {/* Right Column: Text */}
        <Col md={6} className='d-flex justify-content-center align-items-center'>
          <div>
            <h5 className='m-0'>Who We Are?</h5>
            <h3 style={{fontWeight:'600', fontSize:'40px', color:'#008ac7'}} className='m-0'>About Us</h3>
            <br/>
            <p>
              Tyent India is a leading provider of premium water ionizers, hydrogen
              generators, and advanced water purification systems. As the exclusive
              partner of TAE YOUNG E&T CO., LTD., a global leader in innovative water
              solutions, we bring cutting-edge Japanese technology and eco-friendly
              products to the Indian market. With a commitment to health, wellness, and
              sustainability, we aim to empower individuals and businesses with superior
              water quality that enhances lives.
              <br />
              <br />
              Our journey in India is driven by a passion for creating healthier
              communities, reducing environmental impact, and setting new benchmarks in
              water technology. From individual homes to large-scale businesses, we
              offer solutions tailored to meet the unique needs of every customer while
              ensuring unparalleled service and satisfaction.
            </p>
            <br/>
            <Vision />
          </div>
        </Col>
      </Row>

      </div>
    
      <Mission />
      <Management/>
      <br/>
      <Form />
    </div>
  )
}

export default page