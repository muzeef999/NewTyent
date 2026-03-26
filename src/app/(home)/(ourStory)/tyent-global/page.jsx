import { BsLightningCharge } from "react-icons/bs";
import { FaHandHoldingWater } from "react-icons/fa";
import { FiClipboard, FiSettings, FiShield, FiAlertTriangle } from "react-icons/fi";
import { GiWaterRecycling } from "react-icons/gi";


const qualityCertifications = [
  {
    id: 1,
    logo: "/logos/GMP.png",
    title: "GMP",
    subtitle: "Good Manufacturing Practice",
    text: "We comply with global GMP standards to manufacture advanced medical devices through fully automated, modern production systems. Strict process control ensures consistent quality and safety. As a GMP-certified enterprise, we undergo Ministry of Food and Drug Safety inspections every three years, guaranteeing high-quality, compliant medical appliances that meet regulatory requirements and protect consumer health."
  },
  {
    id: 2,
    logo: "/logos/ICR.png",
    title: "ISO 9001",
    subtitle: "International Quality Management System",
    text: "TAE YOUNG E&T acquired ISO 9001 certification in 2002. We implement a quality assurance system that is enforced across our products and manufacturing processes to ensure consistency, traceability, and customer confidence."
  },
  {
    id: 3,
    logo: "/logos/KCS.png",
    title: "ISO 14001",
    subtitle: "International Environmental Management System",
    text: "Environmental management extends beyond product quality into responsible business operations. TAE YOUNG E&T's environmental management system establishes clear goals, programs, responsibilities, and processes to reduce environmental impact and manage resources systematically."
  },
  {
    id: 4,
    logo: "/logos/FDA.png",
    title: "USFDA",
    subtitle: "Quality and Safety Compliance",
    text: "Tyent water ionizers are manufactured under USFDA medical device quality standards, ensuring strict control over design, production, safety, and performance. USFDA compliance and registration reflect Tyent's commitment to medical-grade manufacturing practices, product safety, and long-term reliability."
  },
  {
    id: 5,
    logo: "/logos/ANAB.png",
    title: "ANAB",
    subtitle: "Accredited Certification Recognition",
    text: "ANAB accreditation strengthens the credibility of Tyent's certified quality systems by confirming that the certification process meets recognized international accreditation requirements. This supports confidence in the integrity and reliability of our management system certifications."
  },
  {
    id: 6,
    logo: "/logos/ISO.png",
    title: "ISO 13485",
    subtitle: "Medical Device Quality Management System",
    text: "Tyent is manufactured under ISO 13485 certified medical device quality management systems, ensuring controlled manufacturing, documented processes, risk management, and consistent product quality. This certification highlights Tyent's precision engineering, regulatory compliance, and commitment to producing reliable, health-grade water ionizer technology."
  },
  {
    id: 7,
    logo: "/logos/KFDA.png",
    title: "KFDA",
    subtitle: "Approved Water Ionizer - Trusted Global Standards",
    text: "Tyent water ionizers are KFDA approved and manufactured under medical device quality management regulations, meeting one of the world's most stringent regulatory standards. KFDA approval confirms rigorous safety, performance, and quality controls, reinforcing Tyent's credibility as a trusted brand delivering advanced, health-focused water ionizer technology in global healthcare markets."
  }
];

