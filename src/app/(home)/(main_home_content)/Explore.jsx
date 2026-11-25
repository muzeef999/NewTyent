import React from "react";
import Image from "next/image";
import "./explore.css";
import Link from "next/link";


const products = [
  {
    name: "Tyent NMP-7",
    img: "/explore/nmp5-collection.webp",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -950*",
    hydrogen: "Hydrogen range: Up to 1550 PPB*",
    warrenty: "Warranty: 3 years on machine & 15 years on plates/electrodes",
    link: "/nmp-7",
  },
  {
    name: "Tyent NMP-11",
    img: "/explore/nmp9-collection.webp",
    desc: "Advanced top end water ionizer",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1150*",
    hydrogen: "Hydrogen range:  Up to 1800 PPB*",
    warrenty: "Warranty: 3 years on machine & 15 years on plates/electrodes",
    link: "/nmp-11",
  },
  {
    name: "Tyent UCE-13 PLUS",
    img: "/explore/uce13-collection.webp",
    desc: "Revolutionary water ionizer for modern kitchens",
    ph: "pH range: 11.5 - 2.5*",
    orp: "ORP range: upto -1250*",
    hydrogen: "Hydrogen range: Up to 1800 PPB*",
    warrenty: "Warranty: 3 years on machine & 15 years on plates/electrodes",
    link: "/uce-13-plus",
  },
];

const Explore = () => {
  return (
    <div className="container">
      <div className="text-center">
        <p className="bg-heading-text-two-main">Explore</p>
        <h2 className="fw-bold subtitle-tight">our best selling products</h2>
      </div>
      <div className="row g-5">
        {products.map((item) => (
          <div key={item.link} className="col-12 col-md-6 col-lg-4">
            <div className="product-card">
              {/* Product Image */}
              <Link prefetch={false} href={item.link} style={{ cursor: 'pointer', textDecoration: 'none', color: '#000' }}>
                <div className="product-img-wrapper">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="product-img"
                    style={{ objectFit: "cover", width: "100%", height: "300px" }}
                  />
                </div>

                {/* Product Info */}
                <h3 className="h5 fw-bold mt-3">{item.name}</h3>

                {/* Stars */}
                <div className="rating mb-2">
                  ⭐⭐⭐⭐⭐ <span className="text-muted">19 reviews</span>
                </div>

                <p className="text-muted">{item.desc}</p>

                <div className="specs">
                  <p>{item.ph}</p>
                  <p>{item.orp}</p>
                  <p>{item.hydrogen}</p>
                  <p>{item.warrenty}</p>
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
