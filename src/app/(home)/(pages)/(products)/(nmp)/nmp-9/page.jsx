import React from "react";
import "@/app/style/Nmp.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Touchpreview from "@/app/(home)/compoents/(products)/Touchpreview";
import Features from "@/app/(home)/compoents/(products)/Features";
import Filter from "@/app/(home)/compoents/(products)/Filter";
import OneTouchDispaly from "@/app/(home)/compoents/(products)/OneTouchDispaly";
import plates from "@/asserts/nmp/qtyo.webp";
import rtr from "@/asserts/nmp/rtr.webp";
import turbo from "@/asserts/nmp/turbo.webp";
import ECOMode from "@/asserts/nmp/ECO-Mode.webp";
import display from "@/asserts/nmp/display.webp";
import Plates from "@/asserts/nmp/Plates.webp"; 
import jogDail from "@/asserts/nmp/jogDail.png";
import SMPS from "@/asserts/nmp/SMPS.webp";
import filterIndication from "@/asserts/nmp/filterIndication.webp";
import AnimatedSVG from "@/app/(home)/compoents/(products)/AnimatedSVG";
import Certifications from "@/app/(home)/compoents/Certifications";
import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import leftIamge from "@/asserts/nmp/leftboost1.webp";
import BoosttheBody from "../BoosttheBody";
import PRODUCTNMP91 from "@/asserts/nmp/nmp5&7/PRODUCTNMP9-1.webp";
import PRODUCTNMP92 from "@/asserts/nmp/nmp5&7/PRODUCTNMP9-2.webp";
import PRODUCTNMP93 from "@/asserts/nmp/nmp5&7/PRODUCTNMP9-3.webp";
import PRODUCTNMP94 from "@/asserts/nmp/nmp5&7/PRODUCTNMP9-4.webp";
import Image from "next/image";
import NMP7_BANNER_DESKTOP from "@/asserts/nmp/nmp5&7/NMP7_BANNER_DESKTOP.webp";
import NMP7_BANNER_MOBILE from "@/asserts/nmp/nmp5&7/NMP7_BANNER_MOBILE.webp";
import Display from "@/app/(home)/compoents/(products)/Display";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { RxDownload } from "react-icons/rx";
import dynamic from "next/dynamic";
const Banner = dynamic(
  () => import("./TopBannerNmp9"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent NMP-9 Ionizer | 9 Plates, 7 Waters, 1800 PPB H₂",
  description: "Tyent NMP-9 with 9 titanium plates delivers 7 water levels, up to -1050 ORP & 1800 PPB H₂. Pure, chemical-free ionized water for drinking, cleaning & beauty.",
 keywords:"Tyent NMP-9, alkaline water ionizer, hydrogen water, 9 plate ionizer, ORP water machine, Kangen alternative, ionized water purifier, 11.5 pH water, SMPS PLUS, Japanese water tech"
}; 

const TyentNMP5 = () => {
  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const products = [
    {
      src: [PRODUCTNMP91, PRODUCTNMP92,PRODUCTNMP94, PRODUCTNMP93, ],
    },
  ];

  const Boost = {
    image: leftIamge,
    title: "The Daily Boost Your Body Deserves",
    description:
      "Daily consumption of TYENT ionised alkaline water boosts  resistance, slows the ageing process, improves nutrient absorption, effectively removes toxins and free radicals, and aids in the prevention and treatment of dangerous chronic diseases such as cancer, diabetes, Hashimoto’s, gout, hypertension, stomach pain, colitis, digestive disorders, and many more…",
  };

  const specifications = [
    { label: "Model", name: "Tyent NMP-9" },
    { label: "Price", name: 238000 },
    { label: "Electrode/Plates", name: "9" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -1050*" },
    { label: "Hydrogen Range", name: "Up to 1800 PPB*" },
    { label: "Generates", name: "7 types of water levels" },
    {
      label: "Warranty",
      name: "3 Years on ionizer & 15 years on electrodes/plates",
    },
    {
      label: "pH Levels",
      name: "3 alkaline, 2 acidic, 1 neutral, & 1 Turbo (Strong alkaline 11.5 pH)",
    },
    { label: "Plate Surface Area", name: "52.9 * 9 = 476.1 sq inches" },
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

  const features = [
    {
      title: "9 Japanese Plates",
      description:
        "The Tyent NMP-9 is equipped with five platinum-coated, 99.9% pure titanium solid hybrid mesh electrodes/plates, engineered with advanced Japanese technology. It ensures stable oxygen levels, an ORP of up to -1050*, and superior micro-clustering. Backed by a 15-year warranty, it boasts a lifespan of over 45+ years.",
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
        "The Tyent NMP-9 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
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
    {
      title: "Jog Dail",
      description:
        "The jog dial is designed for effortless operation, allowing you to select the desired pH level with a simple rotation and click. A soft LED light changes color based on the outflow stage, combining safety with visual appeal.",
      icon: jogDail, // Replace with the actual path to your icon
    },
  ];

  const onetouch = {
    title: "Easy To Use One Touch Display",
    subTitle:
      "Tyent water ionizers offer a user-friendly one-touch display with clear icons, making it easy to select and activate your desired water type effortlessly for convenient, customizable hydration.",
    link: "/7-types-of-Tyent-water",
  };


  return (
    <div style={{width:'100% !important', overflow:'hidden !important'}}>

      <button className={`fixed-vertical-button`}>
              <a
                href={"/assets/Tyent_New_catalog.pdf"}
                style={{ textDecoration: "none", color: "#FFF" }}
                download
                className="download-link"
              >
                Download Brochure&nbsp;{" "}
                <RxDownload size={20} style={{ transform: "rotate(180deg)" }} />
              </a>
            </button>
            <Banner/>
            
      <Container>
        <div className="section-spacing">
          <ProductSection products={products} specifications={specifications} />
        </div>
        <div className="section-spacing">
          <Row className="mb-5">
            <Col>
              <p
                className="text-start"
                style={{ color: "#008AC7", fontWeight: 400, fontSize: "18px" }}
              >
                The Tyent NMP-9 is engineered with cutting-edge technology,
                modern design, and a user-friendly interface, making it the
                Best-Selling Flagship water ionizer. It features 9 advanced
                Japanese solid hybrid mesh plates/electrodes from Permelac,
                Japan (Since 1969), crafted from titanium and coated with
                platinum to ensure 99.9% purity. With an expanded surface area,
                it maintains stable oxygen levels and enhances micro-clustering.
                Offering seven different water levels, it generates selective
                antioxidant molecular hydrogen up to 1800* PPB and an ORP of up
                to -1050*. It includes a 3-year warranty on the machine, a
                15-year warranty on the electrodes/plates, and a lifespan
                exceeding 45+ years. Ideal for moderate households, it provides
                clean, healthy ionized water effortlessly.
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
          <Row className="row g-3">
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

      <div className="section-spacing" style={{overflowX:'hidden'}}>
        <div style={{ width: "100%", height: "auto", position: "relative" }}>
          {/* Mobile and Tablet View */}
          <div className="d-block d-lg-none">
            <Image
              src={NMP7_BANNER_MOBILE}
              alt="nmp-5 banner"
              layout="responsive"
              priority
              style={{
                position: "relative",
                zIndex: 10, // Ensure the image is on top
              }} 
            />

            {/* NmpDispalayfinal for Mobile and Tablet */}
            <div
              className="nmp-9-mobile-display"                
            >
              <Display />
            </div>
          </div>

          {/* Desktop and Larger Devices */}
          <div className="d-none d-md-block">
            <Image
              src={NMP7_BANNER_DESKTOP}
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
          

            {/* NmpDispalayfinal for Desktop */}
            <div className="nmp9Display" 
            >
              <Display />
            </div>
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
            Tyent NMP-9 Specification's
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
