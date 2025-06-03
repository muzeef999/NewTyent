import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import Image from "next/image";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import hybrid from "@/asserts/hybrid/hybrid.webp";
import Display from "./Display";
import PRODUCTHYBRID1 from "@/asserts/hybrid/PRODUCTHYBRID-1.webp";
import PRODUCTHYBRID2 from "@/asserts/hybrid/PRODUCTHYBRID-2.webp";
import PRODUCTHYBRID3 from "@/asserts/hybrid/PRODUCTHYBRID-3.webp";
import PRODUCTHYBRID4 from "@/asserts/hybrid/PRODUCTHYBRID-4.webp";
import DisplayPatter from "./DisplayPatter";
import "@/app/style/hybridBackground.css";
import Certifications from "@/app/(home)/compoents/Certifications";
import Filter from "@/app/(home)/compoents/(products)/Filter";
import hybridDisplay from "@/asserts/hybrid/hybridDisplay.webp";
import h2jogdaily from "@/asserts/hybrid/h2jog.png";
import cellplate from "@/asserts/hybrid/cellplates.png";
import waterflow from "@/asserts/hybrid/pro_04.png";
import OneTouchDispaly from "@/app/(home)/compoents/(products)/OneTouchDispaly";
import HybridTouchPreview from "./HybridTouchPreview";
import Halfhybrid from "@/asserts/hybrid/Halfhybrid.webp"

import dynamic from "next/dynamic";
const Banner = dynamic(
  () => import("./HybridBanner"),
  {
    ssr: false,
  }
);


export const metadata = {
  title: "Tyent H2-Hybrid | Twin Cell Alkaline & Hydrogen Ionizer",
  description: "Tyent H2-Hybrid features dual-cell tech, 1850 PPB H₂, -1250 ORP, 11.5–2.5 pH, 7 water types & no chemicals. Advanced LCD, auto-clean, & 15-year electrode warranty.",
  keywords: "Tyent H2-Hybrid, twin cell ionizer, alkaline water ionizer, hydrogen water machine, 1850 PPB hydrogen, Kangen water alternative, 11.5 pH water, chemical-free ionizer, SMPS Plus technology, Japanese water ionizer",
};