const TyentGlobal = () => {
  return (
    <div className="container">
      <div className="text-center position-relative pb-2">
        <h1 className="bg-heading-text-two-main">Tyent Global</h1>
          <h3 className="fw-bold subtitle-tight mb-5" style={{ marginTop: '-25px' }}>
            World Leaders in Hydrogen-Rich Alkaline Water Ionizer Technology
          </h3>
        <div className="overlap-heading">
          <p className="mt-3 mt-md-4 mx-auto" style={{ maxWidth: "800px", fontSize: '15px' }}>
            Tyent is a globally trusted premium water ionizer brand, powered by decades of innovation,
            advanced R&D, and uncompromising quality standards. Manufactured by TAE YOUNG
            E&T CO., LTD, South Korea, Tyent is present in 86+ countries, setting the global
            benchmark for hydrogen-rich alkaline water technology that supports preventive health,
            wellness, and superior water quality.
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '24px' }}>
          Tyent Parent Company & Brand Story
        </h4>

        <p
          className="mx-auto"
          style={{ fontSize: '15px', maxWidth: '1000px', lineHeight: '1.8' }}
        >
          Tyent was founded in South Korea, a country globally respected for precision engineering and advanced health technology. From its inception, Tyent's vision has been clear - to develop the world's safest, most advanced, and scientifically validated water ionizers that support preventive healthcare. Unlike many water brands driven purely by marketing, Tyent has grown through product performance, technological leadership, and customer trust. The company's parent organization focuses exclusively on water ionization technology, ensuring 100% attention to research, innovation, and long-term quality. Today, Tyent products are used in homes, hospitals, wellness centers, and research institutions across Asia, Europe, North America, and the Middle East.
        </p>
      </div>

      <div className="row align-items-center mt-5">
        <div className="col-lg-6 pe-lg-5">
          <div className="mb-5">
            <h4 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '22px' }}>
              Advanced Research & Development (R&D)
            </h4>
            <p className="mb-3" style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Research and innovation are the backbone of Tyent. The company operates
              dedicated R&D facilities in South Korea, staffed by experienced engineers,
              scientists, and health technology specialists. Tyent continuously invests in:
            </p>
            <ul className="mb-4" style={{ fontSize: '15px', paddingLeft: '1.25rem', color: '#4a4a4a' }}>
              <li className="mb-1">Advanced electrolysis and hydrogen generation technology</li>
              <li className="mb-1">High-performance platinum-coated solid mesh plates</li>
              <li className="mb-1">Enhanced negative ORP and molecular hydrogen optimization</li>
              <li className="mb-1">Smart automation and long-life internal components</li>
            </ul>
            <p style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Every Tyent model undergoes years of research, laboratory testing, and real-
              world usage validation before being released into the market. This strong R&D
              culture ensures Tyent consistently stays ahead of industry standards and
              competitors.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '22px' }}>
              Unmatched Quality Control & Certifications
            </h4>
            <p className="mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Tyent follows one of the strictest quality control processes in the global water
              ionizer industry. Each unit is manufactured under ISO-certified facilities and
              passes through multiple stages of inspection before shipment.
            </p>
            <p className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Key quality benchmarks include:
            </p>
            <ul className="mb-4" style={{ fontSize: '15px', paddingLeft: '1.25rem', color: '#4a4a4a' }}>
              <li className="mb-1">Individual machine testing before dispatch</li>
              <li className="mb-1">Medical-grade materials and food-safe internal components</li>
              <li className="mb-1">Compliance with international safety and performance standards</li>
              <li className="mb-1">Global certifications such as NSF, ISO, CE, and others (model-specific)</li>
            </ul>
            <p style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Unlike mass-produced appliances, Tyent machines are built for durability,
              stability, and consistent performance over many years of use.
            </p>
          </div>

          <div>
            <h4 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '22px' }}>
              Why Tyent is Different Globally
            </h4>
            <p className="mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>
              Tyent does not operate on MLM models or commission-heavy
              distribution chains. Instead, the company reinvests into:
            </p>
            <div className="mb-3" style={{ fontSize: '15px', color: '#4a4a4a' }}>
              <div className="fw-bold">Better technology</div>
              <div className="fw-bold">Superior materials</div>
              <div className="fw-bold">Robust service infrastructure</div>
              <div className="fw-bold">Long-term brand credibility</div>
            </div>
            <p style={{ fontSize: '15px', color: '#4a4a4a' }}>
              This approach has helped Tyent earn a loyal global customer base
              and a reputation as one of the most trusted hydrogen-rich
              alkaline water ionizer brands in the world.
            </p>
          </div>
        </div>

        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img
            src="/home/globalTyent.png"
            alt="Tyent Water Ionizer Machines"
            className="img-fluid tyent-global-img"
            style={{
              maxHeight: '1000px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <div className="">
        <h3 className="fw-bold text-center mb-5" style={{ color: '#273fdb', fontSize: '24px' }}>
          Quality Management
        </h3>

        <div className="quality-masonry">
          {qualityCertifications.map((cert) => (
            <div key={cert.id} className="quality-card mb-4 bg-white p-4">
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{ width: '50px', height: '50px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}
              >
                <img
                  src={cert.logo}
                  alt={cert.title}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <h5 className="fw-bold mb-1" style={{ color: '#273fdb', fontSize: '18px' }}>{cert.title}</h5>
              <h6 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '13px' }}>{cert.subtitle}</h6>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                {cert.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5 pb-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '24px' }}>
            Quality Control
          </h3>
          <p className="text-muted mx-auto" style={{ fontSize: '15px', maxWidth: '1000px' }}>
            For our product innovation, we establish our quality goals every year that are appropriate to our working principle. We strictly follow all the regulations and laws as manufactures, and follow our quality assurance system to satisfy our customers.
          </p>
        </div>

        <div className="row g-4 justify-content-center px-lg-4">
          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <FiClipboard size={24} color="#000" />
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '16px' }}>Step 01</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px' }}>
                Quality Planning
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                We manage the products systematically to be supplied consistent quality conformity and safety.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <FiSettings size={24} color="#000" />
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '16px' }}>Step 02</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px' }}>
                Quality Management
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                As a most effective method to keep the appropriateness and the effectiveness of the products and the quality assurance system, we design from our experience and data that we gained through Corrective and Preventive Action.<br /><br />Plan &rarr; Do &rarr; Check &rarr; Action &rarr; Replan
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <FiShield size={24} color="#000" />
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '16px' }}>Step 03</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px' }}>
                Quality Assurance
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                We remove the origins of the inappropriate situations and inconsistency and try every measures to prevent the situations from reoccurring.<br />
                <span className="fw-bold text-dark">Correction :</span> Removal of nonconforming item.<br />
                <span className="fw-bold text-dark">Corrective measures :</span> Finding of the reason for the nonconforming items and preventing it from reoccurrence.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <FiAlertTriangle size={24} color="#000" />
              </div>
              <h5 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '16px' }}>Step 04</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px' }}>
                Quality improvement
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Although we have not had an incident of nonconforming items, we analyze the reason for it based on our statistical data and the possibility of it happening and remove those origins.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-center mb-5">
          <h3 className="fw-bold mb-2" style={{ color: '#273fdb', fontSize: '24px' }}>
            R&D Center
          </h3>
          <p className="text-muted" style={{ fontSize: '15px' }}>
            Research & Development
          </p>
        </div>

        <div className="row g-4 justify-content-center px-lg-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <GiWaterRecycling size={32} color="#273fdb" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '18px' }}>Step 01</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px', lineHeight: '1.3' }}>
                Continued investment for technical development
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                TYENT's institute of Technology, authorized by Ministry of Commerce, Industry and Energy in 2004, invests continued development for the new technology with R&D investment strategy.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <BsLightningCharge size={32} color="#273fdb" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '18px' }}>Step 02</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px', lineHeight: '1.3' }}>
                Technology to increase water quality
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Our main fostering business is development of products that is valuable to the people and environment based on "electrolysis technology." our products : Water ionizer, Hydrogen water generator, Sterilizing water generator, , Industrial strong alkaline water generator, Industrial strong acid water generator, RO system.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="bg-white p-4 w-100" style={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="mb-3">
                <FaHandHoldingWater size={32} color="#273fdb" />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '18px' }}>Step 03</h5>
              <h4 className="fw-bold mb-3" style={{ fontSize: '20px', lineHeight: '1.3' }}>
                Quality Assurance
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                All products produced from TAEYOUNG E&T gain its competitiveness in technology such as standardization and differentiation, and we create added values through the knowledge of technology from the institute of Technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <h3 className="fw-bold mb-3" style={{ color: '#273fdb', fontSize: '24px' }}>
          Tyent Global Promise
        </h3>
        <p className="text-muted mx-auto" style={{ fontSize: '15px', maxWidth: '850px', lineHeight: '1.8' }}>
          Tyent's mission is simple yet powerful - to deliver the purest, safest, and most effective drinking water technology available today. With a strong parent company, world-class R&D, uncompromising quality control, and values rooted in trust, Tyent continues to redefine what premium water truly means.
        </p>
      </div>

      <div className="my-4 my-md-5 py-4 py-md-5 position-relative promise-section overflow-hidden">
        {/* Optional background element that supports map mapping */}
        <div className="promise-bg" />

        <div className="row justify-content-center text-center g-4 mt-4 position-relative px-3" style={{ zIndex: 1 }}>
          <div className="col-12 col-sm-6 col-md-4">
            <h1 className="fw-bold mb-1" style={{ color: '#0d6efd', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-1px' }}>123+</h1>
            <h6 className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>Global Presence</h6>
            <p className="text-muted mx-auto" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '240px' }}>
              Providing innovative water solutions that improve health and well-being across India.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h1 className="fw-bold mb-1" style={{ color: '#0d6efd', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-1px' }}>160+</h1>
            <h6 className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>Technology Patents</h6>
            <p className="text-muted mx-auto" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '240px' }}>
              160+ patents, showcasing groundbreaking advancements in water ionization.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <h1 className="fw-bold mb-1" style={{ color: '#0d6efd', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-1px' }}>30+</h1>
            <h6 className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>Years of R&D</h6>
            <p className="text-muted mx-auto" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '240px' }}>
              29 years of cutting-edge research delivering innovative water solutions globally.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-4 mt-md-5">
            <h1 className="fw-bold mb-1" style={{ color: '#0d6efd', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-1px' }}>15</h1>
            <h6 className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>Years Warranty</h6>
            <p className="text-muted mx-auto" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '240px' }}>
              Prestigious design awards blending innovation and aesthetics in luxury water ionizers.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-4 mt-md-5">
            <h1 className="fw-bold mb-1" style={{ color: '#0d6efd', fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-1px' }}>26</h1>
            <h6 className="fw-bold mb-2" style={{ fontSize: '15px', color: '#4a4a4a' }}>Design Awards</h6>
            <p className="text-muted mx-auto" style={{ fontSize: '13px', lineHeight: '1.6', maxWidth: '240px' }}>
              Recognized for design excellence in advanced, luxury water ionizers worldwide.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .promise-bg {
          position: absolute;
          inset: 0;
          background-image: url('/home/world-map.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
          pointer-events: none;
        }
        .quality-masonry {
          column-count: 1;
          column-gap: 1.5rem;
        }
        .quality-card {
          break-inside: avoid;
          page-break-inside: avoid;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
          display: inline-block;
          width: 100%;
        }
        @media (min-width: 768px) {
          .quality-masonry {
            column-count: 2;
          }
        }
        @media (min-width: 992px) {
          .promise-bg {
            background-size: contain;
          }
          .quality-masonry {
            column-count: 3;
          }
          .tyent-global-img {
            transform: scale(1.2);
            transform-origin: center left;
          }
        }
      `}</style>
    </div>
  );
};

export default TyentGlobal;


