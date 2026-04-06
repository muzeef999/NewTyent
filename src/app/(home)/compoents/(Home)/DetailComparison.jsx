"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "./detailComparison_one.css";

const DetailComparison = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      // Calculate the approximate index based on scroll position
      // Mobile pairs are 92vw wide, container width is typically 100vw.
      // Each scroll interval roughly matches clientWidth.
      const slideWidth = container.clientWidth * 0.92;
      const index = Math.round(container.scrollLeft / slideWidth);
      if (index !== activeSlide) {
        setActiveSlide(index);
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "TYENT NMP-5",
      price: 168000,
      generates: "7 Water types",
      plates: 5,
      orp: -850,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp5.png",
      highlight: true,
    },
    {
      id: 2,
      name: "KANGEN Jr4",
      price: 218000,
      generates: "5 Water types",
      plates: 4,
      orp: -450,
      warranty: "3 years on Machine",
      image: "/detailcomparison/jr4.png",
      highlight: false,
    },
    {
      id: 3,
      name: "TYENT NMP-7",
      price: 205000,
      generates: "7 Water types",
      plates: 7,
      orp: -950,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp5.png",
      highlight: true,
    },
    {
      id: 4,
      name: "KANGEN SD501DX",
      price: 278000,
      generates: "5 Water types",
      plates: 7,
      orp: -631,
      warranty: "5 years on Machine",
      image: "/detailcomparison/sd501dx.png",
      highlight: false,
    },
    {
      id: 5,
      name: "TYENT NMP-9",
      price: 238000,
      generates: "7 Water types",
      plates: 9,
      orp: -1050,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp9.png",
      highlight: true,
    },
    {
      id: 6,
      name: "KANGEN K8",
      price: 345000,
      generates: "5 Water types",
      plates: 8,
      orp: -722,
      warranty: "5 years on Machine",
      image: "/detailcomparison/k8.png",
      highlight: false,
    },
    {
      id: 7,
      name: "TYENT NMP-11",
      price: 273000,
      generates: "7 Water types",
      plates: 11,
      orp: -1150,
      warranty: "3 years on Machine & 15 years on plates.",
      image: "/detailcomparison/nmp9.png",
      highlight: true,
    },
    {
      id: 8,
      name: "KANGEN SUPER SD501",
      price: 378000,
      generates: "5 Water types",
      plates: 12,
      orp: -800,
      warranty: "5 years on Machine",
      image: "/detailcomparison/super501.png",
      highlight: false,
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN").format(price);

  // 🔥 STEP 1: Group into PAIRS (2 products each)
  const productPairs = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, i + 2));
  }

  // 🔥 STEP 2: Group pairs into ROWS (2 pairs per row)
  const rows = [];
  for (let i = 0; i < productPairs.length; i += 2) {
    rows.push(productPairs.slice(i, i + 2));
  }

  return (
    <>
      <section 
        className="comparison-section-one"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="comparison-row-one">
            {row.map((pair, pairIndex) => (
              <div key={pairIndex} className="pair-block-one">
                {pair.map((product) => (
                  <div key={product.id} className="compare-card-one">
                    <div className="image-wrapper">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="compare-img"
                      />
                    </div>

                    <h6 className="product-name-one">
                      {product.name}
                    </h6>

                    <ul className="feature-list-one">
                      <li>
                        <span className="left-one">
                          {product.highlight ? (
                            <FaCheckCircle className="icon good-icon" />
                          ) : (
                            <FaTimesCircle className="icon bad-icon" />
                          )}
                          Price
                        </span>
                        <span className="right-one">
                          ₹{formatPrice(product.price)}/-
                        </span>
                      </li>

                      <li>
                        <span className="left-one">
                          {product.highlight ? (
                            <FaCheckCircle className="icon good-icon" />
                          ) : (
                            <FaTimesCircle className="icon bad-icon" />
                          )}
                          Generates
                        </span>
                        <span className="right-one">
                          {product.generates}
                        </span>
                      </li>

                      <li>
                        <span className="left-one">
                          {product.highlight ? (
                            <FaCheckCircle className="icon good-icon" />
                          ) : (
                            <FaTimesCircle className="icon bad-icon" />
                          )}
                          Plates
                        </span>
                        <span className="right-one">
                          {product.plates}
                        </span>
                      </li>

                      <li>
                        <span className="left-one">
                          {product.highlight ? (
                            <FaCheckCircle className="icon good-icon" />
                          ) : (
                            <FaTimesCircle className="icon bad-icon" />
                          )}
                          ORP
                        </span>
                        <span className="right-one">
                          {product.orp}
                        </span>
                      </li>

                      <li>
                        <span className="left-one">
                          {product.highlight ? (
                            <FaCheckCircle className="icon good-icon" />
                          ) : (
                            <FaTimesCircle className="icon bad-icon" />
                          )}
                          Warranty
                        </span>
                        <span className="right-one small-text">
                          {product.warranty}
                        </span>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Carousel Dots for Mobile */}
      <div 
        className="d-flex justify-content-center d-md-none"
        style={{ marginTop: '15px', marginBottom: '15px' }}
      >
        {productPairs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
               if (scrollRef.current) {
                 const slideWidth = scrollRef.current.clientWidth * 0.92 + 12;
                 scrollRef.current.scrollTo({
                   left: slideWidth * idx,
                   behavior: 'smooth'
                 });
                 setActiveSlide(idx);
               }
            }}
            style={{
              width: activeSlide === idx ? '16px' : '6px',
              height: '6px',
              padding: 0,
              border: 'none',
              backgroundColor: activeSlide === idx ? '#443df6' : '#d6d6d6',
              borderRadius: activeSlide === idx ? '3px' : '50%',
              margin: '0 3px',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default DetailComparison;