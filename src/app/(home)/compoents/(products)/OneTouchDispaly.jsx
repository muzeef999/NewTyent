import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaDroplet } from "react-icons/fa6";


const OneTouchDispaly = () => {


   
  const waterTypes = [
    { name:"Surface Cleaner", type: "Acid Level 1", color: "#ff7a00"},
    { name:"Beauty water", type: "Acid Level 2", color: "#fef31f" },
    { name:"Purified water", type: "H2O", color: "#23c552"},
    { name:"Initial drinking water", type: "Alk Level 1", color: "#008ac7"},
    { name:"Moderate drinking water", type: "Alk Level2", color: "#0ab1ed"},
    { name:"Regular drinking water", type: "Alk Level 3", color: "#c803ff"},
    { name:"Vegetable clean water", type: "Turbo", color: "#ff0000"},
  ];

  return (
    <div>
       <Row className="mb-5">
  <Col>
    {/* Section Header */}
    <h2 className='text-center' style={{color:'#008AC7', fontWeight:'600'}}>Discover Tyent’s 7 Water Types</h2>
      <p className='text-center' style={{fontSize:'14px', fontWeight:500}}>
      Tyent NMP-5 water ionizer produces a continuous stream of 7 different water levels,
      <br/> ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH) to meet all your family’s needs. 
      </p>
      <br/>

    <Row className="justify-content-center easytotouchdisplay"> {/* hover effect easytotouchdisplay */}
      {waterTypes.map((type, idx) => (
        <Col
          md={3}
          sm={6}
          xs={12}
          key={idx}
          className="d-flex   justify-content-center align-items-center mb-4"
        >
          {/* Circular Icon */}
          <div
            style={{
              backgroundColor: `${type.color}`,
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              display: "flex",
              padding:'16px',
              margin:'5px',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaDroplet style={{ color: "#FFF" }} size={40} />
          </div>

          {/* Water Type Details */}
          <div className="text-center">
            <h6
              style={{
                color: `${type.color}`,
                fontWeight: "700",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              {type.name}
            </h6>
            <p
              style={{
                fontSize: "16px",
                color: "#6c757d",
                margin: "0",
              }}
            >
              {type.type}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  </Col>
       </Row>
    </div>
  )
}

export default OneTouchDispaly
