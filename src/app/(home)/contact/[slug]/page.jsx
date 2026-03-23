import Image from "next/image";
import contactimage from "@/asserts/contactimage1.png";
import contactimg from "@/asserts/contactimg.png";
import dynamic from "next/dynamic";
import { locationsData } from "../locationData";

const Loading = dynamic(() => import("@/app/(home)/compoents/Loading"), {
  srr: false,
});

import Certifications from "../../compoents/Certifications";
import SlickSlider from "../../compoents/SlickSlider";
import FeaturesCardContactUS from "../[slug]/FeaturesCardContactUS";
import Video from "../../compoents/Video";
import "../contact.css";
import TyentFaqSection from "./TyentFaqSection";

export async function generateMetadata({ params }) {
  // Find the location using slug
  const location = Object.values(locationsData).find(
    (loc) => loc.slug === params.slug,
  );

  if (!location) {
    return {
      title: "Location Not Found | Tyent Water",
      description: "This location page does not exist.",
    };
  }

  return {
    title: location.metaTitle, // dynamic title
    description: location.metaDescription, // dynamic description
  };
}

export default async function LocationPage({ params }) {
  const location = Object.values(locationsData).find(
    (loc) => loc.slug === params.slug,
  );

  // IF LOCATION NOT FOUND
  if (!location) {
    return (
      <div className="text-center mt-5">
        <h2>Location Not Found</h2>
        <p>We currently do not have a page for this location.</p>
      </div>
    );
  }

  const {
    title: locationName,
    heroImage,
    metaTitle,
    metaDescription,
  } = location;
  // Convert slug to readable location name
  // const locationName = params.slug
  // .split("-")
  // .pop()
  // .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="w-100" style={{ overflowX: "hidden" }}>
      {/* ================= HERO SECTION ================= */}
      <section
        className="text-white py-8"
        style={{ backgroundColor: "#291495" }}
      >
        <div className="container">
          <br />
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h1 className="fw-bold fs-3 mb-3">
                Best Hydrogen Rich Alkaline Water Ionizer & Hydrogen Water
                Generator in{" "}
                {locationName === "Kochi" ? (
                  <>
                    Kochi <br /> Kerala
                  </>
                ) : locationName === "Surat" ? (
                  <>
                    Surat <br />
                  </>
                ) : (
                  locationName
                )}
              </h1>

              {/* Distributor Info Below Heading */}
              {(locationName === "Kochi" || locationName === "Kerala") && (
                <p className="fw-medium">
                  <b>Authorised master distributor :</b> HYDROMAX WATER SYSTEMS & CRYSTAL H2O
                </p>
              )}

              {locationName === "Surat" && (
                <p className="fw-medium">
                  <b>Authorized distributor :</b> Casa Kitchens, J.B, Maharana
                  Pratap Rd, Surat
                </p>
              )}

              <br />
              <p className="mb-0">
                For free demo contact: <b>9966 558 556</b>
              </p>
            </div>

            <div className="col-lg-5 text-lg-end mt-4 mt-lg-0">
              <div className="rounded overflow-hidden shadow d-block mx-auto ms-lg-auto me-lg-0" style={{ width: "100%", maxWidth: "460px" }}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/sktKcmT2DGw"
                    title="Tyent India"
                    allowFullScreen
                    style={{ border: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>

      {/* ================= TECHNOLOGY SECTION ================= */}
      <section className="py-2 text-center position-relative overflow-hidden" style={{ backgroundColor: "#f8f9fc" }}>
        <div className="container position-relative z-1 py-4">
          <h2
            className="contact-technology-heading position-absolute w-100 top-0 start-50 translate-middle-x m-0 pe-none"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 6rem)",
              fontWeight: "900",
              background: "linear-gradient(180deg, rgba(170, 190, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap",
              zIndex: -1
            }}
          >
            Tyent’s Japanese{" "}
            <span className="d-block d-md-inline">Technology</span>
          </h2>

          <h3
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#333", marginTop: "clamp(40px, 8vw, 85px)" }}
            className="fw-bold mb-4"
          >
            Advanced Health Protection with Doorstep Installation & Service
          </h3>

          <div className="mx-auto text-muted" style={{ maxWidth: "1200px", fontSize: "15px", lineHeight: "1.8" }}>
            <p className="mb-4">
              Looking for the best water ionizer in {locationName} that delivers
              real health benefits, superior hydration, and long-term protection?
              Welcome to Tyent India - {locationName}’s most trusted brand for
              hydrogen-rich alkaline water ionizers & Hydrogen water generator’s,
              now offering complete doorstep service, installation, and after-sales
              support across {locationName}.
            </p>

            <p className="mb-0">
              In a city battling rising pollution, heavy metals, and deteriorating
              water quality, ordinary RO systems are no longer enough. Tyent brings
              medical-grade water ionization technology that not only purifies water
              but enhances it with selective anti-oxidant molecular hydrogen,
              essential minerals, and balanced alkalinity - supporting immunity,
              detoxification, digestion, and long-term lifestyle disease prevention.
            </p>
          </div>
        </div>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <Image
              src={contactimage}
              alt="Healthy Water"
              width={600}
              height={400}
              className="img-fluid rounded-4 w-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-6 ps-lg-5">
            <h2 className="fw-bold text-primary mb-4" style={{ fontSize: "2.2rem", letterSpacing: "-1px" }}>
              Upgrade Your Water.<br />
              Upgrade Your Health.
            </h2>

            <p className="text-muted mb-4" style={{ fontSize: "15px", lineHeight: "1.8" }}>
              Stop settling for ordinary RO water that strips essential
              minerals. Choose Tyent - the best hydrogen-rich alkaline water
              ionizer’s & Hydrogen water generator’s for luxury hydration,
              advanced wellness, and long-term family protection.
            </p>

            <a href="#book-demo" className="btn btn-primary text-white rounded-pill fw-medium py-2 w-100 text-decoration-none shadow-sm" style={{ fontSize: "15px" }}>
              Book Your Free Demo Today
            </a>

            <p className="text-muted small mt-3 fw-medium" style={{ fontSize: "12px" }}>
              Doorstep Service Available Across {locationName}
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="container py-5">
        <div className="card border shadow-sm rounded-4 overflow-hidden mb-4">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center">
              <h3 className="fw-bold mb-4" style={{ color: "#0066ff", fontSize: "1.8rem" }}>
                Why Choose Tyent Water Ionizer in {locationName}?
              </h3>

              <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.7", color: "#4f4f4f" }}>
                Tyent is a globally recognized pioneer in hydrogen-rich alkaline
                water ionizers, trusted across 86+ countries and recommended by doctors,
                fitness experts, and wellness professionals worldwide.
                Headquartered in South Korea and powered by advanced Japanese
                engineering, Tyent is designed for Indian water conditions and
                {locationName}’s complex TDS challenges.
              </p>

              <p className="text-muted mt-2 mb-2" style={{ fontSize: "15px", color: "#4f4f4f" }}>
                With Tyent, you don’t just drink clean water - you experience therapeutic
                hydration that supports:
              </p>

              <ul className="text-muted ps-4 mb-0" style={{ fontSize: "15px", lineHeight: "1.8", color: "#4f4f4f" }}>
                <li>Better digestion & metabolism</li>
                <li>Reduces acidity & gut imbalance</li>
                <li>Supports Detoxification & promotes weight loss</li>
                <li>Improved energy & immunity</li>
                <li>Protection from oxidative stress</li>
                <li>Reduces inflammation & blood pressure</li>
                <li>Stabilizes blood sugar</li>
              </ul>
            </div>

            <div className="col-lg-5 position-relative" style={{ minHeight: "350px" }}>
              <Image
                src={contactimg}
                alt="Healthy Lifestyle"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>
        <div
          className=""
          style={{ overflow: "hidden" }}
        >
          <div className="text-center">
            <h2 className="bg-heading-text-two-main m-0">What Makes Tyent</h2>
            <p className="contact-section-subtitle fw-semibold subtitle-tight mb-0">
              #1 Alkaline Water Ionizer in {locationName} ?
            </p>
          </div>
          <FeaturesCardContactUS />
        </div>

          <h3 className="fw-bold subtitle-tight text-center" style={{ marginTop: 0 }}>
            Technical excellence with global availability
          </h3>
          <Video />

          <div className="contact-award-strip">
            <h3 className="contact-award-strip-title mb-2" style={{ marginTop: 0 }}>
              Award-Winning Global Innovation
            </h3>
            <p className="contact-award-strip-text mb-0">
              Tyent has received multiple international awards for innovation,
              engineering excellence, and health technology breakthroughs,
              setting new global benchmarks for alkaline water solutions.
            </p>
          </div>

        <Certifications />

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
        <TyentFaqSection />
        <div id="book-demo"></div>
      </section>
    </div>
  );
}
