"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/style/ResponsiveBanner.css";
import Banner1_sky from "@/asserts/homeBanners/home_Banner1_Sky.png";
import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";
import Display from "../(pages)/(products)/hybrid-h2/Display";
import Leaf from "@/app/(home)/compoents/(Home)/Leaf";

const Slider = () => {
  const [bannerClass, setBannerClass] = useState("");

  const bannerClasses = ["home_banner_bg_one", "home_banner_bg_two"];

  // Randomize banner class
  useEffect(() => {
    const randomClass =
      bannerClasses[Math.floor(Math.random() * bannerClasses.length)];
    setBannerClass(randomClass);
  }, []);




  return (
    <div>
      <div className={`home_banner_bg ${bannerClass}`}>
        {bannerClass === "home_banner_bg_one" && (
          <div>
            <div className="sky_Movie">
              <Image
                src={Banner1_sky}
                alt="Home_banner"
                layout="responsive"
                priority
              />
            </div>

            <div className="home-banner-text">
              <h1 style={{fontSize:"clamp(25px, 5vw, 70px)"}} className="home_banner1_text1">Drink Life, Not Just Water!</h1>
              <h1 style={{fontSize:"clamp(20px, 4vw, 50px)"}} className="home_banner2_text1">Boost Immunity with <span>Tyent Water</span></h1>  
            </div>

            <div className="responsive-container">
              <NmpDispalayfinal />
            </div>
          </div>
        )} 

        {bannerClass === "home_banner_bg_two" && (
          <div>
            <Leaf />
            <div className="home-banner-text">
              <h1 style={{fontSize:"clamp(30px, 5vw, 80px)"}} className="home_banner1_text1">Hydration That Heals</h1>
              <h1 style={{fontSize:"clamp(16px, 4vw, 26px)"}} className="home_banner2_text1">Anti-Inflammatory Benefits <span> Backed by Science powered by Tyent</span></h1>
            
            </div>
            <div className="responsive-container-hybrid">
              <Display/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
