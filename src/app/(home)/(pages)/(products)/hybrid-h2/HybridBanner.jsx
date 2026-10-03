"use client"
import React from 'react'
import Hybrid_Desktop from "@/asserts/hybrid/Hybrid_Desktop_new.jpeg";
import Hybrid_Mobile from "@/asserts/hybrid/Hybrid_Mobile.webp";
import Image from 'next/image';

const HybridBanner = () => {
  return (
    <div style={{ width: "100%", height: "auto", position: "relative" }}>
      {/* Mobile and Tablet View */}
      <div className="d-block d-md-none">
        <Image
          src={Hybrid_Mobile}
          alt="Tyent H2-Hybrid – Water, Reimagined"
          layout="responsive"
          priority
        />
      </div>

      {/* Desktop and Larger Devices */}
      <div className="d-none d-md-block">
        <Image
          src={Hybrid_Desktop}
          alt="Tyent H2-Hybrid – Water, Reimagined"
          layout="responsive"
          priority
        />
      </div>
    </div>
  )
}

export default HybridBanner
