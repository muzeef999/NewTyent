import { PiLightbulb } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { BsShieldPlus } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";

const OurStory = () => {
  const management = [
    { name: 'Dr. Srinivas Yadav Kandula', role: 'Managing Director', image: '/management/Manager.png' },
    { name: 'Dr. Sree Suma Goriparthy', role: 'Chairman', image: '/management/Manager.png' },
    { name: 'A. Santosh Kumar', role: 'Finance Director', image: '/management/Manager.png' },
    { name: 'G. Sindhumala,', role: 'CFO', image: '/management/Manager.png' },
    { name: 'E. Sravan chowdary', role: 'Director of sales and marketing', image: '/management/Manager.png' },
    { name: 'MD. Kurdhus', role: 'Advicer', image: '/management/Manager.png' },
    { name: 'Sateesh Kumar', role: 'Head of Digial marketing', image: '/management/Manager.png' },
    { name: 'Shaikmuzeef', role: 'Web Developer', image: '/management/Manager.png' },
  ];

  const galleryImages = [
    '/gallery/1.jpg',
    '/gallery/2.jpg',
    '/gallery/3.jpg',
    '/gallery/4.jpg',
    '/gallery/5.jpg',
    '/gallery/6.jpg',
  ];

  return (
    <div className="container">
      <br />
      <div className="text-center position-relative pb-2">
        <h1 className="bg-heading-text-two-main">Tyent & Medilight</h1>
        <h3 className="fw-bold subtitle-tight mb-5">Advancing Preventive Health Through Water</h3>
        <div className="overlap-heading">
          <p className="mt-4" style={{ fontSize: '15px' }}>
            Founded in 2016 by a team of experienced doctor’s and visionary entrepreneurs, Tyent  was established with a clear mission: to deliver world-class preventive healthcare through  water. By combining medical insight with advanced engineering, Tyent pioneered  hydrogen-rich alkaline water ionizers and hydrogen water generators designed to  support long-term wellness, cellular hydration, and antioxidant protection.  Tyent’s technology focuses on producing high-pH, hydrogen-rich water with negative  ORP, helping individuals adopt a proactive approach toward health through daily hydration.  Today, Tyent is globally recognized for its medical-grade water ionizers, innovation, and  uncompromising quality standards.
          </p>
        </div>
      </div>

      <div className="row align-items-center mb-5 pb-4">
        <div className="col-lg-6 pe-lg-4">
          <h4 className="fw-bold fs-5 mb-3" style={{ color: '#273fdb' }}>
            Tyent in India - Authorized Partnership with Medilight Pvt. Ltd.
          </h4>
          <p className="  mb-3" style={{ fontSize: '15px' }}>
            Medilight Pvt. Ltd. is the official and authorized partner of TAEYOUNG E&T CO.,  LTD. for Tyent in India, responsible for strategic market expansion, nationwide  distribution, brand positioning, and comprehensive after-sales service. With a strong  foundation in healthcare, wellness solutions, and advanced water technology, Medilight  plays a critical role in introducing and scaling Tyent’s hydrogen-rich alkaline water  ionizer’s with cutting edge Japanese technology across Indian households, clinics,  hospitals, and institutional environments. Through this partnership, Medilight ensures
          </p>
          <ul className="  mb-4" style={{ fontSize: '15px', paddingLeft: '20px' }}>
            <li>Authentic Tyent products with global quality standards</li>
            <li>Company-managed sales and after-sales support in India</li>
            <li>Strong focus on trust, compliance, and long-term customer satisfaction</li>
            <li>Expansion of preventive healthcare solutions using water as the foundation</li>
          </ul>
          <p className="  mb-5" style={{ fontSize: '15px' }}>
            Together, Tyent and Medilight Pvt. Ltd. are committed to transforming the way
            India views hydration—shifting from basic water consumption to functional,
            health-supporting hydrogen-rich alkaline water.
          </p>

          <h4 className="fw-bold fs-5 mb-3" style={{ color: '#273fdb' }}>
            Role of Medilight in Tyent's Global Ecosystem
          </h4>
          <p className="  mb-3" style={{ fontSize: '15px' }}>
            Medilight Pvt. Ltd. acts as the exclusive operational and brand custodian for
            Tyent in India, responsible for:
          </p>
          <ul className="  mb-4" style={{ fontSize: '15px', paddingLeft: '20px' }}>
            <li>Authorized import and distribution of genuine Tyent products</li>
            <li>Brand positioning, marketing, and awareness aligned with Tyent Global guidelines</li>
            <li>Installation, service, and after-sales support through trained professionals</li>
            <li>Compliance with Indian regulatory, quality, and safety standards</li>
          </ul>
          <p className="  mb-5" style={{ fontSize: '15px' }}>
            This structured approach ensures customers receive authentic Tyent
            technology, not diluted or modified versions.
          </p>

          <h4 className="fw-bold fs-5 mb-3" style={{ color: '#273fdb' }}>
            Commitment to Quality & Customer Trust
          </h4>
          <p className="  mb-3" style={{ fontSize: '15px' }}>
            Medilight strictly follows Tyent's global quality and service protocols. All
            installations, servicing, and customer interactions are handled by trained in-
            house technical teams, ensuring consistency, professionalism, and
            accountability.
          </p>
          <ul className="  mb-4" style={{ fontSize: '15px', paddingLeft: '20px' }}>
            <li>Transparent pricing with no hidden commissions</li>
            <li>Direct sales network without middle agents</li>
            <li>Centralized service systems for faster resolution</li>
            <li>Long-term customer relationship management</li>
          </ul>
          <p className=" " style={{ fontSize: '15px' }}>
            This commitment strengthens Tyent's reputation as a trusted premium water
            ionizer brand in India.
          </p>
        </div>
        <div className="col-lg-6 text-center ps-lg-5">
          <img
            src="/home/our-story.png"
            alt="Tyent Hybrid Water Ionizer"
            className="img-fluid our-story-img"
          />
        </div>
      </div>

      <div className="row mb-5 pb-5">
        {/* Service-First Approach Column */}
        <div className="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
          <h4 className="fw-bold fs-5 mb-3" style={{ color: '#273fdb' }}>
            Service-First Approach
          </h4>
          <p className="  mb-3" style={{ fontSize: '15px' }}>
            Unlike conventional appliance distributors, Medilight operates on a service-first
            philosophy. The company has invested heavily in :
          </p>
          <ul className="  mb-4" style={{ fontSize: '15px', paddingLeft: '20px' }}>
            <li className="mb-2">Structured service workflows</li>
            <li className="mb-2">Dedicated customer support channels</li>
            <li className="mb-2">Preventive maintenance and genuine spare parts</li>
          </ul>
          <p className="  mb-0" style={{ fontSize: '15px' }}>
            This ensures every Tyent customer experiences reliability, performance, and
            peace of mind throughout the product lifecycle.
          </p>
        </div>

        {/* Shared Values Column */}
        <div className="col-lg-6 ps-lg-5">
          <h4 className="fw-bold fs-5 mb-3" style={{ color: '#273fdb' }}>
            Shared Values with Tyent Global
          </h4>
          <p className="  mb-3" style={{ fontSize: '15px' }}>
            Medilight and Tyent are aligned on core values:
          </p>
          <ul className="  mb-4" style={{ fontSize: '15px', paddingLeft: '20px' }}>
            <li className="mb-2">Health & Safety First</li>
            <li className="mb-2">Scientific integrity over marketing hype</li>
            <li className="mb-2">Transparency in business operations</li>
            <li className="mb-2">Long-term trust over short-term sales</li>
          </ul>
          <p className="  mb-0" style={{ fontSize: '15px' }}>
            These shared values allow Medilight to represent Tyent in India with the same
            credibility and responsibility as any global Tyent operation.
          </p>
        </div>
      </div>

      <div className="">
        <div className="text-center mb-5 pb-4">
          <h3 className="fw-bold mb-4" style={{ color: '#273fdb', fontSize: '24px' }}>
            Strengthening Tyent's Global Presence
          </h3>
          <p className="  mx-auto" style={{ maxWidth: '1150px', fontSize: '15px' }}>
            Through Medilight Pvt. Ltd., Tyent continues to strengthen its global footprint while adapting  responsibly to local market needs - without compromising on technology, quality, or ethics.  Together, Tyent Global and Medilight Pvt. Ltd. are committed to delivering the world’s  most advanced hydrogen-rich alkaline water ionizers with advanced Japanese  technology, backed by global research, certified quality, and dependable service  infrastructure.
          </p>
        </div>

        <div className="row justify-content-center text-center mt-4 mt-md-5 pt-2 pt-md-4">

          {/* Vision */}
          <div className="col-12 mb-4 pb-md-3">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center">
                <PiLightbulb size={40} />
              </span>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#273fdb' }}>Vision</h5>
            <p className="  mx-auto px-3 px-md-0" style={{ fontSize: '15px', maxWidth: '550px' }}>
              To revolutionize hydration in India by becoming the most trusted name in
              advanced water ionization and purification solutions, contributing to a
              healthier, more sustainable future for generations to come.
            </p>
          </div>

          {/* Mission */}
          <div className="col-12 mb-4 pb-md-3">
            <div className="mb-3">
              <span className="d-inline-flex align-items-center justify-content-center">
                <GoGoal size={40} />
              </span>
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#273fdb' }}>Mission</h5>
            <p className="  mx-auto px-3 px-md-0" style={{ fontSize: '15px', maxWidth: '550px' }}>
              Together, we aim to make every drop of water count towards a better,
              healthier future for India.
            </p>
          </div>

        </div>

        <div className="row justify-content-center text-center mt-3 mt-md-4">
          <div className="col-md-4 mb-4 mb-md-2">
            <div className="mb-3">
              <BsShieldPlus size={40} />
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#273fdb' }}>Health & Wellness</h5>
            <p className=" px-3 px-md-0" style={{ fontSize: '15px' }}>
              To provide innovative water solutions that improve the health and well-being of
              individuals and families across India.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-2">
            <div className="mb-3">
              <FaRecycle size={40} />
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#273fdb' }}>Sustainability</h5>
            <p className=" px-3 px-md-0" style={{ fontSize: '15px' }}>
              To promote eco-friendly practices by reducing the dependency on single-use
              plastics and encouraging sustainable hydration.
            </p>
          </div>

          <div className="col-md-4 mb-2">
            <div className="mb-3">
              <SlEnergy size={40} />
            </div>
            <h5 className="fw-bold mb-3" style={{ color: '#273fdb' }}>Technology Leadership</h5>
            <p className=" px-3 px-md-0" style={{ fontSize: '15px' }}>
              To continuously innovate and deliver cutting-edge water ionization and
              purification systems.
            </p>
          </div>
        </div>
      </div>

      {/* World Map Stats Section */}
      <div className="position-relative mb-5 world-map-bg">
        <div className="my-5 text-center px-4">

          {/* Icons Section */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-6 mb-4 px-4">
              <div className="mb-3">
                <BiSupport size={40} />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: "#273fdb" }}>
                Customer-Centric Approach
              </h5>
              <p
                className="  mx-auto"
                style={{ fontSize: "15px", maxWidth: "400px" }}
              >
                To prioritize customer satisfaction by offering exceptional service,
                from product selection to after-sales support.
              </p>
            </div>

            <div className="col-md-6 mb-4 px-4">
              <div className="mb-3">
                <SlGraduation size={40} />
              </div>
              <h5 className="fw-bold mb-3" style={{ color: "#273fdb" }}>
                Education & Awareness
              </h5>
              <p
                className="  mx-auto"
                style={{ fontSize: "15px", maxWidth: "400px" }}
              >
                To educate communities about the benefits of alkaline water and its
                role in fostering a healthier lifestyle.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="row align-items-center justify-content-center">
            <div className="col-6 col-md-2 mb-4 mb-md-0">
              <h1 className="fw-bold mb-2" style={{ color: "#273fdb", fontSize: "2.5rem" }}>73+</h1>
              <p className="text-dark mb-0 fw-medium">Indian Branches</p>
            </div>

            <div className="col-6 col-md-2 mb-4 mb-md-0">
              <h1 className="fw-bold mb-2" style={{ color: "#273fdb", fontSize: "2.5rem" }}>9M+</h1>
              <p className="text-dark mb-0 fw-medium">Most Trusted</p>
            </div>

            <div className="col-6 col-md-2 mb-4 mb-md-0">
              <h1 className="fw-bold mb-2" style={{ color: "#273fdb", fontSize: "2.5rem" }}>125+</h1>
              <p className="text-dark mb-0 fw-medium">Strong team</p>
            </div>

            <div className="col-6 col-md-2 mb-4 mb-md-0">
              <h1 className="fw-bold mb-2" style={{ color: "#273fdb", fontSize: "2.5rem" }}>09</h1>
              <p className="text-dark mb-0 fw-medium">Indian R&D</p>
            </div>

            <div className="col-6 col-md-2">
              <h1 className="fw-bold mb-2" style={{ color: "#273fdb", fontSize: "2.5rem" }}>15+</h1>
              <p className="text-dark mb-0 fw-medium">Plates warranty</p>
            </div>
          </div>

        </div>
      </div>

      {/* Our Management Section */}
      <div className="mb-5 rounded-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="my-4 px-3">
          <div className="text-center mb-5 pb-2">
            <h3 className="fw-bold" style={{ fontSize: '24px' }}>Our Management</h3>
          </div>

          <div className="row justify-content-center">
            {management.map((member, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
                <div
                  className="bg-white p-3 text-center w-100 h-100 d-flex flex-column"
                  style={{
                    maxWidth: "368px",
                    borderRadius: "20px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "12px"
                    }}
                  />

                  <div className="mt-auto">
                    <h6 className="fw-bold text-dark mt-2 mb-1" style={{ fontSize: "15px" }}>
                      {member.name}
                    </h6>
                    <p className="text-dark mb-0 fw-bold" style={{ fontSize: "11px" }}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mb-5 pb-5">
        <div className="row g-4 justify-content-center">
          {galleryImages.map((src, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
                }}
              >
                <img
                  src={src}
                  alt={`Tyent gallery image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .our-story-img {
          height: auto;
          max-height: 400px;
          object-fit: contain;
          margin-top: 2rem;
          width: 100%;
        }
        .world-map-bg {
          background-image: url('/home/world-map.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 992px) {
          .our-story-img {
            transform: scale(1.5);
            transform-origin: center;
            height: 1000px;
            max-height: none;
            position: sticky;
            top: 100px;
            margin-top: 0;
            width: auto;
          }
          .world-map-bg {
            background-size: contain;
          }
        }
        .our-story-subtitle {
          margin-top: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default OurStory;
