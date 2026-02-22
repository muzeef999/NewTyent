"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./realScience.css";

const RealScience = () => {
  return (
    <section className="science-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="bg-heading-text">The Real Science</h1>
          <h3 className="fw-bold">Behind Our Products</h3>
          <p className="subtitle">
            Confused between Water Ionizer and Hydrogen generator? <br/>
            Learn the facts, understand the difference, and choose with clarity.
          </p>
        </div>

        <div className="row g-4">

          {/* LEFT CARD */}
          <div className="col-lg-6">
            <div className="science-card light-card h-100">
              <h4 className="fw-bold mb-3">What is a Water Ionizer?</h4>
              <p>
                A water ionizer is a smart device that converts regular water
                into antioxidant-rich, alkaline, hydrogen-infused water through
                advanced electrolysis. It balances pH, supports cellular health,
                reduces oxidative stress and supports overall wellness.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="col-lg-6">
            <div className="science-card blue-card h-100">
              <h4 className="fw-bold mb-3 text-white">
                What is a Hydrogen Generator?
              </h4>
              <p className="text-white">
                A hydrogen generator uses advanced PEM technology to infuse pure
                molecular hydrogen (H₂) into water without changing its pH.
                Ideal for individuals on kidney dialysis or high creatinine.
                Delivers clean hydrogen in every sip without alkalinity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RealScience;
