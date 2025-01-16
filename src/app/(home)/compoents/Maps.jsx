import React from 'react';
import maps from "@/asserts/maps.png";
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const Maps = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col md={5} className='d-flex justify-content-center align-items-center'>
          <div>
          <div style={{width:'100%',}}>
            <Image
              src={maps}
              layout='responsive'
              priority
              alt="map"
            />
          </div>
          </div>
        </Col>
        <Col
          md={7}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <h1 className='text-center'><b>"Tyent: Trusted <span style={{color:'#008AC7'}}>Worldwide</span>, Available <span style={{color:'#008AC7'}}>Everywhere!</span>"</b></h1>
          <p className='text-center'>Tyent stands as the most trusted water ionizer brand, celebrated for its unparalleled global presence in numerous countries surpassing any other competitor in the industry.
          </p>
          <div className="d-flex justify-content-around align-items-center">
  <p className="text-center" style={{ margin: '0 10px' }}>
    <span style={{ color: '#008AC7', fontSize: '40px', fontWeight: 'bold' }}>86+</span>
    <br />
    <span>Countries</span>
  </p>
  <p className="text-center" style={{ margin: '0 10px' }}>
    <span style={{ color: '#008AC7', fontSize: '40px', fontWeight: 'bold' }}>70+</span>
    <br />
    <span>Indian Locations</span>
  </p>
</div>

        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default Maps;
