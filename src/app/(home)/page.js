import { Col, Container, Row } from "react-bootstrap";
import WhyTyent from "./compoents/(Home)/WhyTyent";
import SectionTwo from "./compoents/(Home)/SectionTwo";
import Certifications from "./compoents/Certifications";
import Slider from "./compoents/Slider";
import Video from "./compoents/Video";
import Maps from "./compoents/Maps";
import TyentLineAnimation from "./compoents/TyentLineAnimation";
import dynamic from "next/dynamic";
import WhyDrinkTyentWater from "./compoents/(Home)/WhyDrinkTyentWater";
import minerals from "@/asserts/why ionizer/minerals.png";
import puredrink from "@/asserts/health/puredrink.webp";
import Molecular from "@/asserts/health/Molecular.webp";
import alkaline from "@/asserts/health/Natural minerals.webp";
import watersoda from "@/asserts/health/Micro-clustered water.webp";
import HomeProduct from "./compoents/(Home)/HomeProduct";

const TyentvsKAngan = dynamic(
  () => import("./compoents/(Home)/TyentvsKAngan"),
  {
    ssr: false,
  }
);

const SlickSlider = dynamic(() => import("./compoents/SlickSlider"), {
  ssr: false,
});

const Form = dynamic(() => import("./compoents/Form/Form"), {
  ssr: false,
});


export const metadata = {
  title: "Tyent Water Ionizers India | Best Kangen Water Machines & Alkaline Ionizers",
  description: "Explore Tyent Water Ionizers India for the best Kangen water machines and alkaline ionizers. Enjoy ultra-pure, hydrogen-rich water with our advanced technology for superior hydration and health benefits.",
  keywords: "best kangen water machine, best kangen water machine in india, kangen water machine online india, buy kangen water machine, alkaline water machine, water ionizer machine, alkaline water system, best water ionizer, ionizer machine, best alkaline water machine, ph water machine, alkaline water ionizer, alkaline water filter system, k8 water machine, Kangen SD501 water ionizer, water ionizer for home, home alkaline water system, best alkaline water machine for home, alkaline water system for house, whole house alkaline water system, best water ionizer machine, ionised water machine, alkaline water ionizer machine, whole house water ionizer, living water alkaline machine, best water ionizer for home, japanese water ionizer, commercial alkaline water machine, countertop water ionizer, hydrogen alkaline water machine, hydrogen water generator, buy alkaline water machine, best water alkalizer, commercial alkaline water machine for sale, top alkaline water machine, tyent usa water ionizer, best alkaline water ionizer machine, tyent water ionizer, tyent usa water ionizer, water ionizer and alkaline water machine, Enagic kangen SD501, kangen water machine, Under counter water ionizer, Enagic kangen Jr, Enagic kangen super SD501, Tyent NMP water ionizer, Tyent UCE PLUS water ionizer, Antioxidant water, Ionized alkaline water benefits",
};


