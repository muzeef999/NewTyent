"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import watersplash from "@/asserts/homeBanners/banner2/water_splash.png";
import "@/app/style/ResponsiveBanner.css";
import Banner1_sky from "@/asserts/homeBanners/home_Banner1_Sky.png";
import NmpDispalayfinal from "../(pages)/(products)/(nmp)/NmpDispalayfinal";
import Display from "../(pages)/(products)/hybrid-h2/Display";
import Leaf from "../compoents/(Home)/Leaf";

const Slider = () => {
  const [bannerClass, setBannerClass] = useState("");

  const bannerClasses = ["home_banner_bg_1", "home_banner_bg_2"];

  // Randomize banner class
  useEffect(() => {
    const randomClass =
      bannerClasses[Math.floor(Math.random() * bannerClasses.length)];
    setBannerClass(randomClass);
  }, []);

  return (
    <div>
      <div className={bannerClass}>
        {bannerClass === "home_banner_bg_1" && (
          <div>
            <div
              className="sky_Movie"
              style={{ width: "100%", height: "auto" }}
            >
              <Image
                src={Banner1_sky}
                alt="Home_banner"
                layout="responsive"
                priority
              />
            </div> 


            <div class="home-banner-text">
  <h1>Don't Just <span>Drink Water</span> - Drink Life!</h1>
  <p>Boost Immunity, Health, and Vitality</p>
  <p>with <span>Tyent Water</span></p>
</div>

            
            <div className="responsive-container">
                <NmpDispalayfinal />
            </div>
          </div>
        )}

        {bannerClass === "home_banner_bg_2" && (
          <div>
            <div className="home_banner_bg_spalsh">
              <Image
                src={watersplash}
                alt="slider npm top counter"
                layout="responsive"
                priority
              />
            </div>

            <div className="responsive-container-banner2">
          
                <Display />
      
            </div>

            
              <Leaf />

            <div className="water-animation">
              <h1>Hydration That Heals</h1>
              <h2>Anti-Inflammatory Benefits Backend by Science</h2>
              <p>powered by Tyent</p>
            </div>
        
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
