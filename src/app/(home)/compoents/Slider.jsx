"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerOneDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop.png";
import BannrrOneMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg.png";
import "@/app/style/ResponsiveBanner.css";
import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";
import "../../style/slider.css";

const words = ["filtered", "purified", "hydration", "alkaline", "healthy"];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // word change every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper">
      {/* Desktop */}
      <div className="banner-desktop">
        <Image
          src={BannerOneDesktop}
          alt="banner"
          priority
          className="banner-img"
        />

        <div className="banner-content">
          <span className="offer-badge">World's No.1 Brand</span>

          {/* 🔥 Animated Heading */}
          <h1 className="main-heading">
            <span className="fixed-text">Not just</span>
            <span key={index} className="animated-word">
              {words[index]}
            </span>
          </h1>

          <p className="sub-text">
            Experience the healthiest hydrogen water on earth
          </p>

          <button className="shop-btn">Shop the collection</button>
        </div>

        <div className="responsive-container">
          <NmpDispalayfinal />
        </div>
      </div>

      {/* Mobile */}
      <div className="banner-mobile">
        <Image
          src={BannrrOneMobile}
          alt="banner"
          priority
          className="banner-img"
        />

        <div className="banner-content mobile">
          <span className="offer-badge">World's No.1 Brand</span>

          <h1 className="main-heading">
            <span className="fixed-text">Not just</span>
            <span key={index} className="animated-word">
              {words[index]}
            </span>
          </h1>

          <p className="sub-text">
            Experience the healthiest <br />hydrogen water on earth
          </p>

          <button className="shop-btn">Shop the collection</button>
        </div>

        <div className="responsive-container">
          <NmpDispalayfinal />
        </div>
      </div>
    </div>
  );
};

export default Slider;
