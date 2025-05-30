import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import Certifications from "@/app/(home)/compoents/Certifications";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "@/app/style/Uce.css";
import Image from "next/image";
import UceTopMachine from "../UceTopMachine";
import list01 from "@/asserts/uce/list-01.webp";
import UceDisplay from "../UceDisplay";
import d1 from "@/asserts/uce/d1.webp";
import d2 from "@/asserts/uce/d2.webp";
import d3 from "@/asserts/uce/d3.webp";
import d4 from "@/asserts/uce/d4.webp";
import d5 from "@/asserts/uce/d5.webp";
import d6 from "@/asserts/uce/d6.webp";
import d7 from "@/asserts/uce/d7.webp";
import d8 from "@/asserts/uce/d8.webp";
import d9 from "@/asserts/uce/d9.webp";
import d10 from "@/asserts/uce/d10.webp";
import d11 from "@/asserts/uce/d11.webp";
import d12 from "@/asserts/uce/d12.webp";
import d13 from "@/asserts/uce/d13.webp";
import d14 from "@/asserts/uce/d14.webp";
import ucecableimage from "@/asserts/uce/ucecableimage.webp";
import OneTouchUceDisplay from "../OneTouchUceDisplay";
import DisplayAnimation from "../DisplayAnimation";
import NightModeDispay from "../NightModeDispay";
import goodDesignaward from "@/asserts/uce/good-design-gold-award.webp";
import goodDesign from "@/asserts/uce/good-desig.webp";
import PRODUCTUCE1 from "@/asserts/uce/PRODUCTUCE-1.webp";
import PRODUCTUCE2 from "@/asserts/uce/PRODUCTUCE-2.webp";
import { RxDownload } from "react-icons/rx";
import Filter from "@/app/(home)/compoents/(products)/Filter";
import ucerotate from "@/asserts/uce/ucerotate.webp";
import uceBannerBlack from "@/asserts/uce/uceBannerBlack.webp";
import uceBannerBlackMobile from "@/asserts/uce/uceBannerBlackMobile.webp";
import plates_uce from "@/asserts/uce/plates_uce.webp"
import PAST_UCE from "@/asserts/uce/PAST_UCE.webp"
import TURBO_UCE from "@/asserts/uce/TURBO_UCE.webp"
import ECO_UCE from "@/asserts/uce/ECO_UCE.webp"
import smpsplus from "@/asserts/whyTent/smpsplus.webp";
import JOGDail from "@/asserts/uce/JOGDail.webp"
import dynamic from "next/dynamic";
const Banner = dynamic(
  () => import("./TopBannerUCE13"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Tyent UCE-13 Plus | 13-Plate Premium Under-Sink Ionizer",
  description:
    "Tyent UCE-13 Plus delivers 7 water levels, 1800 PPB H₂, -1250 ORP, and 11.5 pH. Designed for elite kitchens seeking top-tier ionization and water purity",
keywords:"Tyent UCE-13 Plus, 13 plate ionizer, hydrogen water ionizer, luxury water ionizer, alkaline ionizer, under sink ionizer, SMPS Plus, Kangen water alternative, 11.5 pH machine,Japanese ionizer"
  };

const data = [
  {
    icon: plates_uce,
    title: "13 Japanese Plates",
    content:
      "The Tyent UCE-13 is equipped with five platinum-coated, 99.9% pure titanium solid hybrid mesh electrodes/plates, engineered with advanced Japanese technology. It ensures stable oxygen levels, an ORP of up to -1050*, and superior micro-clustering. Backed by a 15-year warranty, it boasts a lifespan of over 45+ years.",
  },
  {
    icon: smpsplus,
    title: "Advanced power supply",
    content:
      "Tyent's patented SMPS Plus power system, with 55+ adjustable settings, ensures consistent performance. Exclusively designed only for Tyent ionizers, it allows Tyent to produce strong alkaline (11.5-2.5 pH) and acidic water without chemicals, enhancing both efficiency and lifespan.",
  },
  {
    icon: PAST_UCE,
    title: "Past cleaning Technology",
    content:
      "Tyent Water Ionizers use advanced Polarity Anti Scale Technology (PAST) for automated cleaning. Timer and sensor activation reduce mineral buildup on electrodes, enhancing durability and consistently delivering ionized water with more molecular hydrogen.",
  },
  {
    icon: TURBO_UCE,
    title: "Turbo mode",
    content:
      "Tyent’s Turbo Mode provides 11.5 to 2.5 pH water for specialized uses. Powered by patented SMPS PLUS, it’s the only ionizer globally producing this range without chemicals, enhancers, or salts, ensuring unmatched quality and versatility.",
  },
  {
    icon: ECO_UCE,
    title: "Eco mode",
    content:
      "The Tyent water ionizer’s features Eco Mode, enhancing energy efficiency with up to 99.9% savings. It reduces power consumption by automatically turning off the LCD backlight during idle periods.",
  },
];

const WaterFilterCards = ({ icon, title, content }) => {
  return (
    <div className="custom-card-uce-scroll">
      <div className="ml-4 align-items-center">
        <div style={{ width: "100%", height: "auto" }}>
          <Image src={icon} alt="machine" layout="responsive" priority />
        </div>
        <h3 className="text-start" style={{ color: "#000" }}>
          <b>{title}</b>
        </h3>
        <div style={{ maxWidth: "600px" }}>
          <p
            style={{
              fontWeight: 400,
              fontSize: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.5",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 6,
              wordWrap: "break-word",
              margin: "0 10px",
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  const products = [
    {
      src: [PRODUCTUCE1, PRODUCTUCE2],
    },
  ];

  const specifications = [
    { label: "Model", name: "Tyent UCE-13 Plus" },
    { label: "Price", name: "367000" },
    { label: "Electrode/Plates", name: "13" },
    { label: "pH Range", name: "2.5 - 11.5*" },
    { label: "ORP Range", name: "Up to -1250*" },
    { label: "Hydrogen Range", name: "Up to 1800* PPB" },
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
    <div>
    <Banner />

    <Container>
      <div className="section-spacing">
        <ProductSection products={products} specifications={specifications} />
      </div>
    </Container>

    <div
      className="section-spacing"
      style={{
        background: "repeating-linear-gradient(#f8fbfe, #d9d9d9, #f8fbfe)",
      }}
    >
      <Container>
        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Container for the first image */}
            <div style={{ width: "100%", position: "relative" }}>
              <div style={{ width: "100%", zIndex: 2 }}>
                <Image
                  src={list01}
                  alt="machine image"
                  layout="responsive"
                  priority
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "17.5%",
                  right: "16.5%",
                  width: "12.4%",
                  zIndex: 0, // Adjust z-index to place it behind
                }}
              >
                <UceDisplay />
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <p className="m-2" style={{ fontSize: "28px" }}>
                Introducing{" "}
              </p>
              <h2 className="m-2">
                <b>TYENT UCE-13 PLUS</b>
              </h2>
              <p className="m-2">
                The <b>Tyent UCE-13 PLUS</b> is a best-selling, space-saving
                flagship under counter water ionizer, crafted to elevate your
                high-end kitchen with its advanced technology and sleek,
                aesthetic design. Its compact form and modern look blend
                seamlessly into premium kitchen spaces, while the intuitive
                Tyent faucet, featuring a touch and jog dial, makes operation
                effortlessly smooth.{" "}
              </p>
              <p className="m-2">
                Equipped with 13 Japanese solid hybrid mesh plates/electrodes
                from Permelac, Japan (since 1969), made of titanium and coated
                in platinum for 99.9% purity, Offering seven different water
                levels, it generates selective antioxidant-rich molecular
                hydrogen up to 1800* PPB and -ORP up to -1050*. Backed by a
                3-year machine warranty, a 15-years plates/electrode warranty,
                and a 45+ year lifespan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="section-spacing">
      <div className="container custom-card-uce">
        <Row className="boxbacground">
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center "
          >
            <div className="p-4">
              <h2
                className="text-start"
                style={{ color: "#FFF", fontWeight: "600" }}
              >
                <b>Tyent’s Exclusive Luxury Kitchen Range</b>
              </h2>
              <p style={{ color: "#FFF" }}>
                Transform your kitchen with Tyent’s Luxury Kitchen Range.
                Sleek, state-of-the-art best design awarded ionizers to
                deliver hydrogen-rich alkaline water, combining advanced
                technology with elegant design. Elevate your space with style
                and wellness.
              </p>
              <button className="LuxuryBrochure">
                <RxDownload />
                &nbsp;Download Brochure
              </button>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            {/* Container for the first image */}
            <div style={{ width: "70%", position: "relative" }}>
              <div style={{ width: "100%", zIndex: 2 }}>
                <Image
                  src={list01}
                  alt="machine image"
                  layout="responsive"
                  priority
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "17.5%",
                  right: "16.5%",
                  width: "12.4%",
                  zIndex: 0, // Adjust z-index to place it behind
                }}
              >
                <UceDisplay />
              </div>
            </div>
          </Col>

          <div className="d-flex justify-content-end">
            <div style={{ width: "15%", marginRight: "10px" }}>
              <Image
                src={goodDesign}
                alt="good design award"
                layout="responsive"
                priority
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div style={{ width: "15%", marginRight: "10px" }}>
              <Image
                src={goodDesignaward}
                alt="good design award"
                layout="responsive"
                priority
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div style={{ width: "15%" }}>
              <Image
                src={goodDesignaward}
                alt="good design award"
                layout="responsive"
                priority
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </Row>
        <br />
      </div>
    </div>

    <div className="section-spacing">
      <div className="backgrounduce">
        <div className="card-scroll-container" style={{ paddingLeft: "30%" }}>
          {data.map((iconItem, index) => (
            <WaterFilterCards
              className="cardouterbody"
              key={index}
              icon={iconItem.icon}
              title={iconItem.title}
              content={iconItem.content}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="section-spacing">
      <Container>
        <Row className="g-5">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "40%" }}>
              <UceTopMachine />
            </div>
            <h3>
              <b>One touch display</b>
            </h3>
            <p>
              Smart-Phone inspired touch screen interface and jog dial provide
              Various operational methods according to the User’s Choice
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "40%", position: "relative" }}>
              <UceTopMachine />
              
              <div
                style={{
                  position: "absolute",
                  left: "-20%",
                  top: "0%",
                  width: "60%",
                }}
              >
                <Image src={JOGDail}  alt="jog Dail" layout="responsive" priority/>
              </div>
            </div>
            <h3>
              <b>Jog Dail</b>
            </h3>
            <p>
              Smart-Phone inspired touch screen interface and jog dial provide
              Various operational methods according to the User’s Choice
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "40%", position: "relative" }}>
              <UceTopMachine />

              <div
                style={{
                  position: "absolute",
                  left: "-4%",
                  top: "28%",
                  width: "60%",
                }}
              >
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 301 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="57.7291"
                    height="59.7331"
                    rx="28.8645"
                    fill="#023F5B"
                  />
                  <path
                    d="M25.691 29.5589C25.691 32.2897 25.1467 34.4762 24.0579 36.1183C22.987 37.7603 21.452 38.5814 19.4529 38.5814C17.5431 38.5814 16.0349 37.7603 14.9283 36.1183C13.8396 34.4762 13.2952 32.2897 13.2952 29.5589C13.2952 26.8102 13.8396 24.6327 14.9283 23.0263C16.0349 21.4021 17.5431 20.59 19.4529 20.59C21.3984 20.59 22.9245 21.3932 24.0311 22.9995C25.1377 24.6059 25.691 26.7924 25.691 29.5589ZM16.9631 24.7398C16.3027 25.8642 15.9725 27.4706 15.9725 29.5589C15.9725 31.6472 16.2937 33.2714 16.9363 34.4316C17.5967 35.5739 18.4356 36.145 19.4529 36.145C20.5596 36.145 21.4252 35.5739 22.0499 34.4316C22.6746 33.2893 22.987 31.665 22.987 29.5589C22.987 27.4349 22.6568 25.8196 21.9964 24.713C21.3538 23.5885 20.506 23.0263 19.4529 23.0263C18.4534 23.0263 17.6235 23.5975 16.9631 24.7398ZM30.6419 35.5025C30.9989 35.8416 31.1774 36.2611 31.1774 36.7608C31.1774 37.2606 30.9989 37.6889 30.6419 38.0459C30.3028 38.4029 29.8834 38.5814 29.3836 38.5814C28.866 38.5814 28.4287 38.4029 28.0717 38.0459C27.7326 37.6889 27.563 37.2606 27.563 36.7608C27.563 36.2611 27.7326 35.8416 28.0717 35.5025C28.4287 35.1455 28.866 34.967 29.3836 34.967C29.8834 34.967 30.3028 35.1455 30.6419 35.5025ZM44.4396 32.7984C44.4396 34.5476 43.8595 35.9487 42.6994 37.0018C41.5571 38.037 39.9596 38.5546 37.907 38.5546C36.0686 38.5546 34.5515 38.2512 33.3556 37.6443V35.1009C34.4979 35.797 35.8723 36.145 37.4786 36.145C40.2987 36.145 41.7088 35.0027 41.7088 32.7181C41.7088 31.8078 41.3875 31.1028 40.7449 30.603C40.1202 30.0854 39.2724 29.8266 38.2015 29.8266C36.845 29.8266 35.5064 30.139 34.1856 30.7637V20.8309H43.2616V23.1066H36.7826V27.7116C37.443 27.5688 38.0498 27.4974 38.6031 27.4974C40.4237 27.4974 41.8516 27.9793 42.8868 28.9431C43.922 29.8891 44.4396 31.1742 44.4396 32.7984Z"
                    fill="#6DC2F8"
                  />
                  <rect
                    x="76.1367"
                    width="57.7291"
                    height="59.7331"
                    rx="28.8645"
                    fill="#023F5B"
                  />
                  <path
                    d="M97.7448 38.3672H95.1478V23.7224L90.998 26.2658V23.4547L95.362 20.8577H97.7448V38.3672ZM103.524 35.5025C103.881 35.8416 104.059 36.2611 104.059 36.7608C104.059 37.2606 103.881 37.6889 103.524 38.0459C103.184 38.4029 102.765 38.5814 102.265 38.5814C101.748 38.5814 101.31 38.4029 100.953 38.0459C100.614 37.6889 100.445 37.2606 100.445 36.7608C100.445 36.2611 100.614 35.8416 100.953 35.5025C101.31 35.1455 101.748 34.967 102.265 34.967C102.765 34.967 103.184 35.1455 103.524 35.5025ZM118.339 29.5589C118.339 32.2897 117.794 34.4762 116.705 36.1183C115.635 37.7603 114.1 38.5814 112.101 38.5814C110.191 38.5814 108.682 37.7603 107.576 36.1183C106.487 34.4762 105.943 32.2897 105.943 29.5589C105.943 26.8102 106.487 24.6327 107.576 23.0263C108.682 21.4021 110.191 20.59 112.101 20.59C114.046 20.59 115.572 21.3932 116.679 22.9995C117.785 24.6059 118.339 26.7924 118.339 29.5589ZM109.611 24.7398C108.95 25.8642 108.62 27.4706 108.62 29.5589C108.62 31.6472 108.941 33.2714 109.584 34.4316C110.244 35.5739 111.083 36.145 112.101 36.145C113.207 36.145 114.073 35.5739 114.697 34.4316C115.322 33.2893 115.635 31.665 115.635 29.5589C115.635 27.4349 115.304 25.8196 114.644 24.713C114.001 23.5885 113.154 23.0263 112.101 23.0263C111.101 23.0263 110.271 23.5975 109.611 24.7398Z"
                    fill="#6DC2F8"
                  />
                  <rect
                    x="152.27"
                    width="57.7291"
                    height="59.7331"
                    rx="28.8645"
                    fill="#023F5B"
                  />
                  <path
                    d="M174.387 38.3672H171.79V23.7224L167.641 26.2658V23.4547L172.005 20.8577H174.387V38.3672ZM180.166 35.5025C180.523 35.8416 180.702 36.2611 180.702 36.7608C180.702 37.2606 180.523 37.6889 180.166 38.0459C179.827 38.4029 179.408 38.5814 178.908 38.5814C178.39 38.5814 177.953 38.4029 177.596 38.0459C177.257 37.6889 177.087 37.2606 177.087 36.7608C177.087 36.2611 177.257 35.8416 177.596 35.5025C177.953 35.1455 178.39 34.967 178.908 34.967C179.408 34.967 179.827 35.1455 180.166 35.5025ZM193.964 32.7984C193.964 34.5476 193.384 35.9487 192.224 37.0018C191.081 38.037 189.484 38.5546 187.431 38.5546C185.593 38.5546 184.076 38.2512 182.88 37.6443V35.1009C184.022 35.797 185.397 36.145 187.003 36.145C189.823 36.145 191.233 35.0027 191.233 32.7181C191.233 31.8078 190.912 31.1028 190.269 30.603C189.645 30.0854 188.797 29.8266 187.726 29.8266C186.369 29.8266 185.031 30.139 183.71 30.7637V20.8309H192.786V23.1066H186.307V27.7116C186.967 27.5688 187.574 27.4974 188.127 27.4974C189.948 27.4974 191.376 27.9793 192.411 28.9431C193.446 29.8891 193.964 31.1742 193.964 32.7984Z"
                    fill="#6DC2F8"
                  />
                  <path
                    d="M233.333 32C233.333 29.0545 230.946 26.6667 228 26.6667C225.054 26.6667 222.667 29.0545 222.667 32C222.667 34.9455 225.054 37.3333 228 37.3333C230.946 37.3333 233.333 34.9455 233.333 32ZM301 31H228V33H301V31Z"
                    fill="#023F5B"
                  />
                </svg>
              </div>
            </div>
            <h3>
              <b>Fixed Quantity Output</b>
            </h3>
            <p>
              The Tyent water ionizer’s features a user-friendly LCD display
              that tracks real-time filter usage, alerting you when
              replacements are needed. This convenient monitoring system helps
              maintain optimal performance and ensures clean, healthy water at
              all times.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "40%", position: "relative" }}>
              <UceTopMachine />

              <div
                style={{
                  position: "absolute",
                  left: "68%",
                  top: "34%",
                  width: "70%",
                }}
              >
                <svg
                  width="100%"
                  height="auto"
                  viewBox="0 0 297 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.6667 20C40.6667 22.9455 43.0545 25.3333 46 25.3333C48.9455 25.3333 51.3333 22.9455 51.3333 20C51.3333 17.0545 48.9455 14.6667 46 14.6667C43.0545 14.6667 40.6667 17.0545 40.6667 20ZM0 21H46V19H0V21Z"
                    fill="#023F5B"
                  />
                  <g clipPath="url(#clip0_4882_1789)">
                    <rect
                      x="67"
                      width="230"
                      height="38.3333"
                      rx="4.6"
                      fill="#044561"
                    />
                    <path
                      d="M127.739 23.0424C127.739 24.8156 127.151 26.2359 125.975 27.3034C124.817 28.3528 123.198 28.8775 121.117 28.8775C119.253 28.8775 117.715 28.5699 116.503 27.9547V25.3765C117.661 26.0821 119.054 26.4349 120.683 26.4349C123.541 26.4349 124.971 25.2769 124.971 22.961C124.971 22.0383 124.645 21.3236 123.994 20.817C123.361 20.2923 122.501 20.0299 121.416 20.0299C120.04 20.0299 118.683 20.3466 117.345 20.9798V10.911H126.545V13.2179H119.977V17.8859C120.647 17.7411 121.262 17.6688 121.823 17.6688C123.668 17.6688 125.116 18.1573 126.165 19.1343C127.214 20.0933 127.739 21.396 127.739 23.0424ZM142.526 19.7585C142.526 22.5268 141.974 24.7432 140.87 26.4078C139.785 28.0723 138.229 28.9046 136.202 28.9046C134.266 28.9046 132.737 28.0723 131.616 26.4078C130.512 24.7432 129.96 22.5268 129.96 19.7585C129.96 16.9722 130.512 14.7648 131.616 13.1364C132.737 11.49 134.266 10.6667 136.202 10.6667C138.174 10.6667 139.721 11.4809 140.843 13.1093C141.965 14.7377 142.526 16.9541 142.526 19.7585ZM133.678 14.8734C133.009 16.0132 132.674 17.6416 132.674 19.7585C132.674 21.8754 133 23.5219 133.651 24.698C134.321 25.8559 135.171 26.4349 136.202 26.4349C137.324 26.4349 138.202 25.8559 138.835 24.698C139.468 23.54 139.785 21.8935 139.785 19.7585C139.785 17.6054 139.45 15.968 138.781 14.8462C138.129 13.7064 137.27 13.1364 136.202 13.1364C135.189 13.1364 134.348 13.7154 133.678 14.8734ZM151.887 28.7146H149.39L159.269 10.3139H161.793L151.887 28.7146ZM154.031 14.5748C154.031 15.8414 153.588 16.9179 152.701 17.8045C151.814 18.691 150.738 19.1343 149.471 19.1343C148.223 19.1343 147.156 18.691 146.269 17.8045C145.382 16.9179 144.939 15.8414 144.939 14.5748C144.939 13.3264 145.382 12.2589 146.269 11.3724C147.156 10.4858 148.223 10.0425 149.471 10.0425C150.738 10.0425 151.814 10.4858 152.701 11.3724C153.588 12.2589 154.031 13.3264 154.031 14.5748ZM147.192 14.5748C147.192 15.2081 147.409 15.7509 147.843 16.2032C148.295 16.6556 148.838 16.8817 149.471 16.8817C150.105 16.8817 150.647 16.6556 151.1 16.2032C151.552 15.7509 151.778 15.2081 151.778 14.5748C151.778 13.9416 151.552 13.4078 151.1 12.9736C150.647 12.5213 150.105 12.2951 149.471 12.2951C148.838 12.2951 148.295 12.5213 147.843 12.9736C147.409 13.4259 147.192 13.9597 147.192 14.5748ZM166.325 24.3451C166.325 25.6117 165.882 26.6882 164.995 27.5748C164.109 28.4432 163.041 28.8775 161.793 28.8775C160.526 28.8775 159.45 28.4432 158.563 27.5748C157.677 26.6882 157.233 25.6117 157.233 24.3451C157.233 23.0967 157.677 22.0292 158.563 21.1427C159.45 20.238 160.526 19.7857 161.793 19.7857C163.041 19.7857 164.109 20.238 164.995 21.1427C165.882 22.0292 166.325 23.0967 166.325 24.3451ZM160.164 22.7168C159.712 23.1691 159.486 23.7119 159.486 24.3451C159.486 24.9784 159.712 25.5212 160.164 25.9735C160.617 26.4259 161.16 26.652 161.793 26.652C162.426 26.652 162.96 26.4259 163.394 25.9735C163.846 25.5212 164.073 24.9784 164.073 24.3451C164.073 23.7119 163.846 23.1691 163.394 22.7168C162.96 22.2644 162.426 22.0383 161.793 22.0383C161.16 22.0383 160.617 22.2644 160.164 22.7168Z"
                      fill="#F8FAFD"
                    />
                    <path
                      d="M91.0091 23.3411H85.2374V29.9609H82.8109V14.0828H91.8101V16.1088H85.2374V21.3151H91.0091V23.3411ZM99.0457 29.9609H96.7606V17.0747L93.1091 19.3127V16.8391L96.949 14.554H99.0457V29.9609Z"
                      fill="#F8FAFD"
                    />
                    <path
                      d="M201.732 23.3411H195.961V29.9609H193.534V14.0828H202.533V16.1088H195.961V21.3151H201.732V23.3411ZM214.174 29.9609H204.304V28.0527C206.282 26.6078 207.947 25.1158 209.298 23.5767C210.664 22.0219 211.347 20.6084 211.347 19.3363C211.347 18.4411 211.088 17.7579 210.57 17.2867C210.052 16.7999 209.337 16.5564 208.426 16.5564C207.17 16.5564 205.937 17.0276 204.728 17.9699V15.6848C205.858 14.821 207.201 14.3891 208.756 14.3891C210.201 14.3891 211.395 14.7974 212.337 15.6141C213.279 16.4151 213.75 17.5616 213.75 19.0536C213.75 21.8177 211.662 24.786 207.484 27.9585H214.174V29.9609Z"
                      fill="#F8FAFD"
                    />
                    <path
                      d="M240.751 23.0424C240.751 24.8156 240.163 26.2359 238.987 27.3034C237.829 28.3528 236.209 28.8775 234.129 28.8775C232.265 28.8775 230.727 28.5699 229.515 27.9547V25.3765C230.673 26.0821 232.066 26.4349 233.694 26.4349C236.553 26.4349 237.983 25.2769 237.983 22.961C237.983 22.0383 237.657 21.3236 237.006 20.817C236.372 20.2923 235.513 20.0299 234.427 20.0299C233.052 20.0299 231.695 20.3466 230.356 20.9798V10.911H239.557V13.2179H232.989V17.8859C233.658 17.7411 234.273 17.6688 234.834 17.6688C236.68 17.6688 238.127 18.1573 239.177 19.1343C240.226 20.0933 240.751 21.396 240.751 23.0424ZM255.538 19.7585C255.538 22.5268 254.986 24.7432 253.882 26.4078C252.796 28.0723 251.24 28.9046 249.214 28.9046C247.278 28.9046 245.749 28.0723 244.627 26.4078C243.524 24.7432 242.972 22.5268 242.972 19.7585C242.972 16.9722 243.524 14.7648 244.627 13.1364C245.749 11.49 247.278 10.6667 249.214 10.6667C251.186 10.6667 252.733 11.4809 253.855 13.1093C254.977 14.7377 255.538 16.9541 255.538 19.7585ZM246.69 14.8734C246.021 16.0132 245.686 17.6416 245.686 19.7585C245.686 21.8754 246.011 23.5219 246.663 24.698C247.332 25.8559 248.183 26.4349 249.214 26.4349C250.336 26.4349 251.213 25.8559 251.847 24.698C252.48 23.54 252.796 21.8935 252.796 19.7585C252.796 17.6054 252.462 15.968 251.792 14.8462C251.141 13.7064 250.281 13.1364 249.214 13.1364C248.201 13.1364 247.359 13.7154 246.69 14.8734ZM264.899 28.7146H262.402L272.281 10.3139H274.805L264.899 28.7146ZM267.043 14.5748C267.043 15.8414 266.599 16.9179 265.713 17.8045C264.826 18.691 263.75 19.1343 262.483 19.1343C261.235 19.1343 260.167 18.691 259.281 17.8045C258.394 16.9179 257.951 15.8414 257.951 14.5748C257.951 13.3264 258.394 12.2589 259.281 11.3724C260.167 10.4858 261.235 10.0425 262.483 10.0425C263.75 10.0425 264.826 10.4858 265.713 11.3724C266.599 12.2589 267.043 13.3264 267.043 14.5748ZM260.203 14.5748C260.203 15.2081 260.421 15.7509 260.855 16.2032C261.307 16.6556 261.85 16.8817 262.483 16.8817C263.116 16.8817 263.659 16.6556 264.112 16.2032C264.564 15.7509 264.79 15.2081 264.79 14.5748C264.79 13.9416 264.564 13.4078 264.112 12.9736C263.659 12.5213 263.116 12.2951 262.483 12.2951C261.85 12.2951 261.307 12.5213 260.855 12.9736C260.421 13.4259 260.203 13.9597 260.203 14.5748ZM279.337 24.3451C279.337 25.6117 278.894 26.6882 278.007 27.5748C277.121 28.4432 276.053 28.8775 274.805 28.8775C273.538 28.8775 272.462 28.4432 271.575 27.5748C270.688 26.6882 270.245 25.6117 270.245 24.3451C270.245 23.0967 270.688 22.0292 271.575 21.1427C272.462 20.238 273.538 19.7857 274.805 19.7857C276.053 19.7857 277.121 20.238 278.007 21.1427C278.894 22.0292 279.337 23.0967 279.337 24.3451ZM273.176 22.7168C272.724 23.1691 272.498 23.7119 272.498 24.3451C272.498 24.9784 272.724 25.5212 273.176 25.9735C273.629 26.4259 274.171 26.652 274.805 26.652C275.438 26.652 275.972 26.4259 276.406 25.9735C276.858 25.5212 277.084 24.9784 277.084 24.3451C277.084 23.7119 276.858 23.1691 276.406 22.7168C275.972 22.2644 275.438 22.0383 274.805 22.0383C274.171 22.0383 273.629 22.2644 273.176 22.7168Z"
                      fill="#F8FAFD"
                    />
                  </g>
                  <rect
                    x="67.9914"
                    y="0.991379"
                    width="228.017"
                    height="36.3506"
                    rx="3.60862"
                    stroke="#212121"
                    strokeWidth="1.98276"
                  />
                  <rect
                    x="67.9914"
                    y="0.991379"
                    width="228.017"
                    height="36.3506"
                    rx="3.60862"
                    stroke="black"
                    stroke-opacity="0.2"
                    strokeWidth="1.98276"
                  />
                  <defs>
                    <clipPath id="clip0_4882_1789">
                      <rect
                        x="67"
                        width="230"
                        height="38.3333"
                        rx="4.6"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <h3>
              <b>Real-Time Filter Indication</b>
            </h3>
            <p>
              Tyent water ionizers are engineered for modern convenience,
              featuring the fixed quantity output function. It delivers
              accurate quantity of 0.5L, 1.0L, or 1.5L, making hydration and
              cooking effortless and accurate for daily use.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="section-spacing">
      <h2 className="text-center">
        <b>
          First customizable design display in a <br /> water ionizer{" "}
        </b>
      </h2>
      <p className="text-center">
        Choose between Full-Color or Night-Mode displays.
      </p>
      <br />

      <div className="container d-flex justify-content-center align-items-center">
        <div className="m-2">
          <DisplayAnimation />
        </div>
        <div className="m-2">
          <NightModeDispay />
        </div>
      </div>
    </div>

    <div className="section-spacing">
      <div className="container">
        <Row className="custom-card-uce-interface">
          <Col
            md={8}
            className="d-flex justify-content-center align-items-center "
          >
            <div>
              <h2
                className="text-center"
                style={{ color: "#FFF", fontWeight: "600" }}
              >
                <b>Easy and Convenient user Interface</b>
              </h2>
              <p className="text-center" style={{ color: "#FFF" }}>
                2-way control methods are provided easy and convenient for
                anyone to use.
              </p>
              <br />
              <div class="grid-container">
                <div class="grid-item">
                  <Image
                    src={d1}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d2}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d3}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d4}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d5}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d6}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d7}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d8}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d9}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d10}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d11}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d12}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d13}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
                <div class="grid-item">
                  <Image
                    src={d14}
                    alt="uce-display"
                    layout="responsive"
                    priority
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div style={{ position: "relative", width:'60%' }}>
              <UceTopMachine />
              <div class="image img1"></div>
              <div class="image img2"></div>
              <div class="image img3"></div>
              <div class="image img4"></div>
              <div class="image img5"></div>
              <div class="image img6"></div>
              <div class="image img7"></div>
              <div class="image img8"></div>
              <div class="image img9"></div>
              <div class="image img10"></div>
              <div class="image img11"></div>
              <div class="image img12"></div>
              <div class="image img13"></div>
              <div class="image img14"></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>

    <div className="section-spacing">
      <Container>
        <h2
          className="text-center"
          style={{ color: "#000", fontWeight: "600" }}
        >
          <b>Ultimate convenience Rotates 180 and more!</b>
        </h2>
        <p className="text-center" style={{ color: "#000" }}>
          Designed for multi-directinol polygonal rotation operation. It can
          be <br /> conveniently used anywhere, and anyhow.
        </p>
        <br />
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ position: "relative", width: "25%" }}>
            <UceTopMachine />
            <div style={{ position: "absolute", top: "40%", left: "30.5%" }}>


              <br />
              <svg
                id="rotatearrow2"
                width="100%"
                height="auto"
                viewBox="0 0 311 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.46">
                  <path
                    d="M52.2172 19.4531C6 24.4792 6 42.394 6 42.394C16.8452 99.7851 283.408 75.3481 301.673 54.9008C319.939 34.4535 257.038 19.4536 257.038 19.4536"
                    stroke="#168bc8"
                    strokeWidth="11"
                  />
                  <path
                    d="M41.6094 5L60.6004 15.5946L46.5636 33"
                    stroke="#168bc8"
                    strokeWidth="11"
                  />
                  <path
                    d="M265.941 7L248.137 18.6757L258.974 34"
                    stroke="#168bc8"
                    strokeWidth="11"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div style={{width:'20%'}}>
              <Image src={ucerotate} alt="Ultimate convenience"  layout="responsive" priority/>
            </div>
        </div>
      </Container>
    </div>

    <div>
      <Container>
        <Row className="water-outlet">
          <Col xs={12} md={6}>
            {/* Container for the first image */}
            <div style={{ width: "100%", position: "relative" }}>
              <div style={{ width: "100%", zIndex: 2 }}>
                <Image
                  src={list01}
                  alt="machine image"
                  layout="responsive"
                  priority
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "17.5%",
                  right: "16.5%",
                  width: "12.4%",
                  zIndex: 0, // Adjust z-index to place it behind
                }}
              >
                <UceDisplay />
              </div>
            </div>


          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <h2 className="m-2">
                <b>Independently separated water outlet.</b>
              </h2>
              <p className="m-2">
                Tyent’s independently separated water outlets for alkaline and
                acidic water ensure safety and convenience. This innovative
                design provides dedicated outlets, making it easier and safer
                to access the right water type for your needs.
              </p>
              <p className="m-2">
                Equipped with 9 Japanese solid hybrid mesh plates/electrodes
                from Permelac, Japan (since 1969), made of titanium and coated
                in platinum for 99.9% purity, Offering seven different water
                levels, it generates selective antioxidant-rich molecular
                hydrogen up to 1800 PPB and -ORP up to -1050. Backed by a
                3-year machine warranty, a 15-years plates/electrode warranty,
                and a 45+ year lifespan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="section-spacing">
      <Image
        src={ucecableimage}
        alt="uce cable explain"
        layout="responsive"
        priority
      />
    </div>

    <div>
      <Container>
        <Row className="water-outlet">
          <Col xs={12} md={6}>
            {/* Container for the first image */}
            <div style={{ width: "100%", position: "relative" }}>
              <div style={{ width: "100%", zIndex: 2 }}>
                <Image
                  src={list01}
                  alt="machine image"
                  layout="responsive"
                  priority
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "17.5%",
                  right: "16.5%",
                  width: "12.4%",
                  zIndex: 0, // Adjust z-index to place it behind
                }}
              >
                <UceDisplay />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div>
              <h2 style={{ fontWeight: 500 }}>
                <b>SMART</b> safety Diagnosis function
              </h2>

              <h4 className="m-2 mt-4">
                <b>Automatic Stop Function</b>
              </h4>

              <p className="m-2">
                The water outflow automatically stops to prevent overflow or
                flooding. No waiting is required - simply resume use
                immediately after the unit shuts off for added safety and
                convenience.
              </p>
              <h4 className="m-2 mt-4">
                <b>Temperature sensor</b>
              </h4>

              <p className="m-2">
                The unit features a temperature sensor that prevents
                accidental hot water inflow, ensuring safety and protection.
              </p>
              <h4 className="m-2 mt-4">
                <b>Sensing function of supplied raw water</b>
              </h4>

              <p className="m-2">
                The unit automatically stops functional water outflow when raw
                water is unavailable, protecting the electrolytic cell and
                power supply from damage, preventing water waste, and avoiding
                accidental leaks.
              </p>
              <h4 className="m-2 mt-4">
                <b>Detects if filter door is open</b>
              </h4>

              <p className="m-2">
                The water supply automatically stops when the door is open,
                ensuring your safety.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="section-spacing">
      <OneTouchUceDisplay />
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
        Tyent UCE-13 plus Specification's
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
