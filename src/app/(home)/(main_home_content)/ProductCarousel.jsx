"use client";
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sectionStyle = {
    backgroundColor: "#f4f7fc",
    padding: "56px 0 72px",
};

const contentWrapStyle = {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "0 16px",
};

const slideStyle = {
    padding: "8px 0",
};

const rowStyle = {
    minHeight: "560px",
};

const contentStyle = {
    paddingRight: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
};

const modelListStyle = {
    display: "flex",
    flexWrap: "wrap",
    rowGap: "8px",
};

const modelLinkStyle = {
    color: "#0066cc",
    fontWeight: "600",
    fontSize: "0.95rem",
    textDecoration: "none",
};

const modelRoutes = {
    "Tyent NMP-5": "/nmp-5",
    "Tyent NMP-7": "/nmp-7",
    "Tyent NMP-9": "/nmp-9",
    "Tyent NMP-11": "/nmp-11",
    "Tyent UCE-9 Plus": "/uce-9-plus",
    "Tyent UCE-11 Plus": "/uce-11-plus",
    "Tyent UCE-13 Plus": "/uce-13-plus",
    "Tyent H2 Hybrid": "/hybrid-h2",
};

const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "15px",
};

const statCardStyle = {
    minHeight: "92px",
    padding: "6px 0",
    borderRight: "1px solid #d7dce5",
};

const statCardLastStyle = {
    ...statCardStyle,
    borderRight: "none",
};

const imageWrapStyle = {
    minHeight: "560px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
};

const buttonStyle = {
    borderRadius: "30px",
    padding: "10px 30px",
    fontWeight: "600",
    backgroundColor: "#0d6efd",
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "1rem",
    width: "fit-content",
};

