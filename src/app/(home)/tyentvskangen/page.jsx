import dynamic from "next/dynamic";
import React from "react";
import smps from "@/asserts/smps.png";
import { Col, Row } from "react-bootstrap";
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });
import tyentPlates from "@/asserts/tyentvskangen/tyentPlates.png";
import kangenPlates from "@/asserts/tyentvskangen/kangenPlates.png";
import kangenSmps from "@/asserts/tyentvskangen/kangenSmps.png";
import smpsplus from "@/asserts/whyTent/smpsplus.webp";
import tyentFilters from "@/asserts/whyTent/tyentFilters.webp";
import kangenFilter from "@/asserts/tyentvskangen/kangenFilter.png";
import doorstep from "@/asserts/tyentvskangen/doorstep.png"
import callmute from "@/asserts/tyentvskangen/callmute.png"
import Image from "next/image";
import PriceComp from "../compoents/(Home)/PriceComp";
import vs from "@/asserts/tyentvskangen/vs.png"

const page = () => {
  const headerData = {
    basic: "Trust, Satisfaction & Transformations",
    preheading: "Hear From Our Real",
    afterheading: "Satisfied Tyent India Customers",
    content:
      "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water.",
    img: vs,
    animatedText: "Health, Wellness, Transformation",
  };

  return (
    <div>
      <Header {...headerData} />

      <div className="container">
        <br />
        <div className="custom-card">
          <p className="p-2">
            <b style={{ color: "#008AC7" }}>Tyent</b> and <b>Enagic Kangen</b>{" "}
            are leading companies in the medical-grade water ionizer industry,
            offering hydrogen-rich alkaline water with various health benefits.
            Tyent stands out for its advanced technology, producing superior
            chemical-free ionized water while maintaining a traditional sales
            approach. On the other hand, Enagic Kangen is known for its Kangen
            Water Machine and its network marketing business model, where
            customers can become independent distributors and earn commissions.
            However, Enagic Kangen uses older, outdated technology compared to
            Tyent's cutting-edge systems. Tyent is favored for delivering the
            latest innovations in water ionization technology, ensuring
            healthier,high-quality water.
          </p>
        </div>
        <br />
        <br />

        <p style={{ fontSize: "50px", fontWeight: "500", textAlign: "center" }}>
          Detailed Comparison
        </p>
        <p
          className="text-center"
          style={{
            marginTop: "-20px",
            fontWeight: 600,
            fontSize: "70px",
            lineHeight: "-20px",
            color: "#008AC7",
          }}
        >
          Tyent
          <span
            style={{ color: "red", fontSize: "44px", fontWeight: "normal" }}
          >
            {" "}
            VS
          </span>{" "}
          <span style={{ color: "#7B7B7B" }}>Kangen</span>
        </p>
        <br />
        <br />

        <h2 style={{ color: "#008AC7" }}>
          <b>1. Electrodes/Plates</b>
        </h2>
        <p style={{ fontSize: "14px" }}>
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
        <Row className="m-2">
          <Col
            md={6}
            style={{
              backgroundColor: "#008AC7",
              color: "#FFF",
              padding: "30px",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={tyentPlates}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>

            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <b>Tyent : Solid hybrid mesh plates</b>
              </h4>
              <p>
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
              <b>
                Strength + Surface area + More antioxidants = Solid Hybrid mesh
                plates.
              </b>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              backgroundColor: "#f2f2f2",
              padding: "30px",
              position: "relative",
            }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={kangenPlates}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>
            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <b>Kangen: Solid plates</b>
              </h4>
              <p>
                Enagic Kangen water ionizers use outdated solid plates made from
                medical-grade platinum-coated titanium, which undergo multiple
                dips and baking for durability. However, due to their older
                solid plate design, these plates have less surface area, causing
                electrolysis to occur mainly at the edges. This results in lower
                antioxidant (-ORP) production. Additionally, Enagic Kangen
                plates come with only a 5-year warranty, offering less longevity
                compared to more advanced technologies.
              </p>
              <b style={{ position: "absolute", bottom: 25, left: 22 }}>
                Strength - Less surface area - Less anti antioxidants = Solid
                plates.{" "}
              </b>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <h2 style={{ color: "#008AC7" }}>
          <b>2. Power supply</b>
        </h2>
        <p style={{ fontSize: "14px" }}>
          The power supply is crucial for producing accurate pH levels in water
          ionizers.It ensures consistent and reliable electrolysis, which
          directly impacts the quality of ionized water, including pH precision
          and overall performance
        </p>
        <Row className="m-2">
          <Col
            md={6}
            style={{
              backgroundColor: "#008AC7",
              color: "#FFF",
              padding: "30px",
            }}
          >
            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "60%", height: "auto", margin: "0 auto" }}
                >
                  <Image
                    src={smpsplus}
                    alt="tyentPlates"
                    layout="responsive"
                    priority
                  />
                </div>
                <b>Tyent Patented SMPS PLUS Power Supply</b>
              </h4>
              <p>
                Tyent water ionizers feature the Patented SMPS PLUS power
                supply, delivering consistent, reliable power for superior
                performance. With 55+ adjustable power settings, it ensures
                precise control over electrolysis, producing accurate pH levels
                and stronger antioxidants without chemicals.
              </p>
              <p>
                The SMPS PLUS system enhances efficiency, extends the lifespan
                of the ionizer, and offers energy savings for a healthier, more
                sustainable water ionization experience.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ backgroundColor: "#f2f2f2", padding: "30px" }}>
            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ width: "60%", height: "auto", margin: "0 auto" }}
                >
                  <Image
                    src={kangenSmps}
                    alt="tyentPlates"
                    layout="responsive"
                    priority
                  />
                </div>

                <b>Kangen: Transformer Power Supply</b>
              </h4>
              <p>
                Enagic Kangen water ionizers rely on traditional
                transformer-based power supplies, which lack the flexibility of
                modern SMPS systems. Transformers can cause power fluctuations,
                affecting the accuracy of pH levels and the efficiency of
                electrolysis. They are also less energy-efficient, leading to
                higher power consumption.
              </p>
              <p>
                Due to their lower efficiency, Kangen ionizers struggle to
                produce higher pH levels naturally, often requiring the use of
                additional chemical enhancers.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <h2 style={{ color: "#008AC7" }}>

          
          <b>3. Replacement Filters</b>
        </h2>
        <p style={{ fontSize: "14px" }}>
          Replacement filters play’s a crucial role in water ionizers, ensuring
          that the water you drink is not only ionized but also free from
          harmful contaminants. The primary function of filters in a water
          ionizer is to remove impurities such as Pharmaceutical wastes,
          micro-plastics, chlorine, heavy metals, bacteria, viruses, and other
          toxins from tap water before it undergoes the ionization process
          (Plates/Electrodes).
        </p>
        <Row className="m-2">
          <Col
            md={6}
            style={{
              backgroundColor: "#008AC7",
              color: "#FFF",
              padding: "30px",
            }}
          >
            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={tyentFilters}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>
                <b>Tyent: .01 Micron Ultra filtration</b>
              </h4>

              <p>
                Tyent water ionizers feature .01 micron ultra-filtration, one of
                the most advanced systems in the industry. This filter removes
                contaminants as small as 0.01 microns, including bacteria,
                viruses, heavy metals, and microplastics. Comparable to kidney
                dialysis technology, it delivers pure, clean water while
                preserving essential minerals like calcium and magnesium.
              </p>
              <p>
                <b>Chlorine removal: 99.9%</b>
              </p>
              <p>
                <b>Filter capacity: 8,500 Liters.</b>
              </p>
              <p>
                <b>Cost: 6,500/-</b>
              </p>
            </div>
          </Col>
          <Col
            md={6}
            style={{
              backgroundColor: "#f2f2f2",
              padding: "30px",
              position: "relative",
            }}
          >
            <div>
              <h4
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "4px",
                  textUnderlineOffset: "12px",
                }}
              >
                <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={kangenFilter}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>
                <b>Kangen: Carbon Filter</b>
              </h4>

              <p>
                Enagic Kangen ionizers use a granular activated carbon (GAC)
                filter, typically found in regular RO purifiers. While effective
                at removing chlorine and sediment, Kangen's filtration is less
                capable of eliminating smaller contaminants like viruses and
                heavy metals, making it less efficient than Tyent's
                ultra-filtration.
              </p>
              <div style={{ position: "absolute", bottom: 25, left: 22 }}>
                <p>
                  <b>Chlorine removal: 95%</b>
                </p>
                <p>
                  <b>Filter capacity: 5,678 Liters.</b>
                </p>
                <p>
                  <b>Cost: 8,000/-</b>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <h2 style={{ color: "#008AC7" }}>
          <b>4. Production of Strong Alkaline water & Strong Acidic water</b>
        </h2>
        <p style={{ fontSize: "14px" }}>
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

        <Row className="m-2">
          <Col
            md={6}
            style={{
              backgroundColor: "#008AC7",
              color: "#FFF",
              padding: "30px",
            }}
          >
            <div>
              <p>
                Tyent water ionizers produce strong alkaline water (up to 11.5
                pH) and strong acidic water (down to 2.5 pH) without the use of
                chemical additives or enhancers.
              </p>
              <p>
                This is achieved through advanced ionization technology and the
                patented SMPS Plus power supply, which allows Tyent to deliver
                more precise control over the electrolysis process. Tyent’s
                water ionizers create strong pH levels naturally, offering
                chemical-free, safe water for drinking, cleaning, and
                sanitizing, while also ensuring optimal antioxidant production.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ backgroundColor: "#f2f2f2", padding: "30px" }}>
            <div>
              <p>
                Enagic Kangen ionizers require a chemical enhancer to produce
                strong alkaline and acidic water. This enhancer contains
                substances like sodium hypochlorite to assist in achieving the
                desired pH levels, which can make the process dependent on
                external additives.
              </p>
              <p>
                While Kangen can also generate strong alkaline and acidic water,
                the reliance on chemicals limits its natural ionization
                capabilities. Cost of the chemical enhancer is again an extra
                expensive burden & traces of chemical enhancer on plates is
                dangerous too.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <h2 style={{ color: "#008AC7" }}>
          <b>5. Reasonable cost & Doorstep service:</b>
        </h2>
        
        <p style={{ fontSize: "14px" }}>
          Price & doorstep service plays a crucial role in selecting a water
          ionizer, affecting both the upfront cost and long-term value.
          Higher-priced models typically offer advanced features like durable
          plates, superior filtration, and higher antioxidant production,
          enhancing water quality and health benefits. Additionally, premium
          ionizers often come with extended warranties and reliable doorstep
          service, ensuring hassle-free maintenance. Balancing price with
          features, warranty, and service support guarantees a cost-effective
          and long-lasting investment for optimal health.
        </p>

        <Row className="m-2">
          <Col
            md={6}
            style={{
              backgroundColor: "#008AC7",
              color: "#FFF",
              padding: "30px",
            }}
          >
              <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={doorstep}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>
            <div>
              <p>
                Tyent follows a direct marketing approach, reaching customers
                without middlemen or MLM commissions. All demos, installations,
                and after-sales services are handled exclusively by Tyent’s own
                employees, ensuring a personalized and professional experience.
              </p>
              <p>
                Tyent provides comprehensive doorstep service, covering
                installation, maintenance, and filter replacement, with strong
                after-sales support for minimal inconvenience. Their dedicated
                team delivers prompt and reliable service, enhancing Tyent’s
                reputation for outstanding customer satisfaction. Investing in a
                Tyent water ionizer means not only choosing advanced technology
                but also enjoying a hassle-free, customer-focused experience.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ backgroundColor: "#f2f2f2", padding: "30px" }}>
          <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "60%", height: "auto", margin: "0 auto" }}
            >
              <Image
                src={callmute}
                alt="tyentPlates"
                layout="responsive"
                priority
              />
            </div>
            <div>
              <p>
                Enagic Kangen follows an MLM-based approach, where 49% of the
                cost of each machine is distributed as commission to 8 members,
                making Enagic Kangen products significantly more expensive. Due
                to this sales structure, there are no direct company employees
                to handle demos, installations, or service - these tasks are
                performed by independent agents.
              </p>
              <p>
                Customers are responsible for managing the maintenance of their
                machines, including filter replacement, deep cleaning, and
                purchasing enhancers, with no direct service support from the
                company, leaving much of the after-sales care in the hands of
                the buyer.
              </p>
            </div>
          </Col>
        </Row>

        <PriceComp />
      </div>
    </div>
  );
};

export default page;
