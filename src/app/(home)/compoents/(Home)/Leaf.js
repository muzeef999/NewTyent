"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FallingLeaves = () => {
  const leavesContainerRef = useRef([]); // Array of leaf refs

  useEffect(() => {
    const startFalling = () => {
      leavesContainerRef.current.forEach((leaf, index) => {
        if (!leaf) return; // Skip null or undefined refs

        // Random values for each leaf
        const startPositionX = Math.random() * window.innerWidth; // Random horizontal start
        const startPositionY = Math.random() * -200 - 50; // Random vertical start, above the screen
        const fallDuration = Math.random() * 4 + 12; // Random fall duration (6-10 seconds)
        const zigzagDistance = Math.random() * 300 + 100; // Random zigzag distance for horizontal movement
        const rotationAmount = Math.random() * 30 - 1.5; // Random rotation to make the leaf spin
        const leafSize = Math.random() * 0.5 + 0.5; // Random scale size

        // Ensure each leaf starts at a different position
        gsap.fromTo(
          leaf,
          {
            x: startPositionX, // Random start position horizontally
            y: startPositionY, // Start from above the screen
            rotation: rotationAmount, // Random rotation at start
            scale: leafSize, // Random scale size
          },
          {
            x: `+=${zigzagDistance}`, // Move horizontally with zigzag
            y: window.innerHeight - leaf.getBoundingClientRect().height, // Fall to the bottom of the screen
            rotation: `+=${Math.random() * 20 - 10}`, // Slight rotation during fall
            scale: 1, // Set leaf to normal size when it lands
            duration: fallDuration, // Random fall duration
            ease: "power2.out", // Smooth easing
            repeat: -1, // Make the animation loop
            yoyo: true, // Enable reverse motion to create zigzag effect
            onComplete: () => {
              // Keep leaf on the ground once it lands
              gsap.to(leaf, {
                scale: 1, // Keep normal scale
                rotation: 0, // Normalize rotation
                ease: "none",
              });
            },
          }
        );
      });
    };

    startFalling(); // Start falling leaves

    // Handle leaf movement on click (move leaves to mouse position)
    const moveLeafToMouse = (event) => {
      const { clientX, clientY } = event; // Mouse position
      const randomLeaf = leavesContainerRef.current[
        Math.floor(Math.random() * leavesContainerRef.current.length)
      ]; // Select a random leaf

      if (randomLeaf) {
        // Move the leaf to the mouse position
        gsap.to(randomLeaf, {
          x: clientX,
          y: clientY,
          duration: 1,
          ease: "power2.out", // Smooth movement
        });
      }
    };

    // Add event listener for clicks
    window.addEventListener("click", moveLeafToMouse);

    // Cleanup event listener
    return () => {
      window.removeEventListener("click", moveLeafToMouse);
    };
  }, []);

  // Array of leaves
  const leaves = Array.from({ length: 10 }); // Create 20 leaves

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {leaves.map((_, index) => (
        <svg
          key={index}
          ref={(el) => (leavesContainerRef.current[index] = el)} // Add each leaf to ref
          width="1%" // Adjusted leaf size for better visibility
          height="auto"
          viewBox="0 0 702 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 1, // Ensure the leaves are behind
            transformOrigin: "center", // Center the rotation on each leaf
          }}
        >
          {/* Simple leaf shape */}
          <g id="XMLID_1814_">
            <g id="lightgreenleaf">
              <path
                id="XMLID_1816_"
                d="M10.1547 0.691406C10.1547 0.691406 -124.408 961.773 604.549 825.922C604.549 825.922 340.67 675.621 207.489 300.098C207.489 300.098 364.049 639.725 636.027 775.024C717.39 624.815 872.754 182.01 10.1547 0.691406Z"
                fill="#8DC641"
              />
            </g>
          </g>
        </svg>
      ))}
    </div>
  );
};

export default FallingLeaves;