const Home = () => {
  const cardDetails = [
    {
      icon: Molecular,
      title: "Anti-oxidant Molecular H2",
      content: `
        Tyent ionized hydrogen-rich alkaline water has a selective antioxidant 
        called Molecular hydrogen. Molecular hydrogen is rich in electrons or -ORP 
        which helps in neutralizing free radicals (ROS) and oxidative stress.

        It also helps in reducing inflammation, protecting against oxidative stress, 
        enhancing athletic performance, and supporting gut health too.
      `,
    },
    
    {
      icon: watersoda,
      title: "Micro-clustered water",
      content: `
        Tyent ionized hydrogen-rich alkaline water is Micro-clustered water. 
        Due to its micro-clustered property, it penetrates faster to all cells 
        and major organs in the human body than regular tap or RO water.

        Tyent Micro-clustered water provides better penetration, better hydration, 
        better detox, and faster supply of minerals.
      `,
    },
    {
      icon: alkaline,
      title: "Alkalinity",
      content: `
        Acidic stress is the root cause of all the major lifestyle diseases 
        such as Diabetes, Thyroid, Gastric, Constipation, Acidity, Cancer, 
        Cardiovascular diseases, Chronic respiratory diseases, and Coronary 
        heart diseases. 

        Tyent ionized hydrogen alkaline water is alkaline in nature (with a 
        pH value of drinking water 7pH - 9.5pH) which helps in neutralizing 
        disease-causing acidic nature.
      `,
    },
    
    {
      icon: minerals,
      title: "Natural minerals",
      content: `
        Tyent ionized hydrogen-rich alkaline water is rich in alkaline minerals 
        such as calcium, magnesium, potassium, and sodium.

        Alkaline minerals help in promoting bone health, aiding muscle function, 
        supporting cardiovascular health, boosting immune function, and enhancing 
        metabolism.
      `,
    },
    {
      icon: puredrink,
      title: "Pure Healthy water",
      content: `
        The Tyent water ionizer, equipped with .01-micron filtration, delivers the purest and safest healthy water, free from bacteria, nano-viruses, nano-plastics, contaminants, chlorine, and more.
      `,
    },
  ];

  return (
    <div style={{width:'100%',  overflow: "hidden", position: 'relative' }}>
      <Slider />

    
      <div className="section-spacing sectionSection">
        <SectionTwo />
      </div>

      <div className="section-spacing">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={3} className="text-start mb-3 mb-md-0">
              <h2 style={{ fontWeight: 700 }} className="d-inline-block">
                Why To Drink <span style={{ color: "#008AC7" }}>Tyent</span>{" "}
                Water ?
              </h2>
            </Col>
            <Col xs={12} md={9} className="text-end">
              <TyentLineAnimation />
            </Col>
          </Row>
          <Row className="g-4">
            {cardDetails.map((card, index) => (
              <Col
                key={index}
                data-aos={
                  index === 0
                    ? "fade-up"
                    : index === 1
                    ? "fade-right"
                    : index === 2
                    ? "fade-left"
                    : "zoom-in"
                }
                xs={12}
                sm={6}
                md={index < 3 ? 4 : index === 3 ? 7 : 5}
              >
                <WhyDrinkTyentWater
                  icon={card.icon}
                  title={card.title}
                  m
                  content={card.content}
                />{" "}
                {/* Individual card */}
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="section-spacing">
        <WhyTyent />
      </div>

      <div className="section-spacing">
        <Container>
          <Row>
            <Col
              md={6}
              data-aos="fade-right" // Fade right animation for the left column
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#008AC7",
                color: "#FFF",
                aspectRatio: "1/1",
              }}
            >
              <div style={{ padding: "60px" }}>
                <h2 style={{ fontWeight: 600 }}>Why Tyent ?</h2>
                <p>
                  Tyent, a medical-grade water ionizer manufactured by TAEYOUNG
                  E&T, is available in 86+ countries. Since more than 3 decades
                  Tyent is known for its advanced Japanese technology, Tyent
                  follows traditional marketing and offers end-to-end service
                  with an in-house team handling demos, installations, and
                  after-sales support, focusing customer satisfaction and brand
                  trust.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              data-aos="fade-left" // Fade left animation for the right column
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f2f2f2",
                color: "#000",
                aspectRatio: "1/1",
              }}
            >
              <div style={{ padding: "60px" }}>
                <h2 style={{ fontWeight: 600 }}>What is Kangen ?</h2>
                <p>
                  Kangen, a medical-grade water ionizer manufactured by Enagic &
                  Co, is available in 26+ countries., relies on an MLM business
                  model, doubling prices as 49% of costs go to commissions for
                  30 middlemen. Unlike other ionizers, Kangen lacks manpower for
                  demo, installation and after-sales doorstep service globally,
                  Focusing revenue generation over end customer satisfaction.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section-spacing">
        <p
          className="text-center"
          style={{
            marginTop: "-20px",
            fontWeight: 600,
            fontSize: "clamp(24px, 5vw, 70px)", // 24px is the min, 5vw is preferred, 70px is the max
            color: "#008AC7",
          }}
        >
          Tyent
          <span
            style={{ color: "#7B7B7B", fontSize: "44px", fontWeight: "normal" }}
          >
            {" "}
            VS{" "}
          </span>{" "}
          <span style={{ color: "#7B7B7B" }}>Kangen</span>
        </p>
        <TyentvsKAngan />
      </div>

      <div className="section-spacing">
        <h2
          style={{ color: "#008AC7", fontWeight: "600", textAlign: "center" }}
        >
          This Week’s Highlights
        </h2>
        <Container>
          <HomeProduct />
        </Container>
      </div>

      <div className="section-spacing">
        <Certifications />
      </div>

      <div className="section-spacing">
        <h1
          className="text-center"
          style={{
            fontSize: "clamp(24px, 5vw, 3rem)",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Technical excellence with global availability
        </h1>
        <Video />
      </div>

      <div className="section-spacing">
        <h1
          className="text-center"
          style={{
            fontSize: "clamp(24px, 5vw, 3rem)",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {" "}
          Our Valued Clients
        </h1>
        <br />

        <SlickSlider />
      </div>

      <div className="section-spacing">
        <Maps />
      </div>
    </div>
  );
};
export default Home;
