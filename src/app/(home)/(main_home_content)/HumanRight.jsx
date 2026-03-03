"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./humanRight.css";

const stats = [
  {
    number: "239 Million",
    text: "Indians have access only to drinking water that does not meet BIS (safe drinking water) standards - as per Central Government and CAG data.",
  },
  {
    number: "70%",
    text: "India’s water is contaminated with chemicals, heavy metals, pesticides, and industrial discharge. (Source: NITI Aayog Report on Water Quality Crisis)",
  },
  {
    number: "76%",
    text: "India’s tap water contains harmful microplastics, meaning even municipal sources are polluted. (Source: IIT Bombay Study)",
  },
  {
    number: "93%",
    text: "Bottled water samples tested in India contained microplastics and bacteria, including premium brands. (Source: CPCB Study)",
  },
];

const HumanRight = () => {
  return (
    <section className="human-section">
      <div className="container text-center">
        <h1 className="bg-heading-text-two-main">Human Right</h1>
        <h3 className="fw-bold subtitle-tight">
          Clean & healthy water shouldn't be a luxury.
        </h3>

        <p className="sub-title-below">
          With rising contamination and declining water quality, every family
          deserves safe, mineral-rich, healthy water. Choosing the right
          technology isn’t a luxury — it’s your right.
        </p>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="row text-center">
            {stats.map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 mb-4">
                <div className="stat-card">
                  <h2 className="stat-number">{item.number}</h2>
                  <p className="stat-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanRight;