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
  title: "Tyent: Best Alkaline Water Ionizer in India",
  description:
    "Discover Tyent, the best alkaline water machine in India. Get the best water ionizer in India with advanced Japanese technology for superior hydrogen-rich water.",
  keywords:
    "best kangen water machine, best kangen water machine in india, kangen water machine online india, buy kangen water machine, alkaline water machine, water ionizer machine, alkaline water system, best water ionizer, ionizer machine, best alkaline water machine, ph water machine, alkaline water ionizer, alkaline water filter system, k8 water machine, Kangen SD501 water ionizer, water ionizer for home, home alkaline water system, best alkaline water machine for home, alkaline water system for house, whole house alkaline water system, best water ionizer machine, ionised water machine, alkaline water ionizer machine, whole house water ionizer, living water alkaline machine, best water ionizer for home, japanese water ionizer, commercial alkaline water machine, countertop water ionizer, hydrogen alkaline water machine, hydrogen water generator, buy alkaline water machine, best water alkalizer, commercial alkaline water machine for sale, top alkaline water machine, tyent usa water ionizer, best alkaline water ionizer machine, tyent water ionizer, tyent usa water ionizer, water ionizer and alkaline water machine, Enagic kangen SD501, kangen water machine, Under counter water ionizer, Enagic kangen Jr, Enagic kangen super SD501, Tyent NMP water ionizer, Tyent UCE PLUS water ionizer, Antioxidant water, Ionized alkaline water benefits",
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
        <Smarter_Upgrade />
      </div>

      <div className="section-spacing">
        <h1
          className="text-center"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Technical excellence with global availability
        </h1>
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

      

      <div className="section-spacing">
        <Certifications />
      </div>

      <div className="section-spacing">
        <Needhelp />
      </div>
    </div>
  );
};
export default Home;
