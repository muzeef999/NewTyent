"use client"
import React, { useState } from 'react'
import RoleAssign from '../compoents/RoleAssign'
import Montlyleads from '../compoents/Montlyleads'
import { Col, Row } from 'react-bootstrap'

const Page = () => {


  return (
    <div>
      <Row>
        <Col md={6}>
        <RoleAssign />
        </Col>    
       
       <Col md={6}>
        <Montlyleads />
       </Col>
      </Row>
    </div>
  )
}

export default Page
