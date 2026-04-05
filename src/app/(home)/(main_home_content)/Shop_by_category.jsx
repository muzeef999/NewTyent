"use client";
import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shopCategory.css";
import Image from "next/image";

const categories = [
  {
    title: "Above-counter Ionizers",
    desc: "Sleek & modern design, easy-to-install",
    img: "/home/nmp-9.png",
    link: "/counter-top-water-ionizers",
  },
  {
    title: "Under the counter ionizers",
    desc: "Ultra premium and aesthetically designed",
    img: "/explore/uceColor1.png",
    link: "/under-counter-water-ionizers",
  },
  {
    title: "Filters",
    desc: "High-quality replacement filters",
    img: "/home/filter.png",
    link: "/0.1-micron-filters",
  },
];

const Shop_by_category = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth * 0.85;
    const index = Math.round(container.scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  return (
    <div className="container shop-category-wrapper">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold subtitle-tight">Shop by category</h2>
      </div>

      {/* Desktop View */}
      <div className="row g-4 justify-content-center desktop-view">
        {categories.map((item, index) => (
          <div key={index} className="col-md-4 d-flex">
            <a href={item.link} className="text-decoration-none w-100">
              <div className="category-card text-center p-4 d-flex flex-column h-100">
                <div style={{ height: "200px" }} className="d-flex align-items-center justify-content-center mb-3">
                  <div style={{ width: "85%" }} className="mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={240}
                      className="img-fluid category-img"
                      style={{ maxHeight: "200px", width: "auto", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <h5 style={{ color: "#000", fontWeight: 600 }}>
                    {item.title}
                  </h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div
        className="category-scroll mobile-view"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {categories.map((item, index) => (
          <div key={index} className="category-slide d-flex">
            <a href={item.link} className="text-decoration-none w-100">
              <div className="category-card text-center p-3 d-flex flex-column h-100">
                <div style={{ height: "250px" }} className="d-flex align-items-center justify-content-center mb-3">
                  <div style={{ width: "100%" }} className="mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={140}
                      className="img-fluid category-img"
                      style={{ maxHeight: "250px", width: "auto", objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <h5 style={{ color: "#000", fontWeight: 600 }}>
                    {item.title}
                  </h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="dots mobile-view">
        {categories.map((_, i) => (
          <span
            key={i}
            className={`dot ${activeIndex === i ? "active" : ""}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Shop_by_category;