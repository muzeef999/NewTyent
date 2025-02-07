"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import "@/app/style/ResponsiveBanner.css";
import Banner1_sky from "@/asserts/homeBanners/home_Banner1_Sky.webp";
import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";
import Display from "../(pages)/(products)/hybrid-h2/Display";
import Leaf from "@/app/(home)/compoents/(Home)/Leaf";

const Slider = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const banners = useMemo(() => ["home_banner_bg_one", "home_banner_bg_two"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 30000); // Change banner every 1 minute (60,000 ms)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [banners]);

  return (
    <div>
      <div className={`home_banner_bg ${banners[bannerIndex]}`}>
        {banners[bannerIndex] === "home_banner_bg_one" && (
          <div>
            <div className="sky_Movie">
              <Image src={Banner1_sky} alt="Home_banner" layout="responsive" priority />
            </div>
            <div className="home-banner-text">
              <h1 style={{ fontSize: "clamp(25px, 5vw, 50px)" }} className="home_banner1_text1">
                Drink Life, Not Just Water!
              </h1>
              <h1 style={{ fontSize: "clamp(20px, 4vw, 35px)" }} className="home_banner2_text1">
                Boost Immunity with <span>Tyent Water</span>
              </h1>
            </div>
            <div className="responsive-container">
              <NmpDispalayfinal />
            </div>
          </div>
        )}

        {banners[bannerIndex] === "home_banner_bg_two" && (
          <div>
            <div className="sky_Movie">
              <Image src={Banner1_sky} alt="Home_banner" layout="responsive" priority />
            </div>
            <Leaf />
            <div className="home-banner-text">
              <h1 style={{ fontSize: "clamp(30px, 5vw, 60px)" }} className="home_banner1_text1">
                Hydration That Heals
              </h1>
              <h1 style={{ fontSize: "clamp(16px, 4vw, 26px)" }} className="home_banner2_text1">
                Anti-Inflammatory Benefits <span>Backed by Science powered by Tyent</span>
              </h1>
            </div>
            <div className="responsive-container-hybrid">
              <Display />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
