import { Col, Container, Row } from "react-bootstrap";
import WhyTyent from "./compoents/(Home)/WhyTyent";
import SectionTwo from "./compoents/(Home)/SectionTwo";
import Certifications from "./compoents/Certifications";
import Slider from "./compoents/Slider";
import Video from "./compoents/Video";
import Maps from "./compoents/Maps";
import dynamic from "next/dynamic";
import minerals from "@/asserts/why ionizer/minerals.png";
import puredrink from "@/asserts/health/puredrink.webp";
import Molecular from "@/asserts/health/Molecular.webp";
import alkaline from "@/asserts/health/Natural minerals.webp";
import watersoda from "@/asserts/health/Micro-clustered water.webp";
import Shop_by_category from "./(main_home_content)/Shop_by_category";
import WhatsInside from "./(main_home_content)/WhatsInside";
import Explore from "./(main_home_content)/Explore";
import HumanRight from "./(main_home_content)/HumanRight";
import RealScience from "./(main_home_content)/RealScience";
import Needhelp from "./(main_home_content)/Needhelp";
import Smarter_Upgrade from "./(main_home_content)/Smarter_Upgrade";
import Why_People_choose_Tyent_Water from "./(main_home_content)/Why_People_choose_Tyent_Water"
import ProductCarousel from "./(main_home_content)/ProductCarousel";
import TrustedbyExperts from "./(main_home_content)/TrustedbyExperts";
import TyentFaqSection from "./contact/[slug]/TyentFaqSection";

const TyentvsKAngan = dynamic(
  () => import("./compoents/(Home)/TyentvsKAngan"),
  {
    ssr: false,
  },
);

const SlickSlider = dynamic(() => import("./compoents/SlickSlider"), {
  ssr: false,
});

const Form = dynamic(() => import("./compoents/Form/Form"), {
  ssr: false,
});

export const metadata = {
  title: "Tyent Water Ionizer - Best Alkaline Water Machine in India",
  description:
    "Explore Tyent water ionizers in India. Japanese technology, hydrogen-rich alkaline water. Find your model today.",
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
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <h1 className="visually-hidden">
        Tyent – Best Alkaline Water Ionizer Machine in India | Hydrogen-Rich Water Purifier
      </h1>
      <Slider />

      <div className="section-spacing">
        <Shop_by_category />
      </div>

      <div className="section-spacing">
        <Explore />
      </div>

      <div className="section-spacing">
        <WhatsInside />
      </div>

      <div className="section-spacing">
        <ProductCarousel />
      </div>

      <div className="section-spacing">
        <Smarter_Upgrade />
      </div>

      <div className="section-spacing">
        <h2 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>
            Technical excellence with global availability
          </h2>
        <Video />
      </div>

      <div className="section-spacing">
        <TyentvsKAngan />
      </div>

      <div className="section-spacing">
        <HumanRight />
      </div>

      <div className="section-spacing">
        <RealScience />
      </div>


      <div className="section-spacing">
        <Why_People_choose_Tyent_Water />
      </div>

      <div className="">
        <TrustedbyExperts />
      </div>



      <div className="section-spacing">
        <Certifications />
      </div>

      <div className="section-spacing">
        <Needhelp />
      </div>

      <div className="section-spacing">
        <h2 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>Our Valued Clients</h2>
        <br />
        <SlickSlider />
      </div>
      <div className="section-spacing">
        <TyentFaqSection />
      </div>
    </div>
  );
};
export default Home;
