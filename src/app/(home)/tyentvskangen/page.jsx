import dynamic from "next/dynamic";
import React from "react";

import { Col, Row, Table } from "react-bootstrap";
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });
import tyentPlates from "@/asserts/tyentvskangen/tyentPlates.png";
import kangenPlates from "@/asserts/tyentvskangen/kangenPlates.png";
import kangenSmps from "@/asserts/tyentvskangen/kangenSmps.png";
import smpsplus from "@/asserts/whyTent/smpsplus.webp";
import tyentFilters from "@/asserts/filter2.png";
import kangenFilter from "@/asserts/tyentvskangen/kangenFilter.png";
import doorstep from "@/asserts/tyentvskangen/doorstep.png";
import callmute from "@/asserts/tyentvskangen/callmute.png";
import Image from "next/image";
import PriceComp from "../compoents/(Home)/PriceComp";
import vs from "@/asserts/tyentvskangen/vs.png";
import phscale from "@/asserts/tyentvskangen/phscale.png";
import affordablePrice from "@/asserts/tyentvskangen/affordablePrice.png";
import kangenPricing from "@/asserts/tyentvskangen/kangenPricing.png";
import warranty2 from "@/asserts/tyentvskangen/warranty2.png";
import warranty from "@/asserts/tyentvskangen/warranty.png";
import delivery from "@/asserts/tyentvskangen/delivery.png";
import noDoorstep from "@/asserts/tyentvskangen/noDoorstep.png";


export const metadata = {
  title: "Tyent Water Ionizers vs Enagic Kangen | Advanced Alkaline Water Filtration",
  description: "Explore the differences between Tyent water ionizers and Enagic Kangen systems. Discover the superior hydration, energy, and wellness benefits of hydrogen-rich, ionized water with Tyent’s advanced technology.",
  keywords: "tyent water ionizer vs Enagic Kangen, tyent water vs Enagic Kangen, tyent vs Enagic Kangen",
};

const tableData = [
  {
    title: "Tyent NMP Series",
    bgColor: "#c3e6fa",
    color: "#291495",
    details: [
      { label: "Tyent NMP-5", value: "52.9*5 = 264.5 sq inches" },
      { label: "Tyent NMP-7", value: "52.9*7 = 370.3 sq inches" },
      { label: "Tyent NMP-9", value: "52.9*9 = 476.1 sq inches" },
      { label: "Tyent NMP-11", value: "52.9*11 = 581.59 sq inches" },
      { label: "Tyent plate type", value: "Solid hybrid mesh plate" },
      { label: "Tyent plates warranty", value: "15 years" },
      { label: "Tyent each plate surface area", value: "52.9 sq inches." },
    ],
  },
  {
    title: "Enagic Kangen ",
    bgColor: "#d9dbda",
    color: "#000",
    details: [
      { label: "Enagic kangen J4", value: "38.5*4 = 153.6  sq inches" },
      { label: "Enagic kangen SD501", value: "38.5*7 = 269.5  sq inches" },
      { label: "Enagic kangen K8", value: "38.5*8 = 308  sq inches" },
      { label: "Enagic kangen Super SD 501", value: "38.5*7 = 462  sq inches" },
      { label: "Enagic Kangen plate type", value: "Solid plate" },
      { label: "Enagic Kangen plates warranty", value: "5 years." },
      {
        label: "Enagic Kangen each plate surface area",
        value: "38.5 sq inches.",
      },
    ],
  },
];

