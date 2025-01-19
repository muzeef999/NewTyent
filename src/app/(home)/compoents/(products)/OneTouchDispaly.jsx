import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaDroplet } from "react-icons/fa6";

const OneTouchDispaly = () => {
  const waterTypes = [
    { name: "Vegetable clean water", type: "Turbo", color: "#FF0000" },
    { name: "Regular drinking water", type: "Alk Level 3", color: "#ff1aff" },
    { name: "Initial drinking water", type: "Alk Level 1", color: "#6595DD" },
    { name: "Moderate drinking water", type: "Alk Level2", color: "#00D2FF" },
    { name: "Purified water", type: "H2O", color: "#00FF12" },
    { name: "Beauty water", type: "Acid Level 2", color: "#e6e600" },
    { name: "Surface Cleaner", type: "Acid Level 1", color: "#FFA500" },  
  ];

    



  

  return (
    <div>
      <Row className="mb-5">
        <Col>
          {/* Section Header */}
          <h2 className="text-center" style={{ color: '#008AC7', fontWeight: '600' }}>
            Discover Tyent’s 7 Water Types
          </h2>
          <p className="text-center" style={{ fontSize: '14px', fontWeight: 500 }}>
            Tyent NMP-5 water ionizer produces a continuous stream of 7 different water levels,
            <br />
            ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH) to meet all your family’s needs.
          </p>
          <br />

          {/* Water Types */}
          <Row className="justify-content-center">
            {waterTypes.map((type, idx) => (
              <Col
              xs={6} 
              sm={6}
              md={3}
                
                
                key={idx}
                className="d-flex justify-content-center align-items-center mb-4"
              >
                <div
                  className="water-type d-flex justify-content-center align-items-center"
                  style={{
                    padding: "12px",
                    transition: "all 0.3s ease",
                  }}
                  >
                  <div
                    style={{
                      backgroundColor: `${type.color}`,
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px",
                      whiteSpace: "nowrap", 
                       textOverflow: "ellipsis",
                    }}
                  >
                    <FaDroplet style={{ color: "#FFF" }} size={30} />
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
                      &nbsp;{type.name}
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
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OneTouchDispaly;
