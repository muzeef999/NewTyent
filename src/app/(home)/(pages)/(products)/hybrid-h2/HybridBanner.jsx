"use client"
import React, { useState } from 'react'
import Hybrid_Desktop from "@/asserts/hybrid/Hybrid_Desktop.webp";
import Hybrid_Mobile from "@/asserts/hybrid/Hybrid_Mobile.webp";
import Display from './Display';
import Image from 'next/image';
import "@/app/style/hybridBackground.css";



const HybridBanner = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div style={{ width: "100%", height: "auto", position: "relative" }}>
        {/* Mobile and Tablet View */}
        <div className="d-block d-md-none">
          <Image
            src={Hybrid_Mobile}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          /> 

<div className={"hybrid-desktop-one-touch-main-banner"}>
          {/* Right-Aligned Content */}
          <div className={"uc9-banner-content"}>
            {/* Resilience Message */}
            <h2 data-aos="fade-right" className={"uce9-banner-resilience"}>
            The Future of Hydration is Here
            </h2>

            {/* Tyent Water Title */}

            <div style={{marginTop:'-15px'}}
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
               
                <p className={"hybrid-banner-benefits"}>
                  <span>Tyent H2-Hybrid with</span>
                  <br />
                  <span>patented Twin cell Technology</span>
                </p>
              </div>
            </div>
          </div>
        </div>


          {/* NmpDispalayfinal for Mobile and Tablet */}
          {isImageLoaded && (
          <div className="hybridDisplay">
            <Display />
          </div>
          )}
        </div>

        {/* Desktop and Larger Devices */} 
        <div className="d-none d-md-block">
          <Image
            src={Hybrid_Desktop}
            alt="nmp-5 banner"
            layout="responsive"
            priority
            style={{
              position: "relative",
              zIndex: 10, // Ensure the image is on top
            }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />

<div className={"hybrid-desktop-one-touch-main-banner"}>
          {/* Right-Aligned Content */}
          <div className={"uc9-banner-content"}>
            {/* Resilience Message */}
            <h2 data-aos="fade-right" className={"uce9-banner-resilience"}>
            The Future of Hydration is Here
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
               
                <p className={"hybrid-banner-benefits"}>
                  <span>Tyent H2-Hybrid with</span>
                  <br />
                  <span>patented Twin cell Technology</span>
                </p>
              </div>
            </div>
          </div>
        </div>


          {/* NmpDispalayfinal for Desktop */}
          {isImageLoaded && (
          <div className="hybridDisplay">
            <Display />
          </div>
          )}
        </div>
      </div>
  )
}

export default HybridBanner