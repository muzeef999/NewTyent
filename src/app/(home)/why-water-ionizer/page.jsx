import React from "react";
import { Col, Row } from "react-bootstrap";
import im from "@/asserts/why ionizer/im.webp";
import Image from "next/image";
import TyentLineAnimation from "@/app/(home)/compoents/TyentLineAnimation";
import WhyDrinkTyentWater from "@/app/(home)/compoents/(Home)/WhyDrinkTyentWater";
import { FaQuestion } from "react-icons/fa";
import hydrogen from "@/asserts/why ionizer/hydrogen.webp";
import NMP from "@/asserts/NMP5.webp";
import whyIonizer from "@/asserts/why ionizer/whyIonizer.webp";
import minerals from "@/asserts/why ionizer/minerals.png";
import purity from "@/asserts/why ionizer/purity.png";
import hydrogenicon from "@/asserts/why ionizer/hydrogenicon.png";
import "@/app/style/WhyDrinkTyentWater.css";

export const metadata = {
  title: "Hydrogen-Rich Alkaline Water: Invest in Health with Tyent Ionizers | Beat Acidic Stress Naturally",
  description: "Over 60% of your body is water - make every drop count. Tyent’s hydrogen-rich, mineralpacked alkaline water supports detox, immunity, and pH balance. Say no to borewell, municipal, and RO water. Choose ionized water with molecular hydrogen to fight acidity, reduce oxidative stress, and prevent lifestyle diseases like diabetes and heart issues.",
  Keywords: "alkaline water benefits, hydrogen-rich water, water ionizer India, Tyent water ionizer,antioxidant water, acidic stress health risks, bore water dangers, RO water disadvantages, molecular hydrogen, lifestyle disease prevention, healthy hydration, water pH balance, best alkaline water, ionized water health benefits"
};

