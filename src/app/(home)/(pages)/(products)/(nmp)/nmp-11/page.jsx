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
import PRODUCTNMP91 from "@/asserts/nmp/nmp911-product.webp";
import PRODUCTNMP92 from "@/asserts/nmp/nmp911-dimensions.webp";
import PRODUCTNMP93 from "@/asserts/nmp/nmp911-certifications.webp";
import PRODUCTNMP94 from "@/asserts/nmp/nmp911-filters.webp";
import Image from "next/image";
import NMP7_BANNER_DESKTOP from "@/asserts/nmp/nmp5&7/NMP7_BANNER_DESKTOP.webp";
import NMP7_BANNER_MOBILE from "@/asserts/nmp/nmp5&7/NMP7_BANNER_MOBILE.webp";
import Display from "@/app/(home)/compoents/(products)/Display";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import "@/app/style/ResponsiveBanner.css";
import { RxDownload } from "react-icons/rx";
import dynamic from "next/dynamic";
import Head from "next/head";


const Banner = dynamic(
  () => import("./TopBannerNmp11"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent NMP-11 Water Ionizer – 11 Plate Premium Ionizer India",
  description: "Buy Tyent NMP-11 water ionizer India. 11 Japanese plates, maximum pH range, premium hydrogen-rich water. Top countertop ionizer.",
}; 

const TyentNMP5 = () => {
  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const products = [
    {
      src: [PRODUCTNMP91, PRODUCTNMP92, PRODUCTNMP93, PRODUCTNMP94],
    },
  ];

  const Boost = {
    image: leftIamge,
    title: "The Daily Boost Your Body Deserves",
    description:
      "Daily consumption of TYENT ionised alkaline water boosts  resistance, slows the ageing process, improves nutrient absorption, effectively removes toxins and free radicals, and aids in the prevention and treatment of dangerous chronic diseases such as cancer, diabetes, Hashimoto’s, gout, hypertension, stomach pain, colitis, digestive disorders, and many more…",
  };

  const specifications = [
    { label: "Model", name: "Tyent NMP-11" },
    { label: "Price", name: 272000 },
    { label: "Electrode/Plates", name: "11" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -1150*" },
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
    { label: "Plate Surface Area", name: "52.9 * 11 = 581.9 sq inches" },
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
      title: "11 Japanese Plates",
      description:
        "The Tyent NMP-11 is equipped with five platinum-coated, 99.9% pure titanium solid hybrid mesh electrodes/plates, engineered with advanced Japanese technology. It ensures stable oxygen levels, an ORP of up to -1150*, and superior micro-clustering. Backed by a 15-year warranty, it boasts a lifespan of over 45+ years.",
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
        "The Tyent NMP-11 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
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
    <>
    

    
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
                className="text-center"
                style={{ color: "#291495", fontWeight: 400, fontSize: "18px" }}
              >
                The Tyent NMP-11 is engineered with cutting-edge technology,
                modern design, and a user-friendly interface, making it the
                ultimate water ionizer. It features 11 advanced Japanese solid
                hybrid mesh plates/electrodes from Permelac, Japan (Since 1969),
                crafted from titanium and coated with platinum to ensure 99.9%
                purity. With an expanded surface area, it maintains stable
                oxygen levels and enhances micro-clustering. Offering seven
                different water levels, it generates selective antioxidant
                molecular hydrogen up to 1800* PPB and an ORP of up to -1150*.
                It includes a 3-year warranty on the machine, a 15-year warranty
                on the electrodes/plates, and a lifespan exceeding 45+ years.
                Ideal for modern households, it provides clean, healthy ionized
                water effortlessly.
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
          <div className="d-none d-lg-block">
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

            {/* NmpDispalayfinal for Desktop */}
            <div
             className="nmp9Display"
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
              color: "#291495",
              fontWeight: "600",
              fontSize: "2rem", // Default for large screens
            }}
          >
            Tyent NMP-7 Specification's
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
            Tyent NMP-11 (11-Plate Premium Alkaline Water Ionizer India)
          </h2>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Embrace highly advanced hydration as experienced by our Tyent NMP-11 water ionizer India, designed to harness ultimate performance and control in everyday use. Combining the latest Japanese technology, artistry, and control, this countertop system gives homes their water of choice in both alkaline and acidic forms, and purified forms.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Introducing the Tyent NMP-11 – The Ultimate Countertop Ionizer</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Specially developed for discerning owners, our Tyent NMP-11 is as innovative as it is easy to use. It is the best premium countertop ionizer in India, which provides consistent water ionization without losing its looks and style. Its sturdy build, smart control, and cutting-edge filtration process make it an ideal countertop water ionizer for families seeking to enhance the water consumption experience they have today.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>11-Plate Japanese Technology – Highest Performance in NMP Series</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Our NMP-11 is constructed using cutting-edge Japanese electrode technology with the highest level of efficiency and performance. It is an 11-plate water ionizer India that provides stable water production even in different source water conditions, with enhanced electrolysis.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Renowned for its robust design, it ensures long-term reliability, making it the best 11-plate water ionizer in India for those who value superior water quality, consistent performance, and cutting-edge hydration technology with convenience and durability.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>pH Range, ORP & Hydrogen – NMP-11 Premium Specs</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Combined with its versatility in use, our NMP-11 provides an impressive pH range, high oxidation-reduction potential (ORP), and increased hydrogen generation. This high-performance countertop ionizer India is designed for steady output with stable water parameters.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            It embodies dependable performance, supported by advanced ionization technology and intelligent operation, and is suitable for all kinds of uses such as water consumption, food production and household use.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Key Features of the Tyent NMP-11 Water Ionizer</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "8px" }}>
            Our Tyent 11 plate alkaline water machine in India has incorporated high-quality components to ensure easy and user-friendly operation, combined with durability.
          </p>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li>High-efficiency fuel cell technology 11 plate</li>
            <li>Intelligent touchscreen interface</li>
            <li>High-quality multi-stage filtration</li>
            <li>Several options for water pH</li>
            <li>Durable premium construction</li>
            <li>Easy countertop installation</li>
            <li>Energy-efficient operation</li>
            <li>Automatic cleaning system</li>
          </ul>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This is a reliable option for the home seeking advanced water ionization.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Best For – Health Enthusiasts, Athletes & Large Households</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Our NMP-11 is optimised for an active lifestyle, expanding families, athletes, and anyone who needs more water each day. Being a premium 11 plate ionizer India, it will produce ample amounts of alkaline water for several people and also provide reliable performance. For high capacity, daily use, the Tyent NMP-9 water ionizer India may prove more reliable and suitable.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Countertop Convenience with Under-Counter Level Performance</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Our NMP-11 is an excellent choice for high-end performance in a countertop application and requires no major plumbing changes. The main reasons why this is the best premium countertop ionizer in India are that it is not only very convenient to be able to save space, but also powerful in terms of performance.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>NMP-11 vs UCE-11 Plus – Which Should You Choose?</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Both options provide top-end performance, but one option may be better suited to your installation and family needs. If flexibility is desired at the countertop, the NMP-11 might be a better option, and if built-in solutions are preferred, users can check out the Tyent UCE-11 plus water ionizer in India. The long-term usability, technology and features are all considered when looking at Tyent vs kangen.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>How to Order the Tyent NMP-11 Online</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            NMP-11 can be ordered through the official website of Tyent India easily. Research in detail about the products, read specifications, and ask for professional help before buying. Customers can also see how it compares with the Tyent NMP-7 water ionizer in India to pick the appropriate model to suit their home's needs.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Pan India Delivery & Warranty Support</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Tyent offers India's dependable delivery services and customer support team. Our 11 plate alkaline ionizer India price exudes sophistication in engineering, with a strong warranty commitment, expert advice and support, and responsive after-sales service to ensure lasting customer satisfaction.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose Tyent NMP-11</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            They are the top countertop water ionizer 11 plate for their advanced technology, high-quality construction, and reliability. As a high-performance countertop ionizer in India, it delivers reliable performance, consistent water quality, and long-term ease of use from a trusted Tyent water ionizer.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>FAQs</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>1. What makes NMP-11 the top model in the NMP series?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Our NMP-11 has advanced 11-plate technology, top-of-the-line filtration, intelligent controls and superior performance. It aims to maximise the efficiency, the water production, and the reliability of operation for daily use in families.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>2. How many plates does the Tyent NMP-11 have?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Our Tyent NMP-11 comes with 11 high-quality electrolysis titanium plates with an efficient coating. This high-tech design provides stable ionization to assist in the production of stable alkaline, acidic, and purified water for everyday use.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>3. Who should buy NMP-11 over NMP-9?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Our NMP-11 may be a better choice for households that drink more water, are larger families, athletes, or those who value better performance. Its new technology and extra capacity give added efficiency for rigorous daily water requirements.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>4. What is the price of Tyent NMP-11 in India?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Alkaline ionizer 11 plate India price depends on the present offers, accessibility, and permitted dealership charges. Please check our official Tyent India website for new pricing and buying support, or reach out to the sales team.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>5. Does NMP-11 come with a lifetime warranty?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "0" }}>
              Product components and official warranty terms may affect warranties. For the full warranty and customer support information, customers are advised to check with Tyent India at the time of purchase for up-to-date warranty details.
            </p>
          </div>
        </div>

      </Container>
    </div>
    </>
  );
};

export default TyentNMP5;
