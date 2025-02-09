"use client"
import React, { useState } from 'react'
import NMP7_BANNER_DESKTOP from "@/asserts/nmp/nmp5&7/NMP7_BANNER_DESKTOP.webp";
import NMP7_BANNER_MOBILE from "@/asserts/nmp/nmp5&7/NMP7_BANNER_MOBILE.webp";
import Image from 'next/image';
import Display from '@/app/(home)/compoents/(products)/Display';

const TopBannerNmp9 = () => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div style={{ width: "100%", height: "auto", position: "relative" }}>
        {/* Mobile and Tablet View */}
        <div className="d-block d-md-none">
          <Image
            src={NMP7_BANNER_MOBILE}
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
                Sustainable Hydration, Sustainable Health
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
                <div className="mt-1">
                  <p className={"nmp-banner-benefits"}>
                    <span>For a Greener</span>
                    <br />
                    and <span>Cleaner Tomorrow</span>
                  </p>
                </div>
              </div>
              <br/>
            </div>
          </div>


          {/* NmpDispalayfinal for Mobile and Tablet */}
          {isImageLoaded && (
          <div
            className="nmp-9-mobile-display"
          >
            <Display />
          </div>
          )}
        </div>

        {/* Desktop and Larger Devices */}
        <div className="d-none d-md-block">
          <Image
            src={NMP7_BANNER_DESKTOP}
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
                Sustainable Hydration, Sustainable Health
              </h2>

              {/* Tyent Water Title */}

              <div
                data-aos="fade-left"
                className="d-flex justify-content-start align-items-center"
              >
                {/* Decorative Line */}
                <div className="d-flex justify-content-center align-items-center">
                  <svg width="20" height="70">
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
                    <span>For a Greener</span>
                    <br />
                    and <span>Cleaner Tomorrow</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* NmpDispalayfinal for Desktop */}
          {isImageLoaded && (
          <div className="nmp9Display">
            <Display />
          </div>
          )}
        </div>
      </div>
  )
}

export default TopBannerNmp9