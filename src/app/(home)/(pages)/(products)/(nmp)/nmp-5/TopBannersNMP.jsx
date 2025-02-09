"use client"
import React, { useState } from 'react'
import "@/app/style/Nmp.css";
import NMP5_BANNER_DESKTOP from "@/asserts/nmp/NMP5_BANNER_DESKTOP.webp";
import NMP5_BANNER_MOBILE from "@/asserts/nmp/NMP5_BANNER_MOBILE.webp";
import Image from 'next/image';
import NmpDispalayfinal from '../NmpDispalayfinal';

const TopBannersNMP = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div style={{ width: "100%", height: "auto", position: "relative", overflow:'hidden' }}>
    {/* Mobile and Tablet View */}
    <div className="d-block d-md-none">
      <Image
        src={NMP5_BANNER_MOBILE}
        alt="nmp-5 banner"
        layout="responsive"
        priority
        style={{
          position: "relative",
          zIndex: 10, // Ensure the image is on top
        }}
        onLoadingComplete={() => setIsImageLoaded(true)}

      />

      <div className={"nmp-5-desktop-one-touch-main-banner"}>
        {/* Right-Aligned Content */}
        <div className={"nmp-banner-content"}>
          {/* Resilience Message */}
          <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
            Build Resilience with <span>Every Drop</span>
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
              <p className={"nmp-banner-benefits"}>
                <span>For Stronger Immunity</span>
                <br />
                and <span>Natural Protection</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NmpDispalayfinal for Mobile and Tablet */}
      {isImageLoaded && (
    <div className="nmp5Display">
      <NmpDispalayfinal />
    </div>
        )}
    </div>

    {/* Desktop and Larger Devices */}
    <div className="d-none d-md-block">
      <Image
        src={NMP5_BANNER_DESKTOP}
        alt="nmp-5 banner"
        layout="responsive"
        priority
        style={{
          position: "relative",
          zIndex: 10, // Ensure the image is on top
        }}
        onLoadingComplete={() => setIsImageLoaded(true)}
      />

      <div className={"nmp-5-desktop-one-touch-main-banner"}>
        {/* Right-Aligned Content */}
        <div className={"nmp-banner-content"}>
          {/* Resilience Message */}
          <h2 data-aos="fade-right" className={"nmp-banner-resilience"}>
            Build Resilience with <span>Every Drop</span>
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
              <p className={"nmp-banner-benefits"}>
                <span>For Stronger Immunity</span>
                <br />
                and <span>Natural Protection</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NmpDispalayfinal for Desktop */}
      {isImageLoaded && (
    <div className="nmp5Display">
      <NmpDispalayfinal />
    </div>
        )}
    </div>
  </div>

  )
}

export default TopBannersNMP