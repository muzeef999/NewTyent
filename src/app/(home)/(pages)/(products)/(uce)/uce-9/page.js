import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import Certifications from "@/app/(home)/compoents/Certifications";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "@/app/style/Uce.css";
import machine from "@/asserts/uce/uce.png";
import Image from "next/image";
import UceTopMachine from "../UceTopMachine";
import d1 from "@/asserts/uce/d1.png";
import d2 from "@/asserts/uce/d2.png";
import d3 from "@/asserts/uce/d3.png";
import d4 from "@/asserts/uce/d4.png";
import d5 from "@/asserts/uce/d5.png";
import d6 from "@/asserts/uce/d6.png";
import d7 from "@/asserts/uce/d7.png";
import d8 from "@/asserts/uce/d8.png";
import d9 from "@/asserts/uce/d9.png";
import d10 from "@/asserts/uce/d10.png";
import d11 from "@/asserts/uce/d11.png";
import d12 from "@/asserts/uce/d12.png";
import d13 from "@/asserts/uce/d13.png";
import d14 from "@/asserts/uce/d14.png";
import ucecableimage from "@/asserts/uce/ucecableimage.png";
import OneTouchUceDisplay from "../OneTouchUceDisplay";

const data = [
  {
    icon: machine,
    title: "Plates",
    content:
      "The Tyent UCE-9 PLUS features 9 platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, Molecular hydrogen upto 1800 PPB,-ORP up to-1050*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
  },
  {
    icon: machine,
    title: "SMPS PLUS",
    content:
      "The Tyent UCE-9 PLUS features 9 platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, Molecular hydrogen upto 1800 PPB,-ORP up to-1050*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
  },
  {
    icon: machine,
    title: "Past cleaning ",
    content:
      "The Tyent UCE-9 PLUS features 9 platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, Molecular hydrogen upto 1800 PPB,-ORP up to-1050*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
  },
  {
    icon: machine,
    title: "Turbo mode",
    content:
      "The Tyent UCE-9 PLUS features 9 platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, Molecular hydrogen upto 1800 PPB,-ORP up to-1050*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
  },
  {
    icon: machine,
    title: "Past cleaning ",
    content:
      "The Tyent UCE-9 PLUS features 9 platinum-coated, 99.99% pure solid hybrid mesh electrode/plates crafted with advanced Japanese technology, ensuring stable oxygen levels, Molecular hydrogen upto 1800 PPB,-ORP up to-1050*, and superior micro-clustering. Includes 15-year warranty, 45+ years lifespan.",
  },
];

