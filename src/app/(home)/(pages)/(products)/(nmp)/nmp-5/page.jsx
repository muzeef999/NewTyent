import React from "react";
import "@/app/style/Nmp.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import Touchpreview from "@/app/(home)/compoents/(products)/Touchpreview";
import Features from "@/app/(home)/compoents/(products)/Features";
import Filter from "@/app/(home)/compoents/(products)/Filter";
import plates from "@/asserts/nmp/nmp5&7/qtyo.webp";
import rtr from "@/asserts/nmp/nmp5&7/rtr.webp";
import turbo from "@/asserts/nmp/nmp5&7/turbo.webp";
import ECOMode from "@/asserts/nmp/nmp5&7/ECO-Mode.webp";
import display from "@/asserts/nmp/nmp5&7/display.webp";
import Plates from "@/asserts/nmp/nmp5&7/Plates.webp";
import SMPS from "@/asserts/nmp/nmp5&7/SMPS.webp";
import filterIndication from "@/asserts/nmp/nmp5&7/filterIndication.webp";
import AnimatedSVG from "@/app/(home)/compoents/(products)/AnimatedSVG";
import Certifications from "@/app/(home)/compoents/Certifications";
import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import leftIamge from "@/asserts/nmp/leftboost1.webp";
import BoosttheBody from "../BoosttheBody";
import productnmp1 from "@/asserts/nmp/PRODUCTNMP1.webp";
import productnmp2 from "@/asserts/nmp/PRODUCTNMP2.webp";
import productnmp3 from "@/asserts/nmp/PRODUCTNMP3.webp";
import productnmp4 from "@/asserts/nmp/PRODUCTNMP4.webp";
import OneTouchDispaly from "@/app/(home)/compoents/(products)/OneTouchDispaly";
import NmpDispalayfinal from "../NmpDispalayfinal";
import NMP5_BANNER_DESKTOP from "@/asserts/nmp/NMP5_BANNER_DESKTOP.webp";
import NMP5_BANNER_MOBILE from "@/asserts/nmp/NMP5_BANNER_MOBILE.webp";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { RxDownload } from "react-icons/rx";
import Humanbody1 from "@/asserts/Humanbody1.png"

