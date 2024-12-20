"use client";
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import animationData from '@/asserts/icons/security-research.json'; // Path to your Lottie JSON file
import { gsap } from "gsap";

const MyComponent = () => {
  const [caption, setCaption] = useState("Wait a bit, I am working...");
  const captions = [
    "Wait a bit, I am working...",
    "Please wait, we are processing your request...",
    "Almost there, finalizing the data...",
    "Processing complete!",
  ];

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Function to rotate captions one by one
  useEffect(() => {
    let captionIndex = 0;
    const interval = setInterval(() => {
      captionIndex = (captionIndex + 1) % captions.length;
      setCaption(captions[captionIndex]);
    }, 3000); // Change caption every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // GSAP rotation effect for the box/container
  useEffect(() => {
    gsap.fromTo(
      ".caption-box",
      { rotation: 0 },
      { rotation: 0, duration: 5, repeat: -1, ease: "none" }
    );
  }, []);

  return (
    <div
      style={{
        overflow:'hidden',
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        height: "90vh", // Full viewport height
        flexDirection: "column", // Stack the elements vertically
        textAlign: "center", // Center the text
        boxSizing: "border-box", // Ensure padding is included in width/height calculations
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <Lottie
          options={options}
          height={400}
          width={400}
        />
      </div>

      <div
        className="caption-box"
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#008AC7" }}>
          {caption}
        </h2>
      </div>
    </div>
  );
};

export default MyComponent;
