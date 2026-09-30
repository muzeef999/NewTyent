"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerDesktop1 from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_mother.jpeg";
import BannerMobile1 from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_mother.jpeg";
import BannerDesktop2 from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_hybrid.jpeg";
import BannerMobile2 from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_hybrid.jpeg";
import "../../style/slider.css";

const slides = [
  {
    desktop: BannerDesktop1,
    mobile: BannerMobile1,
    alt: "Tyent Water Ionizers – For Homes That Refuse Ordinary",
    link: "/collections/all-ionizers",
  },
  {
    desktop: BannerDesktop2,
    mobile: BannerMobile2,
    alt: "Water, Reimagined – Tyent Hybrid H2 Water Ionizer India",
    link: "/hybrid-h2",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper">
      {/* Desktop */}
      <div className="banner-desktop">
        {slides.map((slide, i) => (
          <a
            key={i}
            href={slide.link}
            className={`banner-slide ${i === current ? "active" : ""}`}
          >
            <Image
              src={slide.desktop}
              alt={slide.alt}
              priority={i === 0}
              className="banner-img"
            />
          </a>
        ))}

        <div className="banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`banner-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="banner-mobile">
        {slides.map((slide, i) => (
          <a
            key={i}
            href={slide.link}
            className={`banner-slide ${i === current ? "active" : ""}`}
          >
            <Image
              src={slide.mobile}
              alt={slide.alt}
              priority={i === 0}
              className="banner-img"
            />
          </a>
        ))}

        <div className="banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`banner-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
