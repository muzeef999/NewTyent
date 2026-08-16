import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import Touchpreview from "@/app/(home)/compoents/(products)/Touchpreview";
import Features from "@/app/(home)/compoents/(products)/Features";
import Filter from "@/app/(home)/compoents/(products)/Filter";
import OneTouchDispaly from "@/app/(home)/compoents/(products)/OneTouchDispaly";
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
import NMP5_BANNER_DESKTOP from "@/asserts/nmp/NMP5_BANNER_DESKTOP.webp";
import NMP5_BANNER_MOBILE from "@/asserts/nmp/NMP5_BANNER_MOBILE.webp";
import Image from "next/image";
import NmpDispalayfinal from "../NmpDispalayfinal";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { RxDownload } from "react-icons/rx";
import dynamic from "next/dynamic";
import Head from "next/head";


const Banner = dynamic(
  () => import("./TopBannersNmp7"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent NMP-7 Water Ionizer – 7 Plate Alkaline Machine India",
  description: "Tyent NMP-7 water ionizer India — 7 Japanese plates, hydrogen-rich alkaline water, ideal for families. Best value countertop ionizer.",
}; 

const TyentNMP5 = () => {
  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const products = [
    {
      src: [productnmp1, productnmp2, productnmp3, productnmp4],
    },
  ];

  const Boost = {
    image: leftIamge,
    title: "The Daily Boost Your Body Deserves",
    description:
      "Daily consumption of TYENT ionised alkaline water boosts  resistance, slows the ageing process, improves nutrient absorption, effectively removes toxins and free radicals, and aids in the prevention and treatment of dangerous chronic diseases such as cancer, diabetes, Hashimoto’s, gout, hypertension, stomach pain, colitis, digestive disorders, and many more…",
  };

  const specifications = [
    { label: "Model", name: "Tyent NMP-7" },
    { label: "Price", name: 205000 },
    { label: "Electrode/Plates", name: "7" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -950*" },
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
    { label: "Plate Surface Area", name: "52.9 * 7 = 370.3 sq inches" },
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
      title: "7 Japanese Plates",
      description:
        "The Tyent NMP-7 is equipped with five platinum-coated, 99.9% pure titanium solid hybrid mesh electrodes/plates, engineered with advanced Japanese technology. It ensures stable oxygen levels, an ORP of up to -950*, and superior micro-clustering. Backed by a 15-year warranty, it boasts a lifespan of over 45+ years.",
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
        "The Tyent NMP-7 water ionizer produces a continuous stream of 7 different water levels,ranging from strong alkaline water (11.5 pH) to strong acidic water (2.5 pH). This versatile ionizer meets all your family’s needs, providing pH levels for drinking, cleaning, and more.",
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
    <div style={{ width: "100% !important", overflow: "hidden !important" }}>

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
                style={{ color: "#291495", fontWeight: 400, fontSize: "18px" }}
              >
                The Tyent NMP-7 is engineered with cutting-edge technology,
                modern design, and a user-friendly interface, making it the The
                Perfect Household water ionizer. It features 7 advanced Japanese
                solid hybrid mesh plates/electrodes from Permelac, Japan (Since
                1969), crafted from titanium and coated with platinum to ensure
                99.9% purity. With an expanded surface area, it maintains stable
                oxygen levels and enhances micro-clustering. Offering seven
                different water levels, it generates selective antioxidant
                molecular hydrogen up to 1550* PPB and an ORP of up to -950*. It
                includes a 3-year warranty on the machine, a 15-year warranty on
                the electrodes/plates, and a lifespan exceeding 45 years. Ideal
                for small households, it provides clean, healthy ionized
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

            {/* NmpDispalayfinal for Mobile and Tablet */}
            <div
              className="nmp5Display"
            >
              <NmpDispalayfinal />
            </div>
          </div>

          {/* Desktop and Larger Devices */}
          <div className="d-none d-lg-block">
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
            Tyent NMP-7 – 7-Plate Alkaline Water Ionizer India
          </h2>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Transform regular tap water into therapeutic, hydrogen-rich hydration. Enjoy the best of medical technology and convenience at home. This compact system rests elegantly on your kitchen counter, providing unlimited antioxidant water.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Introducing the Tyent NMP-7 – Power & Affordability Combined</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent NMP-7 water ionizer India is a smooth upgrade from a regular RO water machine. It provides excellent chemical-free purification and strong electrolysis. This 7-plate water ionizer India produces a steady stream of antioxidant-rich molecular hydrogen, which is premium wellness without costing a lot more.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Who Should Buy the NMP-7? – Best for Mid-Size Families</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This dynamic countertop water ionizer is carefully designed for medium-sized families who need the best daily hydration. This is the best countertop ionizer 7 plate in India, for generating water in large quantities, up to 3.0 litres per minute. It will support a family of four or five people comfortably, with enough space to drink, cook, wash vegetables, and sanitise.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>7-Plate Japanese Technology – Better ORP & pH Performance</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This 7-plate alkaline ionizer India price bracket leader is based on Japan's solid hybrid mesh technology. The system consists of 7 Platinum-coated plates of 99.9% pure titanium. This excellent surface area generates very stable electrical conductivity and increases micro-clustering considerably. This 7-plate configuration offers the optimal balance of high ORP (Oxidation Reduction Potential) and long-lasting durability when compared to the Tyent NMP-5 water ionizer in India.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Key Features of the Tyent NMP-7 Water Ionizer</h3>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li><strong>Dual 0.01-Micron Filters:</strong> Filter out more than 200 contaminants, including microplastics and heavy metals, while retaining essential calcium and magnesium.</li>
            <li><strong>Patented SMPS Plus Power Supply:</strong> 55+ power settings for electrical stability and protection from overheating.</li>
            <li><strong>Eco Mode & Fixed Output:</strong> The LCD automatically dims to save 99.9% energy and provides 0.5L, 1.0L, or 1.5L automated pouring options.</li>
            <li><strong>PAST Auto-Cleaning System:</strong> Sensor-controlled cleaning cycles to prevent mineral deposits from building up on the electrodes.</li>
            <li><strong>Chemical-Free Turbo Mode:</strong> 11.5 pH and 2.5 pH water is produced naturally without toxic chemical enhancers.</li>
          </ul>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>pH Range, ORP Levels & Hydrogen Output – NMP-7 Specs</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent 7-plate alkaline water machine is easy to use and can create up to 7 water levels with a wide range of pH from 2.5 to 11.5. This efficient system produces an outstanding ORP of -950mV. As such, the 7-plate hydrogen water ionizer India produces high levels of selectively antioxidant molecular hydrogen up to 1550 ppb, which efficiently fights against cell oxidative stress.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>NMP-7 vs NMP-5 & NMP-9 – Which Is Right for You?</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            In terms of the Tyent line-up, the NMP-7 falls right in the middle ground. While the entry-level 5-plate model produces an ORP of -850mV, the premium Tyent NMP-9 water ionizer India produces a powerful -1050mV ORP. The NMP-7 also has much higher antioxidant capacity than the NMP-5, and is the better choice for the active family not yet prepared for the top-tier Tyent NMP-11 water ionizer India.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Easy Countertop Setup – No Plumber Required</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Installation of a 7-plate water ionizer India model is very easy. Its sleek tankless design just sits right next to your sink and is easily connected to your regular faucet line. The LCD display with a voice confirmation system ensures easy everyday use. When you compare Tyent vs Kangen, you will see that Tyent has a better modern appearance and a user-friendly interface.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Pan India Delivery & Warranty Support</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent water ionizer offers comprehensive end-to-end services in more than 650+ Indian cities. All NMP-7 units come with the leading 3-year comprehensive machine warranty and a massive 15-year warranty on Japanese plates. Professional technicians change your filters and provide you with peace of mind.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>How to Order the Tyent NMP-7 Online</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            You can easily get the most competitive countertop 7-plate water machine India price through the official Tyent site. Check all technical parameters, click on 'Add to Cart' and complete the purchase with encrypted payment gateways to receive direct delivery to your doorstep.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose Tyent NMP-7</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            This 7-plate hydrogen water ionizer India is unbeatable in terms of chemical-free performance and beats any competition based on MLM rates. Invest in your family's well-being and hydration by getting the best mid-tier Japanese-engineered wellness device today.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>FAQs</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What is the difference between NMP-7 and NMP-9?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The main difference is in the number of plates and the level of antioxidants. The Tyent NMP-7 is based on 7 plates that have an ORP of up to -950mV. The NMP-9 has 9 plates, which provide a higher -1050mV ORP and more molecular hydrogen.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>How many plates does Tyent NMP-7 have?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              It is equipped with 7 advanced solid hybrid mesh plates coated with platinum and titanium. Made by Permelec, Japan, these high-purity plates provide maximum electrical surface area for optimum water electrolysis.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Is NMP-7 good for daily family use?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Yes, it is the right 7 plate water ionizer India for home use. It offers a powerful flow rate of 3.0 L/min, which meets the drinking, cooking, and sanitising needs of a medium-sized family.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What is the price of Tyent NMP-7 in India?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The standard countertop 7 plate water machine India price is ₹2,05,000 M.R.P. In contrast to competing models, this 7 plate alkaline ionizer India price is free of any multi-level marketing fees and just charges for the technology.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Does NMP-7 remove fluoride and chlorine from water?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "0" }}>
              Dual 0.01 micron filters effectively filter out chlorine, heavy metals, and bacteria. Regular electrolysis, however, will not eliminate a dissolved mineral such as fluoride, so when using it on high TDS water, use it in conjunction with an RO pre-filter.
            </p>
          </div>
        </div>

      </Container>
    </div>
    </>
  );
};

export default TyentNMP5;
