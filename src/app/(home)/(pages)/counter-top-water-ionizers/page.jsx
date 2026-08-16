// File: pages/counter-top-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";

import nmp5 from "@/asserts/nmp5-collection.webp";
import nmp9 from "@/asserts/nmp9-collection.webp";
import hybrid from "@/asserts/hybrid-collection.webp";

export const metadata = {
  title: "Best Countertop Water Ionizer in India | Tyent NMP Range",
  description:
    "Shop Tyent countertop water ionizers in India. NMP series with Japanese plates, hydrogen-rich water, easy installation.",
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
                                padding: "24px",
                                minHeight: "300px",
                                maxHeight: "320px",
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.title}
                                className="img-fluid "
                                style={{
                                  borderTopLeftRadius: "1rem",
                                  borderTopRightRadius: "1rem",
                                  maxHeight: "280px",
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
                                padding: "24px",
                                minHeight: "300px",
                                maxHeight: "320px",
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.title}
                                className="img-fluid "
                                style={{
                                  borderTopLeftRadius: "1rem",
                                  borderTopRightRadius: "1rem",
                                  maxHeight: "280px",
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
        {/* SEO Content Section */}
        <div className="mt-5 pt-4">
          <h2 className="fw-bold mb-4" style={{ color: "#291495", fontSize: "clamp(22px, 4vw, 36px)" }}>
            Countertop Water Ionizers
          </h2>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Upgrade your daily hydration with a countertop water ionizer that's made for convenience, performance, and modern living. Enjoy hydrogen-rich alkaline water at home without the usual complex installation, which is honestly a relief. Take a look at advanced Tyent countertop models that bring together smart technology, elegant design, and dependable output for Indian households.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Explore Tyent Countertop Water Ionizers Online India</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Tyent offers a premium collection of countertop ionizers for different household needs. Every countertop alkaline water machine combines advanced filtration, easy-to-navigate controls, and durable build quality.
          </p>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Whether you are comparing the Tyent water ionizer range or researching Tyent vs kangen, users can pick models that fit their budget, household size, and the way they drink water day to day.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>What Is a Countertop Water Ionizer & How Does It Work</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            A countertop water ionizer connects directly to your kitchen tap through a simple diverter valve. After the initial filtration gets rid of common impurities, the water then goes through electrolysis plates, where acidic and alkaline streams get separated. From there, it makes hydrogen-rich alkaline water that people drink daily, while the acidic side is kept for household purposes. Every best countertop ionizer machine is built to provide reliable performance, simple controls, efficient water ionization, and convenient everyday use for households seeking a practical hydration solution.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Hydrogen-Rich Alkaline Water from Your Kitchen Counter</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            A countertop alkaline water machine gives you fresh alkaline water whenever you need it, and it does not really take up too much kitchen space. It uses advanced electrolysis technology that produces hydrogen-rich water, and it still keeps filtration working in an efficient way. The alkaline water ionizer countertop design makes premium water technology feel more reachable for homes, apartments, and even small urban Indian kitchens all over India with everyday lasting convenience.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Ideal For – Families, Health Enthusiasts & Small Kitchens</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Countertop ionizers are a good fit for growing families, people who care about fitness, busy working professionals, and homeowners who want simple hydration solutions. Their compact footprint fits right there beside the sink with no real permanent changes. If flexibility is a thing, the best countertop water ionizer really helps, since you can just move it around during renovations or even when you relocate, while still keeping that steady daily performance without affecting convenience, reliability, or your everyday drinking water experience at home.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Tyent NMP Series – Models, Features & Plate Technology</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            The Tyent NMP Series includes solutions for different needs, like the Tyent NMP-5 water ionizer India, Tyent NMP-7 water ionizer India, Tyent NMP-9 water ionizer India, and the Tyent NMP-11 water ionizer India. Each of the best countertop ionizer machine relies on platinum-coated titanium plates, tuned for efficient electrolysis, steady durability, and uniform hydrogen output, delivering dependable performance for everyday hydration needs across modern Indian households consistently.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose a Countertop Model Over Under-Counter</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            A countertop unit goes up above the kitchen counter, so it becomes easier to reach, monitor, and move around if ever needed later. Unlike built-in options, installation usually does not require any cabinet modifications. Many homeowners go for the best countertop water ionizer, because it brings flexibility, ease of use, and everyday practicality in one compact appliance, so it feels practical right away.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Easy Installation – No Plumber Needed</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Most users can set up a countertop alkaline water machine in just a few minutes, using the provided faucet diverter thing. It is straightforward: no need for any permanent plumbing changes, so it works well in apartments, rental places, and short-term residences. You just line everything up, connect the unit, and finish the setup; then you can start enjoying hydrogen-rich alkaline water right away.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Pan India Delivery & Installation Support</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            Tyent provides delivery across the nation, with installation guidance and ongoing customer support. If you are buying your first alkaline water ionizer ionizer countertop or you're upgrading something you already have, there is experienced support to keep setup running smoothly and help with dependable operation across most major cities and regions in India.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>How to Order a Countertop Ionizer Online</h3>
          <ul style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px", paddingLeft: "20px" }}>
            <li>Browse the available countertop ionizer models and compare their features.</li>
            <li>Choose the model that best suits your household's daily water needs.</li>
            <li>Place your order through the website using the secure online checkout.</li>
            <li>Receive Pan India delivery along with installation guidance and customer support.</li>
          </ul>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "30px" }}>Why Choose Tyent – Order Your Countertop Ionizer Today</h3>
          <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
            At Tyent, we bring together innovative engineering, premium components, and steady customer support to deliver lasting value. Feel free to explore our countertop water ionizer lineup today and pick a model that really matches your kitchen, your lifestyle, and your daily hydration needs.
          </p>

          <h3 style={{ color: "#291495", fontWeight: 600, fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>FAQs</h3>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>What is the difference between countertop and under-counter water ionizers?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Countertop variants are located next to the sink, directly connecting to the faucet. Under-counter variants are installed in the cabinets. They connect to the main faucet using a mini-faucet. They are more permanent models.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Do countertop ionizers require professional installation?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              No. The ionizers are built to be installed easily, as they include parts to connect directly to compatible kitchen faucets. A plumbing professional may be required if you need a special fit.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Which Tyent countertop model is best for a 4-member family?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Water consumption determines which model is best. Models that fall in the mid- to high-range of capacity for Tyent NMP will, in all likelihood, be the best choice for a family of four.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>How long do the filters last in a countertop ionizer?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
              Replacement intervals for countertop ionizers are determined by water quality and daily consumption. Many filters will require replacement after thousands of litres or will need replacement at the intervals set by the manufacturer.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#222", marginBottom: "8px" }}>Is a countertop water ionizer suitable for Indian water conditions?</h4>
            <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "0" }}>
              Yes. These models are built to treat municipal water in India and are built to provide filtration and the production of alkaline water for home use with consistent everyday performance and reliability.
            </p>
          </div>
        </div>

      </Container>
    </>
  );
}
