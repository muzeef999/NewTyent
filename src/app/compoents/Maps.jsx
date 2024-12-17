import React from 'react';
import maps from "@/asserts/maps.png";
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const Maps = () => {
  return (
    <div>
      <Row>
        <Col md={7}>
          {/* Using layout="responsive" for the image to make it responsive */}
          <Image
            src={maps}
            alt="map"
            layout="responsive"  // Makes the image responsive
            width={700}           // Set the width ratio of the image
            height={400}          // Set the height ratio of the image
          />
          <p
            style={{
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            Technical brilliance with{" "}
            <span style={{ color: "#0082bc" }}>global availability</span>
          </p>
        </Col>
        <Col
          md={5}
          className="d-flex align-items-center justify-content-center"
        >
          <p
            style={{
              fontSize: "50px",
              color: "#008ac7",
              width: "100%",
              textAlign: "left",
              padding: "10px",
            }}
          >
            <b>GLOBAL</b>
            <br />
            <b>AVAILABILITY</b>
            <br />
            <span
              style={{
                backgroundColor: "#008ac7",
                color: "white",
                padding: "8px",
                borderRadius: "15px",
                fontSize: "50px",
                lineHeight: "210%",
              }}
            >
              32
            </span>{" "}
            countries
            <br />
            <span
              style={{
                backgroundColor: "#008ac7",
                color: "white",
                padding: "8px",
                borderRadius: "15px",
                fontSize: "50px",
                lineHeight: "20%",
              }}
            >
              40
            </span>{" "}
            Locations
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Maps;
