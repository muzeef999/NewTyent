// File: pages/under-counter-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import uce from "@/asserts/Uce.webp";
import { Col, Row, Container } from "react-bootstrap";

export const metadata = {
  title: "Tyent Under Counter Water Ionizers in India",
  description:
    "Explore the best alkaline water purifier in India (UCE Series). Tyent's discreet under-counter alkaline water ionizer offers style and advanced filtration.",
  keywords:
    "Under Counter Water Ionizers, Tyent UCE-9 Plus, Tyent UCE-11 Plus, Tyent UCE-13 Plus, Alkaline Water, Hydrogen Water, Ionized Water India, Healthy Drinking Water, Kitchen Water Filter",
};

export default function UnderCounterIonizers() {
  const ProductData = [
    {
      category: "Models",
      products: [
        {
          title: "Tyent UCE-9 Plus",
          image: uce,
          link: "/uce-9-plus",
          details: [
            { label: "Price", value: "₹ 3,25,000/-" },
            { label: "Electrode/Plates", value: "9" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1050*" },
            { label: "Hydrogen Range", value: "Up to 1800* PPB" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "Tyent UCE-11 Plus",
          image: uce,
          link: "/uce-11-plus",
          details: [
            { label: "Price", value: "₹ 3,46,000/-" },
            { label: "Electrode/Plates", value: "11" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1150*" },
            { label: "Hydrogen Range", value: "Up to 1800* PPB" },
            { label: "Generates", value: "7 types of water levels" },
            { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates" }
          ]
        },
        {
          title: "Tyent UCE-13 Plus",
          image: uce,
          link: "/uce-13-plus",
          details: [
            { label: "Price", value: "₹ 3,67,000/-" },
            { label: "Electrode/Plates", value: "13" },
            { label: "pH Range", value: "2.5 - 11.5*" },
            { label: "ORP Range", value: "Up to -1250*" },
            { label: "Hydrogen Range", value: "Up to 1800* PPB" },
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
          <h1 className="bg-heading-text-two-main" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            Tyent Under-Counter <br className="d-md-none" /> Purifiers
          </h1>
          <h3 className="fw-bold subtitle-tight mb-4">
            Maximize Kitchen Space with Elegant, Medical-Grade Hydration
          </h3>
        <div className="overlap-heading mt-4">
          <p className="mt-4" style={{ fontSize: '15px' }}>
            Tyent’s Under-the-Counter Water Ionizers deliver unmatched
            convenience, advanced Japanese technology, and USFDA-certified quality
            - all tucked neatly beneath your counter. Experience the same powerful
            hydrogen-rich alkaline water in a space-saving, clutter-free design.
            Perfect for high end premium modern kitchens, this system ensures
            complete wellness for your entire family without compromising on style
            or space.
          </p>
        </div>
        </div>


        <h4 className="mb-4" style={{ color: "#291495" }}>
          Our Premium Under Counter Ionizers
        </h4>

        {ProductData.map((section, idx) => (
          <div key={idx} className="mb-5">
            <Row className="g-4 justify-content-center">
              {section.products.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} className="d-flex">
                  <Link href={product.link} passHref legacyBehavior>
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
                                <div key={dIdx} className="d-flex justify-content-between align-items-start mb-2" style={{ borderBottom: "1px dashed #eee", paddingBottom: "4px" }}>
                                  <span className="fw-semibold me-2 pe-1" style={{ flexShrink: 0 }}>{detail.label}</span>
                                  <span className="text-end" style={{ wordBreak: "break-word" }}>{detail.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        {/* Features List Redesign */}
        <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
          {[
            "Space-Saving Under-the-Counter Design",
            "Seamless & Hassle-Free Installation",
            "Premium Touch Display Faucet for Easy Operation",
            "Advanced Dual Filtration System",
            "Jogdial for easy operation",
            "Best design award 2023, 24 winner",
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
                Why Choose Tyent Under Counter Ionizers?
                <div style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '60px', height: '4px', backgroundColor: '#291495', borderRadius: '2px' }}></div>
              </h2>
              <p className="fs-6 mt-4 text-muted mx-auto" style={{ maxWidth: "750px", lineHeight: "1.7" }}>
                Perfect for modern homes, health-focused families, and those who
                demand performance and aesthetics. Here's why our UCE series stands out:
              </p>
            </div>

            <div className="row g-4 justify-content-center mb-5">
              {[
                {
                  id: "UCE-9 Plus",
                  title: "Efficient Performance",
                  desc: "Highly efficient, entry-level under sink solution.",
                  icon: "9"
                },
                {
                  id: "UCE-11 Plus",
                  title: "Advanced Filtration",
                  desc: "Advanced dual filtration and high hydrogen production.",
                  icon: "11"
                },
                {
                  id: "UCE-13 Plus",
                  title: "Flagship Model",
                  desc: "Superior power, pristine design, and touchscreen features.",
                  icon: "13"
                },
              ].map((model, idx) => (
                <div key={idx} className="col-md-6 col-lg-4">
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
                Experience the same powerful hydrogen-rich alkaline water in a space-saving,
                clutter-free under-counter design without compromising on style.
              </p>
              <Link
                href="/counter-top-water-ionizers"
                className="btn text-white fw-bold px-3 px-md-5 py-3 rounded-pill transition-all mt-2 d-inline-flex justify-content-center align-items-center"
                style={{
                  background: "linear-gradient(90deg, #291495 0%, #4b2ac4 100%)",
                  boxShadow: "0 4px 15px rgba(41, 20, 149, 0.25)",
                  fontSize: "clamp(0.85rem, 3.5vw, 1rem)",
                  whiteSpace: "nowrap"
                }}
              >
                View Counter Top Ionizers <span className="ms-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
