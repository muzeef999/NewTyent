"use client"
import React, { useState } from 'react'
import uceBannerBlack from "@/asserts/uce/uceBannerBlack.webp";
import uceBannerBlackMobile from "@/asserts/uce/uceBannerBlackMobile.webp";
import DisplayAnimation from '../DisplayAnimation';
import Image from 'next/image';
import "@/app/style/Uce.css";

const TopBannerUCE11 = () => {
        
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    
  return (
    <div>
          <div className="d-block d-md-none">
        <Image
          src={uceBannerBlackMobile}
          alt="nmp-5 banner"
          layout="responsive"
          priority
          style={{
            position: "relative",
            zIndex: 10, // Ensure the image is on top
          }}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />

        <div className={"nmp-9-desktop-one-touch-main-banner"}>
          {/* Right-Aligned Content */}
          <div className={"uc9-banner-content"}>
            {/* Resilience Message */}
            <h2 data-aos="fade-right" className={"uce9-banner-resilience"}>
              Elevate your kitchen with Tyent UCE
            </h2>

            {/* Tyent Water Title */}

            <div
              data-aos="fade-left"
              className="d-flex justify-content-start align-items-center"
            >
              {/* Decorative Line */}
              <div className="d-flex justify-content-center align-items-center">
                <svg width="8" height="40">
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="40"
                    stroke="#008ac7"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              {/* Benefits */}
              <div className="mt-3">
                <p className={"uce9-banner-benefits"}>
                  <span>where luxury meets</span>
                  <br />
                  with <span>cutting-edge design</span>
                </p>
              </div>
            </div>
          </div>
        </div> 

        {/* NmpDispalayfinal for Mobile and Tablet */}
        {isImageLoaded && (
        <div className="uce9Display-mobile">
          <DisplayAnimation />
        </div>
        )}
      </div>

      {/* Desktop and Larger Devices */}
      <div className="d-none d-md-block">
        <Image
          src={uceBannerBlack}
          alt="nmp-5 banner"
          layout="responsive"
          priority
          style={{
            position: "relative",
            zIndex: 10, // Ensure the image is on top
          }}
          onLoadingComplete={() => setIsImageLoaded(true)}
        />

        <div className={"nmp-9-desktop-one-touch-main-banner"}>
          {/* Right-Aligned Content */}
          <div className={"uc9-banner-content"}>
            {/* Resilience Message */}
            <h2 data-aos="fade-right" className={"uce9-banner-resilience"}>
              Elevate your kitchen with Tyent UCE
            </h2>

            {/* Tyent Water Title */}

            <div
              data-aos="fade-left"
              className="d-flex justify-content-start align-items-center"
            >
              {/* Decorative Line */}
              <div className="d-flex justify-content-center align-items-center">
                <svg width="8" height="70">
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="70"
                    stroke="#008ac7"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              {/* Benefits */}
              <div className="mt-3">
                <p className={"uce9-banner-benefits"}>
                  <span>where luxury meets</span>
                  <br />
                  with <span>cutting-edge design</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NmpDispalayfinal for Desktop */}
        {isImageLoaded && (
        <div className="uce9Display">
          <DisplayAnimation />
        </div>
        )}
      </div>
    </div>
  )
}

export default TopBannerUCE11