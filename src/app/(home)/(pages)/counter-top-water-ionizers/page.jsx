// File: pages/counter-top-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";

import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import hybrid from "@/asserts/Hybrid.webp";

export const metadata = {
  title: "Tyent Countertop: Best Water Ionizer in India",
  description:
    "See why Tyent is listed among the top 10 alkaline water purifier in India. Our countertop models deliver powerful, chemical-free alkaline water.",
  keywords:
    "Counter Top Water Ionizers, Tyent NMP-5, NMP-7, NMP-9, NMP-11, Alkaline Water, Hydrogen Water, Water Purifier India, Healthy Lifestyle, Ionized Water, Antioxidant Water",
};

export default function CounterTopIonizers() {
  const ProductData = [
    {
      category: "Models",
      products: [
        {
          title: "NMP-5",
          image: nmp5,
          link: "/nmp-5",
          details: [
            { label: "Price", value: "₹ 1,68,000/-" },
            { label: "Electrode/Plates", value: "5" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -850*" },
            { label: "Hydrogen Range", value: "Up to 1550 PPB*" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "NMP-7",
          image: nmp5,
          link: "/nmp-7",
          details: [
            { label: "Price", value: "₹ 2,05,000/-" },
            { label: "Electrode/Plates", value: "7" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -950*" },
            { label: "Hydrogen Range", value: "Up to 1550 PPB*" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "NMP-9",
          image: nmp9,
          link: "/nmp-9",
          details: [
            { label: "Price", value: "₹ 2,38,000/-" },
            { label: "Electrode/Plates", value: "9" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1050*" },
            { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "NMP-11",
          image: nmp9,
          link: "/nmp-11",
          details: [
            { label: "Price", value: "₹ 2,72,000/-" },
            { label: "Electrode/Plates", value: "11" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1150*" },
            { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "HYBRID-H2",
          image: hybrid,
          link: "/hybrid-h2",
          details: [
            { label: "Price", value: "₹ 3,67,000/-" },
            { label: "Electrode Type", value: "Twin cell Technology" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1250*" },
            { label: "Hydrogen Range", value: "Up to 1850* PPB" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <Container className="py-5">
        <div className="text-center">
          <h1 className="bg-heading-text-two-main" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Tyent Countertop <br className="d-md-none" /> Water Ionizers
          </h1>
          <h3 className="fw-bold subtitle-tight mb-4">
            Discover the Power of Hydrogen-Rich Alkaline Water at Home
          </h3>

          <div className="overlap-heading mt-4">
            <p className="mt-4" style={{ fontSize: '15px' }}>
              Upgrade your kitchen and your health with Tyent Countertop Water Ionizers, engineered using premium USFDA-certified materials and powered by advanced Japanese technology. Designed for modern homes, these ionizers deliver hydrogen-rich alkaline water that supports better hydration, everyday wellness, and a healthier lifestyle.
            </p>
          </div>
        </div>


        <h4 className="mb-4" style={{ color: "#291495" }}>
          Explore Our Premium Models
        </h4>

        <div className="container my-5">
          {ProductData.map((section, idx) => {
            const firstRow = section.products.slice(0, 3);
            const secondRow = section.products.slice(3, 5);

            return (
              <div key={idx} className="mb-5">
                {/* First Row – 3 Cards */}
                <div className="row justify-content-center g-4 mb-4">
                  {firstRow.map((product, index) => (
                    <div
                      key={index}
                      className="col-12 col-sm-6 col-md-4 d-flex"
                    >
                      <Link href={product.link || "#"} passHref legacyBehavior>
                        <a className="text-decoration-none w-100 h-100">
                          <div className="card h-100 shadow-sm border-0 rounded-4 transition-all hover-shadow">
                            {/* Image */}
                            <div
                              className="bg-light d-flex align-items-center justify-content-center"
                              style={{
                                borderTopLeftRadius: "1rem",
                                borderTopRightRadius: "1rem",
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.title}
                                className="img-fluid "
                                style={{
                                  borderTopLeftRadius: "1rem",
                                  borderTopRightRadius: "1rem",
                                  maxHeight: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                            {/* Title */}
                            <div className="card-body text-center d-flex flex-column">
                              <h6 className="fw-semibold text-dark mb-3">
                                {product.title}
                              </h6>
                              {product.details && (
                                <div className="text-start w-100 mt-auto" style={{ fontSize: "14px", color: "#555" }}>
                                  {product.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="d-flex justify-content-between align-items-end mb-1" style={{ borderBottom: "1px dashed #eee", paddingBottom: "2px" }}>
                                      <span className="fw-semibold me-2">{detail.label}</span>
                                      <span className="text-end">{detail.value}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Second Row – 2 Centered Cards */}
                <div className="row justify-content-center g-4">
                  {secondRow.map((product, index) => (
                    <div
                      key={index}
                      className="col-12 col-sm-6 col-md-4 d-flex"
                    >
                      <Link href={product.link || "#"} passHref legacyBehavior>
                        <a className="text-decoration-none w-100 h-100">
                          <div className="card h-100 shadow-sm border-0 rounded-4 transition-all hover-shadow">
                            <div
                              className="bg-light d-flex align-items-center justify-content-center"
                              style={{
                                borderTopLeftRadius: "1rem",
                                borderTopRightRadius: "1rem",
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.title}
                                className="img-fluid "
                                style={{
                                  borderTopLeftRadius: "1rem",
                                  borderTopRightRadius: "1rem",
                                  maxHeight: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                            <div className="card-body text-center d-flex flex-column">
                              <h6 className="fw-semibold text-dark mb-3">
                                {product.title}
                              </h6>
                              {product.details && (
                                <div className="text-start w-100 mt-auto" style={{ fontSize: "14px", color: "#555" }}>
                                  {product.details.map((detail, dIdx) => (
                                    <div key={dIdx} className="d-flex justify-content-between align-items-end mb-1" style={{ borderBottom: "1px dashed #eee", paddingBottom: "2px" }}>
                                      <span className="fw-semibold me-2">{detail.label}</span>
                                      <span className="text-end">{detail.value}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features List Redesign */}
        <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
          {[
            "Quick & Hassle-Free Installation",
            "User-Friendly Operation",
            "Wall-Mountable Design",
            "Sleek & Stylish Aesthetic",
            "Longest One Touch Display",
            "Easy to replace filter's",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="d-flex align-items-center bg-white border shadow-sm rounded-pill px-4 py-2 transition-all hover-shadow"
              style={{ fontSize: "15px", fontWeight: "500", color: "#444", borderColor: "#f0f0f0" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#291495" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="me-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Why Choose Section Redesign */}
        <div className="mt-5 p-4 p-md-5 rounded-4 shadow-sm position-relative overflow-hidden" style={{ background: "linear-gradient(145deg, #f8faff 0%, #ffffff 100%)", border: "1px solid #e2e8f0" }}>


          <div className="position-relative" style={{ zIndex: 1 }}>
            <div className="text-center mb-5">
              <h2 className="fw-bold mb-3 position-relative d-inline-block" style={{ color: "#291495" }}>
                Why Choose Tyent Counter Top Ionizers?
                <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', backgroundColor: '#291495', borderRadius: '2px' }}></div>
              </h2>
              <p className="fs-6 mt-4 text-muted mx-auto" style={{ maxWidth: "750px", lineHeight: "1.7" }}>
                Our ionizers are more than just appliances—they are an investment in
                a healthier, more vibrant lifestyle. Here's why Tyent stands out:
              </p>
            </div>

            <div className="row g-4 justify-content-center mb-5">
              {[
                {
                  id: "NMP-5",
                  title: "Ultra-Compact",
                  desc: "Economical with 5 platinum-coated titanium plates. Ideal for beginners.",
                  icon: "5"
                },
                {
                  id: "NMP-7",
                  title: "Advanced Balance",
                  desc: "Performance & cost balance. Delivers wide pH range & enhanced antioxidants.",
                  icon: "7"
                },
                {
                  id: "NMP-9",
                  title: "Powerhouse",
                  desc: "Performance powerhouse offering hydrogen-rich water & powerful detox support.",
                  icon: "9"
                },
                {
                  id: "NMP-11",
                  title: "Flagship Model",
                  desc: "11 plates, touchscreen display, and unmatched water output capability.",
                  icon: "11"
                },
              ].map((model, idx) => (
                <div key={idx} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-all hover-shadow bg-white d-flex flex-column align-items-center text-center model-card" style={{ borderTop: "4px solid transparent" }}>
                    <div className="d-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm" style={{ width: "50px", height: "50px", backgroundColor: "#fff", border: `2px solid #291495`, color: "#291495", fontSize: "20px", fontWeight: "bold" }}>
                      {model.icon}
                    </div>
                    <h5 className="fw-bold mb-1" style={{ color: "#291495" }}>{model.id}</h5>
                    <span className="badge rounded-pill mb-3" style={{ backgroundColor: "rgba(41, 20, 149, 0.08)", color: "#291495", fontSize: "12px", fontWeight: "600", padding: "6px 12px" }}>
                      {model.title}
                    </span>
                    <p className="text-muted mb-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>{model.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-white p-4 p-md-5 rounded-4 shadow-sm mx-auto" style={{ maxWidth: "850px", border: "1px solid #f0f0f0" }}>
              <p className="text-muted fs-6 mb-4" style={{ lineHeight: "1.7" }}>
                Designed for modern living, Tyent Counter Top Ionizers fuse sleek
                aesthetics with medical-grade performance. Elevate your hydration
                game with the best in the industry.
              </p>
              <Link
                href="/under-counter-water-ionizers"
                className="btn text-white fw-bold px-3 px-md-5 py-3 rounded-pill transition-all mt-2 d-inline-flex justify-content-center align-items-center"
                style={{
                  background: "linear-gradient(90deg, #291495 0%, #4b2ac4 100%)",
                  boxShadow: "0 4px 15px rgba(41, 20, 149, 0.25)",
                  fontSize: "clamp(0.85rem, 3.5vw, 1rem)",
                  whiteSpace: "nowrap"
                }}
              >
                Explore Under Counter Models <span className="ms-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
