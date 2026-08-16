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
import { RxDownload } from "react-icons/rx";
import dynamic from "next/dynamic";
import Head from "next/head";


const Banner = dynamic(
  () => import("./TopBannerNmp9"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent NMP-9 vs Kangen K8 | Best 9 Plate Ionizer India",
  description: "Tyent NMP-9 water ionizer India — 9 Japanese plates, hydrogen-rich alkaline water. Compare with Kangen K8 and choose smarter.",
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


  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Tyent NMP-9",
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
                style={{ color: "#291495", fontWeight: 400, fontSize: "18px" }}
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
              color: "#291495",
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
            Tyent NMP-9 (9-Plate Alkaline Water Ionizer India)
          </h2>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Are you willing to experience powerful hydration and hydrogen-rich water for your everyday life? Tyent 9-plate water ionizer in India is curated to offer you that premium feeling. The 9-plate alkaline water ionizer in India comes with advanced technology, elegant design, and reliable performance, making it a desirable choice for healthier water.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Introducing the Tyent NMP-9 – Our Most Popular Countertop Model</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Our Tyent 9-plate water ionizer in India is a premium product that families trust for consistent performance and excellent water quality. This is built with advanced electrolysis technology, and this 9-plate alkaline water ionizer in India produces alkaline, acidic, and hydrogen-rich water to match your daily life requirements.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Combining aesthetics and user-friendly controls, it can also guarantee long-lasting durability. This 9-plate hydrogen water ionizer in India promises an ideal balance of innovation and convenience.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Best for Larger Families & Heavy Daily Usage</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Our 9-plate alkaline water ionizer in India is designed for households with higher daily water consumption. It supplies fresh, alkaline, and hydrogen-rich water without affecting performance. As a premium 9-plate hydrogen water ionizer in India, it offers better efficiency, making it viable for larger families and health-conscious users.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            So, if you are looking for a reliable water ionizer 9 plate countertop in India that combines advanced filtration, high output, and effortless operation, NMP-9 can be an excellent investment for the long term.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>9-Plate Technology – Maximum Alkalinity for Optimal Health</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Engineered with advanced 9-plate electrolysis technology, the Tyent NMP-7 water ionizer in India offers a higher concentration of alkaline and hydrogen-rich water throughout the day. Being a premium water ionizer 9 plate countertop in India, it is curated to maximise the ionization efficiency for better hydration and everyday wellness.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            So, if you are searching for a dependable 9-plate countertop water ionizer in India, the NMP-9 offers an ideal combination of robust technology and durability at the same time.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Key Features of the Tyent NMP-9 Water Ionizer</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "8px" }}>
            Here are some prominent features of our countertop water ionizer you can think of.
          </p>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li>Sleek design that complements modern kitchens.</li>
            <li>Easy-to-use touchscreen interface with effective controls.</li>
            <li>Multiple water settings for drinking, cooking, cleaning, etc.</li>
            <li>Get high-performance filtration for cleaner and better-tasting water.</li>
            <li>Durable construction designed for long-term everyday use.</li>
            <li>Energy-efficient operation that needs minimal maintenance.</li>
          </ul>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            A premium Tyent NMP-11 water ionizer in India is built to offer quality for the long term.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>pH Range, ORP & Hydrogen Output – NMP-9 Performance</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The NMP-9 vs. NMP-11 comparison is essential to understand their relevance. The Tyent NMP-9 is designed to offer a wide pH range, strong negative ORP, and hydrogen-rich water for versatile everyday use. Its advanced 9-plate technology ensures stable ionization. So, whether you are drinking, cooking, or cleaning, the water ionizer 9 plate countertop in India offers reliable water quality while maintaining high efficiency and long-term durability.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>NMP-9 vs UCE-9 Plus – Countertop vs Under-Counter</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent NMP-9 is a stylish countertop model that offers easy installation and everyday convenience, while the Tyent UCE 9 plus alkaline water machine in India is designed for an under-counter setup. So, if you are considering the NMP-9 vs. NMP-11 comparison, the NMP-9 is an excellent choice for most families.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Easy Countertop Setup – Ready to Use Instantly</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent NMP-9 is curated for quick, hassle-free countertop installation. This way, you can enjoy alkaline and hydrogen-rich water in minutes. In the Tyent NMP-9 vs Kangen K8 comparison, the NMP-9 stands out for its user-friendly setup and everyday convenience. You can easily connect the unit and enjoy cleaner and healthier water without any complex installation.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Pan India Delivery & Warranty Support</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Wherever you are in the country, we ensure quick and secure delivery along with proper sales support. Every Tyent water ionizer comes with detailed warranty coverage and dedicated customer assistance. This is why people consider this among Tyent vs Kangen. Starting from installation guidance to ongoing support, our team is committed to offering you an excellent experience.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>How to Order the Tyent NMP-9 Online?</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "8px" }}>
            As our 9-plate water machine India price is highly affordable, here are the steps you can follow to order the product.
          </p>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li>Browse our Tyent NMP-9 product page.</li>
            <li>Pick the model that best suits your requirements.</li>
            <li>Complete your order through the secure checkout process.</li>
            <li>Receive order confirmation and other delivery updates.</li>
            <li>Get your product delivered to your doorstep.</li>
          </ul>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose Tyent NMP-9?</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Choose Tyent NMP-9 for its reliable 9-plate technology and consistent alkaline and hydrogen-rich water production. Further, you can expect sleek countertop design and robust performance. It is also backed by our prompt customer support and premium build quality, providing a long-term solution.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>FAQs</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>How is NMP-9 different from NMP-7?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The NMP-9 highlights nine electrolysis plates, offering higher ionization efficiency and greater hydrogen production every time. It also comes with improved performance and is ideal for households with higher daily water consumption.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Is 9-plate ionizer better than 7-plate?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Yes, a 9-plate ionizer generally offers strong ionization and better hydrogen generation. It also comes with consistent performance, making it a viable choice for families who desire premium alkaline water with long-term reliability.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What pH levels can the NMP-9 achieve?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              The Tyent NMP-9 delivers a wide pH range, producing alkaline, neutral, and acidic water for multiple daily applications. It includes drinking, cooking, food preparation, and household cleaning. So, it can be regulated as per your preferences.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Is NMP-9 suitable for large Indian families?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Yes, it has high water output and advanced 9-plate technology. It can also guarantee continuous performance, making the Tyent NMP-9 an excellent choice for larger Indian families with greater daily water requirements.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What warranty does Tyent offer on NMP-9?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "0" }}>
              The Tyent NMP-9 includes detailed warranty coverage and dedicated customer support. Warranty terms might differ, so refer to the official product details or contact Tyent India for the latest information.
            </p>
          </div>
        </div>

      </Container>
    </div>
    </>
  );
};

export default TyentNMP5;
