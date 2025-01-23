"use client"
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
        const fallDuration = Math.random() * 4 + 6; // Random fall duration (6-10 seconds)
        const zigzagAmount = Math.random() * 150 - 75; // Random horizontal zigzag movement

        // Smooth falling animation with random values for rotation and size
        gsap.fromTo(
          leaf,
          {
            x: startPositionX, // Random start position
            y: -100, // Start above the screen
            rotation: Math.random() * 10 - 5, // Random rotation at start
            scale: Math.random() * 0.5 + 0.5, // Random scale size
          },
          {
            x: `+=${zigzagAmount}`, // Add random zigzag motion
            y: window.innerHeight - leaf.getBoundingClientRect().height, // Fall to the ground
            rotation: `+=${Math.random() * 5 - 2.5}`, // Slight rotation during fall
            scale: 1, // Set leaf to normal size when it lands
            duration: fallDuration, // Random fall duration
            ease: "power2.out", // Smooth easing
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
  const leaves = Array.from({ length: 20 }); // Create 20 leaves

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {leaves.map((_, index) => (
        <svg
          key={index}
          ref={(el) => (leavesContainerRef.current[index] = el)} // Add each leaf to ref
         width="6%" // Slightly larger leaves for better visibility
          height="auto"
          viewBox="0 0 702 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 1, // Ensure the leaves are behind
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
