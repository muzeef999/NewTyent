"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shopCategory.css";
import Image from "next/image";
import "@/app/style/AppBar.css"



const categories = [
  {
    title: "Above-counter Ionizers",
    desc: "Sleek & modern design, easy-to-install",
    img: "/home/nmp-9.png",
    link: "/counter-top-water-ionizers",
  },
  {
    title: "Under the counter ionizers",
    desc: "Ultra premium and aesthetically designed",
    img: "/explore/uceColor.jpeg",
    link: "/under-counter-water-ionizers",
  },
  {
    title: "Filters",
    desc: "High-quality replacement filters",
    img: "/home/filter.png",
    link: "/0.1-micron-filters",
  },
];

const Shop_by_category = () => {
  return (
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold subtitle-tight">Shop by category</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {categories.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <a href={item.link} className="text-decoration-none">
                <div className="category-card text-center p-4">
                  <div  style={{width:'70%'}} className="mx-auto">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={140}
                      className="img-fluid category-img"
                      priority={false}
                    />
                  </div>

                  <h5 style={{color:'#000', fontWeight:600}}>{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
   
  );
};

export default Shop_by_category;
