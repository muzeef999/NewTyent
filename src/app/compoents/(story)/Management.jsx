import React from 'react'
import { Col, Row } from 'react-bootstrap'
import profile from "@/asserts/Rectangle 4364.png"
import Image from 'next/image'

const Management = () => {
  return (
    <div className='container-fluid'>
        <br/>
        <br/>
        <h2 className='text-center' style={{color:'#008AC7', fontWeight:'600'}}>Our Management </h2>
        <br/>
        <br/>
         
         <div className='container'>
         <Row>
            <Col md={3}>
            <div className='custom-card'>
                 <Image src={profile} style={{borderRadius:'10px', width:'100%'}} />
                 <h4>Dr. Srinivas Kandula</h4>
                 <p>MD</p>
            </div>
            </Col>
            <Col md={3}>
            <div className='custom-card'>
            <Image src={profile} style={{borderRadius:'10px', width:'100%'}} />
            <h4>Dr. Srinivas Kandula</h4>
                 <p>MD</p>
            </div>
            </Col>
            <Col md={3}>
            <div className='custom-card'>
            <Image src={profile} style={{borderRadius:'10px', width:'100%'}} />
            <h4>Dr. Srinivas Kandula</h4>
                 <p>MD</p>
           
            </div>
            </Col>
            <Col md={3}>
            <div className='custom-card'>
            <Image src={profile} style={{borderRadius:'10px', width:'100%'}} />
            <h4>Dr. Srinivas Kandula</h4>
                 <p>MD</p>
           
            </div>
            </Col>
            <br/>
         </Row>
         <br/>
         </div>
          <br/>
    </div>
  )
}

export default Management