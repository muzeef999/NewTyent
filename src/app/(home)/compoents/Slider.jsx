"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import homebanner1 from "@/asserts/homeBanners/home_Banner1.jpg";
import "@/app/style/ResponsiveBanner.css";
import Banner1_sky from "@/asserts/homeBanners/home_Banner1_Sky.png";
import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";

const Slider = () => {
  const [bannerClass, setBannerClass] = useState("");

  const bannerClasses = [
    "home_banner_bg_1",
    "home_banner_bg_2"
  ];

  useEffect(() => {
    const randomClass =
      bannerClasses[Math.floor(Math.random() * bannerClasses.length)];
    setBannerClass(randomClass);
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div>
      <div className={bannerClass}>
        {bannerClass === "home_banner_bg_1" && (
          <div>
            <div className="sky_Movie" style={{ width: "100%", height: "auto" }}>
              <Image
                src={Banner1_sky}
                alt="Home_banner"
                layout="responsive"
                priority
              />
            </div>

            <div className="responsive-container">
            
              <NmpDispalayfinal />
            
          </div>
            <h2>Don't Just Drink Water - Drink Life!</h2>
            <p>
              Boost Immunity, Health, and Vitality <br /> with Tyent Water
            </p>
          </div>
        )}

        {bannerClass === "home_banner_bg_2" && (
          <div>
            <div style={{ width: "100%" }}>
              <Image
                src={homebanner1}
                alt="slider npm top counter"
                layout="responsive"
                priority
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Slider;
