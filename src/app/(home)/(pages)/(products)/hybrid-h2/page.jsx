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
import "@/app/style/hybridBackground.css";

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
    <div className="hybridbackground">
      <Container>
        <div className="section-spacing">
          <ProductSection products={products} specifications={specifications} />
        </div>
      </Container>

      <div className="section-spacing">
        <Container>
          <div className="firsthybrid">
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b>Japanese Twin cell technology</b>
                  </h2>
                  <p>
                    Tyent's H2-Hybrid has Japanese patented Twin Cell Technology
                    delivers advanced water ionization, producing high levels of
                    molecular hydrogen and antioxidants, enhancing hydration
                    with optimal purity and health benefits, Molecular hydrogen
                    upto 1850 PPB,-ORP up to-1050*, and superior micro
                    clustering. Includes 15-year warranty, 45+ years lifespan
                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
                    <Display displayColor="#00FF12" phValues="7.0" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b>Advanced power supply</b>
                  </h2>
                  <p>
                    Tyent’s patented SMPS Plus power system, with 55+ adjustable
                    settings, ensures consistent performance. Exclusively
                    designed for ionizers, it allows Tyent to produce strong
                    alkaline (11.5-2.5 pH) and acidic water without chemicals,
                    enhancing both
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* Third section */}
      <div className="sectionthird">
        <Container>
          <div className="section-spacing">
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b> One Touch Display</b>
                  </h2>
                  <p>
                    The Tyent H2-Hybrid boasts the industry's largest and most
                    advanced full-color LCD display, combined with intuitive
                    voice prompts for a seamless user experience. With a single
                    touch, you can select from 7 ionized water types, tailored
                    to meet hydration, cleaning, cooking, and beauty needs
                    effortlessly.
                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
            </Row>

            <div className="section-spacing">
              <Row>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{
                      width: "60%",
                      height: "auto",
                      position: "relative",
                    }}
                  >
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
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>
                    <h2>
                      <b> Turbo mode</b>
                    </h2>
                    <p>
                      Tyent stands out as the only water ionizer in the industry
                      capable of producing strong alkaline water at 11.5 pH
                      without relying on chemicals, salts, or enhancers, thanks
                      to its patented SMPS PLUS technology. This powerful water
                      is perfect for washing fruits and vegetables, effectively
                      removing pesticides, insecticides, wax, and color
                      coatings.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>

      {/* fourt section */}

      <div className="section-spacing">
        <Container>
          <div className="firsthybrid">
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b> H2 Button/Jog Dial/Regulator</b>
                  </h2>
                  <p>
                    The H2 Button in Tyent’s H2-Hybrid water ionizer is designed
                    for easy operation, with a jog dial that allows for a simple
                    rotation and click action. Selecting this option produces
                    targeted antioxidant molecular hydrogen at a neutral pH,
                    enhancing both safety and aesthetic appeal.
                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
                    <Display displayColor="#00FF12" phValues="7.0" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b>Automated/Past cleaning system</b>
                  </h2>
                  <p>
                    The Tyent’s H2-Hybrid water ionizer uses advanced Polarity
                    Anti Scale Technology (PAST) for automated cleaning. Timer
                    and sensor activation reduce mineral buildup on electrodes,
                    enhancing durability and consistently delivering healthy,
                    ionized water
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>


      {/* five section */}

      <div className="sectionthird">
        <Container>
          <div className="section-spacing">
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b> Fixed quantity discharge function</b>
                  </h2>
                  <p>
                    The Tyent’s H2-Hybrid water ionizer is engineered for modern
                    convenience, featuring the Fixed Quantity Discharge
                    function. It dispenses precise amounts of 0.5L, 1.0L, or
                    1.5L, making hydration and cooking effortless and accurate
                    for daily use
                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
            </Row>

            <div className="section-spacing">
              <Row>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{
                      width: "60%",
                      height: "auto",
                      position: "relative",
                    }}
                  >
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
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center"
                >
                  <div>
                    <h2>
                      <b> Real time Filter Usage Indication</b>
                    </h2>
                    <p>
                      The Tyent’s H2-Hybrid water ionizer features a
                      user-friendly LCD display that tracks real-time filter
                      usage, alerting you when replacements are needed. This
                      convenient monitoring system helps maintain optimal
                      performance and ensures clean, healthy water at all times
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div>
                  <h2>
                    <b> ECO Mode</b>
                  </h2>
                  <p>
                  The Tyent’s H2-Hybrid water ionizer features Eco Mode, enhancing energy efficiency with up to
99% savings. It reduces power consumption by automatically turning off the LCD backlight during idle periods, ensuring optimal performance while conserving electricity.

                  </p>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  style={{ width: "60%", height: "auto", position: "relative" }}
                >
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
            </Row>
            </div>
          </div>
        </Container>
      </div>

      <div className="section-spacing">
        <Row style={{ backgroundColor: "#FFF" }}>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <h2 className="text-center">
                <b>One Touch Display</b>
              </h2>
              <p className="text-center">
                Each function has distinct icons,and you can start or stop the{" "}
                <br /> desired water with one touch.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <DisplayPatter />
          </Col>
        </Row>
      </div>


      
      <Container>
        <h2
          className="text-center mb-4"
          style={{
            color: "#000",
            fontWeight: "600",
            fontSize: "2rem", // Default for large screens
          }}
        >
          Tyent UCE-9 plus Specification's
        </h2>

        <Table className="custom-table" hover responsive>
          <tbody>
            {specifications.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#000",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  {item.label}
                </td>
                <td
                  style={{
                    fontSize: "16px",
                    color: "#333",
                    textAlign: "left",
                    padding: "10px",
                  }}
                >
                  : {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="section-spacing">
        <Certifications />
        </div>
        <div className="section-spacing">
          <Filter />
        </div>
      </Container>

    </div>
  );
};

export default page;
