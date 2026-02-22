"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./whyTyent.css";

const Card = ({ img, title, desc }) => (
  <div className="why-card text-center">
    <div className="why-img-wrapper">
      <Image src={img} alt={title} fill className="why-img" />
    </div>

    <h4 className="why-title">{title}</h4>
    <p className="why-desc">{desc}</p>
    <a href="#" className="why-link">Click here</a>
  </div>
);

const Why_People_choose_Tyent_Water = () => {
  return (
    <section className="why-section">
      <Container>
        <h2 className="why-heading text-center">
          Why People choose Tyent Water
        </h2>

        <Row className="g-4 mt-4">
          <Col md={4}>
            <Card
              img="/whyTent/Increase_energy.jpg"
              title="Increase energy"
              desc="An abundance of molecular hydrogen adds noticeable energy boost"
            />
          </Col>

          <Col md={4}>
            <Card
              img="/whyTent/Increase_energy.jpg"
              title="Promotes Weight loss"
              desc="Many of our customers report increased weight loss."
            />
          </Col>

          <Col md={4}>
            <Card
              img="/whyTent/Faster_recovery_after_exercise.jpg"
              title="Faster recovery after exercise"
              desc="Hydrogen water easily absorbs into your cells to neutralize lactic acid for faster recovery."
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Why_People_choose_Tyent_Water;