const ProductCarousel = () => {
    const products = [
        {
            id: 1,
            series: "Tyent NMP Series",
            title: "Sleek design meets powerful water performance",
            description: "The Tyent NMP Series seamlessly blends cutting-edge design with advanced performance, making it the perfect premium upgrade for modern kitchens.",
            models: ["Tyent NMP-5", "Tyent NMP-7", "Tyent NMP-9", "Tyent NMP-11"],
            ph: "11.5 - 2.5*",
            orp: "1250*",
            hydrogen: "upto 1800ppb*",
            image: "/home/nmp-9.png",
            buttonText: "Shop Now"
        },
        {
            id: 2,
            series: "Tyent UCE",
            title: "Under-Counter Elegance and Power",
            description: "The Tyent UCE Series delivers unparalleled performance hidden beneath your counter, saving space while providing the purest alkaline water.",
            models: ["Tyent UCE-9 Plus","Tyent UCE-11 Plus", "Tyent UCE-13 Plus"],
            ph: "11.5 - 2.0*",
            orp: "1250*",
            hydrogen: "upto 1800ppb*",
            image: "/home/ucebg.png",
            buttonText: "Shop Now"
        },
        {
            id: 3,
            series: "Tyent H2 Hybrid",
            title: "The Future of Hydrogen Water",
            description: "Tyent's H2-Hybrid has Japanese patented Twin Cell Technology delivers advanced water ionization, producing high levels of molecular hydrogen and antioxidants, enhancing hydration with optimal purity and health benefits, Molecular hydrogen upto 1850 PPB,-ORP up to-1250*, and superior micro clustering. Includes 15-year warranty, 45+ years lifespan",
            models: ["Tyent H2 Hybrid"],
            ph: "10.5 - 3.5*",
            orp: "1150*",
            hydrogen: "upto 1600ppb*",
            image: "/home/our-story.png",
            buttonText: "Shop Now"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div style={sectionStyle}>
            <div className="container" style={contentWrapStyle}>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} style={slideStyle}>
                            <div className="row align-items-center gy-4 product-carousel-row" style={rowStyle}>
                                <div className="col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
                                    <div className="product-carousel-content" style={contentStyle}>
                                        <h6 style={{ fontWeight: "700", marginBottom: "15px", color: "#333", fontSize: "1.1rem" }}>
                                            {product.series}
                                        </h6>
                                        <h2 style={{ fontSize: "2.8rem", fontWeight: "400", marginBottom: "20px", color: "#111", lineHeight: "1.2" }}>
                                            {product.title}
                                        </h2>
                                        <p style={{ color: "#555", marginBottom: "30px", fontSize: "1rem", lineHeight: "1.6" }}>
                                            {product.description}
                                        </p>

                                        <div style={{ marginBottom: "25px" }}>
                                            <h6 style={{ fontWeight: "bold", marginBottom: "10px", color: "#222" }}>Available models</h6>
                                            <div className="model-list" style={modelListStyle}>
                                                {product.models.map((model, idx) => (
                                                    <span key={idx}>
                                                        <Link href={modelRoutes[model] || "#"} style={modelLinkStyle}>
                                                            {model}
                                                        </Link>
                                                        {idx < product.models.length - 1 && <span style={{ color: "#999", margin: "0 8px" }}>|</span>}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="product-carousel-stats" style={statsGridStyle}>
                                            <div className="product-carousel-stat" style={statCardStyle}>
                                                <h3 style={{ fontWeight: "700", marginBottom: "0", color: "#111", fontSize: "1.8rem" }}>{product.ph}</h3>
                                                <p style={{ color: "#555", fontSize: "0.9rem", margin: "0" }}>pH range</p>
                                            </div>
                                            <div className="product-carousel-stat" style={statCardStyle}>
                                                <h3 style={{ fontWeight: "700", marginBottom: "0", color: "#111", fontSize: "1.8rem" }}>{product.orp}</h3>
                                                <p style={{ color: "#555", fontSize: "0.9rem", margin: "0" }}>ORP range</p>
                                            </div>
                                            <div className="product-carousel-stat product-carousel-stat-last" style={statCardLastStyle}>
                                                <h3 style={{ fontWeight: "700", marginBottom: "0", color: "#111", fontSize: "1.8rem" }}>
                                                    <span style={{ fontSize: "1rem", fontWeight: "500", marginRight: "3px" }}>upto</span>
                                                    {product.hydrogen.replace('upto ', '')}
                                                </h3>
                                                <p style={{ color: "#555", fontSize: "0.9rem", margin: "0" }}>Molecular hydrogen</p>
                                            </div>
                                        </div>

                                        <p style={{ fontSize: "0.65rem", color: "#777", marginBottom: "30px", marginTop: "10px" }}>
                                            *Depends on input water quality and flow rate.
                                        </p>

                                        <button
                                            className="btn btn-primary"
                                            style={buttonStyle}
                                        >
                                            {product.buttonText} <span>{">"}</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-6 text-center order-1 order-lg-2">
                                    <div className="product-carousel-image" style={imageWrapStyle}>
                                        <Image
                                            src={product.image}
                                            alt={product.series}
                                            width={620}
                                            height={620}
                                            style={{ width: "100%", maxWidth: "620px", height: "auto", objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li {
          margin: 0 4px;
        }
        .slick-dots li button:before {
          font-size: 14px;
          color: #ccc;
          opacity: 1;
        }
        .slick-dots li.slick-active button:before {
          color: #0d6efd;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .product-carousel-content h2 {
            font-size: 2.4rem !important;
          }
        }

        @media (max-width: 991px) {
          .product-carousel-row {
            min-height: auto !important;
            background: #ffffff;
            border-radius: 20px;
            padding: 24px 16px !important;
            margin: 0 10px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.03);
          }
          .product-carousel-content {
            padding-right: 0 !important;
            text-align: center;
            align-items: center;
            padding-bottom: 10px;
          }
          .product-carousel-content h2 {
            font-size: 2.2rem !important;
          }
          .product-carousel-image {
            min-height: 350px !important;
            padding: 10px !important;
          }
          .product-carousel-stats {
            justify-content: center;
            width: 100%;
          }
           .product-carousel-content .model-list {
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          .product-carousel-row {
            padding: 20px 12px !important;
            margin: 0 5px !important;
          }
          .product-carousel-content h2 {
            font-size: 24px !important;
            margin-bottom: 15px !important;
          }
          .product-carousel-content p {
            font-size: 0.95rem !important;
            margin-bottom: 20px !important;
          }
          .product-carousel-stats {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
            margin-bottom: 10px !important;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
          }
          .product-carousel-stat {
            border-right: none !important;
            border-bottom: 1px solid #d7dce5;
            min-height: auto !important;
            padding: 10px 0 !important;
            text-align: center;
          }
          .product-carousel-stat h3 {
            font-size: 1.5rem !important;
          }
          .product-carousel-stat-last {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
          .product-carousel-image {
            min-height: 280px !important;
            padding: 0 !important;
          }
          .product-carousel-content .btn {
            width: 100%;
            justify-content: center;
            max-width: 280px;
          }
          .slick-dots {
            bottom: -30px;
          }
          .slick-dots li {
            margin: 0 2px;
          }
          .slick-dots li button:before {
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
           .product-carousel-content h2 {
            font-size: 24px !important;
          }
           .product-carousel-image {
            min-height: 250px !important;
          }
          .slick-dots li button:before {
            font-size: 8px;
          }
        }
      `}</style>
        </div>
    );
};

export default ProductCarousel;
