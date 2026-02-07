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
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="text-white py-8"
        style={{ backgroundColor: "#008ac7" }}
      >
        <div className="container">
          <br/>
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
                  <b>Authorised master distributor :</b> Crystal H2O and
                  Hydromax Water Services
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

            <div className="col-lg-5 text-lg-end">
              <div className="rounded overflow-hidden shadow d-inline-block">
                <br />
                <iframe
                  width="460"
                  height="270"
                  src="https://www.youtube.com/embed/sktKcmT2DGw"
                  title="Tyent India"
                  allowFullScreen
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
          <br/>
        </div>
      </section>

      {/* ================= TECHNOLOGY SECTION ================= */}
      <section className="container py-5 text-center">
        <h2 className="bg-heading-text">Tyent’s Japanese Technology</h2>
        <p
          style={{ fontSize: "20px", marginTop: "-20px" }}
          className="fw-semibold"
        >
          Advanced Health Protection with Doorstep Installation & Service
        </p>

        <p>
          Looking for the best water ionizer in {locationName} that delivers
          real health benefits, superior hydration, and long-term protection?
          Welcome to Tyent India - {locationName}’s most trusted brand for
          hydrogen-rich alkaline water ionizers & Hydrogen water generator’s,
          now offering complete doorstep service, installation, and after-sales
          support across {locationName}.
        </p>

        <p>
          In a city battling rising pollution, heavy metals, and deteriorating
          water quality, ordinary RO systems are no longer enough. Tyent brings
          medical-grade water ionization technology that not only purifies water
          but enhances it with selective anti-oxidant molecular hydrogen,
          essential minerals, and balanced alkalinity - supporting immunity,
          detoxification, digestion, and long-term lifestyle disease prevention.
        </p>
      </section>

      {/* ================= IMAGE + CONTENT ================= */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <Image
              src={contactimage}
              alt="Healthy Water"
              width={600}
              height={400}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h3 className="fw-bold text-primary mb-3">
              Upgrade Your Water.
              <br />
              Upgrade Your Health.
            </h3>

            <p className="text-muted">
              Stop settling for ordinary RO water that strips essential
              minerals. Choose Tyent - the best hydrogen-rich alkaline water
              ionizer’s & Hydrogen water generator’s for luxury hydration,
              advanced wellness, and long-term family protection.
            </p>
            <a href="#book-demo" style={{ textDecoration: "none" }}>
              <button className="btn btn-primary px-4 py-2 rounded-pill mt-3">
                Book Your Free Demo Today
              </button>
            </a>

            <p className="text-muted small mt-2">
              Doorstep Service Available Across {locationName}
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="container py-5">
        <div className="row g-4 align-items-center border rounded  shadow-sm">
          <div className="col-md-6  m-0">
            <div className="p-2">
              <h4 className="fw-bold text-primary mb-3">
                Why Choose Tyent Water Ionizer in {locationName}?
              </h4>

              <p className="text-muted">
                Tyent is a globally recognized pioneer in hydrogen-rich alkaline
                water ionizers, trusted across 86+ countries and recommended by
                doctors, fitness experts, and wellness professionals worldwide.
                Headquartered in South Korea and powered by advanced Japanese
                engineering, Tyent is designed for Indian water conditions and
                Delhi’s complex TDS challenges.
              </p>

              <ul className="text-muted ps-3 mb-0">
                <p>
                  With Tyent, you don’t just drink clean water - you experience
                  therapeutic hydration that supports:{" "}
                </p>
                <li>Better digestion & metabolism</li>
                <li>Supports detoxification</li>
                <li>Improves energy & immunity</li>
                <li>Reduces oxidative stress</li>
                <li>Balances body pH levels</li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6 p-0 m-0 position-relative"
            style={{ minHeight: "300px" }}
          >
            <Image
              src={contactimg}
              alt="Healthy Lifestyle"
              className="img-fluid object-fit-cover"
            />
          </div>
        </div>
        <br />
        <div
          className="container section-spacing"
          style={{ overflow: "hidden" }}
        >
          <center>
            <h2 className="bg-heading-text">What Makes Tyent</h2>
            <p
              style={{ fontSize: "13px", marginTop: "-20px" }}
              className="fw-semibold"
            >
              #1 Alkaline Water Ionizer in {locationName} ?
            </p>
          </center>
          <FeaturesCardContactUS />
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
