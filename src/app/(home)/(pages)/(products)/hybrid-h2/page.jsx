import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hybrid from "@/asserts/hybrid/hybrid.webp";
import Display from "./Display";
import PRODUCTHYBRID1 from "@/asserts/hybrid/PRODUCTHYBRID-1.webp";
import PRODUCTHYBRID2 from "@/asserts/hybrid/PRODUCTHYBRID-2.webp";
import PRODUCTHYBRID3 from "@/asserts/hybrid/PRODUCTHYBRID-3.webp";
import DisplayPatter from "./DisplayPatter";
import "@/app/style/hybridBackground.css"

const page = () => {
  const products = [
    {
      src: [PRODUCTHYBRID1, PRODUCTHYBRID2, PRODUCTHYBRID3],
    },
  ];

  const specifications = [
    { label: "Model", name: "Tyent H2-Hybrid" },
    { label: "Price", name: "325000" },
    { label: "Electrode/Plates", name: "5" },
    { label: "pH Range", name: "2.5 - 11.5" },
    { label: "ORP Range", name: "Up to -1050" },
    { label: "Hydrogen Range", name: "Up to 1800 PPB" },
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
    <div className="hybridbackground" >
       <br/>
       <br/>
      <Container>
        <ProductSection products={products} specifications={specifications} />
      </Container>

      <div className="container">
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div>
              <h2>
                <b>Japanese Twin cell technology</b>
              </h2>
              <p>
                Tyent's H2-Hybrid has Japanese patented Twin Cell Technology
                delivers advanced water ionization, producing high levels of
                molecular hydrogen and antioxidants, enhancing hydration with
                optimal purity and health benefits, Molecular hydrogen upto 1850
                PPB,-ORP up to-1050*, and superior micro clustering. Includes
                15-year warranty, 45+ years lifespan
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ width: "60%", height: "auto", position: "relative" }}>
              <Image
                src={hybrid}
                alt="hybrid image"
                layout="responsive"
                priority
                style={{
                  position: "relative",
                  zIndex: 2, // Image is above the Display component
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: "20.5%",
                  top: "17%",
                  width: "100%",
                }}
              >
                <Display />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={{ width: "60%", height: "auto", position: "relative" }}>
              <Image
                src={hybrid}
                alt="hybrid image"
                layout="responsive"
                priority
                style={{
                  position: "relative",
                  zIndex: 2, // Image is above the Display component
                }}
              />

              {/* Display component is in the background */}
              <div
                style={{
                  position: "absolute",
                  left: "20.5%",
                  top: "17%",
                  width: "100%",
                  zIndex: 1, // Display is behind the image
                }}
              >
                <Display />
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div>
              <h2>
                <b>Advanced power supply</b>
              </h2>
              <p>
                Tyent’s patented SMPS Plus power system, with 55+ adjustable
                settings, ensures consistent performance. Exclusively designed
                for ionizers, it allows Tyent to produce strong alkaline
                (11.5-2.5 pH) and acidic water without chemicals, enhancing both
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div>
              <h2>
                <b> 8 Types of water levels</b>
              </h2>
              <p>
                The Tyent UCE-9 PLUS water ionizer produces a continuous stream
                of 7 different water levels, ranging from strong alkaline water
                (11.5 pH) to strong acidic water (2.5 pH). This versatile
                ionizer meets all your family’s needs, providing pH levels for
                drinking, cleaning, and more.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ width: "60%", height: "auto", position: "relative" }}>
              <Image
                src={hybrid}
                alt="hybrid image"
                layout="responsive"
                priority
                style={{
                  position: "relative",
                  zIndex: 2, // Image is above the Display component
                }}
              />

              <br/>
              <br/>

              {/* Display component is in the background */}
              <div
                style={{
                  position: "absolute",
                  left: "20.5%",
                  top: "17%",
                  width: "100%",
                  zIndex: 1, // Display is behind the image
                }}
              >
                <Display />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
        <div>
          <h2 className="text-center"><b>Easy-to-Use One-Touch Display</b></h2>
          <p className="text-center">Each function has distinct icons,and you can start or stop the <br/> desired water with one touch.</p>
        </div>
        </Col>
        <Col md={6}>
          <DisplayPatter />
        </Col>
      </Row>
    </div>
  );
};

export default page;
