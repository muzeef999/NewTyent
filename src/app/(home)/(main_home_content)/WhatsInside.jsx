"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whatsInside.css";

const leftData = [
  {
    title: "Anti-oxidant Molecular H2",
    text: "Tyent ionized hydrogen-rich alkaline water has a selective antioxidant called Molecular hydrogen. Molecular hydrogen is rich in electrons or -ORP which helps in neutralizing free radicals (ROS) and oxidative stress.",
  },
  {
    title: "Micro-clustered water",
    text: "Tyent ionized hydrogen-rich alkaline water is Micro-clustered water. Due to its micro-clustered property, it penetrates faster to all cells and major organs in the human body than regular tap or RO water.",
  },
  {
    title: "Alkalinity",
    text: "Acidic stress is the root cause of all the major lifestyle diseases such as Diabetes, Thyroid, Gastric, Constipation etc, Alkalinity in Tyent water neutralizes balances excess acidic stress in your body.",
  },
];

const rightData = [
  {
    title: "Natural minerals",
    text: "Tyent ionized hydrogen-rich alkaline water is rich in alkaline minerals such as calcium, magnesium, potassium, and sodium. Alkaline minerals help in promoting bone health, aiding muscle function, supporting cardiovascular health, boosting immune function, and enhancing metabolism.",
  },
  {
    title: "Pure Healthy water",
    text: "The Tyent water ionizer, equipped with .01-micron filtration, delivers the purest and safest healthy water, free from bacteria, nano-viruses, nano-plastics, contaminants, chlorine, and more.",
  },
  {
    title: "Japanese Technology",
    text: "Every Tyent water ionizer features advanced Japanese technology plates from Permelac, Japan, and a patented SMPS PLUS power supply, delivering pure, healthy water without the use of chemicals, enhancers, or salts.",
  },
];

const WhatsInside = () => {

  const mobileFlow = [
    ...leftData,
    "GLASS",
    ...rightData
  ];

  return (
    <div className="container inside-section">

      <div className="text-center mb-5">
        <h1 className="bg-heading-text-two-main">Whats Inside</h1>
        <h3 className="fw-bold subtitle-tight">Amazing Properties of Tyent water.</h3>
      </div>

      {/* Desktop Layout */}
      <div className="row align-items-center desktop-layout">

        <div className="col-lg-4">
          {leftData.map((item, i) => (
            <div key={i} className="feature-box text-lg-end text-center">
              <h5 className="feature-title">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="col-lg-4 text-center my-4 my-lg-0">
          <div className="circle-image-wrapper">
            <Image
              src="/explore/round-glass.png"
              alt="water"
              width={420}
              height={420}
              className="circle-image"
            />
          </div>
        </div>

        <div className="col-lg-4">
          {rightData.map((item, i) => (
            <div key={i} className="feature-box text-lg-start text-center">
              <h5 className="feature-title">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        {mobileFlow.map((item, i) => {

          if (item === "GLASS") {
            return (
              <div key={i} className="center-glass-mobile">
                <Image
                  src="/explore/round-glass.png"
                  alt="water"
                  width={260}
                  height={260}
                  className="circle-image"
                />
              </div>
            );
          }

          return (
            <div key={i} className="feature-box text-center">
              <h5 className="feature-title">{item.title}</h5>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default WhatsInside;