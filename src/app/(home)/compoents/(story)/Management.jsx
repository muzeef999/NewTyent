import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import profile from "@/asserts/Rectangle 4364.png";

const managementData = [
  { name: "Dr. Srinivas Yadav Kandula", image: profile },
  { name: "Dr. Sree Suma Goriparthy", image: profile },
  { name: "A. Santosh Kumar", image: profile },
  { name: "K. Sreedhar", image: profile },
  { name: "Dr. Kurdhus", image: profile },
];

const Management = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center title">Our Management</h2>
      <div className="container">
        <Row className="g-3">
          {managementData.map((person, index) => (
            <Col key={index} xs={6} sm={6} md={3} lg={3}
            data-aos={index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "zoom-in" : "flip-left"} 
            >
              <div className="custom-card text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  layout="responsive"
                  priority
                  className="profile-image"
                />
                <h5 className="mt-3">{person.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Management;
