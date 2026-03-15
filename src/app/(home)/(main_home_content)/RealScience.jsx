"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./realScience.css";
import "@/app/style/AppBar.css"

const RealScience = () => {
  return (
      <div className="container">
        {/* Heading */}
        <div className="text-center">
          <h1 className="bg-heading-text-two-main">The Real Science</h1>
          <h3 className="fw-bold subtitle-tight">Behind Our Products</h3>
          <p style={{maxWidth:'900px', margin:'0 auto 30px'}}>
            Confused between Water Ionizer and Hydrogen generator? Learn the facts, understand the difference, and choose with clarity.
          </p>
        </div>

        <div className="row g-4">

          {/* LEFT CARD */}
          <div className="col-lg-6">
            <div className="science-card light-card h-100">
              <h4 className="fw-bold mb-3">What is a Water Ionizer?</h4>
              <p>
               A water ionizer is a smart device that converts regular water into antioxidant-rich, alkaline, hydrogen-infused water through advanced electrolysis. It has magical combination of both alkalinity & selective anti-oxidant molecular hydrogen. Due to its magical combination it enhances hydration, boosts pH, supports cellular health, reduces oxidative stress, and supports overall energy. It’s the smartest upgrade for your drinking water - pure, energized, and optimized for modern wellness for every day use.
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
              A hydrogen generator uses advanced PEM (Proton Exchange Membrane) technology to infuse pure molecular hydrogen (H₂) into water without changing its pH. This hydrogen-rich water supports cellular health, reduces oxidative stress, and boosts daily energy. Unlike ionizers, it does not neutralize acidity. It’s a compact wellness device - ideal for individuals on kidney dialysis or with high creatinine - delivering clean, potent hydrogen in every sip, without alkalinity.
              </p>
            </div>
          </div>

        </div>
      </div>
  );
};

export default RealScience;
