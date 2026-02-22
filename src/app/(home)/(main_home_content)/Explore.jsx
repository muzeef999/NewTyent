"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./explore.css";

const products = [
  {
    name: "Tyent NMP-7",
    img: "/explore/nmp-5.png",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -950*",
    hydrogen: "Hydrogen range: upto -1600 PPB*",
  },
  {
    name: "Tyent NMP-11",
    img: "/home/nmp-9.png",
    desc: "Unlock precision hydration with advanced Hybrid Water Cell Technology",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1150*",
    hydrogen: "Hydrogen range: upto -1800 PPB*",
  },
  {
    name: "Tyent UCE-13 PLUS",
    img: "/explore/uceColor.jpeg",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1250*",
    hydrogen: "Hydrogen range: upto -1800 PPB*",
  },
];

const Explore = () => {
  return (
    <div className="container">
      <center>
        <h2 className="bg-heading-text">Explore</h2>
        <p
          style={{ fontSize: "20px", marginTop: "-20px" }}
          className="fw-semibold"
        >
          Advanced Health Protection with Doorstep Installation & Service
        </p>
      </center>
      <div className="row g-5">
        {products.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="product-card">
              {/* Product Image */}
              <div className="product-img-wrapper">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={350}
                  height={300}
                  className="product-img"
                />
              </div>

              {/* Product Info */}
              <h5 className="fw-bold mt-3">{item.name}</h5>

              {/* Stars */}
              <div className="rating mb-2">
                ⭐⭐⭐⭐⭐ <span className="text-muted">19 reviews</span>
              </div>

              <p className="text-muted">{item.desc}</p>

              <div className="specs">
                <p>{item.ph}</p>
                <p>{item.orp}</p>
                <p>{item.hydrogen}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
