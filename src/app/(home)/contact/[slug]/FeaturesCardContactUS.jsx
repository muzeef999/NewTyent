import Image from "next/image";
import Link from "next/link";

const features = [
  {
    link:"/solid-hybrid-mesh-plates",
    title: "Solid Hybrid Mesh Plate Technology",
    img: "/contactIndetail/solidHybridMesh.png",
    desc:"Tyent uses industry-leading Solid Hybrid Mesh Plates made from 99.9% platinum-coated  titanium. This advanced design offers This unique fusion of solid plate with mesh plate design ensures superior hydration  performance unmatched by ordinary ionizers.",
    points: [
      "Japanese technology",
      "Upgraded plate design",
      "Higher hydrogen concentration",
      "Long-lasting durability",
      "15-year plate warranty*",
    ],
  },
  {
    link:"/patented-SMPS-plus",
    title: "Patented SMPS Plus Power Supply",
    img: "/contactIndetail/patentedSMPS.png",
    desc:"Tyent’s exclusive SMPS PLUS technology guarantees voltage stability and precise control,  delivering: Unlike conventional transformers, this system ensures stable output even in fluctuating Delhi  power conditions.",
    points: [
      "Stable output in voltage fluctuation",
      "Wide pH range from 2.5 to 11.5",
      "Energy-efficient performance",
      "Chemical-free water production",
    ],
  },
  {
    link:"/0.1-micron-filters",
    title: "Advanced Dual 0.01 Micron Filtration",
    img: "/contactIndetail/AdvancedDual.jpg",
    desc:"Specially engineered for Delhi water, Tyent’s dual ultra-filtration removes over 200+  contaminants, including Result: Safe, mineral-rich, great-tasting hydrogen richalkaline water - delivered to your  home.",
    points: [
      "Heavy metals removal",
      "Chlorine & fluoride",
      "Pesticide residues",
      "Nano plastics & viruses",
    ],
  },
  
  {
    link:"/tyentvskangen",
    title: "Advanced E-Cleaning Technology",
    img: "/contactIndetail/AdvancedE-cleaning.png",
    desc:"Tyent’s PAST (Polarity Alternating Self-Cleaning Technology) prevents scale buildup and  mineral blockage, ensuring",
    points: [
      "Longer machine life",
      "Low maintenance",
      "Consistent performance",
      "Ideal for hard water areas",
    ],
  },
  {
    link:"/tyentvskangen",
    title: "Doorstep Service Across India",
    img: "/contactIndetail/Doorstep.jpg",
    desc:"We provide services delivered exclusively by a fully trained, highly professional in-house team.",
    points: [
      "Free water testing",
      "Home demo",
      "Professional installation",
      "AMC & on-site support",
    ],
  },
  {
    link:"/tyentvskangen",
    title: "Premium Ionizers at Affordable Prices",
    img: "/contactIndetail/Affordable.png",
    desc:"Experience world-class chemical free japaness technology technology with Tyent’s competitive, customer-friendly pricing-making premium health water accessible to every Indian home.",
    points: [
      "No hidden commissions",
      "No middlemen",
      "Transparent pricing",
      "Direct sales  & Service network",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {features.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <Link href={item.link}   target="_blank"
 className="feature-card h-100" style={{cursor:'pointer', textDecoration:'none', color:'#000'}}>
                <div className="feature-img">
                  <Image
  src={item.img}
  alt={item.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  className="feature-img-el"
/>
                </div>

                <div className="p-3">
                  <h6 className="fw-bold text-primary mb-2">
                    {item.title}
                  </h6>
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
    </section>
  );
}
