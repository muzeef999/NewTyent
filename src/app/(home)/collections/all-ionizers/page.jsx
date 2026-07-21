"use client";

import { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import ProductCard from "../ProductCard";
import "../collections.css";

import nmp5 from "@/asserts/nmp5-collection.webp";
import nmp9 from "@/asserts/nmp9-collection.webp";
import hybrid from "@/asserts/hybrid-collection.webp";
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
    category: "Counter Top",
    details: [
      { label: "Electrode/Plates", value: "5" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -850*" },
      { label: "Hydrogen Range", value: "Up to 1550 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 1,68,000",
    priceNum: 168000,
  },
  {
    title: "NMP-7",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp5,
    link: "/nmp-7",
    category: "Counter Top",
    details: [
      { label: "Electrode/Plates", value: "7" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -950*" },
      { label: "Hydrogen Range", value: "Up to 1550 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 2,05,000",
    priceNum: 205000,
  },
  {
    title: "NMP-9",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-9",
    category: "Counter Top",
    details: [
      { label: "Electrode/Plates", value: "9" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1050*" },
      { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 2,38,000",
    priceNum: 238000,
  },
  {
    title: "NMP-11",
    subtitle: "Counter Top Hydrogen Rich Alkaline Water Ionizer",
    image: nmp9,
    link: "/nmp-11",
    category: "Counter Top",
    details: [
      { label: "Electrode/Plates", value: "11" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1150*" },
      { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 2,72,000",
    priceNum: 272000,
  },
  {
    title: "HYBRID H2",
    subtitle: "Counter Top Twin Cell Hydrogen Water Ionizer",
    image: hybrid,
    link: "/hybrid-h2",
    category: "Counter Top",
    details: [
      { label: "Electrode Type", value: "Twin Cell Technology" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1250*" },
      { label: "Hydrogen Range", value: "Up to 1850 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 3,67,000",
    priceNum: 367000,
  },
  {
    title: "UCE-9 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-9-plus",
    category: "Under Counter",
    details: [
      { label: "Electrode/Plates", value: "9" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1050*" },
      { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 3,25,000",
    priceNum: 325000,
  },
  {
    title: "UCE-11 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-11-plus",
    category: "Under Counter",
    details: [
      { label: "Electrode/Plates", value: "11" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1150*" },
      { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 3,46,000",
    priceNum: 346000,
  },
  {
    title: "UCE-13 Plus",
    subtitle: "Under Counter Hydrogen Rich Alkaline Water Ionizer",
    image: uce,
    link: "/uce-13-plus",
    category: "Under Counter",
    details: [
      { label: "Electrode/Plates", value: "13" },
      { label: "pH Range", value: "2.5 - 11.5*" },
      { label: "ORP Range", value: "Up to -1250*" },
      { label: "Hydrogen Range", value: "Up to 1800 PPB*" },
      { label: "Generates", value: "7 types of water levels" },
      { label: "Warranty", value: "3 Years on ionizer & 15 years on electrodes/plates*" },
    ],
    price: "₹ 3,67,000",
    priceNum: 367000,
  },
  // Home Accessories
  {
    title: "TM-X Beauty Soap",
    subtitle: "Disinfection & Sterilization Soap",
    image: soap,
    link: "/soap",
    category: "Home Accessories",
    details: [
      { label: "Weight", value: "80g" },
      { label: "Ingredients", value: "High grade oil & natural glycerin" },
      { label: "Use", value: "Disinfection & sterilization" },
    ],
    price: "₹ 999",
    priceNum: 999,
  },
  {
    title: "Tyent Filter",
    subtitle: "Replacement Filter for Tyent Ionizers",
    image: filterImg,
    link: "/filter-1",
    category: "Home Accessories",
    details: [
      { label: "Filtration", value: ".01 Micron" },
      { label: "Certification", value: "NSF & EPA certified" },
      { label: "System", value: "Dual filtration" },
    ],
    price: "Price on request",
    priceNum: 0,
  },
  {
    title: "Water Bottle",
    subtitle: "Tyent Hydrogen Water Bottle",
    image: bottle,
    link: "/water-bottle-1",
    category: "Home Accessories",
    details: [
      { label: "Capacity", value: "500ml" },
      { label: "Material", value: "BPA-free" },
      { label: "Design", value: "Portable" },
    ],
    comingSoon: true,
    priceNum: 0,
  },
  // Industrial Applications
  {
    title: "Sterilizing Water Generator",
    subtitle: "Electrolyzed Sterilizing Water Generator – TIE-N15WR",
    image: watergen,
    link: "/Sterilizing-water-generator",
    category: "Industrial",
    details: [
      { label: "Type", value: "Electrolyzed sterilizing water" },
      { label: "Use", value: "Commercial & industrial" },
      { label: "Size", value: "545(W) × 225(D) × 470(H) mm" },
    ],
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
          src="/collections-banner-desktop.webp"
          alt="All Ionizers – Tyent India"
          className="collection-banner-desktop"
        />
        <img
          src="/collections-banner-mobile.webp"
          alt="All Ionizers – Tyent India"
          className="collection-banner-mobile"
        />
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
