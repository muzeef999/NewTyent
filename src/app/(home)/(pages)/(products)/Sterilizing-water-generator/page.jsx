"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { Container, Row, Col, Button } from "react-bootstrap";
import watergen from "@/asserts/watergen/TIE_N20.webp";
import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import pro_01 from "@/asserts/watergen/pro_01.png";
import pro_02 from "@/asserts/watergen/pro_02.png";
import pro_03 from "@/asserts/watergen/pro_03.png";
import pro13_1_1_img01 from "@/asserts/watergen/pro13_1_1_img01.png";
import sterilization from "@/asserts/watergen/sterilization.png";
import pro_11 from "@/asserts/watergen/pro_11.png";
import pro_13 from "@/asserts/watergen/pro_13.png";
import pro_14 from "@/asserts/watergen/pro_14.png";
import pro_15 from "@/asserts/watergen/pro_15.png";
import pro_16 from "@/asserts/watergen/pro_16.png";
import pro_17 from "@/asserts/watergen/pro_17.png";
import pro_18 from "@/asserts/watergen/pro_18.png";
import pro_19 from "@/asserts/watergen/pro_19.png";
import pro13_1_1_img04 from "@/asserts/watergen/pro13_1_1_img04.png";

const Page = () => {
  // Sample product data

  const products = [
    {
      src: [watergen],
    },
  ];

  const handleTab = (index) => {
    setSelectedIndex(index);
  };

  const specifications = [
    { label: "Model", name: "TIE - N15WR" },
    { label: "Price", name: "649000" },
    { label: "Electrode/Plates", name: "5" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -850*" },
    { label: "Hydrogen Range", name: "Up to 1550 PPB*" },
    { label: "Generates", name: "7 types of water levels" },
    {
      label: "pH Levels",
      name: "3 alkaline, 2 acidic, 1 neutral, & 1 Turbo (Strong alkaline 11.5 pH)",
    },
    { label: "Plate Surface Area", name: "52.9 * 5 = 264.5 sq inches" },
    { label: "Water Generating Capacity", name: "1.5 - 3.0 L/min" },
    {
      label: "Filters Structure",
      name: "2 filters (NSF, EPA & ANSI certified)",
    },
    {
      label: "Filter Composition",
      name: "Carbon Block, UF, TM ceramics, Membrane & Calcium sulfite",
    },
    { label: "Filter Capacity", name: "8500 L" },
    { label: "Dimension (mm)", name: "300(W) * 135(D) * 355(H)" },
    { label: "Weight (kg)", name: "5.2" },
    { label: "Cleaning Type", name: "Auto cleaning system (PAST Technology)" },
    { label: "Display Type", name: "One-touch LCD" },
    { label: "Power Supply", name: "Patented SMPS PLUS power supply" },
    { label: "Power Consumption", name: "Max 220W" },
    { label: "Operating Voltage Range", name: "200 - 240V, 50-60 Hz" },
    { label: "Voice Confirmation", name: "Yes" },
    {
      label: "Input Water Parameters Required",
      name: "Input water TDS: 90 - 160, Input water pH: 7 pH, Input water Pressure: 5 - 7 L/Min",
    },
    {
      label: "Warranty",
      name: "3 Years on ionizer & 15 years on electrodes/plates",
    },
    {
      label: "General Services",
      name: "3 services per year, 9 free services in 3 years in warranty period (PAN INDIA)",
    },
    {
      label: "Safety Function",
      name: "Water temperature sensor, Supplying water sensor, Overheating protection sensor, Error indication sensor",
    },
    { label: "Installation Type", name: "Counter-top/Wall-mounted" },
    {
      label: "Water Dispensing Method",
      name: "Tankless System/Touch Button/Fully Automatic",
    },
    {
      label: "Electrode Design",
      name: "Solid-Hybrid mesh plate design (Titanium & Platinum)",
    },
    { label: "Electrode Material", name: "Platinum-coated Titanium" },
    { label: "Purity of Plates", name: "99.99% (Permelac, Japan)" },
    { label: "Plates Manufacturing", name: "Permelac, Japan" },
    { label: "Additional Use of Chemicals/Salt", name: "No" },
    {
      label: "Manufacturing Company",
      name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537",
    },
  ];

  return (
    <div>
      <Container>
        <div className="section-spacing">
          <ProductSection products={products} specifications={specifications} />
        </div>

        <div style={{ margin: "30px" }}>
          <center>
            <div style={{ width: "100%", height: "auto" }}>
              <Image src={pro_01} alt="pro1" layout="responsive" priority />
            </div>

            <p
              style={{
                color: "#0082bc",
                fontSize: "30px",
                fontWeight: "600",
              }}
            >
              1) Generative Principle & Purpose Of use
            </p>
            <Row>
              <Col
                md={8}
                className="d-flex"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    margin: "20px",
                  }}
                >
                  <b>Gushing sterilized water just from Water and Salt !</b>
                  <br />
                  <ul style={{ textAlign: "left" }}>
                    <br />
                    <li>
                      <b>Convenient hygiene management</b>
                    </li>
                    <p>
                      Process that does not require dilution increases the
                      production efficiency.
                      <br />
                      The automatic consecutive system allows you to use the
                      water like a regular tap water. <br />
                      The one-touch control provides easy and safe use.
                    </p>
                    <br />
                    <li>
                      <b>Clean Quality assurance</b>
                    </li>
                    <p>
                      Quick sterilization and minimal residue is a great
                      advantage. - Ideal for food sterilization without
                      affecting the taste and the smell of the food.
                    </p>
                    <br />
                    <li>
                      <b>Safe Working environment</b>
                    </li>
                    <p>
                      The electrolysis of water and salt does not affect the
                      environment. When the residue is contacted with organic
                      matter after the use, the active chlorine decreases and
                      naturally dissolute.
                    </p>
                  </ul>
                </p>
              </Col>
              <Col md={4}>
                <div style={{ width: "100%", height: "auto" }}>
                  <Image src={pro_02} alt="pro1" layout="responsive" priority />
                </div>
              </Col>
            </Row>
            <div style={{ width: "100%", height: "auto" }}>
              <Image src={pro_03} alt="pro1" layout="responsive" priority />
            </div>
          </center>

          <br />
          <p
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            Generative Principle
          </p>
          <br />
          <Row>
            <Col
              md={4}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>Sterilized Water Producer</p>
            </Col>
            <Col md={8}>
              <p>
                <span style={{ color: "#0082bc" }}>
                  is a device that electrolyzes water and small quantity of salt
                  to produce an environment friendly sterilized water (sodium
                  hypochlorite)
                </span>
                <br />
                The sterilized water produced is popularly used in various
                places and areas that require sterilization and disinfection as
                it has strong sterilizing power especially in virus and germs
                found in the hospital and the resistant bacteria. This is an
                innovative HACCP product that considers both sanitation and
                safety and solves the problem of hard handling of the original
                chemical based toxic sterilizer, dilution, and ruining the
                environment.
              </p>
            </Col>
          </Row>
          <div style={{ width: "100%", height: "auto" }}>
            <Image
              src={pro13_1_1_img01}
              alt="pro1"
              layout="responsive"
              priority
            />
          </div>
          <center>
            <Container>
              <div style={{ width: "100%", height: "auto" }}>
                <Image
                  src={sterilization}
                  alt="pro1"
                  layout="responsive"
                  priority
                />
              </div>
            </Container>
          </center>
          <div style={{ width: "100%", height: "auto" }}>
            <Image src={pro_11} alt="pro1" layout="responsive" priority />
          </div>
          <br />
          <br />
          <center>
            <Container>
              <div style={{ width: "100%", height: "auto" }}>
                <Image
                  src={pro13_1_1_img04}
                  alt="pro1"
                  layout="responsive"
                  priority
                />
              </div>
            </Container>
          </center>
          <p
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            Product Features
          </p>

          <Row>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  Dual Electrolyzer System
                </span>{" "}
                <br />
                (Patent technology 10-1556371) <br />
                <br />
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#0082bc",
                  }}
                >
                  The electrolyzer is the key component that generates
                  sterilized water.
                </span>{" "}
                <br />
                <br />A more stable available chlorine concentration is
                maintained through a two-step electrolysis process.
              </p>
            </Col>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_13} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_14} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  ONE TOUCH automatic flush
                </span>{" "}
                <br />
                The touch sense system allows you to easily get the water going
                or stop. You can see the status of the button you chose.
                <br />
                <br />
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  Production of different concentrations of active chlorine
                </span>{" "}
                <br />
                The product automatically produces the sterilized water based on
                its use (100/200/1000ppm)
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  1000ppm generation function for high concentration
                </span>{" "}
                <br />
              </p>
            </Col>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_15} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_16} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  SMPS Power method
                </span>{" "}
                <br />
                SMPS power supply method provides steady power. <br />
                <br />
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  Safe self check function
                </span>{" "}
                <br />
                The safety function has improved by displaying and alerting the
                unmet condition of the electrolytes (salt) and flow.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  TPE material salt container & integral structure
                </span>{" "}
                <br />
                he salt container made of environmentally friendly TPE material
                is safe and durable.
                <br />
                <br />
                It has high space utilization due to the integral structure of
                salt container. No separate space is required for the salt
                container installation.
              </p>
            </Col>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_17} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_18} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  Salt drain valve fitted
                </span>{" "}
                <br />
                Convenient for cleaning the salt container after not using it
                for long time.
              </p>
            </Col>
          </Row>

          <Row>
            <Col
              md={8}
              className="d-flex"
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>
                <span style={{ fontSize: "50px", fontWeight: "600" }}>
                  Available with Wall-mounted
                </span>{" "}
                <br />
                The wall-mounted design provides effective use of space.
              </p>
            </Col>
            <Col md={4}>
              <div style={{ width: "100%", height: "auto" }}>
                <Image src={pro_19} alt="pro1" layout="responsive" priority />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Page;
