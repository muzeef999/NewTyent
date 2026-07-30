"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [activeColor, setActiveColor] = useState(null);

  const hasColors = product.colorVariants && product.colorVariants.length > 0;
  const currentImage = hasColors && activeColor !== null ? product.colorVariants[activeColor].image : product.image;

  const CardContent = (
    <div className={`product-card${product.comingSoon ? " coming-soon-overlay" : ""}`}>
      <div className="product-card-image">
        <Image
          src={currentImage}
          alt={product.title}
          width={400}
          height={300}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {hasColors && (
        <div className="product-color-swatches">
          {product.colorVariants.map((variant, idx) => (
            <button
              key={idx}
              className={`color-swatch${activeColor === idx ? " active" : ""}`}
              style={{ background: variant.color }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveColor(idx);
              }}
              title={variant.name}
            />
          ))}
        </div>
      )}
      <div className="product-card-body">
        <h3 className="product-card-title">{product.title}</h3>
        {product.subtitle && (
          <p className="product-card-subtitle">{product.subtitle}</p>
        )}
        {product.details && product.details.length > 0 && (
          <div className="product-card-details">
            {product.details.map((detail, idx) => (
              <div key={idx} className="product-card-detail-row">
                <span className="detail-label">{detail.label}</span>
                <span className="detail-value">{detail.value}</span>
              </div>
            ))}
          </div>
        )}
        {product.price && (
          <div className="product-card-price">
            <span className="current-price">{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">{product.originalPrice}</span>
            )}
          </div>
        )}
        <span className="product-card-btn">
          {product.comingSoon ? "Coming Soon" : "Shop now"}
        </span>
      </div>
    </div>
  );

  if (product.comingSoon) {
    return CardContent;
  }

  return (
    <Link href={product.link || "#"} style={{ textDecoration: "none", color: "inherit" }}>
      {CardContent}
    </Link>
  );
}
