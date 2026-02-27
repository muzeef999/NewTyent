"use client";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./explore.css";
import Link from "next/link";
import "@/app/style/AppBar.css"


const products = [
  {
    name: "Tyent NMP-7",
    img: "/explore/nmp-5.png",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -950*",
    hydrogen: "Hydrogen range: upto -1600 PPB*",
    link: "/nmp-7",
  },
  {
    name: "Tyent NMP-11",
    img: "/home/nmp-9.png",
    desc: "Unlock precision hydration with advanced Hybrid Water Cell Technology",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1150*",
    hydrogen: "Hydrogen range: upto -1800 PPB*",
    link: "/nmp-11",
  },
  {
    name: "Tyent UCE-13 PLUS",
    img: "/explore/uceColor.jpeg",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1250*",
    hydrogen: "Hydrogen range: upto -1800 PPB*",
    link: "/uce-13-plus",
  },
];

const Explore = () => {
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="bg-heading-text-two-main">Explore</h1>
        <h3 className="fw-bold subtitle-tight">our best selling products</h3>
      </div>
      <div className="row g-5">
        {products.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="product-card" href={item.link}>
              {/* Product Image */}
              <Link href={item.link} style={{cursor:'pointer', textDecoration:'none', color:'#000'}}>
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
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
