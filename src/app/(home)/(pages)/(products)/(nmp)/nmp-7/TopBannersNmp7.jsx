"use client"
import React from 'react'

const TopBannersNmp7 = () => {
  return (
    <div style={{ width: "100%", height: "auto", position: "relative", overflow: "hidden" }}>
      <div className="d-block d-md-none">
        <img
          src="/nmp-banner-mobile.jpeg"
          alt="Tyent Water Ionizers – For Homes That Refuse Ordinary"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="d-none d-md-block">
        <img
          src="/nmp-banner-desktop.jpeg"
          alt="Tyent Water Ionizers – For Homes That Refuse Ordinary"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  )
}

export default TopBannersNmp7
