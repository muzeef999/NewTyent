"use client";

import React from "react";
import Image from "next/image";
import BannerDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_hybrid.jpeg";
import BannerMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_hybrid.jpeg";

const Slider = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Desktop */}
      <div className="d-none d-md-block">
        <a href="/hybrid-h2">
          <Image
            src={BannerDesktop}
            alt="Water, Reimagined – Tyent Hybrid H2 Water Ionizer India"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>

      {/* Mobile */}
      <div className="d-block d-md-none">
        <a href="/hybrid-h2">
          <Image
            src={BannerMobile}
            alt="Water, Reimagined – Tyent Hybrid H2 Water Ionizer India"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Slider;
