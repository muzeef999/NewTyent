"use client";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./whyTyent.css";
import Link from "next/link";

const Card = ({ img, title, desc }) => (
  <div className="why-card text-center">
    <div className="why-img-wrapper">
      <Image src={img} alt={title} fill className="why-img" />
    </div>

    <h4 className="why-title">{title}</h4>
    <p className="why-desc">{desc}</p>
    <Link href="/benefits" className="why-link">Click here</Link>
  </div>
);

const Why_People_choose_Tyent_Water = () => {
  return (
    <section className="why-section">
      <Container>
          <h3 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>Why People choose Tyent Water</h3>

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
              img="/whyTent/Promotes_Weight_loss.jpg"
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

      <Container className="mt-5">
        <div className="why-feature-banner">
          <Image
            src="/whyTent/guy_drinking_water.jpg"
            alt="Person drinking Tyent water"
            fill
            className="why-feature-image"
          />
          <div className="why-feature-overlay" />
          <div className="why-feature-content">
            <h3 className="why-feature-title">
              Over 3,000+ scientific studies on over 170+ health conditions
            </h3>
            <p className="why-feature-text">
              Backed by 3000+ scientific studies worldwide, hydrogen-rich water
              has shown benefits across 170+ health conditions, including
              metabolism, inflammation, oxidative stress, gut health, skin,
              diabetes, and cardiovascular wellness.
            </p>
            <Link href="/benefits" className="why-feature-link">
              Explore the benefits
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Why_People_choose_Tyent_Water;
