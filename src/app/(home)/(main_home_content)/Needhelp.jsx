"use client";

import React, { useState, useRef } from "react";
import { FaHeadset, FaPlayCircle, FaRegNewspaper } from "react-icons/fa";
import "./NeedHelp.css";

const Needhelp = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <section className="container" style={{ padding: "20px 20px" }}>
        <div className="needhelp-container">

          {/* Heading */}
          <h2 className="needhelp-title">Need help?</h2>
          <p className="needhelp-subtitle">
            We have a dedicated team for dealing with any queries
          </p>

          {/* Cards */}
          <div 
            className="needhelp-grid" 
            ref={scrollRef} 
            onScroll={handleScroll}
          >

            {/* Card 1 */}
            <div className="needhelp-card">
              <FaHeadset className="needhelp-icon" />
              <h3>Support</h3>
              <p>
                Our #1 goal at Tyent is to ensure your experience is smooth and
                delightful every step of the way
              </p>
            </div>

            {/* Card 2 */}
            <div className="needhelp-card">
              <FaPlayCircle className="needhelp-icon" />
              <h3>View our videos</h3>
              <p>
                Deep dive into the world of hydrogen water and discover tips and
                tricks, recipes, testimonials and more
              </p>
            </div>

            {/* Card 3 */}
            <div className="needhelp-card">
              <FaRegNewspaper className="needhelp-icon" />
              <h3>View our Blog</h3>
              <p>
                Tyent's blog is a wealth of information from unique uses, hacks
                and tips on everything from working out to aging younger
              </p>
            </div>

          </div>

          {/* Pagination Dots (Mobile Only) */}
          <div className="needhelp-dots">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`needhelp-dot ${activeIndex === i ? "active" : ""}`}
                onClick={() => scrollToCard(i)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Needhelp;

