"use client";

import { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import ProductCard from "../ProductCard";
import "../collections.css";

import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import hybrid from "@/asserts/Hybrid.webp";
import uce from "@/asserts/Uce.webp";
import soap from "@/asserts/soap/soap.png";
import filterImg from "@/asserts/filter/filter2.webp";
import bottle from "@/asserts/bottle/bottle-500ml.jpg";
import watergen from "@/asserts/watergen/TIE_N20.webp";

const allProducts = [
  {
    title: "NMP-5",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp5,
    link: "/nmp-5",
    badge: "5 Plates",
    category: "Counter Top",
    specs: ["ORP: Up to -850*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1550 PPB*"],
    price: "₹ 1,68,000",
    priceNum: 168000,
  },
  {
    title: "NMP-7",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp5,
    link: "/nmp-7",
    badge: "7 Plates",
    category: "Counter Top",
    specs: ["ORP: Up to -950*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1550 PPB*"],
    price: "₹ 2,05,000",
    priceNum: 205000,
  },
  {
    title: "NMP-9",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-9",
    badge: "9 Plates",
    category: "Counter Top",
    specs: ["ORP: Up to -1050*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 2,38,000",
    priceNum: 238000,
  },
  {
    title: "NMP-11",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-11",
    badge: "11 Plates",
    category: "Counter Top",
    specs: ["ORP: Up to -1150*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 2,72,000",
    priceNum: 272000,
  },
  {
    title: "HYBRID H2",
    subtitle: "Counter Top Twin Cell Hydrogen Water Ionizer",
    image: hybrid,
    link: "/hybrid-h2",
    badge: "Twin Cell",
    category: "Counter Top",
    specs: ["ORP: Up to -1250*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1850 PPB*"],
    price: "₹ 3,67,000",
    priceNum: 367000,
  },
  {
    title: "UCE-9 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-9-plus",
    badge: "9 Plates",
    category: "Under Counter",
    specs: ["ORP: Up to -1050*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,25,000",
    priceNum: 325000,
  },
  {
    title: "UCE-11 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-11-plus",
    badge: "11 Plates",
    category: "Under Counter",
    specs: ["ORP: Up to -1150*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,46,000",
    priceNum: 346000,
  },
  {
    title: "UCE-13 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-13-plus",
    badge: "13 Plates",
    category: "Under Counter",
    specs: ["ORP: Up to -1250*", "pH Range: 2.5 – 11.5*", "Hydrogen: Up to 1800 PPB*"],
    price: "₹ 3,67,000",
    priceNum: 367000,
  },
  // Home Accessories
  {
    title: "TM-X Beauty Soap",
    subtitle: "Disinfection & Sterilization Soap",
    image: soap,
    link: "/soap",
    badge: "Home Accessory",
    category: "Home Accessories",
    specs: ["Weight: 80g", "High grade oil & natural glycerin", "Disinfection & sterilization"],
    price: "₹ 999",
    priceNum: 999,
  },
  {
    title: "Tyent Filter",
    subtitle: "Replacement Filter for Tyent Ionizers",
    image: filterImg,
    link: "/filter-1",
    badge: "Home Accessory",
    category: "Home Accessories",
    specs: [".01 Micron filtration", "NSF & EPA certified", "Dual filtration system"],
    price: "Price on request",
    priceNum: 0,
  },
  {
    title: "Water Bottle",
    subtitle: "Tyent Hydrogen Water Bottle",
    image: bottle,
    link: "/water-bottle-1",
    badge: "Home Accessory",
    category: "Home Accessories",
    specs: ["500ml capacity", "BPA-free material", "Portable design"],
    comingSoon: true,
    priceNum: 0,
  },
  // Industrial Applications
  {
    title: "Sterilizing Water Generator",
    subtitle: "Electrolyzed Sterilizing Water Generator – TIE-N15WR",
    image: watergen,
    link: "/Sterilizing-water-generator",
    badge: "Industrial",
    category: "Industrial",
    specs: ["Electrolyzed sterilizing water", "Commercial & industrial use", "Size: 545(W) × 225(D) × 470(H) mm"],
    price: "₹ 6,49,000",
    priceNum: 649000,
  },
];

const categories = ["All", "Counter Top", "Under Counter", "Home Accessories", "Industrial"];

export default function AllIonizers() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = activeFilter === "All"
      ? [...allProducts]
      : allProducts.filter((p) => p.category === activeFilter);

    if (sortBy === "price-high") {
      result.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.priceNum - b.priceNum);
    }

    return result;
  }, [activeFilter, sortBy]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="collection-breadcrumb-bar">
        <nav className="collection-hero-breadcrumb">
          <Link href="/">Home</Link>
          <span>&gt;</span>
          <Link href="/#products">Products</Link>
          <span>&gt;</span>
          <span>All Ionizers</span>
        </nav>
      </div>

      {/* Hero Banner */}
      <div className="collection-hero-banner">
        <img
          src="/collections-hero.jpg"
          alt="All Ionizers – Hydrogen rich water"
        />
        <div className="collection-hero-overlay" />
        <Container className="collection-hero-content-wrapper">
          <div className="collection-hero-content">
            <div className="collection-hero-badges">
              <span className="collection-badge-sale">Save 33% OFF</span>
              <span className="collection-badge-event">Christmas in July Sale</span>
            </div>
            <h1>All Ionizers</h1>
            <p>Hydrogen rich water, engineered for performance</p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Filter Pills + Sort */}
        <div className="collection-toolbar">
          <div className="filter-pills" style={{ flex: 1 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill${activeFilter === cat ? " active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="sort-wrapper">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="price-high">Price, high to low</option>
              <option value="price-low">Price, low to high</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="collection-grid">
          {filteredProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
