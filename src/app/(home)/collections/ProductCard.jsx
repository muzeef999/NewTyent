import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const CardContent = (
    <div className={`product-card${product.comingSoon ? " coming-soon-overlay" : ""}`}>
      <div className="product-card-image">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={220}
          style={{ objectFit: "contain", maxHeight: "220px", width: "auto" }}
        />
      </div>
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
