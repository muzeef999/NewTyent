"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./shopCategory.css";
import Image from "next/image";

const categories = [
  {
    title: "Above-counter Ionizers",
    desc: "Sleek & modern design, easy-to-install",
    img: "/explore/nmp5-collection.webp",
    link: "/counter-top-water-ionizers",
  },
  {
    title: "Under the counter ionizers",
    desc: "Ultra premium and aesthetically designed",
    img: "/explore/uce13-collection.webp",
    link: "/under-counter-water-ionizers",
  },
  {
    title: "Filters",
    desc: "High-quality replacement filters",
    img: "/home/filter-white.png",
    link: "/0.1-micron-filters",
  },
];

export default function ShopByCategory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const observer = new IntersectionObserver((entries) => {
      const current = entries.find((entry) => entry.intersectionRatio >= 0.65);
      if (current) setActiveIndex(Number(current.target.dataset.index));
    }, { root: container, threshold: 0.65 });

    for (const slide of container.children) observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="container shop-category-wrapper" aria-labelledby="shop-category-title">
      <div className="text-center mb-4">
        <h2 id="shop-category-title" className="fw-bold subtitle-tight">Shop by category</h2>
      </div>
      <div className="category-scroll" ref={scrollRef}>
        {categories.map((item, index) => (
          <div key={item.link} className="category-slide" data-index={index}>
            <Link href={item.link} prefetch={false} className="category-card text-center p-3 p-md-4 d-flex flex-column h-100 text-decoration-none">
              <Image
                src={item.img}
                alt=""
                width={400}
                height={400}
                sizes="(min-width: 1400px) 368px, (min-width: 1200px) 306px, (min-width: 992px) 246px, (min-width: 768px) 166px, (min-width: 576px) 380px, calc(85vw - 80px)"
                quality={70}
                className="category-img mb-3"
              />
              <div className="mt-auto">
                <h3>{item.title}</h3>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="category-dots" aria-hidden="true">
        {categories.map((item, index) => (
          <span key={item.link} className={index === activeIndex ? "dot active" : "dot"} />
        ))}
      </div>
    </section>
  );
}
