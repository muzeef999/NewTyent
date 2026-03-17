"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./tyentvskangan.css";
import DetailComparison from "./DetailComparison";

const Item = ({ title, text }) => (
  <div className="cmp-item">
    <h5>{title}</h5>
    <p>{text}</p>
  </div>
);

const Comparsion = () => {
  const [tab, setTab] = useState("overview");

  return (
    <section className="cmp-section">


      {/* ===== TABS ===== */}
      <div className="cmp-tabs">
        <span
          className={`cmp-tab ${tab === "overview" ? "active" : ""}`}
          onClick={() => setTab("overview")}
        >
          Technical Overview
        </span>

        <span
          className={`cmp-tab ${tab === "detail" ? "active" : ""}`}
          onClick={() => setTab("detail")}
        >
          Detail Comparison
        </span>
      </div>

      {/* ===== CONTENT ===== */}
      {tab === "overview" && (
        <Row className="g-4">

          {/* LEFT CARD */}
          <Col lg={6}>
            <div className="cmp-card left">

              <Item title="pH Range :" text="11.5 - 2.5*" />
              <Item title="Generates" text="7 types of water levels" />
              <Item
                title="Plate Material"
                text="Uses advanced Solid hybrid mesh plates with Japanese technology which are strong, has more surface area with more electrical conductivity."
              />
              <Item
                title="Electronic power supply"
                text="Uses advanced patented SMPS PLUS technology which is more flexible and programmable."
              />
              <Item
                title="Chemical Free"
                text="Has Turbo level to make super strong 11.5pH & 2.5pH without using any enhancers, salts, or chemicals. Which is totally safe."
              />
              <Item
                title="More anti-oxidant"
                text="Built-in hydrogen boost feature to produce more concentration of anti-oxidant molecular hydrogen at drinking levels."
              />
              <Item
                title="ORP Range"
                text="Negative ORP Range up to -1250* (Anti-oxidants/Molecular hydrogen)."
              />
              <Item
                title="Scale Mode"
                text="Sales through traditional marketing. (No MLM & no commission involved)"
              />
              <Item title="Warranty" text="3 years warranty on ionizer & 15 years warranty on plates." />
              <Item title="Service" text="Doorstep service is available throughout PAN India." />

            </div>
          </Col>

          {/* RIGHT CARD */}
          <Col lg={6}>
            <div className="cmp-card right">

              <Item title="pH Range :" text="11.5 - 2.5*" />
              <Item title="Generates" text="5 types of water levels." />
              <Item
                title="Plate Material"
                text="Uses old outdated solid plates. Which are strong, but has less surface area with less electrical conductivity."
              />
              <Item
                title="Electronic power supply"
                text="Uses outdated old transformer which causes a lot of heat & is unstable."
              />
              <Item
                title="Chemical Free"
                text="Uses artificial chemical enhancers to produce super strong 11.5pH & 2.5pH. The resultant water is nothing but a chemical solution of bleach & salt"
              />
              <Item
                title="More anti-oxidant"
                text="No special feature to produce more molecular hydrogen/anti-oxidants at drinking water."
              />
              <Item
                title="ORP Range"
                text="Negative ORP Range up to -850* (Anti-oxidants/Molecular hydrogen).* only."
              />
              <Item
                title="Scale Mode"
                text="Sales through MLM or network marketing, where 49% of the machine price is distributed as commission."
              />
              <Item title="Warranty" text="5 years limited warranty on ionizer & plates." />
              <Item title="Service" text="No doorstep service." />

            </div>
          </Col>

        </Row>
      )}

      {tab === "detail" && (
        <DetailComparison />
      )}

    </section>
  );
};

export default Comparsion;
