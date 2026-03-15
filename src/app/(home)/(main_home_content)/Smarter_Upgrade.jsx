import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./smarterUpgrade.css";


const features = [
  {
    link: "/solid-hybrid-mesh-plates",
    title: "Solid Hybrid Mesh Plate Technology",
    img: "/contactIndetail/solidHybridMesh.png",
    desc: "Tyent water ionizers feature Japanese Solid Hybrid Mesh Plates from Permelac (est. 1967), providing greater surface area, durability, higher - ORP, and more molecular hydrogen. Built to last over 45 years and backed by a 15-year warranty.",
  },
  {
    link: "/patented-SMPS-plus",
    title: "Patented SMPS Plus Power Supply",
    img: "/contactIndetail/patentedSMPS.jpeg",
    desc: "Tyent’s patented SMPS Plus system with 55+ power settings delivers unmatched consistency and durability. Designed exclusively for Tyent, it produces 11.5–2.5 pH water naturally, without chemicals, ensuring superior performance and long-term reliability.",
  },
  {
    link: "/0.1-micron-filters",
    title: "Turbo Mode",
    img: "/contactIndetail/Affordable.png",
    desc: "Turbo Mode (11.5 pH) delivers high-performance water ideal for cleaning fruits and vegetables by effectively removing pesticides, insecticides, wax, and color coatings. Tyent produces this naturally - without chemicals, salts, or enhancers.",
  },
];

export default function Smarter_Upgrade() {
  return (
    <div className="container">

      <div className="text-center mb-5">
        <h1 className="bg-heading-text-two-main">Smarter Upgrade</h1>
        <h3 className="fw-bold subtitle-tight">
          Your Wellness Starts with Tyent
        </h3>
        <p style={{ maxWidth: "1100px", margin: "0 auto 30px" }}>
          Thinking of a water ionizer? Choose Tyent - the world’s most advanced, upgraded, and trusted ionizer. With 40+ years of expertise, ultra-slim next-gen designs, and updated Japanese technology, Tyent is preferred in 86+ countries for its unmatched innovation and customer satisfaction..
        </p>
      </div>

      <div className="row g-4">
        {features.map((item, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <Link
              href={item.link}
              target="_blank"
              className="feature-card h-100"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#000",
              }}
            >
              <div className="image-wrapper">
                <Image
                  src={item.img}
                  alt="product"
                  fill
                  className="compare-img"
                />
              </div>

              <div className="p-3">
                <h6 className="fw-bold text-primary mb-2">{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}