const page = () => {
  const cardDetails = [
    {
      icon: purity,
      title: "Purity",
      content: `
       Free from harmful contaminants like heavy metals, chemicals, and microorganisms.
      `,
    },
    {
      icon: minerals,
      title: "Minerals",
      content: `
     Retains essential minerals like calcium, magnesium, Potassium and Sillica for optimal health.
      `,
    },
    {
      icon: purity,
      title: "pH Balance",
      content: `
       Slightly alkaline water (pH 7.5–9.5) is ideal for counteracting the acidic environment caused by diet and stress.
      `,
    },
    {
      icon: hydrogenicon,
      title: "Hydrogen-Rich",
      content: `
       Molecular hydrogen acts as a powerful antioxidant to combat free radical damage.
      `,
    },
  ];

  return (
    <div>
      <div className="container">
        <div
          className="section-spacing"
          style={{ overflow: "hidden" }}
          data-aos="fade-up"
        >
          <h2 className="text-center" style={{ fontWeight: "600" }}>
            Your Health Is An Investment Not An{" "}
            <span style={{ color: "#008AC7" }}>Expense</span>
          </h2>
          <Row className="d-flex justify-content-center">
            <div style={{ width: "80%", height: "auto" }}>
              <Image
                src={im}
                alt="left image water"
                layout="responsive"
                priority
              />
            </div>
          </Row>
        </div>

        <div className="section-spacing" style={{ overflow: "hidden" }}>
          <Row>
            <Col md={4} data-aos="fade-right">
              <div>
                <p className="text-center m-0" style={{ fontSize: "30px" }}>
                  Is the majority of{" "}
                </p>
                <h2
                  className="text-center m-0"
                  style={{ color: "#008AC7", fontWeight: 600 }}
                >
                  {" "}
                  The Human Body Is WATER ?
                </h2>
                <br/>
              </div>
            </Col>
            <Col
              md={8}
              data-aos="fade-left"
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <p>
                  Yes, about 60% of the human body is composed of water, with
                  key organs like the brain and heart consisting of
                  approximately 73% water, lungs around 83%, muscles and kidneys
                  about 79%, skin 64%, and even bones containing 31%. Water
                  plays a vital role in regulating body temperature, nutrient
                  transportation, detoxification, and supporting cellular
                  processes. The quality of water consumed directly affects
                  overall health and well-being, making it essential to
                  prioritize clean and effective hydration for optimal bodily
                  function.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div className="container">
          <div className="section-spacing">
            <Row className="align-items-center">
              <Col xs={12} md={6} className="text-start">
                <h2 style={{ fontWeight: 700 }} className="d-inline-block">
                  Specific Criteria for{" "}
                  <span style={{ color: "#008AC7" }}>Drinking Water</span>
                </h2>
              </Col>
              <Col xs={12} md={6} className="text-end">
                <TyentLineAnimation />
              </Col>
            </Row>
            <br />
            <br />
            <Row className="g-4">
              {cardDetails.map((card, index) => (
                <Col key={index} data-aos="fade-up" xs={12} sm={6} md={3}>
                  <WhyDrinkTyentWater
                    icon={card.icon}
                    title={card.title}
                    content={card.content}
                  />{" "}
                  {/* Individual card */}
                </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="section-spacing" style={{ overflow: "hidden" }}>
          <Row>
            <Col
              xs={12}
              ms={12}
              md={4}
              data-aos="fade-up"
              className="d-flex justify-content-center align-items-center"
            >
              <svg
                width="60%"
                height="auto"
                viewBox="0 0 1530 1576"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="waterdrop"
                  d="M1107.88 874.383C1107.88 1052.73 954.368 1197.31 765 1197.31C575.632 1197.31 422.123 1052.73 422.123 874.383C422.123 643.41 670.235 517.731 758.764 220.253C760.532 214.312 769.467 214.312 771.235 220.253C859.765 517.731 1107.88 643.41 1107.88 874.383Z"
                  fill="#008AC7"
                  className="animate-waterdrop"
                />
                <path
                  id="wrong"
                  d="M1469.45 440C1430.94 354.25 1375.82 277.248 1305.62 211.132C1235.41 145.014 1153.65 93.1003 1062.61 56.8319C968.326 19.274 868.196 0.230469 765 0.230469C661.804 0.230469 561.675 19.274 467.392 56.8319C376.346 93.1003 294.586 145.015 224.385 211.132C154.183 277.248 99.0631 354.251 60.5531 440C20.6751 528.797 0.455078 623.101 0.455078 720.292C0.455078 817.483 20.6751 911.787 60.5531 1000.58C99.0621 1086.33 154.183 1163.34 224.385 1229.45C294.587 1295.57 376.347 1347.48 467.392 1383.75C561.674 1421.31 661.804 1440.35 765 1440.35C868.196 1440.35 968.325 1421.31 1062.61 1383.75C1153.65 1347.48 1235.41 1295.57 1305.62 1229.45C1375.82 1163.34 1430.94 1086.33 1469.45 1000.58C1509.33 911.788 1529.55 817.484 1529.55 720.292C1529.55 623.101 1509.33 528.798 1469.45 440ZM79.9031 720.292C79.9031 633.169 98.0111 548.672 133.725 469.149C168.229 392.319 217.632 323.31 280.564 264.04C343.494 204.771 416.766 158.242 498.342 125.746C582.779 92.1095 672.496 75.0551 765.001 75.0551C857.506 75.0551 947.223 92.1095 1031.66 125.746C1101.05 153.388 1164.43 191.19 1220.55 238.344L253.28 1149.33C203.213 1096.48 163.076 1036.79 133.727 971.436C98.0111 891.912 79.9031 807.415 79.9031 720.292ZM1396.28 971.436C1361.77 1048.27 1312.37 1117.27 1249.44 1176.54C1186.51 1235.81 1113.23 1282.34 1031.66 1314.84C947.221 1348.47 857.504 1365.53 764.999 1365.53C672.494 1365.53 582.777 1348.47 498.34 1314.84C428.95 1287.2 365.574  1249.39 309.455 1202.24L1276.72 291.253C1326.79 344.107 1366.92 403.796 1396.28 469.149C1431.99 548.673 1450.1 633.17 1450.1 720.293C1450.1 807.416 1431.99 891.912 1396.28 971.436Z"
                  fill="#D92D27"
                  className="animate-wrong"
                />
                <path
                  id="shadow"
                  d="M765.001 1575.77C1058.33 1575.77 1296.11 1562.73 1296.11 1546.66C1296.11 1530.58 1058.33 1517.55 765.001 1517.55C471.676 1517.55 233.889 1530.58 233.889 1546.66C233.889 1562.73 471.676 1575.77 765.001 1575.77Z"
                  fill="#C6C6C6"
                  className="animate-shadow"
                />
              </svg>
            </Col>
            <Col md={8} xs={12} ms={12}>
              <div
                className="d-flex justify-content-start align-items-start"
                data-aos="fade-up"
              >
                <div className="inonzerBoreWater">
                  <div>
                    <h3>
                      <span
                        style={{
                          color: "#008AC7",
                          fontSize: "50px",
                          fontWeight: 600,
                        }}
                      >
                        Why
                      </span>{" "}
                      NO To Bore Water ?
                    </h3>
                  </div>
                  <ul className="list-unstyled section-content">
                    <p>
                      Bore water often contains high levels of hardness (calcium
                      and magnesium salts) and toxic heavy metals like lead and
                      arsenic.
                      It may be contaminated with industrial waste and
                      pesticides, making it unsafe for long-term consumption.
                      Consuming untreated bore water can lead to kidney stones,
                      digestive issues, and other health problems.
                    </p>
                  </ul>
                </div>
                <br />
              </div>

              <div
                className="d-flex justify-content-end align-items-end"
                data-aos="fade-left"
              >
                <div className="inonzerBoreWater">
                  <div>
                    <h3>
                      <span
                        style={{
                          color: "#008AC7",
                          fontSize: "50px",
                          fontWeight: 600,
                        }}
                      >
                        Why
                      </span>{" "}
                      NO To Municipal Water ?
                    </h3>
                  </div>
                  <ul className="list-unstyled section-content">
                    <p>
                      Municipal water undergoes treatment with chlorine and
                      other chemicals to disinfect, but this can result in
                      byproducts like trihalomethanes (THMs), which are harmful.
                    
                      Aging pipelines can leach lead and rust into the water.
                      Treated municipal water often lacks the minerals essential
                      for health, and long-term exposure to contaminants can
                      weaken immunity.
                    </p>
                  </ul>
                </div>
                <br />
              </div>

              <div
                className="d-flex justify-content-start align-items-start"
                data-aos="fade-right"
              >
                <div className="inonzerBoreWater">
                  <div>
                    <h3>
                      <span
                        style={{
                          color: "#008AC7",
                          fontSize: "50px",
                          fontWeight: 600,
                        }}
                      >
                        Why
                      </span>{" "}
                      NO To RO (Reverse Osmosis) Water ?
                    </h3>
                  </div>
                  <ul className="list-unstyled section-content">
                    <li className="mb-2">
                      <b>Devoid of Minerals:</b> RO systems strip away
                      beneficial minerals, leaving water "dead" and acidic.
                    </li>
                    <li className="mb-2">
                      <b>Wastage : </b>RO water purifier's waste about 3–5 liters of
                      water for every 1 liter purified.
                    </li>
                    <li className="mb-2">
                      <b>Acidic Water :</b> Consuming acidic water can disrupt
                      the body's pH balance, leading to health issues like diabetes, artharities, thyroid etc. Acidic nature is the key sign for all health disorders.
                    </li>
                  </ul>
                </div>
                <br />
              </div>
            </Col>
          </Row>
        </div>

        <div className="section-spacing" style={{ overflow: "hidden" }}>
          <Row>
            <Col
              md={6}
              data-aos="fade-right"
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ width: "70%" }}>
                <Image src={NMP} alt="left image water" layout="responsive" />
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <div>
                <p
                  style={{ fontSize: "20px", fontWeight: 500 }}
                  className="m-0"
                >
                  What is
                </p>
                <div className="d-flex align-items-center">
                  <h3
                    className="m-0"
                    style={{
                      color: "#008AC7",
                      fontWeight: "700",
                      fontSize: "50px",
                    }}
                  >
                    Water <br /> ionizer
                  </h3>
                  <span>
                    <FaQuestion size={80} color="#008AC7" />
                  </span>
                </div>
                <p>
                  A water ionizer is a home appliance which claims to raise the
                  pH of drinking water by using electrolysis to separate the
                  incoming water stream into acidic and alkaline components. The
                  alkaline stream of the treated water is called alkaline water.
                  Health experts claim that consumption of alkaline water
                  results in a variety of health benefits.
                </p>
                <br />
                <p>
                  Water ionizers produce alkaline water containing dissolved
                  selective anti-oxidant called molecular hydrogen at the
                  cathode (the negative electrode) and acidic water at the anode
                  (the positive electrode). Water ionizers are plugged into the
                  AC outlet, the power is then transformed to direct current
                  (DC) so that electrolysis can be performed.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-spacing" style={{ overflow: "hidden" }}>
          <Row>
            <Col
              data-aos="fade-up"
              md={6}
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h3>
                  Molecular Hydrogen -{" "}
                  <span
                    style={{
                      color: "#008AC7",
                      fontSize: "40px",
                      fontWeight: "600",
                    }}
                  >
                    An emerging medical Gas
                  </span>
                </h3>
                <p>
                  Although the research is early, the 1000+ scientific articles
                  suggest that H2 has therapeutic potential in over 170
                  different human and animal disease models, and essentially
                  every organ of the human body. Molecular hydrogen (H2) or
                  diatomic hydrogen is a tasteless, odorless, flammable gas.
                  <br />
                  H2 reduces oxidative stress and improves redox homeostasis
                  partly mediated via the Nrf2 pathway, which regulates levels
                  of glutathione, superoxide dismutase, catalase, etc. *H2, like
                  other gaseous-signaling molecules (e.g. NO, CO, H2 S),
                  modulates signal transduction, protein phosphorylation, and
                  gene expression, which provides its anti-inflammatory,
                  anti-allergy, and anti-apoptotic protective effects.
                </p>
              </div>
            </Col>
            <Col
              data-aos="zoom-in"
              md={6}
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ width: "70%" }}>
                <Image
                  src={hydrogen}
                  alt="hydrogen"
                  layout="responsive"
                  priority
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-spacing" style={{ overflow: "hidden" }}>
          <Row>
            <Col
              data-aos="fade-left"
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ width: "75%" }}>
                <Image
                  src={whyIonizer}
                  alt="left image water"
                  layout="responsive"
                />
              </div>
            </Col>
            <Col
              md={6}
              data-aos="fade-right"
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <h3>
                  Ionized Alkaline water - <br />
                  <span
                    style={{
                      color: "#008AC7",
                      fontSize: "40px",
                      fontWeight: "600",
                    }}
                  >
                    A Natural Defense Against Lifestyle diseases.
                  </span>
                </h3>
                <div>
                  <p>
                    Ionized Alkaline water has a higher pH than regular tap
                    water, typically ranging from 8 to 9.5 or higher, making it
                    less acidic. Unlike regular water, which has a neutral pH of
                    7, Ionized alkaline water helps counteract acidic stress in
                    the body. Excessive acidic stress is often linked to health
                    conditions like Diabetes, Thyroid Issues, Gastric problems,
                    Constipation, Acidity, Cancer, Cardiovascular diseases,
                    Chronic respiratory issues, and Coronary heart diseases.
                  </p>
                  <p>
                    Tyent’s ionized hydrogen rich alkaline water offers an ideal
                    pH range of 7.0 to 9.5, providing the perfect balance for
                    drinking water. This optimal pH helps neutralize
                    disease-causing acidity, supporting the body's natural
                    defense against chronic diseases. Tyent water also contains
                    molecular hydrogen, a powerful antioxidant known to reduce
                    oxidative stress and promote overall health and well-being
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="section-spacing" style={{ overflow: "hidden" }}>
        <Row className="align-items-center">
          <div className="background-container">
            <div className="background-overlay"></div>
            <div
              className="text-overlay"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Centers the div
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ffffff", // Text color
                textAlign: "center",
                border: "4px solid #FFF",
                padding: "30px",
                borderRadius: "8px",
                width: "80%", // Adjust width as needed
                maxWidth: "900px", // Ensures it doesn't get too wide
              }}
            >
              <p>
                Tyent water has a magical combination of selective antioxidant
                molecular hydrogen and alkalinity.The selective antioxidant
                molecular hydrogen works to counteract free radicals and reduce
                oxidative stress. Meanwhile, the alkalinity in the water helps
                neutralize acidic stress. This combination contributes to a more
                balanced and beneficial hydration experience. Stay ahead in your
                wellness journey with every sip of Tyent ionized alkaline water.
              </p>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default page;
