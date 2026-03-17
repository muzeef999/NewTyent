"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import "./tyentvskangan.css";
import Comparsion from "./Comparsion";
import "@/app/style/AppBar.css"


const CompareSection = () => {
  return (
    <Container className="">
      <div className="text-center mb-5">
        <h1 className="bg-heading-text-two-main">Tyent vs Kangen</h1>
        <h3 className="fw-bold subtitle-tight">Think Once before buying.</h3>
        <p style={{ maxWidth: '900px', margin: '0 auto' }}>
          We believe in absolute transparency. No hidden charges, No hidden
          commision's, no surprises - Just clear, honest pricing backed by
          uncompromised quality.
        </p>
      </div>
      {/* ===== TOP 2 CARDS ===== */}
      <Row className="g-4 mb-5">
        {/* LEFT CARD */}
        <Col md={6}>
          <div className="compare-card">
            <div className="compare-card-image-wrap">
              <Image
                src="/tyentvsengic/tyent01.jpeg"
                alt="product"
                width={600}
                height={300}
                className="compare-card-img"
              />
            </div>

            <h4 className="mt-3 compare-heading">Why Tyent ?</h4>
            <p className="small text-muted compare-desc">
              Tyent, a medical-grade water ionizer manufactured by TAEYOUNG E&T, is available in 123+ countries. Since more than 3 decades Tyent is known for its advanced Japanese technology, Tyent follows traditional marketing and offers end-to-end service with an in-house team handling demos, installations, and after-sales support, focusing customer satisfaction and brand trust.
            </p>

            <Link href="/why-tyent" passHref>
              <Button variant="link" className="p-0 text-decoration-none">
                Click here →
              </Button>
            </Link>
          </div>
        </Col>

        {/* RIGHT CARD */}
        <Col md={6}>
          <div className="compare-card">
            <div className="compare-card-image-wrap">
              <Image
                src="/tyentvsengic/enagic.jpeg"
                alt="product"
                width={600}
                height={300}
                className="compare-card-img"
              />
            </div>

            <h4 className="mt-3 compare-heading">What is Kangen ?</h4>
            <p className="small text-muted compare-desc">
              Kangen, a medical-grade water ionizer manufactured by Enagic & Co, is available in 26+ countries., relies on an MLM business model, doubling prices as 49% of costs go to commissions for 30 middlemen. Unlike other ionizers, Kangen lacks manpower for demo, installation and after-sales doorstep service globally, Focusing revenue generation over end customer satisfaction.
            </p>

            <Link href="/tyentvskangen" passHref>
              <Button variant="link" className="p-0 text-decoration-none">
                Click here →
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      <Comparsion />
    </Container>
  );
};

export default CompareSection;