const TyentNMP5 = () => {
  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const Boost = {
    image: leftIamge,
    title: "The Daily Boost Your Body Deserves",
    description:
      "Daily consumption of TYENT ionised alkaline water boosts  resistance, slows the ageing process, improves nutrient absorption, effectively removes toxins and free radicals, and aids in the prevention and treatment of dangerous chronic diseases such as cancer, diabetes, Hashimoto’s, gout, hypertension, stomach pain, colitis, digestive disorders, and many more…",
  };

  const products = [
    {
      src: [productnmp1, productnmp2, productnmp3, productnmp4],
    },
  ];

  const specifications = [
    { label: "Model", name: "Tyent NMP-5" },
    { label: "Price", name: "168000" },
    { label: "Electrode/Plates", name: "5" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -850*" },
    { label: "Hydrogen Range", name: "Up to 1550 PPB*" },
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
    { label: "Purity of Plates", name: "99.9 (Permelac, Japan)" },
    { label: "Plates Manufacturing", name: "Permelac, Japan" },
    { label: "Additional Use of Chemicals/Salt", name: "No" },
    {
      label: "Manufacturing Company",
      name: "Taeyoung E&T Co., Ltd, 908 Ungsang-daero, Yangsan-si, Gyeongsangnam-do, Korea - 50537",
    },
  ];

  const features = [
    {
      title: "5 Japanese Plates",
      description:
        "The Tyent NMP-5 is equipped with five platinum-coated, 99.9% pure titanium solid hybrid mesh electrodes/plates, engineered with advanced Japanese technology. It ensures stable oxygen levels, an ORP of up to -850*, and superior micro-clustering. Backed by a 15-year warranty, it boasts a lifespan of over 45+ years.",
      icon: Plates, // Replace with the actual path to your icon
    },
    {
      title: "Advanced Power Supply",
      description:
        "Tyent's patented SMPS Plus power system, with 55+ adjustable settings, ensures consistent performance. Exclusively designed only for Tyent ionizers, it allows Tyent to produce strong alkaline (11.5-2.5 pH) and acidic water without chemicals, enhancing both efficiency and lifespan.",
      icon: SMPS, // Replace with the actual path to your icon
    },
    {
      title: "Produces 7 Water Levels",
      description:
        "The Tyent NMP-5 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
      icon: display, // Replace with the actual path to your icon
    },
    {
      title: "PAST Cleaning Technology",
      description:
        "Tyent Water Ionizers use advanced Polarity Anti Scale Technology (PAST) for automated cleaning. Timer and sensor activation reduce mineral buildup on electrodes, enhancing durability and consistently delivering ionized water with more molecular hydrogen.",
      icon: rtr, // Replace with the actual path to your icon
    },
    {
      title: "Fixed Quantity Output",
      description:
        "Tyent water ionizers are engineered for modern convenience, featuring the fixed quantity output function. It delivers accurate quantity of 0.5L, 1.0L, or 1.5L, making hydration and cooking effortless and accurate for daily use.",
      icon: plates,
    },
    {
      title: "ECO Mode",
      description:
        "The Tyent water ionizer’s features Eco Mode, enhancing energy efficiency with up to 99.9% savings. It reduces power consumption by automatically turning off the LCD backlight during idle periods.",
      icon: ECOMode, // Replace with the actual path to your icon
    },
    {
      title: "Real-Time Filter Indication",
      description:
        "The Tyent water ionizer’s features a user-friendly LCD display that tracks real-time filter usage, alerting you when replacements are needed. This convenient monitoring system helps maintain optimal performance and ensures clean, healthy water at all times.",
      icon: filterIndication, // Replace with the actual path to your icon
    },
    {
      title: "TURBO Mode",
      description:
        "Tyent is the only water ionizer in the industry that produces strong alkaline water at 11.5 pH without the use of chemicals, salts, or enhancers, thanks to its patented SMPS PLUS technology. This powerful water is ideal for cleaning fruits and vegetables, removing pesticides, insecticides, wax, and color coatings.",
      icon: turbo, // Replace with the actual path to your icon
    },
  ];

  const onetouch = {
    title: "Easy To Use One Touch Display",
    subTitle:
      "Tyent offer a user-friendly one-touch display with clear icons, enabling effortless selection of your desired water type for  convenient, customizable hydration.",
    link: "/7-types-of-Tyent-water",
  };

  return (
    <div style={{overflow:'hidden'}}>
      
      <button className={`fixed-vertical-button`}>
           
           Download Brochure&nbsp;{"   "}
           <RxDownload size={20} style={{ transform: 'rotate(180deg)' }}/>
         </button>
      <div style={{ width: "100%", height: "auto", position: "relative" }}>

        {/* Mobile and Tablet View */}
        <div className="d-block d-md-none">
          <Image
            src={NMP5_BANNER_MOBILE}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
          />

          <div className={"nmp-5-desktop-one-touch-main-banner"}>
            {/* Right-Aligned Content */}
            <div className={"nmp-banner-content"}>
              {/* Resilience Message */}
              <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
                Build Resilience with <span>Every Drop</span>
              </h2>

              {/* Tyent Water Title */}

              <div
                data-aos="fade-left"
                className="d-flex justify-content-start align-items-center"
              >
                {/* Decorative Line */}
                <div className="d-flex justify-content-center align-items-center">
                  <svg width="8" height="40">
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="40"
                      stroke="#008ac7"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                {/* Benefits */}
                <div className="mt-3">
                  <p className={"nmp-banner-benefits"}>
                    <span>For Stronger Immunity</span>
                    <br />
                    and <span>Natural Protection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NmpDispalayfinal for Mobile and Tablet */}
          <div className="nmp5Display">
            <NmpDispalayfinal />
          </div>
        </div>

        {/* Desktop and Larger Devices */}
        <div className="d-none d-md-block">
          <Image
            src={NMP5_BANNER_DESKTOP}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
          />

          <div className={"nmp-5-desktop-one-touch-main-banner"}>
            {/* Right-Aligned Content */}
            <div className={"nmp-banner-content"}>
              {/* Resilience Message */}
              <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
                Build Resilience with <span>Every Drop</span>
              </h2>

              {/* Tyent Water Title */}

              <div
                data-aos="fade-left"
                className="d-flex justify-content-start align-items-center"
              >
                {/* Decorative Line */}
                <div className="d-flex justify-content-center align-items-center">
                  <svg width="8" height="70">
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="70"
                      stroke="#008ac7"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                {/* Benefits */}
                <div className="mt-3">
                  <p className={"nmp-banner-benefits"}>
                    <span>For Stronger Immunity</span>
                    <br />
                    and <span>Natural Protection</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NmpDispalayfinal for Desktop */}
          <div className="nmp5Display">
            <NmpDispalayfinal />
          </div>
        </div>
      </div>

      <div className="section-spacing">
        <ProductSection products={products} specifications={specifications} />
      </div>

      <Container>
        <div className="section-spacing">
          <Row>
            <Col>
              <p
                className="text-start"
                style={{ color: "#008AC7", fontWeight: 400, fontSize: "13px"}}
              >
                The Tyent NMP-5 is expertly crafted with advanced technology,
                modern design, and an user friendly interface, making it the
                ideal beginner model, featuring five advanced Japanese solid
                hybrid mesh plates/electrodes from Permelac, Japan (Since 1969)
                made of titanium coated with platinum, ensuring 99.9 purity.
                With an increased surface area, it delivers stable oxygen levels
                and improved micro-clustering. It offers seven different water
                ionization levels, It generates selective antioxidant molecular
                hydrogen up to 1550* PPB and an ORP of up to -850* and comes
                with a 3 year warranty on the machine, a 15 year warranty on the
                electrodes/plates, and a lifespan of over 45+ years. Perfect for
                small households, it effortlessly provides clean,
                healthy ionized water.
              </p>
            </Col>
          </Row>
        </div>

        <div className="section-spacing">
          <h2 style={{ color: "#5ac4f2" }}>
            <b>
              <span style={{ color: "#008AC7" }}>Loud and clear.</span> Tyent’s
              unparalleled specifications - no other ionizer comes close!
            </b>
          </h2>

          <Row className="row g-4">
            {features.map((data, index) => (
              <Col xs={12} sm={12} md={6} lg={4} key={data.id}>
                <Features data={data} delay={index * 100} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="section-spacing">
          <BoosttheBody Boost={Boost} />
        </div>
      </Container>

      <div className="section-spacing">
        <div className="d-block d-md-none" style={{ position: "relative" }}>
          <Image
            src={NMP5_BANNER_MOBILE}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
          />

          <div className={"nmp-5-desktop-one-touch-main-banner"}>
            {/* Right-Aligned Content */}
            <div className={"nmp-banner-content"}>
              {/* Resilience Message */}
              <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
                {onetouch.title}
              </h2>

              {/* Tyent Water Title */}

              <div
                data-aos="fade-left"
                className="d-flex justify-content-start align-items-center"
              >
                {/* Decorative Line */}
                <div className="d-flex justify-content-center align-items-center">
                  <svg width="8" height="70">
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="70"
                      stroke="#008ac7"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                {/* Benefits */}
                <div className="mt-3">
                  <p className={"nmp-banner-benefits-touch"}>
                    Tyent’s one-touch display with clear icons ensures effortless selection of your desired water type for convenient hydration.
                    <br />
                  </p>
                </div>
              </div>
              <br />
              <Link
                className="appbardemo"
                style={{ textDecoration: "none" }}
                href={"/7-types-of-Tyent-water"}
              >
                Click Here &nbsp;
                <GoArrowRight />
              </Link>
            </div>
          </div>
          <br />

          {/* NmpDispalayfinal for Mobile and Tablet */}
          <div className="nmp5Display">
            <NmpDispalayfinal />
          </div>
        </div>

        {/* Desktop and Larger Devices */}
        <div className="d-none d-md-block" style={{ position: "relative" }}>
          <Image
            src={NMP5_BANNER_DESKTOP}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
          />

          <div className={"nmp-5-desktop-one-touch-main-banner"}>
            {/* Right-Aligned Content */}
            <div className={"nmp-banner-content"}>
              {/* Resilience Message */}
              <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
                {onetouch.title}
              </h2>

              {/* Tyent Water Title */}

              <div
                data-aos="fade-left"
                className="d-flex justify-content-start align-items-center"
              >
                {/* Decorative Line */}
                <div className="d-flex justify-content-center align-items-center">
                  <svg width="8" height="80">
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="80"
                      stroke="#008ac7"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                {/* Benefits */}
                <div className="mt-3">
                  <p className={"nmp-banner-benefits-touch"}>
                    {onetouch.subTitle}
                    <br />
                  </p>
                </div>
              </div>
              <br />
              <Link
                className="appbardemo"
                style={{ textDecoration: "none" }}
                href={"/7-types-of-Tyent-water"}
              >
                Click Here &nbsp;
                <GoArrowRight />
              </Link>
            </div>
          </div>
          <br />
          {/* NmpDispalayfinal for Desktop */}
          <div className="nmp5Display">
            <NmpDispalayfinal />
          </div>
        </div>
      </div>

      <Container>
        <div className="section-spacing">
          <OneTouchDispaly />
        </div>
        <div className="section-spacing">
          <Touchpreview />
        </div>
      </Container>

      <div className="section-spacing">
        <AnimatedSVG />
      </div>

      <Container>
        <div className="section-spacing">
          <h2
            className="text-center mb-4"
            style={{
              color: "#008AC7",
              fontWeight: "600",
              fontSize: "2rem", // Default for large screens
            }}
          >
            Tyent NMP-5 Specification's
          </h2>

          <Table className="custom-table" hover responsive>
            <tbody>
              {specifications.map((item, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#008AC7",
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
        </div>

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

export default TyentNMP5;