const page = () => {
  const headerData = {
    basic: "The Clear Choice for Superior Health Benefits",
    preheading: "Tyent Water Ionizers",
    afterheading: "The Future of Ionizer",
    img: vs,
    animatedText: "Updated Technology, Superior Water Quality, chemical-less usage",
  };

  return (
    <div>
      <Header {...headerData} />

      <div className="container">
        <br />
        <div className="text-center position-relative">
          <h1 className="bg-heading-text-two-main m-0 p-0">Tyent vs Kangen</h1>
          <div className="overlap-heading">
            <h3 className="fw-bold subtitle-tight text-dark mb-3 mt-0">
              Think Once before buying
            </h3>
            <p
              className="mx-auto"
              style={{
                maxWidth: "1050px",
                color: "#4f4f4f",
                lineHeight: "1.8",
                fontWeight: "500"
              }}
            >
              We believe in absolute transparency. No hidden charges, No hidden commision's, no surprises - Just clear, honest pricing backed by uncompromised quality.
            </p>
          </div>
        </div>

        <div className="mt-4" data-aos="fade-up" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <p className="p-2" style={{ color: "#4f4f4f", lineHeight: "1.8", margin: "0" }}>
            Tyent and Enagic Kangen are leading companies in the medical-grade water ionizer industry, offering hydrogen-rich alkaline water with various health benefits. Tyent stands out for its advanced technology, producing superior chemical-free ionized water while maintaining a traditional sales approach. On the other hand, Enagic Kangen is known for its Kangen Water Machine and its network marketing business model, where customers can become independent distributors and earn commissions. However, Enagic Kangen uses older, outdated technology compared to Tyent's cutting-edge systems. Tyent is favored for delivering the latest innovations in water ionization technology, ensuring healthier,high-quality water.
          </p>
        </div>



        <div className="section-spacing" style={{ backgroundColor: "#f8f9fb", borderRadius: "20px" }}>
          <h2 className="text-center mb-3" style={{ color: "#1a56f2", fontWeight: 700 }}>
            1. Electrodes/Plates
          </h2>
          <p className="text-center mx-auto mb-4" style={{ maxWidth: "1200px", lineHeight: "1.7", color: "#4f4f4f" }}>
            Electrodes, or plates, are the heart of a water ionizer and play a
            critical role in the ionization process. Electrodes, or plates, are
            essential to a water ionizer's performance, driving the electrolysis
            that creates alkaline and acidic water. The design, quality, and
            surface area of the plates directly impact the machine’s ability to
            generate precise pH levels and high antioxidant (-ORP) levels.
            High-quality platinum-coated titanium plates provide superior
            conductivity, durability, and efficiency, ensuring optimal ionization
            and long-lasting performance.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-4"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={tyentPlates}
                    alt="tyentPlates"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "22px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent : Solid hybrid mesh plates
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Tyent water ionizers feature solid hybrid mesh electrodes made
                    with Japanese technology from Permelac, Japan (established in
                    1969). These medical-grade platinum-coated titanium plates
                    undergo multiple dips and baking, ensuring exceptional
                    durability and performance. With an updated design, Tyent plates
                    provide an expanded surface area, resulting in higher
                    antioxidant (-ORP) production. Backed by a 15-year warranty and
                    a lifespan of up to 45+ years, Tyent delivers superior water
                    ionization and long-lasting health benefits.
                  </p>
                  <b style={{ color: "#222" }}>
                    <span style={{ color: "#1a56f2" }}>Strength</span> + Surface area + More antioxidants = Solid Hybrid mesh plates.
                  </b>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-4"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={kangenPlates}
                    alt="kangenPlates"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "22px",
                      lineHeight: '1.4',
                    }}
                  >
                    Kangen: Solid plates
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Enagic Kangen water ionizers use outdated solid plates made from
                    medical-grade platinum-coated titanium, which undergo multiple
                    dips and baking for durability. However, due to their older
                    solid plate design, these plates have less surface area, causing
                    electrolysis to occur mainly at the edges. This results in lower
                    antioxidant (-ORP) production. Additionally, Enagic Kangen
                    plates come with only a 5-year warranty, offering less longevity
                    compared to more advanced technologies.
                  </p>
                  <b style={{ color: "#222" }}>
                    <span style={{ color: "#1a56f2" }}>Strength</span> - Less surface area - Less anti antioxidants = Solid plates.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-spacing" style={{ backgroundColor: "#f8f9fb", borderRadius: "20px" }}>
          <h2 className="text-center mb-3" style={{ color: "#1a56f2", fontWeight: 700 }}>
            2. Power supply
          </h2>
          <p className="text-center mx-auto mb-4" style={{ maxWidth: "1200px", lineHeight: "1.7", color: "#4f4f4f" }}>
            The power supply is crucial for producing accurate pH levels in water
            ionizers.It ensures consistent and reliable electrolysis, which
            directly impacts the quality of ionized water, including pH precision
            and overall performance
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={smpsplus}
                    alt="smpsplus"
                    fill
                    style={{ objectFit: "cover", borderRadius: "12px" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "20px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent Patented SMPS PLUS Power Supply
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Tyent water ionizers feature the Patented SMPS PLUS power
                    supply, delivering consistent, reliable power for superior
                    performance. With 55+ adjustable power settings, it ensures
                    precise control over electrolysis, producing accurate pH levels
                    and stronger antioxidants without chemicals.
                  </p>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f", marginBottom: 0 }}>
                    The SMPS PLUS system enhances efficiency, extends the lifespan
                    of the ionizer, and offers energy savings for a healthier, more
                    sustainable water ionization experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={kangenSmps}
                    alt="kangenSmps"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "20px",
                      lineHeight: '1.4',
                    }}
                  >
                    Kangen: Transformer Power Supply
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Enagic Kangen water ionizers rely on traditional
                    transformer-based power supplies, which lack the flexibility of
                    modern SMPS systems. Transformers can cause power fluctuations,
                    affecting the accuracy of pH levels and the efficiency of
                    electrolysis. They are also less energy-efficient, leading to
                    higher power consumption.
                  </p>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f", marginBottom: 0 }}>
                    Due to their lower efficiency, Kangen ionizers struggle to
                    produce higher pH levels naturally, often requiring the use of
                    additional chemical enhancers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="section-spacing" style={{ backgroundColor: "#f8f9fb", borderRadius: "20px" }}>
          <h2 className="text-center mb-3" style={{ color: "#1a56f2", fontWeight: 700 }}>
            3. Replacement Filters
          </h2>
          <p className="text-center mx-auto mb-4" style={{ maxWidth: "1200px", lineHeight: "1.7", color: "#4f4f4f" }}>
            Replacement filters play’s a crucial role in water ionizers, ensuring
            that the water you drink is not only ionized but also free from
            harmful contaminants. The primary function of filters in a water
            ionizer is to remove impurities such as Pharmaceutical wastes,
            micro-plastics, chlorine, heavy metals, bacteria, viruses, and other
            toxins from tap water before it undergoes the ionization process
            (Plates/Electrodes).
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-4"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={tyentFilters}
                    alt="tyentFilters"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "20px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent: .01 Micron Ultra filtration
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Tyent water ionizers feature .01 micron ultra-filtration, one of
                    the most advanced systems in the industry. This filter removes
                    contaminants as small as 0.01 microns, including bacteria,
                    viruses, heavy metals, and microplastics. Comparable to kidney
                    dialysis technology, it delivers pure, clean water while
                    preserving essential minerals like calcium and magnesium.
                  </p>
                  {/* <div>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Chlorine removal: 99.9%</b></p>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Filter capacity: 8,500 Liters.</b></p>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Cost: 6,500/-</b></p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center mb-4"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  <Image
                    src={kangenFilter}
                    alt="kangenFilter"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#1a56f2",
                      fontSize: "20px",
                      lineHeight: '1.4',
                    }}
                  >
                    Kangen: Carbon Filter
                  </h4>
                  <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                    Enagic Kangen ionizers use a granular activated carbon (GAC)
                    filter, typically found in regular RO purifiers. While effective
                    at removing chlorine and sediment, Kangen's filtration is less
                    capable of eliminating smaller contaminants like viruses and
                    heavy metals, making it less efficient than Tyent's
                    ultra-filtration.
                  </p>
                  {/* <div>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Chlorine removal: 95%</b></p>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Filter capacity: 5,678 Liters.</b></p>
                    <p style={{ margin: "2px 0", color: "#222" }}><b>Cost: 8,000/-</b></p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="section-spacing" style={{ backgroundColor: "#f8f9fb", borderRadius: "20px" }}>
          <h2 className="text-center mb-3" style={{ color: "#1a56f2", fontWeight: 700 }}>
            4. Production of Strong Alkaline water & Strong Acidic water
          </h2>
          <p className="text-center mx-auto mb-5" style={{ maxWidth: "1300px", lineHeight: "1.7", color: "#4f4f4f" }}>
            Strong alkaline water (11.5 pH) and strong acidic water (2.5 pH) offer
            essential benefits for various uses. Strong alkaline water is
            excellent for cleaning produce, removing pesticides, and neutralizing
            acidic residues making cancer free, while strong acidic water is
            highly effective for sanitizing and disinfecting surfaces without
            harmful chemicals.Many ionizer brands underperform in producing these
            waters due to outdated technology or the need for chemical enhancers,
            making their products less efficient and limiting their
            versatility.Tyent's advanced ionization technology creates strong pH
            levels naturally, offering chemical-free solutions that other brands
            struggle to match.
          </p>

          <div className="card border-0 shadow-sm p-4 p-md-5" style={{ backgroundColor: "#FFF", borderRadius: "16px" }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}
              data-aos="zoom-in"
            >
              <Image src={phscale} alt="phScale" layout="responsive" priority />
            </div>

            <div className="row g-5">
              <div className="col-md-6" data-aos="fade-right">
                <h4
                  className="fw-bold mb-3"
                  style={{
                    color: "#1a56f2",
                    fontSize: "20px",
                    lineHeight: '1.4',
                  }}
                >
                  Tyent
                </h4>
                <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                  Tyent water ionizers produce strong alkaline water (up to 11.5
                  pH) and strong acidic water (down to 2.5 pH) without the use of
                  chemical additives or enhancers.
                </p>
                <p style={{ lineHeight: "1.6", color: "#4f4f4f", marginBottom: 0 }}>
                  This is achieved through advanced ionization technology and the
                  patented SMPS Plus power supply, which allows Tyent to deliver
                  more precise control over the electrolysis process. Tyent’s
                  water ionizers create strong pH levels naturally, offering
                  chemical-free, safe water for drinking, cleaning, and
                  sanitizing, while also ensuring optimal antioxidant production.
                </p>
              </div>

              <div className="col-md-6" data-aos="fade-left">
                <h4
                  className="fw-bold mb-3"
                  style={{
                    color: "#1a56f2",
                    fontSize: "20px",
                    lineHeight: '1.4',
                  }}
                >
                  Kangen
                </h4>
                <p style={{ lineHeight: "1.6", color: "#4f4f4f" }}>
                  Enagic Kangen ionizers require a chemical enhancer to produce
                  strong alkaline and acidic water. This enhancer contains
                  substances like sodium hypochlorite to assist in achieving the
                  desired pH levels, which can make the process dependent on
                  external additives.
                </p>
                <p style={{ lineHeight: "1.6", color: "#4f4f4f", marginBottom: 0 }}>
                  While Kangen can also generate strong alkaline and acidic water,
                  the reliance on chemicals limits its natural ionization
                  capabilities. Cost of the chemical enhancer is again an extra
                  expensive burden & traces of chemical enhancer on plates is
                  dangerous too.
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="section-spacing">
          <h2 className="text-center mb-5" style={{ color: "#1a56f2", fontWeight: 700 }}>
            5. Affordable price
          </h2>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#fff", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative", marginBottom: "30px" }}
                >
                  <Image
                    src={affordablePrice}
                    alt="Affordable Price"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent Water
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
                    Tyent water ionizers are often seen as a more cost-effective alternative to Enagic Kangen water ionizers due to clear differences in pricing strategy and distribution model. Enagic Kangen machines are sold through a multi-level marketing (MLM) structure, where the final price includes multiple layers of distributor commissions, training costs, and network incentives. This significantly increases the overall cost for the end user.
                  </p>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
                    Tyent water ionizers, by comparison, are sold through direct and traditional retail channels, eliminating heavy MLM markups. This allows customers to pay primarily for what truly matters: advanced water ionizer technology, reliable performance, comprehensive warranty, and after-sales service.
                  </p>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    With a more transparent pricing model and strong focus on product value, Tyent water ionizers are increasingly preferred by health-conscious families looking for practical home wellness solutions and long-term preventive health benefits, without paying extra for branding or commission-based sales structures.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#fff", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative", marginBottom: "30px" }}
                >
                  <Image
                    src={kangenPricing}
                    alt="MLM Structure"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Enagic kangen
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
                    Enagic's Kangen water ionizers are significantly more expensive largely due to their sales and pricing structure. Enagic markets Kangen machines through a multi-level marketing (MLM) model, where a substantial portion of the product price is allocated to distributor commissions spread across multiple levels. These commission payouts are built directly into the retail cost, which drives prices much higher compared to non-MLM brands.
                  </p>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: "16px" }}>
                    As a result, customers often end up paying more toward distributor incentives and network earnings rather than purely for the water ionizer machine, its technology, warranty, and service support. This pricing approach makes Kangen water ionizers more attractive to MLM agents and freelancers focused on income opportunities, rather than to end users primarily seeking affordable home wellness solutions and long-term preventive health care for their families.
                  </p>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    For consumers prioritizing value, transparency, and practical health benefits, this pricing difference becomes a key deciding factor when comparing Kangen with other water ionizer brands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-spacing" style={{ backgroundColor: "#f8f9fb" }}>
          <h2 className="text-center mb-5" style={{ color: "#1a56f2", fontWeight: 700 }}>
            6. Warranty
          </h2>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  {/* Using a placeholder image for now, please import and swap the Warranty graphic here */}
                  <Image
                    src={warranty2}
                    alt="Tyent Warranty"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent Water
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    Tyent water ionizers in India offer a <b>3-year warranty on the machine and a 15-year warranty on the plates</b> to reflect their focus on <b>durability, quality, and customer trust.</b> The 3-year machine warranty covers electronic and mechanical components, ensuring protection against manufacturing defects during the critical early years of use. The extended 15-year plate warranty highlights Tyent’s confidence in its <b>high-grade, long-lasting electrolysis plates</b>, which are the core of water ionization technology. This strong warranty structure reassures customers of long-term reliability, lowers ownership risk, and supports families seeking <b>consistent home wellness and preventive health solutions</b> with dependable after-sales support.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative" }}
                >
                  {/* Using a placeholder image for now, please import and swap the Warranty graphic here */}
                  <Image
                    src={warranty}
                    alt="Kangen Warranty"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Enagic kangen
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    Enagic Kangen water ionizers provide a <b>3-year warranty on the JR4 model</b> and <b>up to 5 years on other models</b> because their warranty policy is designed to cover <b>manufacturing defects and basic component failures</b> for a limited time. The warranty applies mainly to electronic and mechanical parts, while <b>electrolysis plates are not covered</b> under a separate or extended warranty, as they are treated as long-term wear components. This approach follows Enagic's global warranty standards and common consumer-appliance practices. Any protection beyond the standard warranty period typically requires an <b>additional purchase.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-spacing">
          <h2 className="text-center mb-5" style={{ color: "#1a56f2", fontWeight: 700 }}>
            7. Doorstep service
          </h2>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-6" data-aos="flip-left">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative", marginBottom: "30px" }}
                >
                  <Image
                    src={delivery}
                    alt="Doorstep Delivery"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>

                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Tyent Water
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    Tyent water ionizers in India provide dedicated, in-house staff on company payroll to handle demos, installations, and 9 free general services during the 3-year warranty period. Unlike MLM or third-party service models, this ensures consistent, professional, and reliable support directly from the company. Customers benefit from expert guidance during demos, seamless installation, and timely maintenance, which maintains optimal performance and longevity of the machine. This approach reflects Tyent's commitment to quality, transparency, and customer satisfaction, offering a hassle-free ownership experience. It reinforces trust and positions Tyent as a customer-centric brand focused on long-term home wellness and preventive health care.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="flip-right">
              <div
                className="card h-100 border-0 shadow-sm p-4 p-md-5"
                style={{ backgroundColor: "#FFF", borderRadius: "16px" }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "100%", height: "260px", position: "relative", marginBottom: "30px" }}
                >
                  <Image
                    src={noDoorstep}
                    alt="No Doorstep Service"
                    fill
                    style={{ objectFit: "contain", padding: "10px" }}
                    priority
                  />
                </div>
                <div>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#1a56f2",
                      fontSize: "24px",
                      lineHeight: '1.4',
                    }}
                  >
                    Enagic kangen
                  </h4>
                  <p style={{ lineHeight: "1.7", color: "#4f4f4f", marginBottom: 0 }}>
                    Enagic Kangen water ionizers in India <b>do not have dedicated in-house staff</b> for demos, installations, or servicing. Demos are typically conducted by <b>independent MLM distributors</b>, while installations and basic support rely on <b>local RO technicians</b>, who often lack proper knowledge of water ionizers and Kangen machines. This can result in incorrect setup or maintenance, potentially affecting the warranty. Additionally, Enagic's warranty <b>does not include doorstep service</b>, requiring customers to <b>send the machine to the main service center in Bangalore</b> for any repairs or issues. This process is often inconvenient, time-consuming, and less reliable compared to brands with company-managed, professional support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-spacing">
          <h2 style={{ textAlign: "center", fontWeight: 600 }}>
            Price Comparison
          </h2>

          <PriceComp />
        </div>


        <p style={{ fontSize: "50px", fontWeight: "500", textAlign: "center" }}>
          Plates/Electrodes Surface area
        </p>

        <Row>
          {tableData.map((data, index) => (
            <Col
              xs={12}
              md={6}

              data-aos="zoom-in"
              key={index}
              className="d-flex align-items-center justify-content-center text-center"
            >
              <Table
                bordered
                hover
                className="custom-table"
                style={{
                  borderRadius: "4px",
                  overflow: "hidden",
                  backgroundColor: "#FFF",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        color: data.color,
                      }}
                      colSpan="2"
                    >
                      <b>{data.title}</b>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.details.map((detail, idx) => (
                    <tr key={idx}>
                      <td style={{ color: data.color, textAlign: "start" }}>
                        {detail.label}
                      </td>{" "}
                      {/* Blue heading color */}
                      <td style={{ textAlign: "start" }}>{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default page;
