"use client";
import React from "react";
import Image from "next/image";
import BannerDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop_hybrid.jpeg";
import BannerMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg_hybrid.jpeg";

const Slider = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Desktop */}
      <div className="banner-desktop-wrap">
        <a href="/hybrid-h2">
          <Image
            src={BannerDesktop}
            alt="Water, Reimagined – Tyent Hybrid H2 Water Ionizer India"
            priority
            sizes="100vw"
            placeholder="blur"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>

      {/* Mobile */}
      <div className="banner-mobile-wrap">
        <a href="/hybrid-h2">
          <Image
            src={BannerMobile}
            alt="Water, Reimagined – Tyent Hybrid H2 Water Ionizer India"
            priority
            sizes="100vw"
            placeholder="blur"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      </div>

      <style jsx global>{`
        .banner-mobile-wrap { display: none; }
        .banner-desktop-wrap { display: block; aspect-ratio: 1920 / 800; }
        @media (max-width: 768px) {
          .banner-desktop-wrap { display: none; }
          .banner-mobile-wrap { display: block; aspect-ratio: 750 / 1080; }
        }
      `}</style>
    </div>
  );
};

export default Slider;
