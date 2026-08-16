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
import productnmp1 from "@/asserts/nmp/nmp57-product.webp";
import productnmp2 from "@/asserts/nmp/nmp57-dimensions.webp";
import productnmp3 from "@/asserts/nmp/nmp57-certifications.webp";
import productnmp4 from "@/asserts/nmp/nmp57-filters.webp";
import OneTouchDispaly from "@/app/(home)/compoents/(products)/OneTouchDispaly";
import NmpDispalayfinal from "../NmpDispalayfinal";
import NMP5_BANNER_DESKTOP from "@/asserts/nmp/NMP5_BANNER_DESKTOP.webp";
import NMP5_BANNER_MOBILE from "@/asserts/nmp/NMP5_BANNER_MOBILE.webp";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { RxDownload } from "react-icons/rx";
import dynamic from "next/dynamic";
import Head from "next/head";

const TopBannersNMP = dynamic(
  () => import("./TopBannersNMP"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent NMP-5 Water Ionizer – 5 Plate Alkaline Machine India",
  description: "Buy Tyent NMP-5 water ionizer India. 5 Japanese plates, hydrogen-rich alkaline water, easy countertop setup at an affordable price.",
}; 



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
    { label: "sub-head", name: "Counter Top Hydrogen Rich Alkaline water Ionizer" },
    { label: "Price", name: 168000 },
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



  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Tyent NMP-5",
    "image": "https://www.tyent.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPRODUCTNMP1.ac2c6204.webp&w=3840&q=75",
    "description": "Buy Tyent NMP-5 water ionizer India. 5 Japanese plates, hydrogen-rich alkaline water, easy countertop setup at an affordable price.",
    "brand": {
      "@type": "Brand",
      "name": "tyent"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

     {/* AMP Analytics Script */}
      <Head>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
      </Head>

      
      {/* AMP Google Ads + GA + Conversion */}
      <amp-analytics type="gtag" data-credentials="include">
        <script type="application/json">
          {`
          {
            "vars": {
              "gtag_id": "G-T94BNYD8RB",
              "config": {
                "G-T94BNYD8RB": { "groups": "default" },
                "AW-802308772": { "groups": "default" }
              }
            },
            "triggers": {
              "downloadConversion": {
                "on": "click",
                "selector": "#downloadBtn",
                "vars": {
                  "event_name": "conversion",
                  "send_to": ["AW-802308772/gmjyCLODuIMYEKSFyf4C"]
                }
              }
            }
          }
          `}
        </script>
      </amp-analytics>
   
    <div style={{ width: "100% !important", overflow: "hidden !important" }}>


      <button className={`fixed-vertical-button`}>
        <a target="_blank"
          href={'https://tyent.co.in/pdf/Tyent_New_catalog.pdf'}
          style={{ textDecoration: "none", color: "#FFF" }}
          download
          className="download-link"
        >
          Download Brochure&nbsp;{" "}
          <RxDownload size={20} style={{ transform: "rotate(180deg)" }} />
        </a>
      </button>
      <TopBannersNMP />

      <div className="section-spacing">
        <ProductSection products={products} specifications={specifications} />
      </div>

      <Container>
        <div className="section-spacing" >
          <Row>
            <Col>
              <p
                className="text-start"
                style={{
                  color: "#291495",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1vw, 16px)",
                }}
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
              <span style={{ color: "#291495" }}>Loud and clear.</span> Tyent’s
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

        <div className="section-spacing" >
          <BoosttheBody Boost={Boost} />
        </div>
      </Container>

      <div className="section-spacing" style={{overflowX:'hidden'}}>
        <div className="d-block d-md-none" style={{ position: "relative", overflowX:'hidden' }}>
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

          <div className={"nmp-5-desktop-one-touch-main-banner mt-2"}>
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
                      stroke="#291495"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
                {/* Benefits */}
                <div className="mt-3">
                  <p className={"nmp-banner-benefits-touch"}>
                    Tyent’s one-touch display with clear icons ensures
                    effortless selection of your desired water type for
                    convenient hydration.
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
                      stroke="#291495"
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
              color: "#291495",
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
                      color: "#291495",
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
        {/* SEO Content Section */}
        <div className="mt-5 pt-4">
          <h2 className="fw-bold mb-4" style={{ color: "#291495", fontSize: "clamp(22px, 4vw, 36px)" }}>
            Tyent NMP-5 Entry-Level Alkaline Water Ionizer India
          </h2>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Get medical-grade hydrogen-rich water for your everyday hydration. It is a high-tech system that combines state-of-the-art filtration in a small package. It offers exceptional health benefits and sits comfortably on your countertop.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Introducing the Tyent NMP-5 – Affordable Alkaline Water for Every Home</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Finding a reliable yet affordable water ionizer India can be a major challenge for health-conscious shoppers. The tyent NMP-5 water ionizer India provides top-quality wellness at an affordable price.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            It brings the latest in engineering and user-friendly features to deliver therapeutic living water to your home. This tyent NMP-5 alkaline water machine effectively eliminates the harmful heavy metals, microplastics, and dangerous contaminants.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Who Should Buy the NMP-5? – Ideal Users & Households</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This small countertop water ionizer is perfect for small or medium-sized modern Indian kitchens! It is a great fit for nuclear families with 2-3 members. This budget water ionizer India countertop setup provides you with an unlimited supply of clean water, which is rich in antioxidants, instead of making you spend on costly plastic bottled water.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>5-Plate Japanese Technology – Powerful Performance at Entry-Level Price</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The high-performance 5-plate water ionizer India is the heart of this machine. Tyent has added five platinum-coated, 99.9% pure titanium solid hybrid mesh plates from Permelec, Japan. According to any thorough tyent NMP5 alkaline water review, this setup gives exceptional electrical conductivity and exemplary durability over its 45-year lifespan.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Key Features of the Tyent NMP-5 Water Ionizer</h3>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Patented SMPS Plus Power Supply:</strong> 55+ power settings to guarantee a stable operation without overheating.</li>
            <li><strong>Polarity Anti Scale Technology (PAST):</strong> An automated sensor-controlled cleaning cycle ensures minimal mineral deposits on the plates.</li>
            <li><strong>Dual .01-Micron Filtration:</strong> Certified filters capture the nano-viruses, bacteria, and chlorine, and safely keep natural healthy minerals.</li>
            <li><strong>Fixed Quantity Output:</strong> Set your device to dispense precisely 0.5L, 1.0 L, or 1.5L of water without any problems.</li>
            <li><strong>Eco Mode Configuration:</strong> Dim the bright LCD backlight automatically to save up to 99.9% idle energy.</li>
          </ul>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>pH Range & ORP Levels – What the NMP-5 Delivers</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The tyent NMP-5 alkaline water machine generates a wide pH range from 2.5 up to 11.5. It produces a remarkable Oxidation Reduction Potential (ORP) of up to -850mV. This results in the production of very potent anti-oxidative water with a dissolved molecular hydrogen content of up to 1550 PPB. Its unique Turbo mode yields strong acidic and alkaline water naturally, while completely avoiding external chemicals or salts.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>NMP-5 vs Other Entry-Level Ionizers in India</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            When you compare the tyent NMP-5 vs kangen, you will see there is a huge difference in sales model and technology. Enagic Kangen relies heavily on multi-level marketing (MLM) schemes, which charge inflated retail prices because of huge commissions paid to the middlemen.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            In contrast, the Tyent water ionizer relies on the traditional transparent marketing framework, prioritising consumer value above all else. Furthermore, when comparing Tyent NMP-5 vs kangen, Tyent's Turbo mode completely avoids any and all chemical additives, while its counterpart necessitates the use of artificial chemical enhancers to attain extreme pH levels.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Easy Countertop Installation – Ready in Minutes</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This 5-plate water ionizer India model is easy to install, simple to use, and fast to set up. The tankless model is easily placed next to your kitchen sink and is directly linked to your water tap line. The LCD screen is very easy to use and has audio voice prompts to confirm your water selection.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Pan India Delivery & Warranty Support</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Tyent promises absolute peace of mind with doorstep customer service networks spread across 650+ cities in India. Your investment comes fully secured by a 3-year warranty on the main ionizer body. In addition, you get an industry-leading 15-year warranty for the high-purity Japanese electrodes.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>How to Order the Tyent NMP-5 Online</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This is a totally safe and extremely convenient way to secure your unit online. Just visit the official Tyent India website, check out the detailed NMP-5 ionizer specifications India page, and add the system to your virtual shopping cart. Flexible payment options are available, and customer care also provides immediate assistance.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose Tyent NMP-5 – Order Yours Today</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            With this 5-plate water ionizer India model, you are opting for a healthier and vibrant lifestyle. It allows your family to get the proper micro-clustered hydration to fight oxidative stress every day. Protect your household's long-term wellness by ordering your authentic Tyent system today.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>FAQs</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>How many plates does the Tyent NMP-5 have?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              It comes with 5 advanced platinum-coated titanium solid hybrid mesh plates from Japan. This structure ensures the most effective electrolysis process and a consistent hydrogen output with the greatest surface area.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What pH range does the NMP-5 produce?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The official MP-5 ionizer specifications in India charts show that it creates a broad pH range, from 2.5 to 11.5. It produces 7 different types of water for drinking, sanitation, and cooking.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Is NMP-5 suitable for a 2–3-member family?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Yes, it's the ideal starting model for nuclear families. A positive tyent NMP5 alkaline water review highlights the effortless way in which the tankless system can be used in your home every day.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What is the price of Tyent NMP-5 in India?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The official NMP-5 countertop water ionizer price has an M.R.P. of ₹1,68,000. This transparent pricing comes with no hidden network marketing commissions, making it a very competitive option.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>How does NMP-5 compare to NMP-7?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "0" }}>
              A technical comparison of Tyent NMP-5 vs kangen or other upgrades like the tyent NMP-7 water ionizer India highlights key differences. Compared to the NMP-5, the NMP-7 has 7 plates and a more potent ORP of -950mV, which is more suitable for a large family, while the NMP-5 is an affordable water ionizer India with 5 plates. To explore broader options, you can also check our high-capacity tyent NMP-9 water ionizer India and tyent NMP-11 water ionizer India units.
            </p>
          </div>
        </div>

      </Container>
    </div>
     </>
  );
};

export default TyentNMP5;
