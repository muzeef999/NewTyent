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

  const [currentText, setCurrentText] = useState('Boost Immunity'); // State for the text

  useEffect(() => {
    const textArray = ['Immunity', 'Health', 'Vitality'];
    let currentIndex = 0;

    // Function to change the text content
    const changeText = () => {
      currentIndex = (currentIndex + 1) % textArray.length;
      setCurrentText(textArray[currentIndex]); // Update the text in state
    };

    // GSAP animation for fade-out and fade-in effect with a smoother transition
    const animateTextChange = () => {
      gsap.to('.changing-text', {
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut', // Smooth easing
        onComplete: () => {
          changeText(); // Change text when fade-out is complete
          gsap.fromTo('.changing-text', 
            { opacity: 0 }, 
            { opacity: 1, duration: 1, ease: 'power2.out' } // Fade in the new text smoothly
          );
        }
      });
    };

    // Initial fade-in effect when the component is mounted
    gsap.fromTo('.changing-text', 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Change text every 3 seconds with smoother transitions
    const intervalId = setInterval(() => {
      animateTextChange(); // Trigger the text change animation
    }, 4000); // Change text every 4 seconds (3-second display + 1-second animation)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
      <div className={bannerClass}>
        {bannerClass === "home_banner_bg_1" && (
          <div>
            

            <div className="responsive-container">
              <NmpDispalayfinal />
            </div>


            
            <div class="home-banner-text">
              <h1>Drink Life, Not Just Water!</h1>
              <div class="d-flex">
                <p class="tagline">
                  <span class="changing-text">{currentText}</span>
                </p>
                <p class="brand-highlight">&nbsp; With Tyent Water</p>
              </div>
            </div>
          </div>
        )}

        {bannerClass === "home_banner_bg_2" && (
          <div>
            
            <Leaf />
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

            <div className="home-banner-text">
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
