import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./smarterUpgrade.css";

const features = [
  {
    link: "/solid-hybrid-mesh-plates",
    title: "Solid Hybrid Mesh Plate Technology",
    img: "/contactIndetail/solidHybridMesh.png",
    desc: "Tyent uses industry-leading Solid Hybrid Mesh Plates made from 99.9% platinum-coated  titanium. This advanced design offers This unique fusion of solid plate with mesh plate design ensures superior hydration  performance unmatched by ordinary ionizers.",
    points: [
      "Japanese technology",
      "Upgraded plate design",
      "Higher hydrogen concentration",
      "Long-lasting durability",
      "15-year plate warranty*",
    ],
  },
  {
    link: "/patented-SMPS-plus",
    title: "Patented SMPS Plus Power Supply",
    img: "/contactIndetail/patentedSMPS.jpeg",
    desc: "Tyent’s exclusive SMPS PLUS technology guarantees voltage stability and precise control,  delivering: Unlike conventional transformers, this system ensures stable output even in fluctuating Delhi  power conditions.",
    points: [
      "Stable output in voltage fluctuation",
      "Wide pH range from 2.5 to 11.5",
      "Energy-efficient performance",
      "Chemical-free water production",
    ],
  },
  {
    link: "/0.1-micron-filters",
    title: "Advanced Dual 0.01 Micron Filtration",
    img: "/contactIndetail/AdvancedDual.jpg",
    desc: "Specially engineered for Delhi water, Tyent’s dual ultra-filtration removes over 200+  contaminants, including Result: Safe, mineral-rich, great-tasting hydrogen richalkaline water - delivered to your  home.",
    points: [
      "Heavy metals removal",
      "Chlorine & fluoride",
      "Pesticide residues",
      "Nano plastics & viruses",
    ],
  },
];

export default function Smarter_Upgrade() {
  return (

      <div className="container">
        <div className="text-center mb-5">
          <h1 className="bg-one-cc">Smarter Upgrade</h1>
          <h3 className="fw-bold">Your Wellness Starts with Tyent</h3>
          <p>Thinking of a water ionizer? Choose Tyent - the world’s most advanced, upgraded, and trusted ionizer. With 40+ years of expertise, ultra-slim next-gen designs, and updated Japanese technology, Tyent is preferred in 86+ countries for its unmatched innovation and customer satisfaction.</p>
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
                <div style={{ width: "100%" }}>
                  <Image
                    src={item.img}
                    layout="responsive"
                    alt="product"
                    width={450}
                    height={250}
                    className="compare-img"
                  />
                </div>

                <div className="p-3">
                  <h6 className="fw-bold text-primary mb-2">{item.title}</h6>
                  <p>{item.desc}</p>

                  <ul className="ps-3 mb-0">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
  
  );
}
