import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import datamap from "@/asserts/map.png"
import Image from 'next/image'

const page = () => {
  return (
    <div>
       <section>

<Row>
  <Col md={6}>
  <div>
    <h3>Who we are</h3>
  </div>
  </Col>
  <Col md={6}>
  <div style={{width:'100%'}}>
    <Image className='rotate-360' src={datamap} alt="googlemap"  layout='responsive' priority />
  </div>
  </Col>
</Row>

        <Container>
          <Row className="text-center">
            <h2>Global Presence</h2>
            <p>We are present across multiple continents.</p>
            <img src="/map.png" alt="Global Map" className="img-fluid" />
          </Row>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4">Core Values</h2>
          <Row>
            <Col md={6}>
              <p><strong>Our Management Value:</strong> Nature and environment focused.</p>
              <p><strong>Be Happy:</strong> Products designed to bring health and happiness.</p>
              <p><strong>Fair & Transparent:</strong> Ensuring fair practices across the company.</p>
              <p><strong>Customer Satisfaction:</strong> Driving satisfaction and loyalty.</p>
            </Col>
            <Col md={6} className="text-center">
              <img src="/product-1.png" alt="Product" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Strategy */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-4">Core Strategy</h2>
          <Row>
            <Col md={6}>
              <h4>Strategy for Growth</h4>
              <ul>
                <li>Continuous investment in R&D</li>
                <li>Expanding export competitiveness</li>
                <li>Development of future business</li>
                <li>Establishment of abroad corporations</li>
              </ul>
            </Col>
            <Col md={6}>
              <h4>Strategy for Competitiveness Enhancement</h4>
              <ul>
                <li>Customer-oriented marketing</li>
                <li>Improving brand awareness</li>
                <li>Globalization of technology</li>
                <li>Improving brand value</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Facts */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Key Facts</h2>
          <Row>
            <Col md={3} className="text-center">
              <h3>86+</h3>
              <p>Global Presence</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>160+</h3>
              <p>Technology Patents</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>29+</h3>
              <p>Years of R&D</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>15</h3>
              <p>Years Warranty</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default page