"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BannerOneDesktop from "@/asserts/homeBanners/banner1/home_Banner_Bg_Desktop.webp";
import BannrrOneMobile from "@/asserts/homeBanners/banner1/home_Banner_mobile_Bg.webp";
import BannerTwoDesktop from "@/asserts/homeBanners/banner2/desktop_banner_bg.webp";
import BannerTwoMobile from "@/asserts/homeBanners/banner2/mobile_banner_bg.webp";
import "@/app/style/ResponsiveBanner.css";
import Banner1_sky from "@/asserts/homeBanners/home_Banner1_Sky.webp";

import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";
import Display from "../(pages)/(products)/hybrid-h2/Display";

const Slider = () => {
  const [isMorning, setIsMorning] = useState(true);

  useEffect(() => {
    const hour = 10;
    setIsMorning(hour >= 6 && hour < 18); // 6AM - 6PM = Morning
  }, []);

  const selectedDesktopBanner = isMorning ? BannerOneDesktop : BannerTwoDesktop;
  const selectedMobileBanner = isMorning ? BannrrOneMobile : BannerTwoMobile;
  const altText = isMorning ? "Morning Banner" : "Evening Banner";

  return (
    <div className="container-fluid p-0">
      {/* Desktop Banner */}
      <div className="d-none d-md-block position-relative">
        {/* Background image */}
        <Image
          src={selectedDesktopBanner}
          alt={altText}
          layout="responsive"
          priority
          placeholder="blur"
          className="w-100 h-auto"
        />

        {/* Component on top of image */}
        <div>
          {isMorning ? (
            <div className="responsive-container">
              <NmpDispalayfinal />
            </div>
          ) : (
            <div className="responsive-container-hybrid">
              <Display />
            </div>
          )}
        </div>


        <div className="home-banner-text">
          <h1
            style={{ fontSize: "clamp(30px, 5vw, 60px)" }}
            className="home_banner1_text1"
          >
            Hydration That Heals
          </h1>
          <h1
            style={{ fontSize: "clamp(16px, 4vw, 26px)" }}
            className="home_banner2_text1"
          >
            Anti-Inflammatory Benefits{" "}
            <span>Backed by Science powered by Tyent</span>
          </h1>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="d-block d-md-none position-relative">
        <Image
          src={selectedMobileBanner}
          alt={altText}
          layout="responsive"
          priority
          placeholder="blur"
          className="w-100 h-auto"
        />

        <div>
          {isMorning ? (
            <div className="responsive-container">
              <NmpDispalayfinal />
            </div>
          ) : (
            <div className="responsive-container-hybrid">
              <Display />
            </div>
          )}
        </div>

        <div className="home-banner-text">
          <h1
            style={{ fontSize: "clamp(25px, 5vw, 50px)" }}
            className="home_banner1_text1"
          >
            Drink Life, Not Just Water!
          </h1>
          <h1
            style={{ fontSize: "clamp(20px, 4vw, 35px)" }}
            className="home_banner2_text1"
          >
            Boost Immunity with <span>Tyent Water</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
