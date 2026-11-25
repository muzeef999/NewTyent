import WhatsInside from "./(main_home_content)/WhatsInside";
import Why_People_choose_Tyent_Water from "./(main_home_content)/Why_People_choose_Tyent_Water";
import RealScience from "./(main_home_content)/RealScience";
import HumanRight from "./(main_home_content)/HumanRight";
import Smarter_Upgrade from "./(main_home_content)/Smarter_Upgrade";
import Explore from "./(main_home_content)/Explore";
import Slider from "./compoents/Slider";
import { DeferredProductCarousel, DeferredClientLogos, DeferredVideo, DeferredTyentvsKAngan, DeferredTrustedbyExperts, DeferredNeedhelp, DeferredTyentFaqSection } from "./(main_home_content)/DeferredCarousels";
import Shop_by_category from "./(main_home_content)/Shop_by_category";

import Certifications from "./compoents/Certifications";

export const metadata = {
  title: "Tyent Water Ionizer - Best Alkaline Water Machine in India",
  description:
    "Explore Tyent water ionizers in India. Japanese technology, hydrogen-rich alkaline water. Find your model today.",
};

const Home = () => {
  return (
    <div className="tyent-homepage" style={{ width: "100%", overflow: "hidden", position: "relative" }}>
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
        <DeferredProductCarousel />
      </div>

      <div className="section-spacing">
        <Smarter_Upgrade />
      </div>

      <div className="section-spacing">
        <h2 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>
            Technical excellence with global availability
          </h2>
        <DeferredVideo />
      </div>

      <div className="section-spacing">
        <DeferredTyentvsKAngan />
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
        <DeferredTrustedbyExperts />
      </div>

      <div className="section-spacing">
        <Certifications />
      </div>

      <div className="section-spacing">
        <DeferredNeedhelp />
      </div>

      <div className="section-spacing">
        <h2 className="fw-bold subtitle-tight" style={{textAlign: "center"}}>Our Valued Clients</h2>
        <br />
        <DeferredClientLogos />
      </div>
      <div className="section-spacing">
        <DeferredTyentFaqSection />
      </div>
    </div>
  );
};
export default Home;
