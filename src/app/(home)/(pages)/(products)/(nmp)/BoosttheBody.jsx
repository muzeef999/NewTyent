import React from 'react'
import "@/app/style/Nmp.css";
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';


const BoosttheBody = ({Boost}) => {
  return (
    <div>
        
        <div className="custom-card-background-image">
          <Row className="nmpboostbackground"
          >
            <Col sm={12} md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ width: "70%", height: "auto" }}>
                <Image
                  src={Boost.image}
                  alt="image data"
                  layout="responsive"
                  priority
                />
              </div>
            </Col>
            <Col sm={12} md={12}
              lg={6}  className="d-flex justify-content-center align-items-center">
              
              <div 
              >
                <h1
                  style={{
                    fontSize: "38px",
                    fontWeight: "700",
                    lineHeight: "56px",
                    marginBottom: "16px",
                    color: "#FFF",
                  }}
                >
                  {Boost.title}
                </h1>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#FFF",
                  }}
                > {Boost.description}
                  
                </p>
              </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default BoosttheBody