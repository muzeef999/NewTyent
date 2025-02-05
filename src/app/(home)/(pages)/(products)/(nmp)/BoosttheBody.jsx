import React from 'react'
import "@/app/style/Nmp.css";
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';


const BoosttheBody = ({Boost}) => {
  return (
    <div className='p-4'>
        
        <div className="custom-card-background-image ">
          <Row className="nmpboostbackground"
          >
            <Col sm={12} md={12}
              lg={6}
              className="d-flex justify-content-center align-items-center order-2 order-lg-1"
            >
              <div style={{ width: "70%", height: "auto",  }}>
                <Image style={{filter: "drop-shadow(10px 0px 15px rgba(0, 0, 0, 0.5))"}}
                  src={Boost.image}
                  alt="image data"
                  layout="responsive"
                  priority
                />
              </div>
            </Col>
            <Col sm={12} md={12}
              lg={6}  className="d-flex justify-content-center align-items-center  order-1 order-lg-2 p-3">
              
              <div 
              >
                <h1
                  style={{
                    fontSize: "clamp(20px, 5vw + 18px, 36px)",
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