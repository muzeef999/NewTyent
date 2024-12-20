"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '@/app/style/WhyTent.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const svgRefs = useRef([]);
  const bigNumberRefs = useRef([]);
  const textRefs = useRef([]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Scroll-triggered SVG Path Animation
    svgRefs.current.forEach((svg, index) => {
      const paths = svg.querySelectorAll("path");
      paths.forEach((path, i) => {
        const length = path.getTotalLength();
        gsap.fromTo(
          path,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 1.5,
            delay: index * 0.3 + i * 0.2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: svg,
              start: "top bottom", // Starts animation when the SVG hits the bottom of the viewport
              end: "top top", // Ends when the SVG is at the top of the viewport
              scrub: true, // Allows smooth scrubbing (scrolling) animation
            },
          }
        );
      });
    });

    // Scroll-triggered Big Number Animation
    bigNumberRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });

    // Scroll-triggered Slide-In Text Animation
    textRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={item.id}>
          {/* SVG Animation */}
          <svg
            ref={(el) => (svgRefs.current[index] = el)}
            width="100%"
            height="auto"
            viewBox="0 0 1919 292"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0_230_20" maskUnits="userSpaceOnUse" x="0" y="0" width="1919" height="292">
              <rect width="1919" height="292" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_230_20)">
              <path d="M952 89.5003C465.5 56.6539 179.5 155.059 1 282V994.5H1919V125.5C1759.5 189.5 1321 114.414 952 89.5003Z" fill={item.color1} />
              <path d="M972 -738C345.5 -775.5 129.5 -721.105 0 -588.381V252.5C152.333 150.237 405.5 22 972 67.5C1424.07 103.809 1804.33 157.049 1921 92.5V-789C1769 -669 1365 -714.476 972 -738Z" fill={item.color2} />
            </g>
          </svg>

          {/* Content Section */}
          <div className="container-fluid" style={{ backgroundColor: item.color1 }}>
            <div className="container">
              <Row>
                <Col md={6}>
                  {/* Big Number Animation */}
                  <h1 ref={(el) => (bigNumberRefs.current[index] = el)} className="big-number">
                    {item.id}
                  </h1>
                  <h3 style={{ fontWeight: 600 }}>{item.heading}</h3>

                  {/* Slide-In Text */}
                  <p
                    ref={(el) => (textRefs.current[index] = el)}
                    style={{
                      fontWeight: 400,
                      fontSize: "20px",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: isExpanded ? "none" : "5", // Limit lines to 5 or show all
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.description}
                  </p>
                  <button
                    onClick={toggleExpand}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#007bff",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </Col>
                <Col md={6}></Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FeatureCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      color1: PropTypes.string.isRequired,
      color2: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeatureCard;
