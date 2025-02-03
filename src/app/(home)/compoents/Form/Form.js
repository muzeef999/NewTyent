"use client";
import React from "react";
import contact from "@/asserts/contactlady.png";
import Image from "next/image";
import style from "../../compoents/Form/Form.module.css";
import FormOnly from "./FormOnly";
import { Col, Row } from "react-bootstrap";
 

 

const Form = () => {
 
  return (
  <div style={{backgroundColor:'transparent', width:'100%', overflow:'hidden'}}>
    <div className="container">
      <Row>
        <Col md={6} data-aos="fade-right" className="d-flex justify-content-center align-items-center">
          <div className={style.card}>
            <Image
              className={style.conimg}
              src={contact}
              alt="Contact"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>
        <Col md={6}>
         <FormOnly />
        </Col>
        </Row>
      </div>
    </div>
    
  );
};

export default Form;
