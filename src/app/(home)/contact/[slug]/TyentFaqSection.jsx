"use client"
import React from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Logo from "../../compoents/Logo";
import Link from "next/link";

const TyentFaqSection = () => {
  return (
    <section className="py-5">
      <Container>
        <center>
          <h2 className="fw-bold mb-4">
              Frequently Asked Questions
            </h2>
            </center>
        <Row className="align-items-start">
          
          {/* LEFT SECTION – BOOK FREE DEMO */}
          <Col md={5} className="">
            <div className="p-4 border rounded-4 shadow-sm">

                 <Link className="p-4" style={{width:"80%"}}
              href="/"            >
              <Logo />
            </Link>
              <h2 className="fw-bold mb-3">
                Book a Free Demo
              </h2>

              <p className="text-muted mb-4">
                Experience the power of hydrogen-rich alkaline water with a
                live product demonstration at your doorstep.
              </p>

              <Button
                href="#book-demo"
                className="btn btn-primary px-4 py-2 rounded-pill"
              >
                Book Your Free Demo Today
              </Button>

            </div>
          </Col>

          {/* RIGHT SECTION – FAQ ACCORDION */}
          <Col md={7}>
    
            <Accordion defaultActiveKey="0" flush>
              
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the Tyent Water Ionizer and how does it work?
                </Accordion.Header>
                <Accordion.Body>
                  Tyent Water Ionizer is a premium hydrogen-rich alkaline water
                  system that uses advanced Japanese electrolysis technology to
                  convert regular tap water into mineral-rich, antioxidant
                  alkaline water. It helps improve hydration, neutralize
                  acidity, and support overall health at a cellular level.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Is Tyent better than RO water purifiers?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. Unlike RO systems that strip essential minerals and often
                  leave water acidic—contributing to acidic stress and oxidative
                  stress (free radicals), which are major factors behind
                  lifestyle diseases—Tyent retains beneficial minerals while
                  producing antioxidant, hydrogen-rich alkaline water. This
                  delivers superior hydration, better taste, enhanced wellness
                  support, and long-term protection.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  What are the health benefits of drinking Tyent alkaline water?
                </Accordion.Header>
                <Accordion.Body>
                  Tyent hydrogen-rich alkaline water combines optimal alkalinity
                  with selective antioxidant molecular hydrogen to neutralize
                  acidity and reduce oxidative stress. It balances body pH,
                  enhances digestion, boosts energy, supports immunity, and
                  promotes long-term preventive health.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Is Tyent Water Ionizer safe for daily use?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely. Tyent water ionizer systems are certified by USDA,
                  KFDA, NSF, CE, ISO, EPA, ANSI and GMP standards, ensuring
                  medical-grade safety, superior quality, and long-term
                  reliability. Trusted in 86+ countries with a 40+ year legacy.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How is Tyent superior to other water ionizers?
                </Accordion.Header>
                <Accordion.Body>
                  Tyent features patented Japanese Solid Hybrid Mesh Plate
                  Technology, patented SMPS PLUS power supply, and medical-grade
                  components. It delivers higher molecular hydrogen,
                  stable pH levels, superior durability, and consistent
                  performance without chemicals.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  How is Tyent Water Ionizer different from Tyent H2-Hybrid?
                </Accordion.Header>
                <Accordion.Body>
                  Tyent Water Ionizers deliver 7 types of hydrogen-rich alkaline
                  water from pH 2.5 to 11.5. The Tyent H2-Hybrid combines a water
                  ionizer and hydrogen generator with a dedicated hydrogen
                  button for high-concentration molecular hydrogen therapy at
                  neutral pH.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  What makes Tyent’s Solid Hybrid Mesh Plates superior?
                </Accordion.Header>
                <Accordion.Body>
                  Tyent plates use 99.9% pure platinum-coated titanium, crafted
                  with advanced Japanese technology from Permelac, Japan. They
                  deliver superior durability, higher ORP levels, increased
                  molecular hydrogen production, and are designed to last 45+
                  years.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  What contaminants does Tyent’s 0.01 micron filtration remove?
                </Accordion.Header>
                <Accordion.Body>
                  The ultra-fine 0.01 micron dual-stage filtration removes over
                  200+ contaminants including heavy metals, chlorine, fluoride,
                  industrial chemicals, pharmaceutical residues, nano-viruses,
                  and nano-plastics. Certified by NSF, EPA & ANSI.
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default TyentFaqSection;
