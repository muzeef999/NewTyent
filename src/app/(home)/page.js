import Slider from "./compoents/Slider";
import dynamic from "next/dynamic";
import Shop_by_category from "./(main_home_content)/Shop_by_category";

// Lazy load all below-fold components
const Explore = dynamic(() => import("./(main_home_content)/Explore"), { ssr: true });
const WhatsInside = dynamic(() => import("./(main_home_content)/WhatsInside"), { ssr: true });
const ProductCarousel = dynamic(() => import("./(main_home_content)/ProductCarousel"), { ssr: false });
const Smarter_Upgrade = dynamic(() => import("./(main_home_content)/Smarter_Upgrade"), { ssr: true });
const Video = dynamic(() => import("./compoents/Video"), { ssr: false });
const WhyTyent = dynamic(() => import("./compoents/(Home)/WhyTyent"), { ssr: false });
const TyentvsKAngan = dynamic(() => import("./compoents/(Home)/TyentvsKAngan"), { ssr: false });
const HumanRight = dynamic(() => import("./(main_home_content)/HumanRight"), { ssr: true });
const RealScience = dynamic(() => import("./(main_home_content)/RealScience"), { ssr: true });
const Why_People_choose_Tyent_Water = dynamic(() => import("./(main_home_content)/Why_People_choose_Tyent_Water"), { ssr: false });
const TrustedbyExperts = dynamic(() => import("./(main_home_content)/TrustedbyExperts"), { ssr: false });
const Certifications = dynamic(() => import("./compoents/Certifications"), { ssr: false });
const Needhelp = dynamic(() => import("./(main_home_content)/Needhelp"), { ssr: false });
const SlickSlider = dynamic(() => import("./compoents/SlickSlider"), { ssr: false });
const TyentFaqSection = dynamic(() => import("./contact/[slug]/TyentFaqSection"), { ssr: false });

export const metadata = {
  title: "Tyent Water Ionizer - Best Alkaline Water Machine in India",
  description:
    "Explore Tyent water ionizers in India. Japanese technology, hydrogen-rich alkaline water. Find your model today.",
};

const Home = () => {
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
