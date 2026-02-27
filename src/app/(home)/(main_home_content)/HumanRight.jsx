"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./humanRight.css";
import "@/app/style/AppBar.css" 

const stats = [
  {
    number: "239 Million",
    text: "Indians have access only to drinking water that does not meet BIS (safe drinking water) standards - as per Central Government and CAG data.",
  },
  {
    number: "70%",
    text: "India’s water is contaminated  with chemicals, heavy metals, pesticides, and industrial discharge. (Source: NITI Aayog Report on Water Quality Crisis)",
  },
  {
    number: "76%",
    text: "India’sTap  water is contains harmful microplastics, meaning even water from trusted municipal sources is polluted. (Source: Microplastic Contamination Study, IIT Bombay & National Institute of Ocean Technology)",
  },
  {
    number: "93%",
    text: "bottled water samples tested in India contained microplastics and bacteria, including premium brands.(Source: CPCB & BIS Market Surveillance Study)",
  },
];

const HumanRight = () => {
  return (
      <div className="container">
        <div className="text-center">
          <h1 className="bg-heading-text-two-main">Human Right</h1>
          <h3 className="fw-bold subtitle-tight">
            Clean & healthy water shouldn't be a luxury.
          </h3>
          <p className="sub-title-below">
            With rising contamination, microplastics, and declining water
            quality, every family deserves safe, mineral-rich, healthy water.
            Choosing the right technology isn’t a luxury - it’s your right to
            protect your health, boost wellness, and ensure truly clean water.
          </p>
        </div>

        {/* World Map */}
        <div className="map-wrapper my-5 position-relative">
          <Image
            src="/home/world-map.png"
            alt="world map"
            width={900}
            height={350}
            className="map-img w-100"
          />

          <div className="row text-center position-absolute top-50 start-50 translate-middle w-100">
            {stats.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3 mb-4">
                <h2 className="stat-number">{item.number}</h2>
                <p className="stat-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default HumanRight;
