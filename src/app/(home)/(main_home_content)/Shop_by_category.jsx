"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shopCategory.css";
import Image from "next/image";

const categories = [
  {
    title: "Above-counter Ionizers",
    desc: "Sleek & modern design, easy-to-install",
    img: "/home/nmp-9.png",
    link: "/category/above-counter",
  },
  {
    title: "Under the counter ionizers",
    desc: "Ultra premium and aesthetically designed",
    img: "/home/uce.png",
    link: "/category/under-counter",
  },
  {
    title: "Filters",
    desc: "High-quality replacement filters",
    img: "/home/filter.png",
    link: "/category/filters",
  },
];

const Shop_by_category = () => {
  return (
    <section className="shop-category-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold section-title">Shop by category</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {categories.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <a href={item.link} className="text-decoration-none">
                <div className="category-card text-center p-4">
                  <div  style={{width:'70%'}}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={320}
                      height={140}
                      className="img-fluid category-img"
                      priority={false}
                    />
                  </div>

                  <h5 className="fw-semibold mt-3">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop_by_category;