const WaterFilterCards = ({ icon, title, content }) => {
  return (
    <div className="custom-card-uce-scroll">
      <div className="ml-4 align-items-center">
        <div style={{ width: "100%", height: "auto" }}>
          <Image src={icon} alt="machine" layout="responsive" priority />
        </div>
        <h3 className="text-start" style={{ color: "#008AC7" }}>
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
      src: [
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/uce%2FWhatsApp%20Image%202023-05-13%20at%2010.05.26.webp?alt=media&token=69fe99c8-1125-4a2f-9a0a-1b640548b3a5",
        "https://firebasestorage.googleapis.com/v0/b/tyent-fa17c.appspot.com/o/uce%2FWhatsApp%20Image%202023-05-09%20at%2001.25.53.webp?alt=media&token=0e1f17b2-013c-4fa3-ba3a-96c11177b740",
      ],
    },
  ];

  const specifications = [
    { label: "Model", name: "Tyent UCE-9 plus" },
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
    <div
      style={{
        background:
          "repeating-linear-gradient(#f8fbfe, #d9d9d9, #f8fbfe 550px)",
      }}
    >
      <Container>
        <ProductSection products={products} specifications={specifications} />
      </Container>

      <div className="container">
        <Row className="custom-card-uce">
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
                Transform your kitchen with Tyent’s Luxury Kitchen Range. Sleek,
                state-of-the-art best design awarded ionizers to deliver
                hydrogen-rich alkaline water, combining advanced technology with
                elegant design. Elevate your space with style and wellness.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{ width: "100%", height: "auto", position: "relative" }}
            >
              <Image
                src={machine}
                alt="uce iamge"
                layout="responsive"
                priority
              />
              <div style={{ position: "absolute", top: "30%", left: "42%" }}>
                <div style={{ width: "70%" }}>
                  <UceTopMachine />
                </div>
              </div>
            </div>
          </Col>
          <div></div>
          <div></div>
          <div></div>
        </Row>
        <br />
      </div>

      <Container>
        <br />
        <Row>
          <Col xs={12} md={6}>
            <div
              style={{ width: "100%", height: "auto", position: "relative" }}
            >
              <Image
                src={machine}
                alt="uce iamge"
                layout="responsive"
                priority
              />
              <div style={{ position: "absolute", top: "30%", left: "42%" }}>
                <div style={{ width: "70%" }}>
                  <UceTopMachine />
                </div>
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
                Equipped with 9 Japanese solid hybrid mesh plates/electrodes
                from Permelac, Japan (since 1969), made of titanium and coated
                in platinum for 99.9% purity, Offering seven different water
                levels, it generates selective antioxidant-rich molecular
                hydrogen up to 1800 PPB and -ORP up to -1050. Backed by a 3-year
                machine warranty, a 15-years plates/electrode warranty, and a
                45+ year lifespan.
              </p>
            </div>
          </Col>
        </Row>
        <br />
      </Container>

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

      <br />

      <Container>
        <Row className="g-5">
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "60%" }}>
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
            <div style={{ width: "60%" }}>
              <UceTopMachine />
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
            <div style={{ width: "60%", position: "relative" }}>
              <UceTopMachine />

              <div
                style={{
                  position: "absolute",
                  left: "1%",
                  top: "29%",
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
              that tracks real-time filter usage, alerting you when replacements
              are needed. This convenient monitoring system helps maintain
              optimal performance and ensures clean, healthy water at all times.
            </p>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center text-center"
          >
            <div style={{ width: "60%", position: "relative" }}>
              <UceTopMachine />

              <div
                style={{
                  position: "absolute",
                  left: "68%",
                  top: "37%",
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
                  <g clip-path="url(#clip0_4882_1789)">
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
                    stroke-width="1.98276"
                  />
                  <rect
                    x="67.9914"
                    y="0.991379"
                    width="228.017"
                    height="36.3506"
                    rx="3.60862"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="1.98276"
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
              featuring the fixed quantity output function. It delivers accurate
              quantity of 0.5L, 1.0L, or 1.5L, making hydration and cooking
              effortless and accurate for daily use.
            </p>
          </Col>
        </Row>
      </Container>

      <br />

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
        <svg
          className="p-4"
          width="30%"
          height="auto"
          viewBox="0 0 296 405"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_4826_3862)">
            <g clip-path="url(#clip0_4826_3862)">
              <rect
                x="2.64453"
                y="2"
                width="291.252"
                height="401.027"
                rx="15.2289"
                fill="#0E0E0E"
              />
              <g clip-path="url(#clip1_4826_3862)">
                <rect
                  x="33.1016"
                  y="67.9922"
                  width="230.971"
                  height="302.039"
                  rx="7.61443"
                  fill="url(#paint0_linear_4826_3862)"
                />
                <rect
                  width="67.2608"
                  height="67.2608"
                  transform="translate(45.1602 185.375)"
                  fill="#00FF12"
                />
                <g clip-path="url(#clip2_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(45.1602 113.672)"
                    fill="#00D2FF"
                  />
                  <path
                    d="M64.1068 167.062L63.9126 167.688H68.0117L67.8176 167.041C67.3286 165.487 66.9258 164.186 66.6094 163.136C66.3074 162.071 66.1204 161.403 66.0485 161.129L65.9622 160.698C65.8327 161.417 65.2143 163.538 64.1068 167.062ZM62.1651 173.211H59.3173L64.2363 158.67H67.7529L72.6718 173.211H69.7377L68.7021 169.91H63.2007L62.1651 173.211ZM83.1531 173.211H74.7608V158.67H77.4791V170.795H83.1531V173.211ZM96.7961 173.211H93.3658L88.1449 166.005L93.1717 158.67H96.4294L91.381 165.962L96.7961 173.211ZM87.9291 173.211H85.2108V158.67H87.9291V173.211Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M84.7699 151.062H70.7164V149.338C74.7392 149.077 75.1049 148.555 75.1049 145.211V131.314C75.1049 128.859 74.9481 128.598 72.9629 128.441L70.5075 128.337V126.822C73.6943 126.299 76.9334 125.411 80.4337 124.314V145.211C80.4337 148.503 80.7994 149.077 84.7699 149.338V151.062Z"
                    fill="#F8FAFD"
                  />
                </g>
                <path
                  d="M68.3005 228.969H64.2772V221.986H57.866V228.969H53.8687V211.474H57.866V218.586H64.2772V211.474H68.3005V228.969ZM82.0716 228.969H70.7546V226.036C72.6234 224.755 74.2673 223.336 75.6863 221.779C77.1226 220.221 77.8407 218.846 77.8407 217.652C77.8407 216.925 77.6244 216.354 77.1918 215.939C76.7592 215.506 76.1016 215.29 75.2191 215.29C73.7482 215.29 72.3552 215.835 71.0401 216.925V213.265C71.6111 212.85 72.3552 212.495 73.2723 212.201C74.1895 211.907 75.0893 211.76 75.9718 211.76C77.7369 211.76 79.1385 212.227 80.1768 213.161C81.2323 214.078 81.7601 215.368 81.7601 217.029C81.7601 220.022 79.8566 222.93 76.0497 225.75H82.0716V228.969ZM101.045 220.169C101.045 222.852 100.266 225.023 98.7091 226.685C97.169 228.328 95.1098 229.15 92.5315 229.15C89.9358 229.15 87.8679 228.328 86.3278 226.685C84.7878 225.041 84.0177 222.869 84.0177 220.169C84.0177 217.487 84.7878 215.324 86.3278 213.68C87.8852 212.019 89.9531 211.189 92.5315 211.189C95.1271 211.189 97.195 212.011 98.7351 213.654C100.275 215.298 101.045 217.47 101.045 220.169ZM89.4426 216.276C88.6812 217.228 88.3005 218.526 88.3005 220.169C88.3005 221.813 88.6812 223.12 89.4426 224.089C90.204 225.041 91.2336 225.517 92.5315 225.517C93.8293 225.517 94.8589 225.041 95.6203 224.089C96.3817 223.12 96.7624 221.813 96.7624 220.169C96.7624 218.526 96.3817 217.228 95.6203 216.276C94.8589 215.307 93.8293 214.822 92.5315 214.822C91.2336 214.822 90.204 215.307 89.4426 216.276Z"
                  fill="#F8FAFD"
                />
                <g clip-path="url(#clip3_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(45.1602 254.539)"
                    fill="#FFFF00"
                  />
                  <path
                    d="M62.5957 308.385L62.4075 308.991H66.3803L66.1922 308.364C65.7182 306.858 65.3279 305.597 65.0212 304.579C64.7285 303.548 64.5473 302.899 64.4776 302.634L64.3939 302.216C64.2685 302.913 63.6691 304.969 62.5957 308.385ZM60.7139 314.344H57.9538L62.7212 300.251H66.1294L70.8968 314.344H68.0531L67.0494 311.145H61.7175L60.7139 314.344ZM83.2088 313.675C82.3445 314.232 81.1318 314.511 79.5706 314.511C77.4796 314.511 75.7511 313.856 74.385 312.546C73.0329 311.221 72.3568 309.472 72.3568 307.297C72.3568 305.165 73.0259 303.429 74.3641 302.091C75.7163 300.739 77.4518 300.063 79.5706 300.063C81.1179 300.063 82.3236 300.321 83.1879 300.836V303.408C82.1285 302.795 80.9576 302.488 79.6751 302.488C78.3927 302.488 77.3193 302.927 76.4551 303.805C75.6048 304.67 75.1796 305.834 75.1796 307.297C75.1796 308.761 75.6048 309.925 76.4551 310.789C77.3193 311.653 78.4415 312.086 79.8215 312.086C81.1457 312.086 82.2749 311.737 83.2088 311.04V313.675ZM90.2631 314.344H85.663V300.251H90.2631C92.368 300.251 94.0895 300.899 95.4277 302.195C96.7659 303.492 97.435 305.13 97.435 307.109C97.435 309.27 96.7868 311.019 95.4905 312.357C94.1941 313.682 92.4516 314.344 90.2631 314.344ZM90.1795 302.467H88.3604V312.148H90.2213C91.6989 312.148 92.821 311.695 93.5877 310.789C94.3544 309.869 94.7377 308.642 94.7377 307.109C94.7377 305.757 94.3265 304.649 93.5041 303.785C92.6956 302.906 91.5874 302.467 90.1795 302.467Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M85.4066 293.828H71.3531V292.104C75.3759 291.843 75.7416 291.32 75.7416 287.977V274.08C75.7416 271.625 75.5849 271.363 73.5996 271.207L71.1442 271.102V269.587C74.331 269.065 77.5701 268.177 81.0704 267.079V287.977C81.0704 291.268 81.4361 291.843 85.4066 292.104V293.828Z"
                    fill="#F8FAFD"
                  />
                </g>
                <g clip-path="url(#clip4_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(114.957 113.672)"
                    fill="#6595DD"
                  />
                  <path
                    d="M138.551 150.5V147.334C140.841 145.223 142.843 143.285 144.557 141.52C146.284 139.754 147.621 138.136 148.567 136.665C149.527 135.194 150.007 133.832 150.007 132.578C150.007 131.26 149.655 130.224 148.951 129.469C148.248 128.715 147.25 128.337 145.958 128.337C145.011 128.337 144.141 128.612 143.348 129.162C142.555 129.712 141.819 130.352 141.141 131.081L138.417 128.395C139.594 127.064 140.822 126.047 142.101 125.344C143.38 124.627 144.902 124.269 146.668 124.269C148.331 124.269 149.783 124.602 151.024 125.267C152.277 125.919 153.249 126.841 153.94 128.03C154.631 129.22 154.976 130.621 154.976 132.232C154.976 133.819 154.541 135.379 153.672 136.914C152.815 138.437 151.67 139.978 150.237 141.539C148.804 143.1 147.237 144.731 145.536 146.432C146.201 146.355 146.93 146.291 147.723 146.24C148.529 146.189 149.245 146.163 149.872 146.163H156.204V150.5H138.551Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M133.908 167.062L133.713 167.688H137.813L137.618 167.041C137.129 165.487 136.727 164.186 136.41 163.136C136.108 162.071 135.921 161.403 135.849 161.129L135.763 160.698C135.634 161.417 135.015 163.538 133.908 167.062ZM131.966 173.211H129.118L134.037 158.67H137.554L142.473 173.211H139.538L138.503 169.91H133.001L131.966 173.211ZM152.954 173.211H144.562V158.67H147.28V170.795H152.954V173.211ZM166.597 173.211H163.167L157.946 166.005L162.972 158.67H166.23L161.182 165.962L166.597 173.211ZM157.73 173.211H155.012V158.67H157.73V173.211Z"
                    fill="#F8FAFD"
                  />
                </g>
                <path
                  d="M218.09 152.742C215.895 152.742 214.08 152.35 212.645 151.564C211.222 150.778 210.058 149.891 209.15 148.902L210.836 146.749C211.649 147.616 212.618 148.381 213.742 149.045C214.88 149.695 216.268 150.02 217.907 150.02C219.586 150.02 220.968 149.552 222.052 148.618C223.149 147.683 223.697 146.417 223.697 144.819C223.697 143.721 223.413 142.76 222.844 141.934C222.275 141.094 221.34 140.444 220.04 139.983C218.753 139.523 217.013 139.292 214.819 139.292V136.712C216.783 136.712 218.34 136.482 219.492 136.021C220.643 135.547 221.469 134.917 221.97 134.132C222.471 133.333 222.722 132.452 222.722 131.49C222.722 130.136 222.282 129.059 221.401 128.26C220.535 127.461 219.356 127.061 217.866 127.061C216.715 127.061 215.645 127.325 214.656 127.854C213.667 128.368 212.767 129.039 211.954 129.865L210.186 127.752C211.216 126.79 212.367 125.984 213.64 125.334C214.913 124.684 216.349 124.359 217.948 124.359C220.304 124.359 222.241 124.962 223.758 126.167C225.289 127.359 226.054 129.059 226.054 131.267C226.054 132.919 225.587 134.287 224.652 135.371C223.731 136.441 222.526 137.247 221.036 137.789V137.972C222.688 138.351 224.104 139.136 225.282 140.328C226.46 141.52 227.05 143.064 227.05 144.961C227.05 146.573 226.643 147.961 225.831 149.126C225.031 150.291 223.955 151.185 222.6 151.808C221.246 152.431 219.742 152.742 218.09 152.742Z"
                  fill="#F8FAFD"
                />
                <g clip-path="url(#clip5_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(114.957 185.375)"
                    fill="#023F5B"
                  />
                  <path
                    d="M132.723 192.992C135.527 193.652 136.462 194.822 136.847 198.068V216.153C137.626 219.526 138.881 220.898 141.923 222.498C148.225 223.09 151.631 223.067 157.47 222.498C161.18 221.526 162.189 219.916 163.18 216.153V192.992"
                    stroke="#6DC1F7"
                    stroke-width="2.53814"
                    stroke-linecap="round"
                  />
                  <line
                    x1="148.585"
                    y1="199.34"
                    x2="156.834"
                    y2="199.34"
                    stroke="#6DC1F7"
                    stroke-width="2.53814"
                    stroke-linecap="round"
                  />
                  <line
                    x1="152.394"
                    y1="206.317"
                    x2="156.836"
                    y2="206.317"
                    stroke="#6DC1F7"
                    stroke-width="2.53814"
                    stroke-linecap="round"
                  />
                  <line
                    x1="147.953"
                    y1="212.661"
                    x2="156.836"
                    y2="212.661"
                    stroke="#6DC1F7"
                    stroke-width="2.53814"
                    stroke-linecap="round"
                  />
                  <path
                    d="M132.903 234.048C134.097 235.4 134.694 237.213 134.694 239.485C134.694 241.758 134.09 243.577 132.881 244.943C131.688 246.31 130.07 246.993 128.027 246.993C125.999 246.993 124.374 246.31 123.151 244.943C121.943 243.577 121.339 241.758 121.339 239.485C121.339 237.227 121.943 235.415 123.151 234.048C124.36 232.682 125.978 231.999 128.006 231.999C130.077 231.999 131.709 232.682 132.903 234.048ZM124.813 235.537C124.05 236.501 123.669 237.817 123.669 239.485C123.669 241.153 124.065 242.477 124.856 243.455C125.647 244.433 126.704 244.922 128.027 244.922C129.394 244.922 130.458 244.44 131.22 243.476C131.983 242.513 132.364 241.182 132.364 239.485C132.364 237.802 131.975 236.479 131.199 235.515C130.436 234.552 129.372 234.07 128.006 234.07C126.654 234.07 125.589 234.559 124.813 235.537ZM145.997 234.135H142.179V246.82H139.956V234.135H136.159V232.279H145.997V234.135ZM154.109 246.82H151.887V241.405L146.968 232.279H149.514L150.549 234.415C151.211 235.753 151.743 236.853 152.146 237.716C152.549 238.579 152.786 239.111 152.858 239.312L152.987 239.593C153.117 239.161 153.951 237.436 155.49 234.415L156.547 232.279H159.093L154.109 241.405V246.82ZM162.704 244.512C162.992 244.785 163.136 245.123 163.136 245.526C163.136 245.929 162.992 246.274 162.704 246.561C162.431 246.849 162.093 246.993 161.69 246.993C161.273 246.993 160.921 246.849 160.633 246.561C160.36 246.274 160.223 245.929 160.223 245.526C160.223 245.123 160.36 244.785 160.633 244.512C160.921 244.224 161.273 244.08 161.69 244.08C162.093 244.08 162.431 244.224 162.704 244.512ZM175.872 246.108C174.981 246.698 173.744 246.993 172.162 246.993C169.99 246.993 168.213 246.317 166.833 244.965C165.452 243.613 164.762 241.801 164.762 239.528C164.762 237.328 165.452 235.537 166.833 234.156C168.228 232.775 169.99 232.085 172.118 232.085C173.672 232.085 174.916 232.351 175.851 232.883V235.062C175.218 234.717 174.643 234.48 174.125 234.35C173.621 234.207 172.974 234.135 172.183 234.135C170.73 234.135 169.515 234.631 168.537 235.623C167.573 236.601 167.092 237.903 167.092 239.528C167.092 241.182 167.573 242.498 168.537 243.476C169.501 244.454 170.774 244.943 172.356 244.943C173.751 244.943 174.923 244.584 175.872 243.865V246.108Z"
                    fill="#6DC2F8"
                  />
                </g>
                <g clip-path="url(#clip6_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(114.957 254.539)"
                    fill="#FFA500"
                  />
                  <path
                    d="M132.393 308.385L132.204 308.991H136.177L135.989 308.364C135.515 306.858 135.125 305.597 134.818 304.579C134.525 303.548 134.344 302.899 134.274 302.634L134.191 302.216C134.065 302.913 133.466 304.969 132.393 308.385ZM130.511 314.344H127.751L132.518 300.251H135.926L140.694 314.344H137.85L136.846 311.145H131.514L130.511 314.344ZM153.006 313.675C152.141 314.232 150.929 314.511 149.367 314.511C147.277 314.511 145.548 313.856 144.182 312.546C142.83 311.221 142.154 309.472 142.154 307.297C142.154 305.165 142.823 303.429 144.161 302.091C145.513 300.739 147.249 300.063 149.367 300.063C150.915 300.063 152.121 300.321 152.985 300.836V303.408C151.925 302.795 150.754 302.488 149.472 302.488C148.19 302.488 147.116 302.927 146.252 303.805C145.402 304.67 144.976 305.834 144.976 307.297C144.976 308.761 145.402 309.925 146.252 310.789C147.116 311.653 148.238 312.086 149.618 312.086C150.943 312.086 152.072 311.737 153.006 311.04V313.675ZM160.06 314.344H155.46V300.251H160.06C162.165 300.251 163.886 300.899 165.225 302.195C166.563 303.492 167.232 305.13 167.232 307.109C167.232 309.27 166.584 311.019 165.287 312.357C163.991 313.682 162.249 314.344 160.06 314.344ZM159.976 302.467H158.157V312.148H160.018C161.496 312.148 162.618 311.695 163.385 310.789C164.151 309.869 164.535 308.642 164.535 307.109C164.535 305.757 164.123 304.649 163.301 303.785C162.492 302.906 161.384 302.467 159.976 302.467Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M137.914 292.633V289.467C140.204 287.356 142.206 285.418 143.92 283.653C145.647 281.887 146.984 280.269 147.931 278.798C148.89 277.327 149.37 275.964 149.37 274.711C149.37 273.393 149.018 272.357 148.314 271.602C147.611 270.847 146.613 270.47 145.321 270.47C144.374 270.47 143.505 270.745 142.711 271.295C141.918 271.845 141.183 272.485 140.505 273.214L137.78 270.528C138.957 269.197 140.185 268.18 141.464 267.477C142.743 266.76 144.266 266.402 146.031 266.402C147.694 266.402 149.146 266.735 150.387 267.4C151.641 268.052 152.613 268.973 153.304 270.163C153.994 271.353 154.34 272.753 154.34 274.365C154.34 275.952 153.905 277.512 153.035 279.047C152.178 280.57 151.033 282.111 149.6 283.672C148.167 285.232 146.6 286.863 144.899 288.565C145.564 288.488 146.293 288.424 147.086 288.373C147.892 288.322 148.609 288.296 149.236 288.296H155.568V292.633H137.914Z"
                    fill="#F8FAFD"
                  />
                </g>
                <g clip-path="url(#clip7_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(184.754 113.672)"
                    fill="#A667CE"
                  />
                  <path
                    d="M204.341 166.429L204.147 167.055H208.246L208.052 166.408C207.563 164.855 207.16 163.553 206.844 162.503C206.542 161.439 206.355 160.77 206.283 160.497L206.197 160.065C206.067 160.784 205.449 162.906 204.341 166.429ZM202.4 172.578H199.552L204.471 158.037H207.987L212.906 172.578H209.972L208.936 169.277H203.435L202.4 172.578ZM223.388 172.578H214.995V158.037H217.713V170.162H223.388V172.578ZM237.031 172.578H233.6L228.379 165.372L233.406 158.037H236.664L231.615 165.329L237.031 172.578ZM228.164 172.578H225.445V158.037H228.164V172.578Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M217.254 152.742C215.059 152.742 213.211 152.37 211.707 151.625C210.217 150.866 208.998 149.959 208.05 148.902L210.326 145.875C211.138 146.701 212.08 147.412 213.15 148.008C214.233 148.604 215.473 148.902 216.868 148.902C218.371 148.902 219.597 148.523 220.545 147.765C221.507 147.006 221.988 145.956 221.988 144.615C221.988 143.667 221.744 142.841 221.256 142.137C220.782 141.419 219.949 140.863 218.757 140.471C217.579 140.078 215.947 139.881 213.861 139.881V136.407C216.57 136.407 218.446 135.981 219.489 135.127C220.545 134.274 221.073 133.211 221.073 131.937C221.073 130.773 220.701 129.858 219.956 129.195C219.225 128.531 218.215 128.199 216.929 128.199C215.859 128.199 214.877 128.436 213.983 128.91C213.102 129.384 212.242 130.014 211.402 130.8L208.964 127.854C210.089 126.838 211.314 126.012 212.642 125.375C213.983 124.738 215.473 124.42 217.112 124.42C219.685 124.42 221.778 125.043 223.39 126.289C225.015 127.535 225.828 129.31 225.828 131.612C225.828 133.129 225.394 134.409 224.527 135.452C223.674 136.495 222.516 137.308 221.053 137.89V138.073C222.665 138.493 224.019 139.279 225.117 140.43C226.227 141.581 226.783 143.064 226.783 144.88C226.783 146.532 226.349 147.947 225.482 149.126C224.615 150.291 223.457 151.185 222.008 151.808C220.572 152.431 218.987 152.742 217.254 152.742Z"
                    fill="#F8FAFD"
                  />
                </g>
                <g clip-path="url(#clip8_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(184.754 185.375)"
                    fill="#FF0000"
                  />
                  <path
                    d="M197.467 214.863H193.892V226.781H191.236V214.863H187.661V212.688H197.467V214.863ZM210.379 221.366C210.379 223.192 209.885 224.586 208.895 225.548C207.919 226.495 206.574 226.969 204.859 226.969C203.187 226.969 201.848 226.502 200.845 225.569C199.855 224.621 199.36 223.268 199.36 221.512V212.688H201.995V221.491C201.995 222.565 202.26 223.345 202.789 223.833C203.319 224.307 204.009 224.544 204.859 224.544C206.783 224.544 207.745 223.492 207.745 221.387V212.688H210.379V221.366ZM217.576 214.863H215.861V219.463H217.618C218.426 219.463 219.033 219.261 219.437 218.857C219.841 218.438 220.043 217.86 220.043 217.121C220.043 216.396 219.827 215.839 219.395 215.448C218.977 215.058 218.371 214.863 217.576 214.863ZM215.861 226.781H213.227V212.688H217.576C219.179 212.688 220.434 213.093 221.34 213.901C222.26 214.71 222.72 215.79 222.72 217.142C222.706 218.146 222.462 218.996 221.988 219.693C221.514 220.376 220.866 220.885 220.043 221.219L223.661 226.781H220.503L217.304 221.638H215.861V226.781ZM231.248 226.781H225.54V212.688H230.537C232.043 212.688 233.213 213.044 234.05 213.755C234.886 214.466 235.304 215.386 235.304 216.515C235.304 217.281 235.095 217.951 234.677 218.522C234.259 219.08 233.722 219.449 233.067 219.63C233.82 219.811 234.44 220.181 234.928 220.738C235.416 221.282 235.66 222.028 235.66 222.976C235.66 224.091 235.27 225.004 234.489 225.715C233.708 226.426 232.628 226.781 231.248 226.781ZM230.203 214.842H228.174V218.627H229.763C230.711 218.627 231.422 218.438 231.896 218.062C232.37 217.686 232.607 217.205 232.607 216.619C232.607 216.076 232.405 215.644 232.001 215.323C231.61 215.002 231.011 214.842 230.203 214.842ZM230.328 220.738H228.174V224.628H230.433C232.119 224.628 232.963 223.986 232.963 222.704C232.963 221.394 232.084 220.738 230.328 220.738ZM250.669 219.693C250.669 221.868 250.062 223.617 248.849 224.941C247.651 226.265 246.041 226.928 244.019 226.928C241.998 226.928 240.381 226.265 239.168 224.941C237.956 223.617 237.349 221.868 237.349 219.693C237.349 217.504 237.949 215.748 239.147 214.424C240.36 213.1 241.977 212.437 243.998 212.437C246.048 212.437 247.672 213.1 248.87 214.424C250.069 215.734 250.669 217.491 250.669 219.693ZM240.172 219.693C240.172 221.171 240.521 222.341 241.218 223.206C241.914 224.07 242.848 224.502 244.019 224.502C245.204 224.502 246.138 224.077 246.821 223.227C247.504 222.362 247.846 221.185 247.846 219.693C247.846 218.201 247.504 217.024 246.821 216.159C246.138 215.295 245.197 214.863 243.998 214.863C242.814 214.863 241.88 215.295 241.197 216.159C240.514 217.024 240.172 218.201 240.172 219.693Z"
                    fill="#F8FAFD"
                  />
                </g>
                <g clip-path="url(#clip9_4826_3862)">
                  <rect
                    width="67.2608"
                    height="67.2608"
                    transform="translate(184.754 254.539)"
                    fill="#F58A84"
                  />
                  <path
                    d="M202.826 308.385L202.638 308.991H206.611L206.423 308.364C205.949 306.858 205.558 305.597 205.252 304.579C204.959 303.548 204.778 302.899 204.708 302.634L204.624 302.216C204.499 302.913 203.9 304.969 202.826 308.385ZM200.944 314.344H198.184L202.952 300.251H206.36L211.127 314.344H208.284L207.28 311.145H201.948L200.944 314.344ZM223.439 313.675C222.575 314.232 221.362 314.511 219.801 314.511C217.71 314.511 215.982 313.856 214.616 312.546C213.263 311.221 212.587 309.472 212.587 307.297C212.587 305.165 213.256 303.429 214.595 302.091C215.947 300.739 217.682 300.063 219.801 300.063C221.348 300.063 222.554 300.321 223.418 300.836V303.408C222.359 302.795 221.188 302.488 219.906 302.488C218.623 302.488 217.55 302.927 216.686 303.805C215.835 304.67 215.41 305.834 215.41 307.297C215.41 308.761 215.835 309.925 216.686 310.789C217.55 311.653 218.672 312.086 220.052 312.086C221.376 312.086 222.505 311.737 223.439 311.04V313.675ZM230.494 314.344H225.894V300.251H230.494C232.598 300.251 234.32 300.899 235.658 302.195C236.996 303.492 237.666 305.13 237.666 307.109C237.666 309.27 237.017 311.019 235.721 312.357C234.425 313.682 232.682 314.344 230.494 314.344ZM230.41 302.467H228.591V312.148H230.452C231.929 312.148 233.051 311.695 233.818 310.789C234.585 309.869 234.968 308.642 234.968 307.109C234.968 305.757 234.557 304.649 233.735 303.785C232.926 302.906 231.818 302.467 230.41 302.467Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M217.652 294.875C215.444 294.875 213.575 294.509 212.045 293.778C210.528 293.047 209.288 292.132 208.327 291.035L210.886 287.561C211.713 288.374 212.647 289.064 213.69 289.633C214.733 290.189 215.891 290.466 217.165 290.466C218.587 290.466 219.738 290.134 220.618 289.471C221.512 288.807 221.959 287.872 221.959 286.667C221.959 285.773 221.736 285.008 221.289 284.371C220.842 283.721 220.056 283.22 218.932 282.868C217.821 282.502 216.243 282.319 214.198 282.319V278.398C216.785 278.398 218.573 278.012 219.562 277.24C220.564 276.468 221.065 275.486 221.065 274.294C221.065 273.237 220.727 272.411 220.05 271.815C219.386 271.205 218.465 270.901 217.286 270.901C216.257 270.901 215.316 271.131 214.462 271.591C213.623 272.038 212.783 272.641 211.943 273.4L209.16 270.047C210.338 269.004 211.611 268.171 212.979 267.548C214.347 266.912 215.851 266.593 217.49 266.593C220.199 266.593 222.379 267.23 224.032 268.503C225.698 269.763 226.531 271.564 226.531 273.908C226.531 275.371 226.118 276.617 225.291 277.646C224.479 278.662 223.334 279.475 221.858 280.084V280.247C223.456 280.68 224.79 281.466 225.86 282.603C226.93 283.741 227.465 285.204 227.465 286.992C227.465 288.658 227.018 290.08 226.124 291.259C225.231 292.423 224.039 293.317 222.549 293.941C221.059 294.564 219.427 294.875 217.652 294.875Z"
                    fill="#F8FAFD"
                  />
                </g>
                <g clip-path="url(#clip10_4826_3862)">
                  <mask id="path-24-inside-1_4826_3862" fill="white">
                    <path d="M38.1797 329.414H258.998V366.217H38.1797V329.414Z" />
                  </mask>
                  <path
                    d="M38.1797 329.414H258.998V366.217H38.1797V329.414Z"
                    fill="#044561"
                  />
                  <path
                    d="M96.4915 351.729C96.4915 353.431 95.927 354.795 94.7979 355.82C93.6861 356.827 92.1314 357.331 90.1338 357.331C88.3446 357.331 86.8681 357.036 85.7042 356.445V353.97C86.8159 354.647 88.1535 354.986 89.7169 354.986C92.4615 354.986 93.8338 353.874 93.8338 351.651C93.8338 350.765 93.5211 350.078 92.8958 349.592C92.2878 349.088 91.4627 348.836 90.4204 348.836C89.1002 348.836 87.7974 349.14 86.512 349.748V340.082H95.345V342.296H89.0394V346.778C89.6821 346.639 90.2728 346.57 90.8112 346.57C92.5831 346.57 93.9727 347.039 94.9803 347.977C95.9878 348.897 96.4915 350.148 96.4915 351.729ZM110.688 348.576C110.688 351.234 110.158 353.362 109.099 354.96C108.056 356.558 106.562 357.357 104.617 357.357C102.758 357.357 101.29 356.558 100.213 354.96C99.1537 353.362 98.6239 351.234 98.6239 348.576C98.6239 345.901 99.1537 343.782 100.213 342.218C101.29 340.637 102.758 339.847 104.617 339.847C106.51 339.847 107.995 340.629 109.072 342.192C110.149 343.755 110.688 345.883 110.688 348.576ZM102.194 343.886C101.551 344.98 101.23 346.544 101.23 348.576C101.23 350.608 101.542 352.189 102.168 353.318C102.81 354.43 103.627 354.986 104.617 354.986C105.694 354.986 106.536 354.43 107.144 353.318C107.752 352.206 108.056 350.626 108.056 348.576C108.056 346.509 107.735 344.937 107.092 343.86C106.467 342.765 105.642 342.218 104.617 342.218C103.644 342.218 102.836 342.774 102.194 343.886ZM119.675 357.174H117.278L126.763 339.508H129.186L119.675 357.174ZM121.734 343.599C121.734 344.815 121.308 345.849 120.457 346.7C119.606 347.551 118.572 347.977 117.356 347.977C116.158 347.977 115.133 347.551 114.282 346.7C113.431 345.849 113.005 344.815 113.005 343.599C113.005 342.401 113.431 341.376 114.282 340.525C115.133 339.673 116.158 339.248 117.356 339.248C118.572 339.248 119.606 339.673 120.457 340.525C121.308 341.376 121.734 342.401 121.734 343.599ZM115.168 343.599C115.168 344.207 115.376 344.728 115.793 345.163C116.227 345.597 116.748 345.814 117.356 345.814C117.964 345.814 118.485 345.597 118.92 345.163C119.354 344.728 119.571 344.207 119.571 343.599C119.571 342.991 119.354 342.479 118.92 342.062C118.485 341.628 117.964 341.41 117.356 341.41C116.748 341.41 116.227 341.628 115.793 342.062C115.376 342.496 115.168 343.009 115.168 343.599ZM133.537 352.979C133.537 354.195 133.112 355.229 132.261 356.08C131.409 356.914 130.384 357.331 129.186 357.331C127.97 357.331 126.936 356.914 126.085 356.08C125.234 355.229 124.808 354.195 124.808 352.979C124.808 351.781 125.234 350.756 126.085 349.905C126.936 349.036 127.97 348.602 129.186 348.602C130.384 348.602 131.409 349.036 132.261 349.905C133.112 350.756 133.537 351.781 133.537 352.979ZM127.623 351.416C127.188 351.85 126.971 352.371 126.971 352.979C126.971 353.587 127.188 354.109 127.623 354.543C128.057 354.977 128.578 355.194 129.186 355.194C129.794 355.194 130.306 354.977 130.723 354.543C131.157 354.109 131.375 353.587 131.375 352.979C131.375 352.371 131.157 351.85 130.723 351.416C130.306 350.982 129.794 350.765 129.186 350.765C128.578 350.765 128.057 350.982 127.623 351.416Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M61.2335 351.863H55.6921V358.219H53.3625V342.974H62.0025V344.92H55.6921V349.918H61.2335V351.863ZM68.9492 358.219H66.7553V345.847L63.2496 347.996V345.621L66.9363 343.427H68.9492V358.219Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M167.535 351.863H161.993V358.219H159.664V342.974H168.304V344.92H161.993V349.918H167.535V351.863ZM179.48 358.219H170.003V356.387C171.903 355 173.501 353.567 174.798 352.089C176.11 350.597 176.766 349.24 176.766 348.018C176.766 347.159 176.517 346.503 176.02 346.05C175.522 345.583 174.836 345.349 173.961 345.349C172.755 345.349 171.571 345.802 170.41 346.706V344.512C171.496 343.683 172.785 343.269 174.278 343.269C175.665 343.269 176.811 343.661 177.716 344.445C178.621 345.214 179.073 346.314 179.073 347.747C179.073 350.401 177.067 353.25 173.057 356.296H179.48V358.219Z"
                    fill="#F8FAFD"
                  />
                  <path
                    d="M204.995 351.729C204.995 353.431 204.431 354.795 203.302 355.82C202.19 356.827 200.635 357.331 198.638 357.331C196.848 357.331 195.372 357.036 194.208 356.445V353.97C195.32 354.647 196.657 354.986 198.221 354.986C200.965 354.986 202.338 353.874 202.338 351.651C202.338 350.765 202.025 350.078 201.4 349.592C200.792 349.088 199.967 348.836 198.924 348.836C197.604 348.836 196.301 349.14 195.016 349.748V340.082H203.849V342.296H197.543V346.778C198.186 346.639 198.777 346.57 199.315 346.57C201.087 346.57 202.477 347.039 203.484 347.977C204.492 348.897 204.995 350.148 204.995 351.729ZM219.192 348.576C219.192 351.234 218.662 353.362 217.602 354.96C216.56 356.558 215.066 357.357 213.121 357.357C211.262 357.357 209.794 356.558 208.717 354.96C207.658 353.362 207.128 351.234 207.128 348.576C207.128 345.901 207.658 343.782 208.717 342.218C209.794 340.637 211.262 339.847 213.121 339.847C215.014 339.847 216.499 340.629 217.576 342.192C218.653 343.755 219.192 345.883 219.192 348.576ZM210.697 343.886C210.055 344.98 209.733 346.544 209.733 348.576C209.733 350.608 210.046 352.189 210.671 353.318C211.314 354.43 212.131 354.986 213.121 354.986C214.198 354.986 215.04 354.43 215.648 353.318C216.256 352.206 216.56 350.626 216.56 348.576C216.56 346.509 216.239 344.937 215.596 343.86C214.971 342.765 214.146 342.218 213.121 342.218C212.148 342.218 211.34 342.774 210.697 343.886ZM228.179 357.174H225.782L235.267 339.508H237.69L228.179 357.174ZM230.238 343.599C230.238 344.815 229.812 345.849 228.961 346.7C228.11 347.551 227.076 347.977 225.86 347.977C224.662 347.977 223.637 347.551 222.786 346.7C221.934 345.849 221.509 344.815 221.509 343.599C221.509 342.401 221.934 341.376 222.786 340.525C223.637 339.673 224.662 339.248 225.86 339.248C227.076 339.248 228.11 339.673 228.961 340.525C229.812 341.376 230.238 342.401 230.238 343.599ZM223.672 343.599C223.672 344.207 223.88 344.728 224.297 345.163C224.731 345.597 225.252 345.814 225.86 345.814C226.468 345.814 226.989 345.597 227.424 345.163C227.858 344.728 228.075 344.207 228.075 343.599C228.075 342.991 227.858 342.479 227.424 342.062C226.989 341.628 226.468 341.41 225.86 341.41C225.252 341.41 224.731 341.628 224.297 342.062C223.88 342.496 223.672 343.009 223.672 343.599ZM242.041 352.979C242.041 354.195 241.616 355.229 240.764 356.08C239.913 356.914 238.888 357.331 237.69 357.331C236.474 357.331 235.44 356.914 234.589 356.08C233.738 355.229 233.312 354.195 233.312 352.979C233.312 351.781 233.738 350.756 234.589 349.905C235.44 349.036 236.474 348.602 237.69 348.602C238.888 348.602 239.913 349.036 240.764 349.905C241.616 350.756 242.041 351.781 242.041 352.979ZM236.126 351.416C235.692 351.85 235.475 352.371 235.475 352.979C235.475 353.587 235.692 354.109 236.126 354.543C236.561 354.977 237.082 355.194 237.69 355.194C238.298 355.194 238.81 354.977 239.227 354.543C239.661 354.109 239.879 353.587 239.879 352.979C239.879 352.371 239.661 351.85 239.227 351.416C238.81 350.982 238.298 350.765 237.69 350.765C237.082 350.765 236.561 350.982 236.126 351.416Z"
                    fill="#F8FAFD"
                  />
                </g>
                <path
                  d="M38.1797 331.318H258.998V327.51H38.1797V331.318Z"
                  fill="#58ABC9"
                  mask="url(#path-24-inside-1_4826_3862)"
                />
                <path
                  d="M115.547 92.4165C115.549 88.9265 117.491 86.6533 121.575 82.8984L121.578 82.9013C125.454 86.2249 128.235 88.6104 128.238 92.4165C128.24 96.2237 125.669 97.7189 121.575 98.1273C118.032 97.8492 115.544 95.9064 115.547 92.4165Z"
                  fill="#A4DBF3"
                />
                <path
                  d="M187.807 91.1763C187.807 94.2171 187.201 96.6517 185.989 98.4802C184.796 100.309 183.087 101.223 180.861 101.223C178.735 101.223 177.055 100.309 175.823 98.4802C174.611 96.6517 174.005 94.2171 174.005 91.1763C174.005 88.1157 174.611 85.691 175.823 83.9023C177.055 82.0937 178.735 81.1894 180.861 81.1894C183.028 81.1894 184.727 82.0838 185.959 83.8725C187.191 85.6612 187.807 88.0958 187.807 91.1763ZM178.089 85.8102C177.353 87.0623 176.986 88.851 176.986 91.1763C176.986 93.5016 177.343 95.3102 178.059 96.6021C178.794 97.874 179.728 98.51 180.861 98.51C182.093 98.51 183.057 97.874 183.753 96.6021C184.449 95.3301 184.796 93.5215 184.796 91.1763C184.796 88.8113 184.429 87.0126 183.693 85.7804C182.978 84.5283 182.034 83.9023 180.861 83.9023C179.748 83.9023 178.824 84.5383 178.089 85.8102ZM196.54 91.5639C198.05 91.5639 199.273 90.9776 200.207 89.805C200.167 87.9766 199.829 86.5357 199.193 85.4823C198.577 84.429 197.643 83.9023 196.391 83.9023C195.357 83.9023 194.533 84.2501 193.916 84.9457C193.3 85.6214 192.992 86.5456 192.992 87.7182C192.992 88.9107 193.31 89.8547 193.946 90.5503C194.602 91.226 195.467 91.5639 196.54 91.5639ZM203.098 90.0733C203.098 93.611 202.343 96.3536 200.833 98.3013C199.342 100.249 197.196 101.223 194.393 101.223C193.121 101.223 191.979 101.034 190.965 100.656V97.8243C191.979 98.2815 193.052 98.51 194.185 98.51C197.603 98.51 199.571 96.4828 200.087 92.4284C199.133 93.5215 197.712 94.0681 195.824 94.0681C194.195 94.0681 192.803 93.4917 191.651 92.339C190.518 91.1863 189.951 89.6659 189.951 87.7778C189.951 85.8897 190.518 84.3296 191.651 83.0974C192.784 81.8652 194.324 81.2491 196.272 81.2491C198.497 81.2491 200.187 82.0738 201.34 83.7234C202.512 85.3531 203.098 87.4698 203.098 90.0733ZM209.41 87.9269C209.808 88.3045 210.006 88.7715 210.006 89.328C210.006 89.8845 209.808 90.3615 209.41 90.759C209.032 91.1366 208.565 91.3254 208.009 91.3254C207.433 91.3254 206.956 91.1366 206.578 90.759C206.2 90.3814 206.012 89.9044 206.012 89.328C206.012 88.7715 206.2 88.3045 206.578 87.9269C206.975 87.5294 207.452 87.3306 208.009 87.3306C208.565 87.3306 209.032 87.5294 209.41 87.9269ZM209.41 97.6157C209.808 97.9933 210.006 98.4603 210.006 99.0168C210.006 99.5733 209.808 100.05 209.41 100.448C209.032 100.825 208.565 101.014 208.009 101.014C207.433 101.014 206.956 100.825 206.578 100.448C206.2 100.05 206.012 99.5733 206.012 99.0168C206.012 98.4603 206.2 97.9933 206.578 97.6157C206.975 97.2182 207.452 97.0194 208.009 97.0194C208.565 97.0194 209.032 97.2182 209.41 97.6157ZM224.376 95.6183C224.376 97.2281 223.799 98.5597 222.646 99.613C221.494 100.647 219.874 101.163 217.787 101.163C215.82 101.163 214.16 100.825 212.809 100.15V97.2877C214.279 98.0827 215.889 98.4802 217.638 98.4802C218.811 98.4802 219.725 98.192 220.381 97.6157C221.057 97.0194 221.394 96.2642 221.394 95.35C221.394 94.396 221.027 93.6606 220.291 93.1439C219.556 92.6272 218.453 92.3688 216.982 92.3688H215.79V89.8646H216.982C218.075 89.8646 218.99 89.5963 219.725 89.0597C220.48 88.5032 220.858 87.748 220.858 86.794C220.858 85.8401 220.55 85.1246 219.934 84.6476C219.337 84.1706 218.513 83.9321 217.459 83.9321C216.108 83.9321 214.766 84.3495 213.435 85.1842V82.3521C214.667 81.6366 216.038 81.2789 217.549 81.2789C219.536 81.2789 221.086 81.7757 222.199 82.7695C223.332 83.7433 223.899 84.9755 223.899 86.4661C223.899 87.5393 223.63 88.4834 223.094 89.2982C222.577 90.0932 221.802 90.6994 220.768 91.1167C221.901 91.395 222.786 91.9216 223.422 92.6967C224.058 93.4718 224.376 94.4457 224.376 95.6183ZM240.793 91.1763C240.793 94.2171 240.187 96.6517 238.974 98.4802C237.782 100.309 236.073 101.223 233.847 101.223C231.72 101.223 230.041 100.309 228.809 98.4802C227.596 96.6517 226.99 94.2171 226.99 91.1763C226.99 88.1157 227.596 85.691 228.809 83.9023C230.041 82.0937 231.72 81.1894 233.847 81.1894C236.013 81.1894 237.712 82.0838 238.945 83.8725C240.177 85.6612 240.793 88.0958 240.793 91.1763ZM231.074 85.8102C230.339 87.0623 229.971 88.851 229.971 91.1763C229.971 93.5016 230.329 95.3102 231.045 96.6021C231.78 97.874 232.714 98.51 233.847 98.51C235.079 98.51 236.043 97.874 236.739 96.6021C237.434 95.3301 237.782 93.5215 237.782 91.1763C237.782 88.8113 237.414 87.0126 236.679 85.7804C235.963 84.5283 235.019 83.9023 233.847 83.9023C232.734 83.9023 231.81 84.5383 231.074 85.8102ZM248.959 98.8081C249.913 98.8081 250.658 98.5498 251.195 98.033C251.751 97.4964 252.03 96.8008 252.03 95.9462V94.2469H249.764C248.651 94.2469 247.806 94.4656 247.23 94.9028C246.673 95.34 246.395 95.8965 246.395 96.5722C246.395 97.2679 246.614 97.8144 247.051 98.2119C247.488 98.6094 248.124 98.8081 248.959 98.8081ZM252.119 99.1957C251.344 100.468 249.983 101.104 248.035 101.104C246.604 101.104 245.451 100.696 244.577 99.8813C243.722 99.0466 243.295 97.9933 243.295 96.7213C243.295 95.2705 243.841 94.1476 244.934 93.3526C246.028 92.5377 247.558 92.1303 249.525 92.1303H252.03V91.2658C252.03 90.2323 251.781 89.4572 251.284 88.9405C250.787 88.4039 249.963 88.1356 248.81 88.1356C247.2 88.1356 245.739 88.5827 244.428 89.4771V86.645C245.6 85.9692 247.15 85.6314 249.078 85.6314C253.033 85.6314 255.011 87.5493 255.011 91.385V100.984H252.119V99.1957Z"
                  fill="#F8FAFD"
                />
                <path
                  d="M147.985 94.0503C147.493 94.3315 146.842 94.4722 146.034 94.4722C144.997 94.4722 144.17 94.1601 143.555 93.5361C142.94 92.912 142.632 92.0946 142.632 91.0838C142.632 90.0115 142.913 89.1721 143.476 88.5656C144.038 87.9504 144.755 87.6427 145.625 87.6427C146.478 87.6427 147.154 87.9108 147.655 88.447C148.156 88.9743 148.407 89.739 148.407 90.741C148.407 91.0135 148.38 91.2992 148.328 91.598H143.937C144.025 92.1781 144.271 92.622 144.676 92.9296C145.08 93.2372 145.59 93.3911 146.205 93.3911C146.917 93.3911 147.51 93.2241 147.985 92.8901V94.0503ZM145.651 88.7107C145.212 88.7107 144.834 88.8733 144.517 89.1985C144.201 89.5149 144.003 89.9763 143.924 90.5828H147.154V90.3455C147.137 89.8445 147.001 89.449 146.746 89.1589C146.491 88.8601 146.126 88.7107 145.651 88.7107ZM154.648 94.1426C154.217 94.4062 153.668 94.5381 153 94.5381C151.954 94.5381 151.119 94.2085 150.495 93.5493C149.871 92.8901 149.559 92.0682 149.559 91.0838C149.559 90.1258 149.871 89.3083 150.495 88.6315C151.128 87.946 151.981 87.6032 153.053 87.6032C153.633 87.6032 154.165 87.7262 154.648 87.9723V89.1589C154.217 88.8864 153.73 88.7502 153.185 88.7502C152.49 88.7502 151.932 88.9699 151.51 89.4094C151.097 89.8489 150.891 90.4114 150.891 91.097C150.908 91.7738 151.115 92.3319 151.51 92.7714C151.906 93.2021 152.46 93.4174 153.172 93.4174C153.699 93.4174 154.191 93.2724 154.648 92.9824V94.1426ZM161.289 88.6052C161.843 89.2468 162.12 90.0686 162.12 91.0706C162.12 92.0726 161.834 92.8989 161.263 93.5493C160.7 94.1997 159.922 94.5249 158.929 94.5249C157.945 94.5249 157.171 94.2041 156.609 93.5625C156.046 92.9208 155.765 92.1078 155.765 91.1234C155.765 90.1214 156.055 89.2908 156.635 88.6315C157.215 87.9635 157.98 87.6295 158.929 87.6295C159.949 87.6295 160.735 87.9548 161.289 88.6052ZM157.11 91.0838C157.11 91.743 157.272 92.3012 157.598 92.7582C157.923 93.2065 158.367 93.4306 158.929 93.4306C159.527 93.4306 159.979 93.2109 160.287 92.7714C160.604 92.3319 160.762 91.7738 160.762 91.097C160.762 90.4026 160.612 89.8357 160.313 89.3962C160.015 88.948 159.549 88.7238 158.916 88.7238C158.345 88.7238 157.901 88.9524 157.584 89.4094C157.268 89.8577 157.11 90.4158 157.11 91.0838Z"
                  fill="#A4DBF3"
                />
                <path
                  d="M50.0129 99.2392L50.7174 95.9022C50.5295 95.7441 50.3599 95.5737 50.2086 95.3909C50.0572 95.2082 49.9129 95.0185 49.7757 94.8219L46.3703 95.0449L45.2604 89.3474L48.5075 88.2867C48.5311 88.1643 48.5616 88.049 48.599 87.9407L48.8319 87.2659C48.8693 87.1576 48.9164 87.048 48.9734 86.9371L47.0721 84.0991L51.4604 80.2997L54.0031 82.5759C54.2324 82.5059 54.4671 82.4471 54.7073 82.3995C54.9475 82.3519 55.1819 82.3209 55.4106 82.3067L56.9148 79.2457L62.413 81.1438L61.7086 84.4807C61.8964 84.6388 62.066 84.8092 62.2173 84.992C62.3687 85.1748 62.513 85.3644 62.6502 85.561L66.0556 85.3381L67.1655 91.0355L63.9184 92.0963C63.8948 92.2186 63.8644 92.334 63.827 92.4423L63.594 93.1171C63.5566 93.2254 63.5012 93.3321 63.4276 93.4372L65.3288 96.2752L60.9405 100.075L58.4228 97.807C58.1936 97.877 57.9588 97.9358 57.7186 97.9834C57.4784 98.031 57.244 98.062 57.0153 98.0763L55.5111 101.137L50.0129 99.2392ZM55.0551 93.7076C56.0215 94.0412 56.9641 93.9843 57.883 93.537C58.802 93.0897 59.4282 92.3829 59.7618 91.4165C60.0954 90.4502 60.0385 89.5076 59.5912 88.5886C59.1439 87.6697 58.4371 87.0435 57.4708 86.7099C56.4878 86.3705 55.541 86.4259 54.6304 86.8761C53.7198 87.3263 53.0977 88.0345 52.7641 89.0009C52.4305 89.9672 52.4832 90.9084 52.9222 91.8245C53.3611 92.7405 54.0721 93.3682 55.0551 93.7076Z"
                  fill="#9FD3EB"
                />
                <path
                  d="M67.4392 102.547L67.5862 100.676C67.4724 100.603 67.3677 100.522 67.2721 100.433C67.1765 100.344 67.0843 100.251 66.9954 100.153L65.1528 100.517L64.1416 97.4868L65.8382 96.6768C65.8423 96.6083 65.8508 96.5432 65.8635 96.4814L65.9426 96.0966C65.9553 96.0348 65.9732 95.9717 65.9964 95.9071L64.7568 94.4937L66.8813 92.1079L68.4309 93.1691C68.551 93.1146 68.675 93.0658 68.8027 93.0227C68.9304 92.9797 69.0561 92.9461 69.1799 92.922L69.7829 91.1445L72.9186 91.789L72.7716 93.6603C72.8854 93.7332 72.99 93.8141 73.0856 93.9031C73.1812 93.9921 73.2735 94.0853 73.3624 94.1828L75.205 93.8188L76.2161 96.8491L74.5196 97.6591C74.5154 97.7275 74.507 97.7926 74.4943 97.8544L74.4152 98.2392C74.4025 98.301 74.3798 98.3632 74.3471 98.4258L75.5867 99.8393L73.4622 102.225L71.9269 101.167C71.8067 101.221 71.6828 101.27 71.5551 101.313C71.4274 101.356 71.3017 101.39 71.1779 101.414L70.5748 103.191L67.4392 102.547ZM69.7972 99.1692C70.3483 99.2825 70.8587 99.1843 71.3284 98.8748C71.798 98.5653 72.0895 98.135 72.2028 97.5839C72.3161 97.0328 72.218 96.5224 71.9085 96.0528C71.599 95.5831 71.1686 95.2917 70.6175 95.1784C70.0569 95.0631 69.5442 95.1608 69.0793 95.4712C68.6144 95.7817 68.3253 96.2125 68.212 96.7636C68.0987 97.3147 68.1944 97.8246 68.4992 98.2933C68.8039 98.762 69.2366 99.0539 69.7972 99.1692Z"
                  fill="#9FD3EB"
                />
                <path
                  d="M84.4506 94.949V86.3828C81.5061 86.6517 79.3736 88.2914 79.6916 91.1418C80.0096 93.9923 81.6501 94.7104 84.4506 94.949Z"
                  fill="#A4DBF3"
                />
                <path
                  d="M86.3555 94.9446V86.3783C86.3555 86.0611 97.4257 84.095 99.6807 79.3984C99.0158 82.5078 98.8433 84.294 99.6807 87.6474C102.798 90.4081 101.806 91.6226 99.6807 93.6755C99.2316 96.2952 99.3425 98.4465 99.6807 102.559C96.3628 98.8226 95.6416 96.2704 86.3555 94.9446Z"
                  fill="#A4DBF3"
                />
                <path
                  d="M111.953 95.7993C111.409 96.0886 111.198 96.7674 111.535 97.2832C113.031 99.5721 115.25 101.311 117.854 102.21C120.812 103.231 124.046 103.094 126.906 101.826C129.766 100.559 132.04 98.2549 133.27 95.3782C134.5 92.5015 134.595 89.2658 133.535 86.3222C132.475 83.3787 130.339 80.9459 127.558 79.5136C124.776 78.0812 121.556 77.7557 118.544 78.6025C115.532 79.4492 112.953 81.4055 111.326 84.0774C109.892 86.4304 109.291 89.1847 109.598 91.9017C109.667 92.5139 110.262 92.9027 110.865 92.7787C111.469 92.6548 111.851 92.0648 111.794 91.4514C111.593 89.2895 112.091 87.109 113.231 85.238C114.565 83.0479 116.679 81.4444 119.148 80.7503C121.617 80.0563 124.257 80.3231 126.536 81.4972C128.816 82.6712 130.567 84.6653 131.436 87.0781C132.304 89.4909 132.227 92.1432 131.219 94.5011C130.211 96.8591 128.347 98.7476 126.002 99.7866C123.658 100.826 121.007 100.938 118.583 100.101C116.512 99.3859 114.738 98.0235 113.515 96.2299C113.167 95.7209 112.497 95.5101 111.953 95.7993Z"
                  fill="#A4DBF3"
                />
                <path
                  d="M164.72 90.5141C164.72 97.3477 159.18 102.888 152.346 102.888C145.512 102.888 139.973 97.3477 139.973 90.5141C139.973 83.6804 145.512 78.1406 152.346 78.1406C159.18 78.1406 164.72 83.6804 164.72 90.5141ZM142.204 90.5141C142.204 96.1155 146.745 100.656 152.346 100.656C157.948 100.656 162.488 96.1155 162.488 90.5141C162.488 84.9126 157.948 80.3718 152.346 80.3718C146.745 80.3718 142.204 84.9126 142.204 90.5141Z"
                  fill="#A4DBF3"
                />
              </g>
              <rect
                x="35.6397"
                y="70.5303"
                width="225.895"
                height="296.963"
                rx="5.07629"
                stroke="#D7D7D7"
                stroke-width="5.07629"
              />
              <path
                d="M160.802 27.3043C142.202 14.2745 121.802 9.78372 96.6016 22.8043M150.002 25.2734C129.002 13.7656 112.802 19.2656 102.602 23.763"
                stroke="url(#paint1_linear_4826_3862)"
                stroke-linecap="round"
              />
              <path
                d="M171 54C190.226 62.6364 201.131 62.6296 220.8 54"
                stroke="white"
              />
              <path
                d="M99.1763 31.072H120.876V35.188H112.14V50H107.94V35.188H99.1763V31.072ZM127.313 40.928L118.297 31.716C118.045 31.464 117.849 31.24 117.765 31.072H122.973C123.057 31.24 123.225 31.464 123.449 31.716L129.189 37.512C129.273 37.624 129.385 37.68 129.581 37.68C129.721 37.68 129.861 37.624 129.945 37.512L135.685 31.688C135.993 31.38 136.077 31.268 136.161 31.072H141.341C141.229 31.268 141.117 31.408 140.809 31.716L131.541 41.18V50H127.313V40.928ZM140.365 31.072H157.585V35.188H142.409C142.045 35.188 141.849 35.384 141.849 35.748V38.716H157.501V42.356H141.849V45.408C141.849 45.8 142.045 45.996 142.409 45.996H157.585V50H140.337C138.573 50 137.677 49.132 137.677 47.368V33.62C137.677 31.912 138.573 31.072 140.365 31.072ZM188.192 31.072V46.556C188.192 49.132 186.596 50.392 184.692 50.392C182.984 50.392 181.892 49.944 181.108 48.964L169.824 35.356C169.684 35.188 169.516 35.104 169.348 35.104C169.04 35.104 168.788 35.272 168.788 35.636V50H164.644V34.628C164.644 31.828 166.268 30.652 168.704 30.652C170.524 30.652 171.56 31.1 172.652 32.444L183.124 45.52C183.264 45.66 183.432 45.744 183.628 45.744C183.908 45.744 184.048 45.604 184.048 45.296V31.072H188.192ZM188.088 31.072H209.788V35.188H201.052V50H196.852V35.188H188.088V31.072Z"
                fill="white"
              />
            </g>
            <rect
              x="2.64453"
              y="2"
              width="291.252"
              height="401.027"
              rx="15.2289"
              stroke="#E7E9E8"
              stroke-width="3.80722"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_4826_3862"
              x="-3.06503"
              y="0.09375"
              width="298.866"
              height="410.229"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-3.80722" dy="6.9799" />
              <feGaussianBlur stdDeviation="2.69678" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.482353 0 0 0 0 0.478431 0 0 0 0 0.47451 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_4826_3862"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-5.07629" dy="1.90361" />
              <feGaussianBlur stdDeviation="1.20562" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_4826_3862"
                result="effect2_innerShadow_4826_3862"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4826_3862"
              x1="148.587"
              y1="210.128"
              x2="148.587"
              y2="22.9401"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01344F" />
              <stop offset="1" stop-color="#006993" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4826_3862"
              x1="136.202"
              y1="17"
              x2="74.6544"
              y2="34.5849"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.165" stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <clipPath id="clip0_4826_3862">
              <rect
                x="2.64453"
                y="2"
                width="291.252"
                height="401.027"
                rx="15.2289"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip1_4826_3862">
              <rect
                x="33.1016"
                y="67.9922"
                width="230.971"
                height="302.039"
                rx="7.61443"
                fill="white"
              />
            </clipPath>
            <clipPath id="clip2_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(45.1602 113.672)"
              />
            </clipPath>
            <clipPath id="clip3_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(45.1602 254.539)"
              />
            </clipPath>
            <clipPath id="clip4_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(114.957 113.672)"
              />
            </clipPath>
            <clipPath id="clip5_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(114.957 185.375)"
              />
            </clipPath>
            <clipPath id="clip6_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(114.957 254.539)"
              />
            </clipPath>
            <clipPath id="clip7_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(184.754 113.672)"
              />
            </clipPath>
            <clipPath id="clip8_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(184.754 185.375)"
              />
            </clipPath>
            <clipPath id="clip9_4826_3862">
              <rect
                width="67.2608"
                height="67.2608"
                fill="white"
                transform="translate(184.754 254.539)"
              />
            </clipPath>
            <clipPath id="clip10_4826_3862">
              <path
                d="M38.1797 329.414H258.998V366.217H38.1797V329.414Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>

        <svg
          className="p-4"
          width="30%"
          height="auto"
          viewBox="0 0 465 638"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_ii_4820_1850)">
            <rect x="3" y="3" width="459" height="632" rx="24" fill="#0E0E0E" />
            <rect
              x="3"
              y="3"
              width="459"
              height="632"
              rx="24"
              stroke="#E7E9E8"
              stroke-width="6"
            />
            <rect
              x="55"
              y="111"
              width="356"
              height="468"
              rx="8"
              fill="url(#paint0_linear_4820_1850)"
            />
            <rect
              x="55"
              y="111"
              width="356"
              height="468"
              rx="8"
              stroke="#D7D7D7"
              stroke-width="8"
            />
            <rect
              width="106"
              height="106"
              transform="translate(70 292)"
              fill="#034D73"
            />
            <g clip-path="url(#clip0_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(70 179)"
                fill="#407E9D"
              />
              <path
                d="M99.3546 263.31L98.9806 264.466H106.325L105.951 263.31C105.089 260.635 104.387 258.425 103.843 256.68C103.299 254.912 102.97 253.813 102.857 253.382L102.687 252.736C102.437 253.801 101.327 257.326 99.3546 263.31ZM96.1926 273H92.4866L100.409 250.084H104.999L112.819 273H109.079L107.277 267.39H98.0286L96.1926 273ZM129.246 273H116.36V250.084H119.862V269.906H129.246V273ZM149.73 273H145.31L136.64 261.678L144.97 250.084H149.22L140.822 261.644L149.73 273ZM136.198 273H132.696V250.084H136.198V273Z"
                fill="#F8FAFD"
              />
              <path
                d="M132.519 237H110.371V234.283C116.711 233.871 117.287 233.048 117.287 227.779V205.878C117.287 202.008 117.04 201.597 113.911 201.35L110.042 201.185V198.797C115.064 197.974 120.169 196.574 125.685 194.845V227.779C125.685 232.966 126.261 233.871 132.519 234.283V237Z"
                fill="#F8FAFD"
              />
            </g>
            <path
              d="M105.875 361H100.679V349.424H89.3484V361H84.1942V333.429H89.3484V344.965H100.679V333.429H105.875V361ZM127.552 361H110.085V357.073C113.275 354.81 116.03 352.396 118.348 349.833C120.666 347.242 121.825 344.91 121.825 342.838C121.825 341.474 121.429 340.411 120.639 339.647C119.848 338.883 118.702 338.502 117.202 338.502C114.939 338.502 112.771 339.347 110.698 341.038V336.252C111.598 335.57 112.716 335.011 114.053 334.575C115.389 334.138 116.725 333.92 118.061 333.92C120.679 333.92 122.807 334.643 124.443 336.088C126.106 337.506 126.938 339.511 126.938 342.101C126.938 346.956 123.584 351.851 116.875 356.787H127.552V361ZM156.924 347.133C156.924 351.387 155.738 354.81 153.365 357.4C151.02 359.991 147.87 361.286 143.916 361.286C139.962 361.286 136.798 359.991 134.426 357.4C132.053 354.81 130.867 351.387 130.867 347.133C130.867 342.851 132.04 339.415 134.385 336.824C136.758 334.234 139.921 332.938 143.875 332.938C147.884 332.938 151.061 334.234 153.406 336.824C155.752 339.388 156.924 342.824 156.924 347.133ZM136.389 347.133C136.389 350.023 137.071 352.314 138.435 354.005C139.798 355.696 141.625 356.541 143.916 356.541C146.234 356.541 148.061 355.709 149.398 354.046C150.734 352.355 151.402 350.051 151.402 347.133C151.402 344.215 150.734 341.91 149.398 340.22C148.061 338.529 146.22 337.683 143.875 337.683C141.557 337.683 139.73 338.529 138.394 340.22C137.057 341.91 136.389 344.215 136.389 347.133Z"
              fill="#F8FAFD"
            />
            <g clip-path="url(#clip1_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(70 401)"
                fill="#024B70"
              />
              <path
                d="M97.3358 486.609L96.9734 487.729H104.091L103.729 486.609C102.894 484.016 102.213 481.874 101.686 480.183C101.158 478.469 100.84 477.404 100.73 476.987L100.565 476.36C100.323 477.393 99.2471 480.809 97.3358 486.609ZM94.2713 496H90.6795L98.3573 473.79H102.806L110.385 496H106.76L105.014 490.563H96.0507L94.2713 496ZM129.898 494.913C128.536 495.813 126.647 496.264 124.23 496.264C120.913 496.264 118.2 495.231 116.091 493.166C113.982 491.101 112.927 488.333 112.927 484.862C112.927 481.501 113.982 478.766 116.091 476.657C118.222 474.548 120.913 473.494 124.164 473.494C126.537 473.494 128.437 473.9 129.865 474.713V478.041C128.898 477.514 128.02 477.151 127.229 476.954C126.46 476.734 125.471 476.624 124.263 476.624C122.044 476.624 120.188 477.382 118.694 478.898C117.222 480.392 116.486 482.38 116.486 484.862C116.486 487.388 117.222 489.399 118.694 490.892C120.166 492.386 122.11 493.133 124.527 493.133C126.658 493.133 128.448 492.584 129.898 491.486V494.913ZM140.755 496H133.769V473.79H140.689C143.984 473.79 146.686 474.812 148.795 476.855C150.904 478.898 151.958 481.501 151.958 484.664C151.958 487.96 150.959 490.673 148.96 492.804C146.983 494.935 144.247 496 140.755 496ZM140.623 476.69H137.229V493.133H140.722C143.248 493.133 145.17 492.342 146.488 490.761C147.806 489.179 148.465 487.147 148.465 484.664C148.465 482.38 147.751 480.479 146.323 478.964C144.896 477.448 142.995 476.69 140.623 476.69Z"
                fill="#F8FAFD"
              />
              <path
                d="M133.519 462H111.371V459.283C117.711 458.871 118.287 458.048 118.287 452.779V430.878C118.287 427.008 118.04 426.597 114.911 426.35L111.042 426.185V423.797C116.064 422.974 121.169 421.574 126.685 419.845V452.779C126.685 457.966 127.261 458.871 133.519 459.283V462Z"
                fill="#F8FAFD"
              />
            </g>
            <g clip-path="url(#clip2_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(180 179)"
                fill="#024B6E"
              />
              <path
                d="M217.831 237V233.069C221.722 229.359 225.059 226.023 227.841 223.059C230.643 220.076 232.79 217.374 234.282 214.955C235.774 212.536 236.52 210.268 236.52 208.151C236.52 205.933 235.915 204.139 234.705 202.768C233.516 201.397 231.732 200.712 229.353 200.712C227.74 200.712 226.248 201.175 224.877 202.103C223.506 203.01 222.257 204.099 221.128 205.369L217.68 201.951C219.394 199.976 221.228 198.423 223.184 197.294C225.16 196.145 227.498 195.571 230.2 195.571C234.03 195.571 237.084 196.69 239.362 198.927C241.641 201.145 242.78 204.099 242.78 207.788C242.78 210.348 242.064 212.898 240.633 215.439C239.201 217.959 237.266 220.569 234.826 223.271C232.387 225.952 229.635 228.845 226.571 231.95C227.639 231.829 228.788 231.738 230.018 231.678C231.268 231.597 232.397 231.557 233.405 231.557H244.745V237H217.831Z"
                fill="#F8FAFD"
              />
              <path
                d="M209.355 263.31L208.981 264.466H216.325L215.951 263.31C215.089 260.635 214.387 258.425 213.843 256.68C213.299 254.912 212.97 253.813 212.857 253.382L212.687 252.736C212.437 253.801 211.327 257.326 209.355 263.31ZM206.193 273H202.487L210.409 250.084H214.999L222.819 273H219.079L217.277 267.39H208.029L206.193 273ZM239.246 273H226.36V250.084H229.862V269.906H239.246V273ZM259.73 273H255.31L246.64 261.678L254.97 250.084H259.22L250.822 261.644L259.73 273ZM246.198 273H242.696V250.084H246.198V273Z"
                fill="#F8FAFD"
              />
            </g>
            <path
              d="M342.2 239.8C338.741 239.8 335.881 239.181 333.618 237.943C331.377 236.705 329.541 235.307 328.111 233.749L330.769 230.355C332.049 231.721 333.576 232.927 335.347 233.973C337.14 234.998 339.328 235.51 341.911 235.51C344.558 235.51 346.736 234.773 348.443 233.301C350.172 231.828 351.037 229.832 351.037 227.313C351.037 225.584 350.589 224.068 349.692 222.766C348.795 221.443 347.323 220.418 345.273 219.692C343.245 218.967 340.503 218.604 337.044 218.604V214.537C340.14 214.537 342.594 214.174 344.409 213.449C346.223 212.702 347.525 211.709 348.315 210.471C349.105 209.212 349.5 207.824 349.5 206.308C349.5 204.174 348.806 202.477 347.419 201.217C346.052 199.958 344.195 199.328 341.847 199.328C340.033 199.328 338.347 199.745 336.788 200.577C335.23 201.388 333.811 202.445 332.53 203.747L329.744 200.417C331.366 198.901 333.181 197.631 335.187 196.607C337.194 195.582 339.457 195.07 341.975 195.07C345.69 195.07 348.742 196.02 351.133 197.919C353.545 199.798 354.751 202.477 354.751 205.956C354.751 208.56 354.015 210.716 352.542 212.424C351.09 214.11 349.19 215.381 346.842 216.234V216.523C349.447 217.12 351.677 218.358 353.534 220.237C355.391 222.115 356.32 224.549 356.32 227.537C356.32 230.077 355.68 232.265 354.399 234.101C353.139 235.937 351.442 237.346 349.308 238.328C347.173 239.31 344.804 239.8 342.2 239.8Z"
              fill="#F8FAFD"
            />
            <g clip-path="url(#clip3_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(180 292)"
                fill="#023F5B"
              />
              <path
                d="M208 304C212.42 305.039 213.893 306.883 214.5 312V340.5C215.727 345.816 217.706 347.978 222.5 350.5C232.432 351.433 237.799 351.397 247 350.5C252.848 348.968 254.437 346.431 256 340.5V304"
                stroke="#6DC1F7"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="233"
                y1="314"
                x2="246"
                y2="314"
                stroke="#6DC1F7"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="239"
                y1="325"
                x2="246"
                y2="325"
                stroke="#6DC1F7"
                stroke-width="4"
                stroke-linecap="round"
              />
              <line
                x1="232"
                y1="335"
                x2="246"
                y2="335"
                stroke="#6DC1F7"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M208.279 368.872C210.161 371.003 211.101 373.859 211.101 377.44C211.101 381.021 210.149 383.889 208.245 386.042C206.364 388.195 203.814 389.272 200.595 389.272C197.399 389.272 194.838 388.195 192.911 386.042C191.007 383.889 190.055 381.021 190.055 377.44C190.055 373.881 191.007 371.025 192.911 368.872C194.815 366.719 197.365 365.642 200.561 365.642C203.825 365.642 206.398 366.719 208.279 368.872ZM195.529 371.218C194.328 372.737 193.727 374.811 193.727 377.44C193.727 380.069 194.351 382.155 195.597 383.696C196.844 385.237 198.51 386.008 200.595 386.008C202.749 386.008 204.426 385.249 205.627 383.73C206.829 382.211 207.429 380.115 207.429 377.44C207.429 374.788 206.817 372.703 205.593 371.184C204.392 369.665 202.715 368.906 200.561 368.906C198.431 368.906 196.753 369.677 195.529 371.218ZM228.915 369.008H222.897V389H219.395V369.008H213.411V366.084H228.915V369.008ZM241.699 389H238.197V380.466L230.445 366.084H234.457L236.089 369.45C237.132 371.558 237.97 373.292 238.605 374.652C239.24 376.012 239.614 376.851 239.727 377.168L239.931 377.61C240.135 376.93 241.45 374.21 243.875 369.45L245.541 366.084H249.553L241.699 380.466V389ZM255.245 385.362C255.698 385.793 255.925 386.325 255.925 386.96C255.925 387.595 255.698 388.139 255.245 388.592C254.814 389.045 254.281 389.272 253.647 389.272C252.989 389.272 252.434 389.045 251.981 388.592C251.55 388.139 251.335 387.595 251.335 386.96C251.335 386.325 251.55 385.793 251.981 385.362C252.434 384.909 252.989 384.682 253.647 384.682C254.281 384.682 254.814 384.909 255.245 385.362ZM275.997 387.878C274.592 388.807 272.642 389.272 270.149 389.272C266.726 389.272 263.927 388.207 261.751 386.076C259.575 383.945 258.487 381.089 258.487 377.508C258.487 374.04 259.575 371.218 261.751 369.042C263.95 366.866 266.726 365.778 270.081 365.778C272.529 365.778 274.49 366.197 275.963 367.036V370.47C274.966 369.926 274.059 369.552 273.243 369.348C272.45 369.121 271.43 369.008 270.183 369.008C267.894 369.008 265.978 369.79 264.437 371.354C262.918 372.895 262.159 374.947 262.159 377.508C262.159 380.115 262.918 382.189 264.437 383.73C265.956 385.271 267.962 386.042 270.455 386.042C272.654 386.042 274.501 385.475 275.997 384.342V387.878Z"
                fill="#6DC2F8"
              />
            </g>
            <g clip-path="url(#clip4_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(180 401)"
                fill="#024B6E"
              />
              <path
                d="M207.336 486.609L206.973 487.729H214.091L213.729 486.609C212.894 484.016 212.213 481.874 211.686 480.183C211.158 478.469 210.84 477.404 210.73 476.987L210.565 476.36C210.323 477.393 209.247 480.809 207.336 486.609ZM204.271 496H200.679L208.357 473.79H212.806L220.385 496H216.76L215.014 490.563H206.051L204.271 496ZM239.898 494.913C238.536 495.813 236.647 496.264 234.23 496.264C230.913 496.264 228.2 495.231 226.091 493.166C223.982 491.101 222.927 488.333 222.927 484.862C222.927 481.501 223.982 478.766 226.091 476.657C228.222 474.548 230.913 473.494 234.164 473.494C236.537 473.494 238.437 473.9 239.865 474.713V478.041C238.898 477.514 238.02 477.151 237.229 476.954C236.46 476.734 235.471 476.624 234.263 476.624C232.044 476.624 230.188 477.382 228.694 478.898C227.222 480.392 226.486 482.38 226.486 484.862C226.486 487.388 227.222 489.399 228.694 490.892C230.166 492.386 232.11 493.133 234.527 493.133C236.658 493.133 238.448 492.584 239.898 491.486V494.913ZM250.755 496H243.769V473.79H250.689C253.984 473.79 256.686 474.812 258.795 476.855C260.904 478.898 261.958 481.501 261.958 484.664C261.958 487.96 260.959 490.673 258.96 492.804C256.983 494.935 254.247 496 250.755 496ZM250.623 476.69H247.229V493.133H250.722C253.248 493.133 255.17 492.342 256.488 490.761C257.806 489.179 258.465 487.147 258.465 484.664C258.465 482.38 257.751 480.479 256.323 478.964C254.896 477.448 252.995 476.69 250.623 476.69Z"
                fill="#F8FAFD"
              />
              <path
                d="M216.831 461V457.069C220.722 453.359 224.059 450.023 226.841 447.059C229.643 444.076 231.79 441.374 233.282 438.955C234.774 436.536 235.52 434.268 235.52 432.151C235.52 429.933 234.915 428.139 233.705 426.768C232.516 425.397 230.732 424.712 228.353 424.712C226.74 424.712 225.248 425.175 223.877 426.103C222.506 427.01 221.257 428.099 220.128 429.369L216.68 425.951C218.394 423.976 220.228 422.423 222.184 421.294C224.16 420.145 226.498 419.571 229.2 419.571C233.03 419.571 236.084 420.69 238.362 422.927C240.641 425.145 241.78 428.099 241.78 431.788C241.78 434.348 241.064 436.898 239.633 439.439C238.201 441.959 236.266 444.569 233.826 447.271C231.387 449.952 228.635 452.845 225.571 455.95C226.639 455.829 227.788 455.738 229.018 455.678C230.268 455.597 231.397 455.557 232.405 455.557H243.745V461H216.831Z"
                fill="#F8FAFD"
              />
            </g>
            <g clip-path="url(#clip5_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(290 179)"
                fill="#02557D"
              />
              <path
                d="M320.355 262.31L319.981 263.466H327.325L326.951 262.31C326.089 259.635 325.387 257.425 324.843 255.68C324.299 253.912 323.97 252.813 323.857 252.382L323.687 251.736C323.437 252.801 322.327 256.326 320.355 262.31ZM317.193 272H313.487L321.409 249.084H325.999L333.819 272H330.079L328.277 266.39H319.029L317.193 272ZM350.246 272H337.36V249.084H340.862V268.906H350.246V272ZM370.73 272H366.31L357.64 260.678L365.97 249.084H370.22L361.822 260.644L370.73 272ZM357.198 272H353.696V249.084H357.198V272Z"
                fill="#F8FAFD"
              />
              <path
                d="M341.475 239.8C337.996 239.8 335.093 239.203 332.766 238.007C330.439 236.812 328.55 235.393 327.099 233.749L330.397 229.394C331.678 230.718 333.172 231.86 334.879 232.82C336.608 233.781 338.636 234.261 340.963 234.261C343.397 234.261 345.403 233.631 346.983 232.372C348.562 231.091 349.352 229.33 349.352 227.089C349.352 225.531 348.947 224.164 348.135 222.99C347.324 221.816 345.958 220.909 344.037 220.269C342.137 219.607 339.512 219.276 336.16 219.276V214.217C339.085 214.217 341.401 213.897 343.108 213.257C344.816 212.595 346.033 211.709 346.759 210.599C347.506 209.468 347.879 208.198 347.879 206.789C347.879 204.889 347.26 203.384 346.022 202.274C344.784 201.143 343.108 200.577 340.995 200.577C339.266 200.577 337.676 200.972 336.224 201.762C334.773 202.53 333.396 203.533 332.094 204.772L328.572 200.545C330.301 198.965 332.201 197.674 334.271 196.671C336.342 195.646 338.658 195.134 341.219 195.134C345.19 195.134 348.424 196.105 350.921 198.048C353.44 199.99 354.699 202.754 354.699 206.34C354.699 208.795 354.006 210.855 352.618 212.52C351.231 214.185 349.373 215.466 347.047 216.362V216.619C349.608 217.28 351.775 218.529 353.547 220.365C355.318 222.179 356.204 224.549 356.204 227.473C356.204 230.035 355.532 232.244 354.187 234.101C352.864 235.937 351.081 237.346 348.84 238.328C346.62 239.31 344.165 239.8 341.475 239.8Z"
                fill="#F8FAFD"
              />
            </g>
            <rect
              width="106"
              height="106"
              transform="translate(290 292)"
              fill="#01537A"
            />
            <path
              d="M310.031 339.217H304.397V358H300.212V339.217H294.577V335.79H310.031V339.217ZM330.38 349.465C330.38 352.343 329.601 354.54 328.041 356.056C326.503 357.55 324.383 358.297 321.681 358.297C319.045 358.297 316.936 357.561 315.354 356.089C313.795 354.595 313.015 352.464 313.015 349.696V335.79H317.167V349.663C317.167 351.355 317.584 352.585 318.419 353.354C319.254 354.101 320.341 354.474 321.681 354.474C324.713 354.474 326.228 352.816 326.228 349.498V335.79H330.38V349.465ZM341.722 339.217H339.02V346.467H341.788C343.062 346.467 344.018 346.148 344.655 345.511C345.292 344.852 345.61 343.94 345.61 342.776C345.61 341.634 345.27 340.755 344.589 340.14C343.93 339.525 342.974 339.217 341.722 339.217ZM339.02 358H334.868V335.79H341.722C344.248 335.79 346.225 336.427 347.653 337.701C349.103 338.976 349.828 340.678 349.828 342.809C349.806 344.391 349.422 345.731 348.675 346.829C347.928 347.906 346.906 348.707 345.61 349.235L351.311 358H346.335L341.294 349.894H339.02V358ZM363.268 358H354.272V335.79H362.148C364.521 335.79 366.366 336.35 367.684 337.471C369.002 338.591 369.661 340.041 369.661 341.82C369.661 343.029 369.332 344.083 368.673 344.984C368.013 345.863 367.168 346.445 366.135 346.73C367.322 347.016 368.299 347.598 369.068 348.477C369.837 349.334 370.221 350.509 370.221 352.003C370.221 353.76 369.606 355.199 368.376 356.319C367.146 357.44 365.443 358 363.268 358ZM361.621 339.184H358.424V345.149H360.929C362.423 345.149 363.543 344.852 364.29 344.259C365.037 343.666 365.41 342.908 365.41 341.985C365.41 341.128 365.092 340.447 364.455 339.942C363.84 339.437 362.895 339.184 361.621 339.184ZM361.818 348.477H358.424V354.606H361.983C364.641 354.606 365.97 353.595 365.97 351.574C365.97 349.509 364.586 348.477 361.818 348.477ZM393.874 346.829C393.874 350.256 392.919 353.013 391.007 355.1C389.118 357.187 386.581 358.231 383.396 358.231C380.21 358.231 377.662 357.187 375.751 355.1C373.839 353.013 372.884 350.256 372.884 346.829C372.884 343.38 373.828 340.612 375.718 338.525C377.629 336.438 380.177 335.395 383.363 335.395C386.592 335.395 389.151 336.438 391.04 338.525C392.93 340.59 393.874 343.358 393.874 346.829ZM377.332 346.829C377.332 349.158 377.881 351.003 378.98 352.365C380.078 353.727 381.55 354.408 383.396 354.408C385.263 354.408 386.735 353.738 387.811 352.398C388.888 351.036 389.426 349.18 389.426 346.829C389.426 344.479 388.888 342.622 387.811 341.26C386.735 339.898 385.252 339.217 383.363 339.217C381.495 339.217 380.023 339.898 378.947 341.26C377.871 342.622 377.332 344.479 377.332 346.829Z"
              fill="#F8FAFD"
            />
            <g clip-path="url(#clip6_4820_1850)">
              <rect
                width="106"
                height="106"
                transform="translate(290 401)"
                fill="#024E75"
              />
              <path
                d="M318.336 486.609L317.973 487.729H325.091L324.729 486.609C323.894 484.016 323.213 481.874 322.686 480.183C322.158 478.469 321.84 477.404 321.73 476.987L321.565 476.36C321.323 477.393 320.247 480.809 318.336 486.609ZM315.271 496H311.679L319.357 473.79H323.806L331.385 496H327.76L326.014 490.563H317.051L315.271 496ZM350.898 494.913C349.536 495.813 347.647 496.264 345.23 496.264C341.913 496.264 339.2 495.231 337.091 493.166C334.982 491.101 333.927 488.333 333.927 484.862C333.927 481.501 334.982 478.766 337.091 476.657C339.222 474.548 341.913 473.494 345.164 473.494C347.537 473.494 349.437 473.9 350.865 474.713V478.041C349.898 477.514 349.02 477.151 348.229 476.954C347.46 476.734 346.471 476.624 345.263 476.624C343.044 476.624 341.188 477.382 339.694 478.898C338.222 480.392 337.486 482.38 337.486 484.862C337.486 487.388 338.222 489.399 339.694 490.892C341.166 492.386 343.11 493.133 345.527 493.133C347.658 493.133 349.448 492.584 350.898 491.486V494.913ZM361.755 496H354.769V473.79H361.689C364.984 473.79 367.686 474.812 369.795 476.855C371.904 478.898 372.958 481.501 372.958 484.664C372.958 487.96 371.959 490.673 369.96 492.804C367.983 494.935 365.247 496 361.755 496ZM361.623 476.69H358.229V493.133H361.722C364.248 493.133 366.17 492.342 367.488 490.761C368.806 489.179 369.465 487.147 369.465 484.664C369.465 482.38 368.751 480.479 367.323 478.964C365.896 477.448 363.995 476.69 361.623 476.69Z"
                fill="#F8FAFD"
              />
              <path
                d="M342.475 463.8C338.996 463.8 336.093 463.203 333.766 462.007C331.439 460.812 329.55 459.393 328.099 457.749L331.397 453.394C332.678 454.718 334.172 455.86 335.879 456.82C337.608 457.781 339.636 458.261 341.963 458.261C344.397 458.261 346.403 457.631 347.983 456.372C349.562 455.091 350.352 453.33 350.352 451.089C350.352 449.531 349.947 448.164 349.135 446.99C348.324 445.816 346.958 444.909 345.037 444.269C343.137 443.607 340.512 443.276 337.16 443.276V438.217C340.085 438.217 342.401 437.897 344.108 437.257C345.816 436.595 347.033 435.709 347.759 434.599C348.506 433.468 348.879 432.198 348.879 430.789C348.879 428.889 348.26 427.384 347.022 426.274C345.784 425.143 344.108 424.577 341.995 424.577C340.266 424.577 338.676 424.972 337.224 425.762C335.773 426.53 334.396 427.533 333.094 428.772L329.572 424.545C331.301 422.965 333.201 421.674 335.271 420.671C337.342 419.646 339.658 419.134 342.219 419.134C346.19 419.134 349.424 420.105 351.921 422.048C354.44 423.99 355.699 426.754 355.699 430.34C355.699 432.795 355.006 434.855 353.618 436.52C352.231 438.185 350.373 439.466 348.047 440.362V440.619C350.608 441.28 352.775 442.529 354.547 444.365C356.318 446.179 357.204 448.549 357.204 451.473C357.204 454.035 356.532 456.244 355.187 458.101C353.864 459.937 352.081 461.346 349.84 462.328C347.62 463.31 345.165 463.8 342.475 463.8Z"
                fill="#F8FAFD"
              />
            </g>
            <g clip-path="url(#clip7_4820_1850)">
              <mask id="path-23-inside-1_4820_1850" fill="white">
                <path d="M59 519H407V577H59V519Z" />
              </mask>
              <path d="M59 519H407V577H59V519Z" fill="#044561" />
              <path
                d="M150.895 554.459C150.895 557.142 150.006 559.291 148.226 560.906C146.474 562.494 144.024 563.287 140.876 563.287C138.056 563.287 135.729 562.822 133.895 561.891V557.99C135.647 559.058 137.755 559.592 140.219 559.592C144.544 559.592 146.707 557.84 146.707 554.336C146.707 552.939 146.214 551.858 145.229 551.092C144.27 550.298 142.97 549.901 141.328 549.901C139.247 549.901 137.194 550.38 135.168 551.338V536.103H149.089V539.594H139.151V546.657C140.164 546.438 141.095 546.328 141.944 546.328C144.736 546.328 146.926 547.067 148.514 548.546C150.101 549.997 150.895 551.968 150.895 554.459ZM173.268 549.49C173.268 553.679 172.433 557.032 170.763 559.551C169.121 562.069 166.767 563.329 163.7 563.329C160.771 563.329 158.458 562.069 156.761 559.551C155.091 557.032 154.256 553.679 154.256 549.49C154.256 545.274 155.091 541.934 156.761 539.471C158.458 536.979 160.771 535.734 163.7 535.734C166.684 535.734 169.025 536.966 170.722 539.43C172.42 541.893 173.268 545.247 173.268 549.49ZM159.882 542.099C158.869 543.823 158.362 546.287 158.362 549.49C158.362 552.693 158.855 555.184 159.841 556.964C160.853 558.716 162.14 559.592 163.7 559.592C165.398 559.592 166.726 558.716 167.684 556.964C168.642 555.212 169.121 552.72 169.121 549.49C169.121 546.232 168.614 543.755 167.602 542.058C166.616 540.333 165.316 539.471 163.7 539.471C162.167 539.471 160.894 540.347 159.882 542.099ZM187.432 563.041H183.654L198.601 535.2H202.42L187.432 563.041ZM190.676 541.647C190.676 543.563 190.005 545.192 188.664 546.534C187.323 547.875 185.694 548.546 183.777 548.546C181.888 548.546 180.273 547.875 178.932 546.534C177.59 545.192 176.92 543.563 176.92 541.647C176.92 539.758 177.59 538.143 178.932 536.801C180.273 535.46 181.888 534.789 183.777 534.789C185.694 534.789 187.323 535.46 188.664 536.801C190.005 538.143 190.676 539.758 190.676 541.647ZM180.328 541.647C180.328 542.605 180.657 543.426 181.314 544.111C181.998 544.795 182.819 545.137 183.777 545.137C184.736 545.137 185.557 544.795 186.241 544.111C186.926 543.426 187.268 542.605 187.268 541.647C187.268 540.689 186.926 539.881 186.241 539.224C185.557 538.54 184.736 538.198 183.777 538.198C182.819 538.198 181.998 538.54 181.314 539.224C180.657 539.909 180.328 540.716 180.328 541.647ZM209.278 556.43C209.278 558.346 208.607 559.975 207.266 561.316C205.924 562.63 204.309 563.287 202.42 563.287C200.504 563.287 198.875 562.63 197.534 561.316C196.192 559.975 195.522 558.346 195.522 556.43C195.522 554.541 196.192 552.926 197.534 551.584C198.875 550.216 200.504 549.531 202.42 549.531C204.309 549.531 205.924 550.216 207.266 551.584C208.607 552.926 209.278 554.541 209.278 556.43ZM199.956 553.966C199.272 554.65 198.93 555.472 198.93 556.43C198.93 557.388 199.272 558.209 199.956 558.894C200.641 559.578 201.462 559.92 202.42 559.92C203.378 559.92 204.186 559.578 204.843 558.894C205.527 558.209 205.87 557.388 205.87 556.43C205.87 555.472 205.527 554.65 204.843 553.966C204.186 553.282 203.378 552.939 202.42 552.939C201.462 552.939 200.641 553.282 199.956 553.966Z"
                fill="#F8FAFD"
              />
              <path
                d="M95.3333 554.984H86.6005V565H82.9291V540.976H96.5452V544.041H86.6005V551.919H95.3333V554.984ZM107.493 565H104.036V545.503L98.5107 548.889V545.146L104.321 541.689H107.493V565Z"
                fill="#F8FAFD"
              />
              <path
                d="M262.858 554.984H254.125V565H250.454V540.976H264.07V544.041H254.125V551.919H262.858V554.984ZM281.683 565H266.748V562.113C269.743 559.927 272.261 557.669 274.305 555.34C276.372 552.988 277.406 550.849 277.406 548.924C277.406 547.57 277.014 546.536 276.23 545.823C275.446 545.087 274.364 544.718 272.986 544.718C271.085 544.718 269.22 545.431 267.39 546.857V543.4C269.101 542.093 271.133 541.439 273.485 541.439C275.671 541.439 277.477 542.057 278.903 543.293C280.329 544.505 281.042 546.239 281.042 548.497C281.042 552.679 277.881 557.17 271.56 561.97H281.683V565Z"
                fill="#F8FAFD"
              />
              <path
                d="M321.895 554.459C321.895 557.142 321.006 559.291 319.226 560.906C317.474 562.494 315.024 563.287 311.876 563.287C309.056 563.287 306.729 562.822 304.895 561.891V557.99C306.647 559.058 308.755 559.592 311.219 559.592C315.544 559.592 317.707 557.84 317.707 554.336C317.707 552.939 317.214 551.858 316.229 551.092C315.27 550.298 313.97 549.901 312.328 549.901C310.247 549.901 308.194 550.38 306.168 551.338V536.103H320.089V539.594H310.151V546.657C311.164 546.438 312.095 546.328 312.944 546.328C315.736 546.328 317.926 547.067 319.514 548.546C321.101 549.997 321.895 551.968 321.895 554.459ZM344.268 549.49C344.268 553.679 343.433 557.032 341.763 559.551C340.121 562.069 337.767 563.329 334.7 563.329C331.771 563.329 329.458 562.069 327.761 559.551C326.091 557.032 325.256 553.679 325.256 549.49C325.256 545.274 326.091 541.934 327.761 539.471C329.458 536.979 331.771 535.734 334.7 535.734C337.684 535.734 340.025 536.966 341.722 539.43C343.42 541.893 344.268 545.247 344.268 549.49ZM330.882 542.099C329.869 543.823 329.362 546.287 329.362 549.49C329.362 552.693 329.855 555.184 330.841 556.964C331.853 558.716 333.14 559.592 334.7 559.592C336.398 559.592 337.726 558.716 338.684 556.964C339.642 555.212 340.121 552.72 340.121 549.49C340.121 546.232 339.614 543.755 338.602 542.058C337.616 540.333 336.316 539.471 334.7 539.471C333.167 539.471 331.894 540.347 330.882 542.099ZM358.432 563.041H354.654L369.601 535.2H373.42L358.432 563.041ZM361.676 541.647C361.676 543.563 361.005 545.192 359.664 546.534C358.323 547.875 356.694 548.546 354.777 548.546C352.888 548.546 351.273 547.875 349.932 546.534C348.59 545.192 347.92 543.563 347.92 541.647C347.92 539.758 348.59 538.143 349.932 536.801C351.273 535.46 352.888 534.789 354.777 534.789C356.694 534.789 358.323 535.46 359.664 536.801C361.005 538.143 361.676 539.758 361.676 541.647ZM351.328 541.647C351.328 542.605 351.657 543.426 352.314 544.111C352.998 544.795 353.819 545.137 354.777 545.137C355.736 545.137 356.557 544.795 357.241 544.111C357.926 543.426 358.268 542.605 358.268 541.647C358.268 540.689 357.926 539.881 357.241 539.224C356.557 538.54 355.736 538.198 354.777 538.198C353.819 538.198 352.998 538.54 352.314 539.224C351.657 539.909 351.328 540.716 351.328 541.647ZM380.278 556.43C380.278 558.346 379.607 559.975 378.266 561.316C376.924 562.63 375.309 563.287 373.42 563.287C371.504 563.287 369.875 562.63 368.534 561.316C367.192 559.975 366.522 558.346 366.522 556.43C366.522 554.541 367.192 552.926 368.534 551.584C369.875 550.216 371.504 549.531 373.42 549.531C375.309 549.531 376.924 550.216 378.266 551.584C379.607 552.926 380.278 554.541 380.278 556.43ZM370.956 553.966C370.272 554.65 369.93 555.472 369.93 556.43C369.93 557.388 370.272 558.209 370.956 558.894C371.641 559.578 372.462 559.92 373.42 559.92C374.378 559.92 375.186 559.578 375.843 558.894C376.527 558.209 376.87 557.388 376.87 556.43C376.87 555.472 376.527 554.65 375.843 553.966C375.186 553.282 374.378 552.939 373.42 552.939C372.462 552.939 371.641 553.282 370.956 553.966Z"
                fill="#F8FAFD"
              />
            </g>
            <path
              d="M59 522H407V516H59V522Z"
              fill="#58ABC9"
              mask="url(#path-23-inside-1_4820_1850)"
            />
            <path
              d="M180.934 145.5C180.938 140 183.997 136.418 190.434 130.5L190.439 130.505C196.546 135.742 200.93 139.502 200.934 145.5C200.938 151.5 196.885 153.856 190.434 154.5C184.85 154.062 180.93 151 180.934 145.5Z"
              fill="#A4DBF3"
            />
            <path
              d="M294.334 143.543C294.334 148.335 293.379 152.172 291.468 155.054C289.589 157.935 286.895 159.376 283.387 159.376C280.036 159.376 277.389 157.935 275.447 155.054C273.537 152.172 272.581 148.335 272.581 143.543C272.581 138.72 273.537 134.898 275.447 132.079C277.389 129.229 280.036 127.804 283.387 127.804C286.801 127.804 289.479 129.214 291.421 132.032C293.363 134.851 294.334 138.688 294.334 143.543ZM279.018 135.086C277.859 137.059 277.279 139.878 277.279 143.543C277.279 147.208 277.843 150.058 278.971 152.094C280.13 154.098 281.602 155.101 283.387 155.101C285.329 155.101 286.848 154.098 287.944 152.094C289.041 150.089 289.589 147.239 289.589 143.543C289.589 139.816 289.009 136.981 287.85 135.039C286.723 133.066 285.235 132.079 283.387 132.079C281.633 132.079 280.177 133.082 279.018 135.086ZM308.096 144.154C310.476 144.154 312.403 143.23 313.875 141.382C313.812 138.5 313.28 136.229 312.277 134.569C311.306 132.909 309.834 132.079 307.861 132.079C306.232 132.079 304.932 132.628 303.961 133.724C302.991 134.789 302.505 136.245 302.505 138.093C302.505 139.972 303.006 141.46 304.008 142.556C305.042 143.621 306.405 144.154 308.096 144.154ZM318.432 141.805C318.432 147.38 317.242 151.702 314.861 154.772C312.512 157.841 309.129 159.376 304.713 159.376C302.709 159.376 300.908 159.078 299.31 158.483V154.02C300.908 154.74 302.599 155.101 304.384 155.101C309.772 155.101 312.872 151.906 313.687 145.516C312.183 147.239 309.944 148.1 306.968 148.1C304.4 148.1 302.207 147.192 300.391 145.375C298.606 143.559 297.713 141.163 297.713 138.187C297.713 135.212 298.606 132.753 300.391 130.811C302.176 128.869 304.604 127.898 307.673 127.898C311.181 127.898 313.843 129.198 315.66 131.798C317.508 134.366 318.432 137.702 318.432 141.805ZM328.379 138.422C329.005 139.017 329.318 139.753 329.318 140.63C329.318 141.507 329.005 142.259 328.379 142.885C327.784 143.48 327.048 143.778 326.171 143.778C325.262 143.778 324.511 143.48 323.916 142.885C323.32 142.29 323.023 141.538 323.023 140.63C323.023 139.753 323.32 139.017 323.916 138.422C324.542 137.796 325.294 137.482 326.171 137.482C327.048 137.482 327.784 137.796 328.379 138.422ZM328.379 153.691C329.005 154.286 329.318 155.022 329.318 155.899C329.318 156.776 329.005 157.528 328.379 158.154C327.784 158.749 327.048 159.047 326.171 159.047C325.262 159.047 324.511 158.749 323.916 158.154C323.32 157.528 323.023 156.776 323.023 155.899C323.023 155.022 323.32 154.286 323.916 153.691C324.542 153.065 325.294 152.751 326.171 152.751C327.048 152.751 327.784 153.065 328.379 153.691ZM351.964 150.543C351.964 153.08 351.055 155.179 349.239 156.839C347.422 158.468 344.869 159.282 341.581 159.282C338.48 159.282 335.865 158.749 333.735 157.685V153.174C336.053 154.427 338.59 155.054 341.346 155.054C343.194 155.054 344.635 154.599 345.668 153.691C346.733 152.751 347.266 151.561 347.266 150.12C347.266 148.617 346.686 147.458 345.527 146.644C344.368 145.829 342.63 145.422 340.312 145.422H338.433V141.476H340.312C342.035 141.476 343.476 141.053 344.635 140.207C345.825 139.33 346.42 138.14 346.42 136.637C346.42 135.133 345.934 134.006 344.963 133.254C344.024 132.502 342.724 132.126 341.064 132.126C338.934 132.126 336.82 132.784 334.721 134.1V129.636C336.663 128.509 338.824 127.945 341.205 127.945C344.337 127.945 346.78 128.728 348.534 130.294C350.319 131.829 351.212 133.771 351.212 136.12C351.212 137.811 350.789 139.299 349.943 140.583C349.129 141.836 347.908 142.791 346.279 143.449C348.064 143.888 349.458 144.718 350.46 145.939C351.463 147.161 351.964 148.695 351.964 150.543ZM377.837 143.543C377.837 148.335 376.881 152.172 374.971 155.054C373.092 157.935 370.398 159.376 366.89 159.376C363.539 159.376 360.892 157.935 358.95 155.054C357.039 152.172 356.084 148.335 356.084 143.543C356.084 138.72 357.039 134.898 358.95 132.079C360.892 129.229 363.539 127.804 366.89 127.804C370.304 127.804 372.982 129.214 374.924 132.032C376.866 134.851 377.837 138.688 377.837 143.543ZM362.521 135.086C361.362 137.059 360.782 139.878 360.782 143.543C360.782 147.208 361.346 150.058 362.474 152.094C363.633 154.098 365.105 155.101 366.89 155.101C368.832 155.101 370.351 154.098 371.447 152.094C372.543 150.089 373.092 147.239 373.092 143.543C373.092 139.816 372.512 136.981 371.353 135.039C370.226 133.066 368.738 132.079 366.89 132.079C365.136 132.079 363.68 133.082 362.521 135.086ZM390.706 155.57C392.209 155.57 393.384 155.163 394.23 154.349C395.107 153.503 395.545 152.407 395.545 151.06V148.382H391.975C390.221 148.382 388.889 148.727 387.981 149.416C387.104 150.105 386.666 150.982 386.666 152.047C386.666 153.143 387.01 154.004 387.699 154.631C388.388 155.257 389.391 155.57 390.706 155.57ZM395.686 156.181C394.465 158.186 392.319 159.188 389.25 159.188C386.995 159.188 385.178 158.546 383.8 157.262C382.453 155.946 381.78 154.286 381.78 152.282C381.78 149.995 382.641 148.226 384.364 146.973C386.086 145.688 388.498 145.046 391.599 145.046H395.545V143.684C395.545 142.055 395.154 140.834 394.371 140.019C393.588 139.174 392.288 138.751 390.471 138.751C387.934 138.751 385.632 139.456 383.565 140.865V136.402C385.413 135.337 387.856 134.804 390.894 134.804C397.127 134.804 400.243 137.827 400.243 143.872V159H395.686V156.181Z"
              fill="#F8FAFD"
            />
            <path
              d="M232.005 147.439C231.229 147.882 230.204 148.104 228.93 148.104C227.295 148.104 225.993 147.612 225.024 146.629C224.054 145.645 223.569 144.357 223.569 142.764C223.569 141.074 224.012 139.751 224.899 138.795C225.786 137.826 226.914 137.341 228.286 137.341C229.629 137.341 230.696 137.763 231.486 138.608C232.275 139.44 232.67 140.645 232.67 142.224C232.67 142.653 232.628 143.103 232.545 143.574H225.626C225.765 144.489 226.153 145.188 226.79 145.673C227.427 146.158 228.23 146.4 229.2 146.4C230.322 146.4 231.257 146.137 232.005 145.611V147.439ZM228.327 139.024C227.635 139.024 227.039 139.28 226.54 139.793C226.042 140.291 225.73 141.019 225.605 141.974H230.696V141.6C230.668 140.811 230.454 140.188 230.052 139.73C229.65 139.259 229.075 139.024 228.327 139.024ZM242.506 147.584C241.827 148 240.961 148.208 239.909 148.208C238.26 148.208 236.944 147.688 235.961 146.649C234.977 145.611 234.486 144.315 234.486 142.764C234.486 141.254 234.977 139.966 235.961 138.899C236.958 137.819 238.302 137.279 239.992 137.279C240.906 137.279 241.744 137.473 242.506 137.86V139.73C241.827 139.301 241.058 139.086 240.2 139.086C239.105 139.086 238.226 139.433 237.561 140.125C236.91 140.818 236.584 141.704 236.584 142.785C236.612 143.851 236.937 144.731 237.561 145.424C238.184 146.102 239.057 146.442 240.179 146.442C241.01 146.442 241.786 146.213 242.506 145.756V147.584ZM252.972 138.858C253.844 139.869 254.281 141.164 254.281 142.743C254.281 144.322 253.831 145.624 252.93 146.649C252.044 147.674 250.818 148.187 249.253 148.187C247.701 148.187 246.482 147.681 245.596 146.67C244.709 145.659 244.266 144.378 244.266 142.826C244.266 141.247 244.723 139.938 245.637 138.899C246.551 137.847 247.757 137.32 249.253 137.32C250.859 137.32 252.099 137.833 252.972 138.858ZM246.385 142.764C246.385 143.803 246.641 144.682 247.154 145.403C247.666 146.109 248.366 146.462 249.253 146.462C250.194 146.462 250.908 146.116 251.393 145.424C251.891 144.731 252.141 143.851 252.141 142.785C252.141 141.69 251.905 140.797 251.434 140.104C250.963 139.398 250.229 139.045 249.232 139.045C248.331 139.045 247.632 139.405 247.133 140.125C246.635 140.832 246.385 141.711 246.385 142.764Z"
              fill="#A4DBF3"
            />
            <path
              d="M77.6588 156.26L78.769 151.001C78.473 150.752 78.2057 150.483 77.9672 150.195C77.7287 149.907 77.5013 149.608 77.2849 149.299L71.9182 149.65L70.169 140.671L75.2863 138.999C75.3235 138.807 75.3715 138.625 75.4305 138.454L75.7976 137.391C75.8565 137.22 75.9308 137.047 76.0205 136.873L73.0243 132.4L79.94 126.412L83.9471 130C84.3085 129.889 84.6784 129.797 85.0569 129.722C85.4355 129.647 85.8049 129.598 86.1654 129.575L88.5359 124.751L97.2008 127.743L96.0906 133.001C96.3866 133.251 96.6539 133.519 96.8924 133.807C97.1309 134.095 97.3583 134.394 97.5747 134.704L102.941 134.353L104.691 143.332L99.5733 145.003C99.5361 145.196 99.4881 145.378 99.4291 145.548L99.062 146.612C99.0031 146.783 98.9157 146.951 98.7997 147.116L101.796 151.589L94.8802 157.577L90.9125 154.003C90.5511 154.113 90.1812 154.206 89.8027 154.281C89.4241 154.356 89.0546 154.405 88.6942 154.427L86.3237 159.251L77.6588 156.26ZM85.6051 147.543C87.128 148.068 88.6136 147.979 90.0617 147.274C91.5099 146.569 92.4969 145.455 93.0226 143.932C93.5483 142.409 93.4587 140.924 92.7538 139.475C92.0489 138.027 90.935 137.04 89.412 136.514C87.8629 135.98 86.3708 136.067 84.9357 136.776C83.5006 137.486 82.5203 138.602 81.9945 140.125C81.4688 141.648 81.5518 143.131 82.2436 144.575C82.9354 146.019 84.0559 147.008 85.6051 147.543Z"
              fill="#9FD3EB"
            />
            <path
              d="M105.111 161.474L105.343 158.525C105.164 158.41 104.999 158.282 104.848 158.142C104.697 158.002 104.552 157.855 104.412 157.701L101.508 158.275L99.9145 153.499L102.588 152.223C102.595 152.115 102.608 152.012 102.628 151.915L102.753 151.309C102.773 151.211 102.801 151.112 102.838 151.01L100.884 148.782L104.232 145.023L106.674 146.695C106.864 146.609 107.059 146.532 107.26 146.464C107.461 146.397 107.66 146.344 107.855 146.306L108.805 143.504L113.747 144.52L113.515 147.469C113.694 147.584 113.859 147.712 114.01 147.852C114.161 147.992 114.306 148.139 114.446 148.293L117.35 147.719L118.943 152.495L116.27 153.771C116.263 153.879 116.25 153.982 116.23 154.079L116.105 154.685C116.085 154.783 116.049 154.881 115.998 154.979L117.951 157.207L114.603 160.967L112.184 159.299C111.994 159.385 111.799 159.462 111.598 159.53C111.397 159.598 111.198 159.65 111.003 159.688L110.053 162.49L105.111 161.474ZM108.828 156.151C109.696 156.329 110.5 156.175 111.241 155.687C111.981 155.199 112.44 154.521 112.619 153.653C112.797 152.784 112.642 151.98 112.155 151.24C111.667 150.499 110.989 150.04 110.12 149.862C109.237 149.68 108.429 149.834 107.696 150.323C106.963 150.812 106.508 151.491 106.329 152.36C106.151 153.228 106.302 154.032 106.782 154.771C107.262 155.509 107.944 155.969 108.828 156.151Z"
              fill="#9FD3EB"
            />
            <path
              d="M131.928 149.508V136.008C127.288 136.432 123.927 139.016 124.428 143.508C124.93 148 127.515 149.132 131.928 149.508Z"
              fill="#A4DBF3"
            />
            <path
              d="M134.93 149.5V136C134.93 135.5 152.376 132.402 155.93 125C154.882 129.9 154.61 132.715 155.93 138C160.843 142.351 159.28 144.265 155.93 147.5C155.222 151.628 155.397 155.019 155.93 161.5C150.701 155.612 149.564 151.589 134.93 149.5Z"
              fill="#A4DBF3"
            />
            <path
              d="M175.265 150.829C174.407 151.285 174.075 152.355 174.606 153.168C176.964 156.775 180.461 159.515 184.565 160.932C189.226 162.541 194.323 162.325 198.83 160.328C203.338 158.33 206.922 154.699 208.86 150.166C210.798 145.632 210.947 140.533 209.277 135.894C207.606 131.255 204.241 127.421 199.857 125.164C195.474 122.906 190.398 122.393 185.652 123.728C180.905 125.062 176.841 128.145 174.276 132.356C172.017 136.064 171.069 140.405 171.553 144.687C171.662 145.652 172.599 146.264 173.55 146.069C174.502 145.874 175.104 144.944 175.014 143.977C174.698 140.57 175.483 137.134 177.279 134.185C179.381 130.734 182.713 128.207 186.603 127.113C190.494 126.019 194.655 126.439 198.247 128.29C201.84 130.14 204.599 133.283 205.968 137.085C207.337 140.887 207.215 145.067 205.627 148.783C204.038 152.499 201.101 155.476 197.406 157.113C193.711 158.751 189.533 158.928 185.713 157.608C182.449 156.482 179.654 154.334 177.726 151.508C177.179 150.706 176.122 150.373 175.265 150.829Z"
              fill="#A4DBF3"
            />
            <path
              d="M258.43 142.5C258.43 153.27 249.699 162 238.93 162C228.16 162 219.43 153.27 219.43 142.5C219.43 131.73 228.16 123 238.93 123C249.699 123 258.43 131.73 258.43 142.5ZM222.946 142.5C222.946 151.328 230.102 158.484 238.93 158.484C247.757 158.484 254.913 151.328 254.913 142.5C254.913 133.672 247.757 126.516 238.93 126.516C230.102 126.516 222.946 133.672 222.946 142.5Z"
              fill="#A4DBF3"
            />
            <path
              d="M246.354 37.3167C212.848 18.9789 176.099 12.6587 130.703 30.9835M226.899 34.4586C189.069 18.2628 159.886 26.0033 141.512 32.3329"
              stroke="url(#paint1_linear_4820_1850)"
              stroke-linecap="round"
            />
            <path
              d="M265 87C290.866 99.0047 305.537 98.9953 332 87"
              stroke="white"
            />
            <path
              d="M141.159 44.552H178.359V51.608H163.383V77H156.183V51.608H141.159V44.552ZM189.394 61.448L173.938 45.656C173.506 45.224 173.17 44.84 173.026 44.552H181.954C182.098 44.84 182.386 45.224 182.77 45.656L192.61 55.592C192.754 55.784 192.946 55.88 193.282 55.88C193.522 55.88 193.762 55.784 193.906 55.592L203.746 45.608C204.274 45.08 204.418 44.888 204.562 44.552H213.442C213.25 44.888 213.058 45.128 212.53 45.656L196.642 61.88V77H189.394V61.448ZM211.768 44.552H241.288V51.608H215.272C214.648 51.608 214.312 51.944 214.312 52.568V57.656H241.144V63.896H214.312V69.128C214.312 69.8 214.648 70.136 215.272 70.136H241.288V77H211.72C208.696 77 207.16 75.512 207.16 72.488V48.92C207.16 45.992 208.696 44.552 211.768 44.552ZM293.757 44.552V71.096C293.757 75.512 291.021 77.672 287.757 77.672C284.829 77.672 282.957 76.904 281.613 75.224L262.269 51.896C262.029 51.608 261.741 51.464 261.453 51.464C260.925 51.464 260.493 51.752 260.493 52.376V77H253.389V50.648C253.389 45.848 256.173 43.832 260.349 43.832C263.469 43.832 265.245 44.6 267.117 46.904L285.069 69.32C285.309 69.56 285.597 69.704 285.933 69.704C286.413 69.704 286.653 69.464 286.653 68.936V44.552H293.757ZM293.58 44.552H330.78V51.608H315.804V77H308.604V51.608H293.58V44.552Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_ii_4820_1850"
              x="-6"
              y="0"
              width="471"
              height="646.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-6" dy="11" />
              <feGaussianBlur stdDeviation="4.25" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.482353 0 0 0 0 0.478431 0 0 0 0 0.47451 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_4820_1850"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-8" dy="3" />
              <feGaussianBlur stdDeviation="1.9" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_innerShadow_4820_1850"
                result="effect2_innerShadow_4820_1850"
              />
            </filter>
            <linearGradient
              id="paint0_linear_4820_1850"
              x1="233"
              y1="331"
              x2="233"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01344F" />
              <stop offset="1" stop-color="#006993" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_4820_1850"
              x1="202.039"
              y1="22.8147"
              x2="96.2632"
              y2="61.4981"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.165" stop-color="white" />
              <stop offset="1" stop-color="#999999" />
            </linearGradient>
            <clipPath id="clip0_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(70 179)"
              />
            </clipPath>
            <clipPath id="clip1_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(70 401)"
              />
            </clipPath>
            <clipPath id="clip2_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(180 179)"
              />
            </clipPath>
            <clipPath id="clip3_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(180 292)"
              />
            </clipPath>
            <clipPath id="clip4_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(180 401)"
              />
            </clipPath>
            <clipPath id="clip5_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(290 179)"
              />
            </clipPath>
            <clipPath id="clip6_4820_1850">
              <rect
                width="106"
                height="106"
                fill="white"
                transform="translate(290 401)"
              />
            </clipPath>
            <clipPath id="clip7_4820_1850">
              <path d="M59 519H407V577H59V519Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

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
            <div style={{ position: "relative" }}>
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

      <Container>
        <h2
          className="text-center"
          style={{ color: "#000", fontWeight: "600" }}
        >
          <b>Ultimate convenience Rotates 180 and more!</b>
        </h2>
        <p className="text-center" style={{ color: "#000" }}>
          Designed for multi-directinol polygonal rotation operation. It can be{" "}
          <br /> conveniently used anywhere, and anyhow.
        </p>
        <br />
        <div>
          <div></div>
          <div style={{ position: "relative", width: "40%" }}>
            <UceTopMachine />
            <div style={{ position: "absolute", top: "40%", left: "30.5%" }}>
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 311 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.46">
                  <path
                    d="M52.2172 19.4531C6 24.4792 6 42.394 6 42.394C16.8452 99.7851 283.408 75.3481 301.673 54.9008C319.939 34.4535 257.038 19.4536 257.038 19.4536"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                  <path
                    d="M41.6094 5L60.6004 15.5946L46.5636 33"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                  <path
                    d="M265.941 7L248.137 18.6757L258.974 34"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                </g>
              </svg>

              <br />
              <svg
                width="100%"
                height="auto"
                viewBox="0 0 311 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.46">
                  <path
                    d="M52.2172 19.4531C6 24.4792 6 42.394 6 42.394C16.8452 99.7851 283.408 75.3481 301.673 54.9008C319.939 34.4535 257.038 19.4536 257.038 19.4536"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                  <path
                    d="M41.6094 5L60.6004 15.5946L46.5636 33"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                  <path
                    d="M265.941 7L248.137 18.6757L258.974 34"
                    stroke="#6988BE"
                    stroke-width="11"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Container>

      <div>
        <Image
          src={ucecableimage}
          alt="uce cable explain"
          layout="responsive"
          priority
        />
      </div>

      <OneTouchUceDisplay />

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

        <Certifications />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default page;
