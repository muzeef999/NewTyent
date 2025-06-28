// File: pages/counter-top-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";

import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import hybrid from "@/asserts/Hybrid.webp";

export const metadata = {
  title: "Counter Top Water Ionizers | Tyent India",
  description:
    "Explore Tyent India's premium range of counter top water ionizers including NMP-5, NMP-7, NMP-9, and NMP-11. Improve your lifestyle with antioxidant-rich alkaline water.",
  keywords:
    "Counter Top Water Ionizers, Tyent NMP-5, NMP-7, NMP-9, NMP-11, Alkaline Water, Hydrogen Water, Water Purifier India, Healthy Lifestyle, Ionized Water, Antioxidant Water",
};

export default function CounterTopIonizers() {
  const ProductData = [
    {
      category: "Models",
      products: [
        {
          title: "NMP-5",
          image: nmp5,
          link: "/nmp-5",
        },
        {
          title: "NMP-7",
          image: nmp5,
          link: "/nmp-7",
        },
        {
          title: "NMP-9",
          image: nmp9,
          link: "/nmp-9",
        },
        {
          title: "NMP-11",
          image: nmp9,
          link: "/nmp-11",
        },
        {
          title: "HYBRID-H2",
          image: hybrid,
          link: "/hybrid-h2",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <Container className="py-5">
        <h1 className="mb-4 text-center" style={{ color: "#008AC7" }}>
          Counter Top Water Ionizer's
        </h1>

        <p className="text-muted text-center mb-5 fs-5">
          Tyent’s Countertop Water Ionizers combine premium USFDA-certified
          materials, cutting-edge Japanese technology, and a sleek, modern
          design. Enjoy superior health benefits with every sip of hydrogen-rich
          alkaline water - while adding an elegant aesthetic to your kitchen and
          a complete health and wellness shield for your entire family.
        </p>

        <h4 className="mb-4" style={{ color: "#008AC7" }}>
          Explore Our Premium Models
        </h4>


<div className="container my-5">
  {ProductData.map((section, idx) => {
    const firstRow = section.products.slice(0, 3);
    const secondRow = section.products.slice(3, 5);

    return (
      <div key={idx}>
        {/* First Row – 3 items */}
        <div className="row justify-content-center g-4 mb-4">
          {firstRow.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <Link href={product.link || "#"} passHref legacyBehavior>
                <a className="text-decoration-none w-100">
                  <div >
                    {/* Image */}
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ height: "260px", overflow: "hidden", borderRadius:'40px' }}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: "100%", objectFit: "contain", borderRadius:'40px' }}
                      />
                    </div>
                    {/* Title */}
                    <div className="card-body text-center">
                      <h6 className="card-title mt-2 text-dark fw-semibold mb-0">
                        {product.title}
                      </h6>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* Second Row – 2 items centered */}
        <div className="row justify-content-center g-4">
          {secondRow.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <Link href={product.link || "#"} passHref legacyBehavior>
                <a className="text-decoration-none w-100">
                  <div>
                    {/* Image */}
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ height: "260px", overflow: "hidden" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ maxHeight: "100%", objectFit: "contain" }}
                      />
                    </div>
                    {/* Title */}
                    <div className="card-body text-center">
                      <h6 className="card-title text-dark mt-2 fw-semibold mb-0">
                        {product.title}
                      </h6>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  })}
</div>



        <ul className="list-disc pl-6 text-gray-700 text-[16px] leading-relaxed space-y-2">
          <li className="mb-2">Quick & Hassle-Free Installation.</li>
          <li className="mb-2">User-Friendly Operation</li>
          <li className="mb-2">Wall-Mountable Design</li>
          <li className="mb-2">Sleek & Stylish Aesthetic</li>
          <li className="mb-2">Longest One Touch Display</li>
          <li className="mb-2">Easy to replace filter's </li>
        </ul>

        <div className="mt-5">
          <h2 className="mb-3" style={{ color: "#008AC7" }}>
            Why Choose Tyent Counter Top Ionizers?
          </h2>
          <p className="fs-5">
            Our ionizers are more than just appliances—they are an investment in
            a healthier, more vibrant lifestyle. Here's why Tyent stands out:
          </p>
          <ul className="list-unstyled ps-3">
            <li className="mb-3">
              <strong>NMP-5</strong>: Ultra-compact and economical with 5
              platinum-coated titanium plates. Ideal for beginners.
            </li>
            <li className="mb-3">
              <strong>NMP-7</strong>: Advanced balance of performance and cost.
              Delivers a wide pH range and enhanced antioxidant levels.
            </li>
            <li className="mb-3">
              <strong>NMP-9</strong>: Performance powerhouse offering
              hydrogen-rich water and powerful detox support.
            </li>
            <li className="mb-3">
              <strong>NMP-11</strong>: Flagship model with 11 plates,
              touchscreen display, and unmatched water output.
            </li>
          </ul>

          <p className="text-muted mt-3 fs-5">
            Designed for modern living, Tyent Counter Top Ionizers fuse sleek
            aesthetics with medical-grade performance. Elevate your hydration
            game with the best in the industry.
          </p>

          <p className="mt-4">
            <Link
              href="/under-counter-water-ionizers"
              className="btn"
              style={{ backgroundColor: "#008AC7", color: "#fff" }}
            >
              Explore Under Counter Models →
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