const page = () => {
  const products = [
    {
      src: [PRODUCTHYBRID1, PRODUCTHYBRID2, PRODUCTHYBRID3, PRODUCTHYBRID4],
    },
  ];

  const specifications = [
    { label: "Model", name: "Tyent H2-Hybrid" },
    { label: "Price", name: 367000 },
    { label: "Electrode Type", name: "Twin cell Technology" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -1250*" },
    { label: "Hydrogen Range", name: "Up to 1850* PPB" },
    { label: "Generates", name: "7 types of water levels" },
    {
      label: "Warranty",
      name: "3 Years on ionizer & 15 years on electrodes/plates",
    },
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
    { label: "Purity of Plates", name: "99.9 (Permelac, Japan)" },
    { label: "Plates Manufacturing", name: "Permelac, Japan" },
    { label: "Additional Use of Chemicals/Salt", name: "No" },
    {
      label: "Manufacturing Company",
      name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537",
    },
  ];

  return (
    <div className="hybridbackground">
      
 <Banner />
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
                    upto 1850 PPB,-ORP up to-1250*, and superior micro
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

                  <div className="jogdaily-ighting-all"></div>

                  <div className="product-Display">
                    <Display />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center order-2 order-md-1"
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

                  <div className="jogdaily-ighting-all"></div>

                  {/* Display component is in the background */}
                  <div className="product-Display">
                    <Display />
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center order-1 order-md-2"
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

                  <div className="jogdaily-ighting-all"></div>
                  <div
                    style={{
                      width: "50%",
                      height: "auto",
                      position: "absolute",
                      left: "-20%",
                      bottom: "-20%",
                      zIndex: 6,
                    }}
                  >
                    <Image
                      src={hybridDisplay}
                      alt="hybrid image"
                      layout="responsive"
                      priority
                    />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: "-20%",
                      bottom: "-22%",
                      width: "50%",
                      zIndex: 3, // Display is behind the image
                    }}
                  >
                    <Display />
                  </div>

                  {/* Display component is in the background */}
                  <div className="product-Display">
                    <Display displayColor="#5FA2FD" phValues="9.0" />
                  </div>
                </div>
              </Col>
            </Row>

            <div className="section-spacing">
              <Row>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center order-2 order-md-1"
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

                    <div className="jogdaily-ighting-all"></div>

                    {/* Display component is in the background */}
                    <div className="product-Display">
                      <Display displayColor="#FF0000" phValues="11.5" />
                    </div>
                  </div>
                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center order-1 order-md-2"
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
                    for easy operation, with a jog dial. Selecting this option produces
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
                      width: "50%",
                      height: "auto",
                      position: "absolute",
                      left: "-20%",
                      bottom: "-20%",
                      zIndex: 6,
                    }}
                  >
                    <Image
                      src={h2jogdaily}
                      alt="hybrid image"
                      layout="responsive"
                      priority
                    />
                  </div>

                  <div className="jogdaily-ighting"></div>

                  <div className="product-Display">
                    <Display displayColor="#00FF12" phValues="7.0" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center order-2 order-md-1"
              >
                <div
                  style={{ width: "50%", height: "auto", position: "relative" }}
                >
                  <Image
                    src={hybridDisplay}
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
                      left: "0%",
                      top: "-0.5%",
                      width: "100%",
                      zIndex: 1, // Display is behind the image
                    }}
                  >
                    <Display displayColor="#FF0000" phValues="11.5" />
                  </div>
                </div>
              </Col>
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center order-1 order-md-2"
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
                  <div className="product-Display">
                    <Display displayColor="#5FA2FD" phValues="9.0" />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: "78.5%",
                      top: "33%",
                      width: "100%",
                      zIndex: 99, // Display is behind the image
                    }}
                  >
                    <svg
                      width="50%"
                      height="auto"
                      viewBox="0 0 382 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="109"
                        width="81"
                        height="81"
                        rx="38.4861"
                        fill="#5FA2FD"
                      />
                      <path
                        d="M134.981 52.5114C133.026 52.5038 131.344 52.0227 129.935 51.0682C128.534 50.1136 127.454 48.7311 126.697 46.9205C125.947 45.1098 125.575 42.9318 125.583 40.3864C125.583 37.8485 125.958 35.6856 126.708 33.8977C127.466 32.1098 128.545 30.75 129.947 29.8182C131.356 28.8788 133.034 28.4091 134.981 28.4091C136.928 28.4091 138.602 28.8788 140.003 29.8182C141.413 30.7576 142.496 32.1212 143.253 33.9091C144.011 35.6894 144.386 37.8485 144.378 40.3864C144.378 42.9394 144 45.1212 143.242 46.9318C142.492 48.7424 141.416 50.125 140.015 51.0795C138.613 52.0341 136.935 52.5114 134.981 52.5114ZM134.981 48.4318C136.314 48.4318 137.378 47.7614 138.174 46.4205C138.969 45.0795 139.363 43.0682 139.356 40.3864C139.356 38.6212 139.174 37.1515 138.81 35.9773C138.454 34.803 137.947 33.9205 137.288 33.3295C136.636 32.7386 135.867 32.4432 134.981 32.4432C133.655 32.4432 132.594 33.1061 131.799 34.4318C131.003 35.7576 130.602 37.7424 130.594 40.3864C130.594 42.1742 130.772 43.6667 131.128 44.8636C131.492 46.053 132.003 46.947 132.663 47.5455C133.322 48.1364 134.094 48.4318 134.981 48.4318ZM149.825 52.2955C149.075 52.2955 148.431 52.0303 147.893 51.5C147.362 50.9621 147.097 50.3182 147.097 49.5682C147.097 48.8258 147.362 48.1894 147.893 47.6591C148.431 47.1288 149.075 46.8636 149.825 46.8636C150.552 46.8636 151.188 47.1288 151.734 47.6591C152.279 48.1894 152.552 48.8258 152.552 49.5682C152.552 50.0682 152.423 50.5265 152.165 50.9432C151.915 51.3523 151.586 51.6818 151.177 51.9318C150.768 52.1742 150.317 52.2955 149.825 52.2955ZM164.793 52.3182C163.187 52.3182 161.755 52.0227 160.498 51.4318C159.248 50.8409 158.255 50.0265 157.521 48.9886C156.786 47.9508 156.403 46.7614 156.373 45.4205H161.146C161.199 46.322 161.577 47.053 162.282 47.6136C162.986 48.1742 163.824 48.4545 164.793 48.4545C165.566 48.4545 166.248 48.2841 166.839 47.9432C167.437 47.5947 167.903 47.1136 168.236 46.5C168.577 45.8788 168.748 45.1667 168.748 44.3636C168.748 43.5455 168.574 42.8258 168.225 42.2045C167.884 41.5833 167.411 41.0985 166.805 40.75C166.199 40.4015 165.505 40.2235 164.725 40.2159C164.043 40.2159 163.38 40.3561 162.736 40.6364C162.1 40.9167 161.604 41.2992 161.248 41.7841L156.873 41L157.975 28.7273H172.202V32.75H162.032L161.43 38.5795H161.566C161.975 38.0038 162.593 37.5265 163.418 37.1477C164.244 36.7689 165.168 36.5795 166.191 36.5795C167.593 36.5795 168.843 36.9091 169.941 37.5682C171.039 38.2273 171.907 39.1326 172.543 40.2841C173.18 41.428 173.494 42.7462 173.486 44.2386C173.494 45.8068 173.13 47.2008 172.396 48.4205C171.668 49.6326 170.649 50.5871 169.339 51.2841C168.036 51.9735 166.521 52.3182 164.793 52.3182Z"
                        fill="#0B1382"
                      />
                      <rect
                        x="204"
                        width="81"
                        height="81"
                        rx="38.4861"
                        fill="#5FA2FD"
                      />
                      <path
                        d="M233.996 28.7273V52H229.076V33.3977H228.94L223.61 36.7386V32.375L229.371 28.7273H233.996ZM241.153 52.2955C240.403 52.2955 239.759 52.0303 239.221 51.5C238.691 50.9621 238.425 50.3182 238.425 49.5682C238.425 48.8258 238.691 48.1894 239.221 47.6591C239.759 47.1288 240.403 46.8636 241.153 46.8636C241.88 46.8636 242.516 47.1288 243.062 47.6591C243.607 48.1894 243.88 48.8258 243.88 49.5682C243.88 50.0682 243.751 50.5265 243.494 50.9432C243.244 51.3523 242.914 51.6818 242.505 51.9318C242.096 52.1742 241.645 52.2955 241.153 52.2955ZM255.996 52.5114C254.042 52.5038 252.36 52.0227 250.951 51.0682C249.549 50.1136 248.47 48.7311 247.712 46.9205C246.962 45.1098 246.591 42.9318 246.599 40.3864C246.599 37.8485 246.974 35.6856 247.724 33.8977C248.481 32.1098 249.561 30.75 250.962 29.8182C252.371 28.8788 254.049 28.4091 255.996 28.4091C257.943 28.4091 259.618 28.8788 261.019 29.8182C262.428 30.7576 263.512 32.1212 264.269 33.9091C265.027 35.6894 265.402 37.8485 265.394 40.3864C265.394 42.9394 265.015 45.1212 264.258 46.9318C263.508 48.7424 262.432 50.125 261.03 51.0795C259.629 52.0341 257.951 52.5114 255.996 52.5114ZM255.996 48.4318C257.33 48.4318 258.394 47.7614 259.19 46.4205C259.985 45.0795 260.379 43.0682 260.371 40.3864C260.371 38.6212 260.19 37.1515 259.826 35.9773C259.47 34.803 258.962 33.9205 258.303 33.3295C257.652 32.7386 256.883 32.4432 255.996 32.4432C254.671 32.4432 253.61 33.1061 252.815 34.4318C252.019 35.7576 251.618 37.7424 251.61 40.3864C251.61 42.1742 251.788 43.6667 252.144 44.8636C252.508 46.053 253.019 46.947 253.678 47.5455C254.337 48.1364 255.11 48.4318 255.996 48.4318Z"
                        fill="#0B1382"
                      />
                      <rect
                        x="298"
                        width="84"
                        height="81"
                        rx="38.4861"
                        fill="#5FA2FD"
                      />
                      <path
                        d="M329.825 28.7273V52H324.904V33.3977H324.768L319.438 36.7386V32.375L325.2 28.7273H329.825ZM336.981 52.2955C336.231 52.2955 335.587 52.0303 335.049 51.5C334.519 50.9621 334.253 50.3182 334.253 49.5682C334.253 48.8258 334.519 48.1894 335.049 47.6591C335.587 47.1288 336.231 46.8636 336.981 46.8636C337.708 46.8636 338.344 47.1288 338.89 47.6591C339.435 48.1894 339.708 48.8258 339.708 49.5682C339.708 50.0682 339.579 50.5265 339.322 50.9432C339.072 51.3523 338.742 51.6818 338.333 51.9318C337.924 52.1742 337.473 52.2955 336.981 52.2955ZM351.95 52.3182C350.343 52.3182 348.912 52.0227 347.654 51.4318C346.404 50.8409 345.412 50.0265 344.677 48.9886C343.942 47.9508 343.559 46.7614 343.529 45.4205H348.302C348.355 46.322 348.734 47.053 349.438 47.6136C350.143 48.1742 350.98 48.4545 351.95 48.4545C352.722 48.4545 353.404 48.2841 353.995 47.9432C354.593 47.5947 355.059 47.1136 355.393 46.5C355.734 45.8788 355.904 45.1667 355.904 44.3636C355.904 43.5455 355.73 42.8258 355.381 42.2045C355.04 41.5833 354.567 41.0985 353.961 40.75C353.355 40.4015 352.662 40.2235 351.881 40.2159C351.2 40.2159 350.537 40.3561 349.893 40.6364C349.256 40.9167 348.76 41.2992 348.404 41.7841L344.029 41L345.131 28.7273H359.359V32.75H349.188L348.586 38.5795H348.722C349.131 38.0038 349.749 37.5265 350.575 37.1477C351.4 36.7689 352.325 36.5795 353.347 36.5795C354.749 36.5795 355.999 36.9091 357.097 37.5682C358.196 38.2273 359.063 39.1326 359.7 40.2841C360.336 41.428 360.65 42.7462 360.643 44.2386C360.65 45.8068 360.287 47.2008 359.552 48.4205C358.825 49.6326 357.806 50.5871 356.495 51.2841C355.192 51.9735 353.677 52.3182 351.95 52.3182Z"
                        fill="#0B1382"
                      />
                      <path
                        d="M86.6667 41C86.6667 43.9455 89.0545 46.3333 92 46.3333C94.9455 46.3333 97.3333 43.9455 97.3333 41C97.3333 38.0545 94.9455 35.6667 92 35.6667C89.0545 35.6667 86.6667 38.0545 86.6667 41ZM0 42H92V40H0V42Z"
                        fill="#0B1382"
                      />
                    </svg>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
            <div className="section-spacing">
              <Row>
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center order-2 order-md-1"
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
                    <div className="product-Display">
                      <Display displayColor="#5FA2FD" phValues="9.0" />
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        left: "80.5%",
                        top: "29%",
                        width: "100%",
                        zIndex: 99, // Display is behind the image
                      }}
                    >
                      <svg
                        width="50%"
                        height="auto"
                        viewBox="0 0 222 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="161.5"
                          cy="60.5"
                          r="59.5"
                          fill="#5FA2FD"
                                                 strokeWidth="2"
                        />
                        <path
                          d="M133.073 40.392H125.585V49H121.521V27.432H134.161V30.728H125.585V37.096H133.073V40.392ZM144.594 49H140.786V32.232L135.666 35.336V31.336L141.202 28.072H144.594V49Z"
                          fill="#0B1382"
                        />
                        <path
                          d="M132.839 82.392H125.351V91H121.287V69.432H133.927V72.728H125.351V79.096H132.839V82.392ZM149.736 91H136.072V87.928C138.568 86.1573 140.722 84.2693 142.536 82.264C144.349 80.2373 145.256 78.4133 145.256 76.792C145.256 75.7253 144.946 74.8933 144.328 74.296C143.709 73.6987 142.813 73.4 141.64 73.4C139.869 73.4 138.173 74.0613 136.552 75.384V71.64C137.256 71.1067 138.13 70.6693 139.176 70.328C140.221 69.9867 141.266 69.816 142.312 69.816C144.36 69.816 146.024 70.3813 147.304 71.512C148.605 72.6213 149.256 74.1893 149.256 76.216C149.256 80.0133 146.632 83.8427 141.384 87.704H149.736V91Z"
                          fill="#0B1382"
                        />
                        <path
                          d="M156.797 37.612L158.281 30.668L159.737 29.464L160.689 30.668L159.485 36.212L156.797 37.612ZM160.213 29.072L161.697 27.84H169.845L167.045 30.248H161.193L160.213 29.072ZM164.245 45.172L165.477 39.432L168.137 38.228L166.653 45.172L165.197 46.376L164.245 45.172ZM154.585 48L157.413 45.592H163.769L164.749 46.768L163.265 48H154.585ZM157.301 37.92L159.849 36.604H165.701L167.689 37.92L165.169 39.04H159.317L157.301 37.92ZM169.063 45.172L170.547 38.228L172.703 39.432L171.471 45.172L170.015 46.376L169.063 45.172ZM170.687 37.612L172.171 30.668L173.627 29.464L174.579 30.668L173.375 36.212L170.687 37.612ZM174.103 29.072L175.587 27.84H181.439L182.419 29.072L180.935 30.248H175.083L174.103 29.072ZM180.039 36.212L181.243 30.668L182.699 29.464L183.651 30.668L182.167 37.612L180.039 36.212ZM178.135 45.172L179.367 39.432L182.027 38.228L180.543 45.172L179.087 46.376L178.135 45.172ZM170.323 46.768L171.807 45.592H177.659L178.639 46.768L177.155 48H171.303L170.323 46.768ZM184.466 35.4L185.474 30.64L186.986 29.464L187.966 30.668L186.958 35.4L185.474 36.604L184.466 35.4ZM187.434 29.1L188.918 27.84H193.762L194.658 29.1L193.23 30.248H188.414L187.434 29.1ZM192.558 35.4L193.566 30.64L194.994 29.436L195.974 30.612L194.966 35.372L193.482 36.604L192.558 35.4ZM185.726 37.024L187.266 35.736H192.054L192.978 37.024L191.55 38.116H186.734L185.726 37.024ZM196.17 36.016L202.862 27.84H205.69L196.982 38.452L196.17 36.016ZM186.37 48L193.734 39.04H196.534L189.198 48H186.37ZM196.114 45.088L197.122 40.356L198.634 39.152L199.614 40.356L198.606 45.116L197.122 46.32L196.114 45.088ZM199.082 38.816L200.538 37.668H205.354L206.334 38.788L204.822 40.104H200.034L199.082 38.816ZM204.206 45.088L205.214 40.356L206.614 39.124L207.622 40.328L206.614 45.088L205.13 46.292L204.206 45.088ZM197.402 46.74L198.858 45.592H203.646L204.654 46.74L203.17 48H198.326L197.402 46.74Z"
                          fill="#0B1382"
                        />
                        <path
                          d="M156.797 79.612L158.281 72.668L159.737 71.464L160.689 72.668L159.485 78.212L156.797 79.612ZM160.213 71.072L161.697 69.84H169.845L167.045 72.248H161.193L160.213 71.072ZM164.245 87.172L165.477 81.432L168.137 80.228L166.653 87.172L165.197 88.376L164.245 87.172ZM154.585 90L157.413 87.592H163.769L164.749 88.768L163.265 90H154.585ZM157.301 79.92L159.849 78.604H165.701L167.689 79.92L165.169 81.04H159.317L157.301 79.92ZM169.063 87.172L170.547 80.228L172.703 81.432L171.471 87.172L170.015 88.376L169.063 87.172ZM170.687 79.612L172.171 72.668L173.627 71.464L174.579 72.668L173.375 78.212L170.687 79.612ZM174.103 71.072L175.587 69.84H181.439L182.419 71.072L180.935 72.248H175.083L174.103 71.072ZM180.039 78.212L181.243 72.668L182.699 71.464L183.651 72.668L182.167 79.612L180.039 78.212ZM178.135 87.172L179.367 81.432L182.027 80.228L180.543 87.172L179.087 88.376L178.135 87.172ZM170.323 88.768L171.807 87.592H177.659L178.639 88.768L177.155 90H171.303L170.323 88.768ZM184.466 77.4L185.474 72.64L186.986 71.464L187.966 72.668L186.958 77.4L185.474 78.604L184.466 77.4ZM187.434 71.1L188.918 69.84H193.762L194.658 71.1L193.23 72.248H188.414L187.434 71.1ZM192.558 77.4L193.566 72.64L194.994 71.436L195.974 72.612L194.966 77.372L193.482 78.604L192.558 77.4ZM185.726 79.024L187.266 77.736H192.054L192.978 79.024L191.55 80.116H186.734L185.726 79.024ZM196.17 78.016L202.862 69.84H205.69L196.982 80.452L196.17 78.016ZM186.37 90L193.734 81.04H196.534L189.198 90H186.37ZM196.114 87.088L197.122 82.356L198.634 81.152L199.614 82.356L198.606 87.116L197.122 88.32L196.114 87.088ZM199.082 80.816L200.538 79.668H205.354L206.334 80.788L204.822 82.104H200.034L199.082 80.816ZM204.206 87.088L205.214 82.356L206.614 81.124L207.622 82.328L206.614 87.088L205.13 88.292L204.206 87.088ZM197.402 88.74L198.858 87.592H203.646L204.654 88.74L203.17 90H198.326L197.402 88.74Z"
                          fill="#0B1382"
                        />
                        <path
                          d="M86.6667 71C86.6667 73.9455 89.0545 76.3333 92 76.3333C94.9455 76.3333 97.3333 73.9455 97.3333 71C97.3333 68.0545 94.9455 65.6667 92 65.6667C89.0545 65.6667 86.6667 68.0545 86.6667 71ZM0 72H92V70H0V72Z"
                          fill="#0B1382"
                        />
                      </svg>
                    </div>
                  </div>
                </Col>

                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center order-1 order-md-2"
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
              </div>

                <div className="section-spacing">
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
                      The Tyent’s H2-Hybrid water ionizer features Eco Mode,
                      enhancing energy efficiency with up to 99% savings. It
                      reduces power consumption by automatically turning off the
                      LCD backlight during idle periods, ensuring optimal
                      performance while conserving electricity.
                    </p>
                  </div>
                </Col>
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
                    
                    <div className="jogdaily-ighting-all"></div>
                    <div
                      style={{
                        width: "50%",
                        height: "auto",
                        position: "absolute",
                        left: "-20%",
                        bottom: "-20%",
                        zIndex: 6,
                      }}
                    >
                      <Image
                        src={hybridDisplay}
                        alt="hybrid image"
                        layout="responsive"
                        priority
                      />
                    </div>

                    <div
                      style={{
                        position: "absolute",
                        left: "-20%",
                        bottom: "-22%",
                        width: "50%",
                        zIndex: 3, // Display is behind the image
                      }}
                    >
                      <Display displayColor="#797A83" phValues="12:33" />
                    </div>

                    {/* Display component is in the background */}
                    <div className="product-Display">
                      <Display displayColor="#797A83" phValues="12:33" />
                    </div>
                  </div>
                </Col>
              </Row>
                </div>            
          
        </Container>
      </div>
          <br/>
      <div className="section-spacing" style={{ backgroundColor: "#FFF" }}>
        <Row>
          <Col
            md={6}>
            <div className="d-flex flex-column justify-content-end align-items-center">
              <div>
              <h2 className="text-center">
                <b>One Touch Display</b>
              </h2>
              <p className="text-center">
                Each function has distinct icons,and you can start or stop the{" "}
                <br /> desired water with one touch.
              </p>
              </div>
              <div style={{width:'100%', height:'auto', position:'relative'}}>
               <Image src={Halfhybrid} alt="hybrid" layout="responsive" priority />

               <div
                    style={{
                      position: "absolute",
                      right: "17%",
                      top: "30.5%",
                      width: "18%",
                      zIndex: 0, // Display is behind the image
                    }}
                  >
                    <Display  />
                  </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end p-3 align-items-center">
          
            <div style={{ width: "80%", height: "auto" }}>
              <DisplayPatter />
            </div>
          </Col>
        </Row>
      </div>

      <div className="section-spacing">
        <Container>
          <OneTouchDispaly />
        </Container>
      </div>

      <div className="section-spacing">
        <Container>
          <Row>
            <Col
              md={8}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h2>
                  <b>The specially developed HYBRID water cell</b>
                </h2>
                <p><b>
                   PCT International patent application [PCT/KR2017/011890] </b></p> <p><b> Technology Patent [10-2017-00903670]</b> </p>
                
                <p>
                  {
                    "Tyent's H2-Hybrid is a revolutionary innovation featuring patented dual electrolysis chambers. The first chamber, controlled by a one-touch display, produces 7 types of hydrogen-rich alkaline water with pH levels ranging from 11.5 to 2.5. The second chamber, equipped with advanced PEM (Proton Exchange Membrane) technology and operated via a jog dial, delivers water rich in selective antioxidant molecular hydrogen at a neutral pH without alkalinity."
                  }
                </p>
                <p>
                  {
                    "The H2-Hybrid is the world’s only black box edition with patented twin-cell technology, offering unlimited access to ideal water for the entire family."
                  }
                </p>
              </div>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ width: "50%", height: "auto" }}>
                <Image
                  src={cellplate}
                  alt="cell plate"
                  layout="responsive"
                  priority
                  style={{
                    filter: "drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.1))", // Shadow effect
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-spacing">
        <Container>
          <div>
            <h2 className="text-center">
              <b>
                Automatic flow switching ensures safe cleaning <br /> function
              </b>
            </h2>
            <p className="text-center">
              This feature helps to provide you a healthier and more effective
              functional water by keeping the water cell clean at all times.{" "}
              <br /> Not only does it provide more effective functional water,
              it also proactively prevents scale in the water cell and extends
              its <br />
              lifespan.
            </p>
            <div style={{ width: "100%", height: "auto" }}>
              <Image
                src={waterflow}
                alt="water flow"
                layout="responsive"
                responsive
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="section-spacing">
        <Container>
          <HybridTouchPreview />
        </Container>
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
          Tyent H2-Hybrid Specification's
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
