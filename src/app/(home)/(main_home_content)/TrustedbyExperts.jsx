"use client";
import React, { useRef, useState } from "react";
import "./TrustedByExperts.css";

const TrustedbyExperts = () => {
  const reviews = [
    {
      name: "Dr.Vinod M. Vijan, DM MD.",
      role: "Senior Cardiologist",
      company: "VIJAY HOSPITAL & RESEARCH CENTER, Nashik",
      text: "I have been using since before the COVID-19 pandemic. This product has truly exceeded my expectations in terms of performance, durability, and usefulness."
    },
    {
      name: "V. Saveen",
      role: "Celebrity Fitness Trainer",
      company: "2x Gold IFBB NPC Champion",
      text: "I've been using the Tyent NMP-11 for over 5 years, and the results have been incredible. It has not only improved my hydration and boosted my metabolism, but also enhanced recovery, sleep quality, and overall immunity."
    },
    {
      name: "Jagdeep Dhankar",
      role: "Ex Vice President, India.",
      company: "",
      text: "Tyent is a true game changer. The hydration, energy boost, and overall wellness improvement are remarkable. Its advanced technology and health benefits make it the smartest upgrade for any family."
    },
    {
      name: "Mr. M. Madan Mohan Reddy",
      role: "Director",
      company: "Aurobindo Pharma",
      text: "I switched from Kangen K8 to Tyent NMP-11 during COVID due to poor service from Kangen. After 4 years, we're extremely satisfied with Tyent. I even recommended it to my sister and installed another unit at our head office."
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82 + 14; // 82vw + 14px gap
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section className="container">
      <div className="experts-container">
        <h2 className="experts-title">Trusted by Experts</h2>
        <p className="experts-subtitle">
          Join thousands who have transformed their health with Tyent
        </p>

        {/* Desktop Grid */}
        <div className="experts-box">
          <div className="experts-grid">
            {reviews.map((item, index) => (
              <div className="expert-card" key={index}>
                <div className="stars">★★★★★</div>
                <h4 className="expert-name">{item.name}</h4>
                <p className="expert-role">{item.role}</p>
                {item.company ? (
                  <p className="expert-company">{item.company}</p>
                ) : (
                  <p className="expert-company expert-company-empty">&nbsp;</p>
                )}
                <p className="expert-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Carousel */}
        <div
          className="experts-mobile-scroll"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {reviews.map((item, index) => (
            <div className="expert-mobile-card" key={index}>
              <div className="stars">★★★★★</div>
              <h4 className="expert-name">{item.name}</h4>
              <p className="expert-role">{item.role}</p>
              {item.company ? (
                <p className="expert-company">{item.company}</p>
              ) : (
                <p className="expert-company expert-company-empty">&nbsp;</p>
              )}
              <p className="expert-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile Dot Indicators */}
        <div className="experts-mobile-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${activeIndex === i ? "active" : ""}`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = el.offsetWidth * 0.82 + 14;
                el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
                setActiveIndex(i);
              }}
            />
          ))}
        </div>

        <p className="experts-rating">★ 4.9/5 from 8,200+ verified reviews</p>
      </div>
    </section>
  );
};

export default TrustedbyExperts;
