"use client";

import React from "react";
import Image from "next/image";
import BannerOneDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop.jpeg";
import BannerOneMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg.jpeg";
import "../../style/slider.css";

const Slider = () => {
  return (
    <div className="banner-wrapper">
      {/* Desktop */}
      <div className="banner-desktop">
        <a href="/collections/all-ionizers">
          <Image
            src={BannerOneDesktop}
            alt="Water, Reimagined – Tyent Water Ionizer India"
            priority
            className="banner-img"
          />
        </a>
      </div>

      {/* Mobile */}
      <div className="banner-mobile">
        <a href="/collections/all-ionizers">
          <Image
            src={BannerOneMobile}
            alt="Water, Reimagined – Tyent Water Ionizer India"
            priority
            className="banner-img"
          />
        </a>
      </div>
    </div>
  );
};

export default Slider;
