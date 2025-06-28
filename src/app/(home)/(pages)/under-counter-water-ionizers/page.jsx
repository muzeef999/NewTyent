// File: pages/under-counter-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import uce from "@/asserts/Uce.webp";
import { Col, Row, Container } from "react-bootstrap";

export const metadata = {
  title: "Under Counter Water Ionizers | Tyent India",
  description:
    "Discover Tyent India's premium range of under counter water ionizers like UCE-9 Plus, UCE-11 Plus, and UCE-13 Plus. Advanced technology meets space-saving design for a healthier lifestyle.",
  keywords:
    "Under Counter Water Ionizers, Tyent UCE-9 Plus, Tyent UCE-11 Plus, Tyent UCE-13 Plus, Alkaline Water, Hydrogen Water, Ionized Water India, Healthy Drinking Water, Kitchen Water Filter",
};

export default function UnderCounterIonizers() {
  const ProductData = [
    {
      category: "Models",
      products: [
        {
          title: "Tyent UCE-9 Plus",
          image: uce,
          link: "/uce-9",
        },
        {
          title: "Tyent UCE-11 Plus",
          image: uce,
          link: "/uce-11",
        },
        {
          title: "Tyent UCE-13 Plus",
          image: uce,
          link: "/uce-13",
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
          Under the Counter Water Ionizer’s
        </h1>

        <p className="text-muted text-center mb-5 fs-5">
          Tyent’s Under-the-Counter Water Ionizers deliver unmatched
          convenience, advanced Japanese technology, and USFDA-certified quality
          - all tucked neatly beneath your counter. Experience the same powerful
          hydrogen-rich alkaline water in a space-saving, clutter-free design.
          Perfect for high end premium modern kitchens, this system ensures
          complete wellness for your entire family without compromising on style
          or space.
        </p>

        <h4 className="mb-4" style={{ color: "#008AC7" }}>
          Our Premium Under Counter Ionizers
        </h4>

        {ProductData.map((section, idx) => (
          <div key={idx} className="mb-5">
            <Row className="g-4">
              {section.products.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4}>
                  <Link href={product.link} passHref legacyBehavior>
                    <a className="text-decoration-none">
                      <div className="card h-100 shadow-sm border-0 rounded-4 transition-all hover-shadow">
                        {/* Image */}
                        <div
                          className="bg-light d-flex align-items-center justify-content-center"
                          style={{
                            borderTopLeftRadius: "1rem",
                            borderTopRightRadius: "1rem",
                          }}
                        >
                          <Image
                            src={product.image}
                            alt={product.title}
                            className="img-fluid "
                            style={{
                              borderTopLeftRadius: "1rem",
                              borderTopRightRadius: "1rem",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        {/* Title */}
                        <div className="card-body text-center">
                          <h6 className="fw-semibold text-dark mb-0">
                            {product.title}
                          </h6>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}

        <ul className="list-disc pl-6 text-gray-700 text-[16px] leading-relaxed space-y-2">
          <li>Space-Saving Under-the-Counter Design</li>
          <li>Seamless & Hassle-Free Installation</li>
          <li>Premium Touch Display Faucet for Easy Operation</li>
          <li>Advanced Dual Filtration System</li>
          <li>Jogdail for easy operation</li>
          <li>Best design award 2023,24 winner</li>
        </ul>

        <div className="mt-5">
          <h2 className="mb-3" style={{ color: "#008AC7" }}>
            Why Choose Tyent Under Counter Ionizers?
          </h2>
          <ul className="list-unstyled ps-3">
            <li className="mb-2">
              ✅ <strong>Tyent UCE-9 Plus:</strong> Efficient, entry-level under
              sink solution.
            </li>
            <li className="mb-2">
              ✅ <strong>Tyent UCE-11 Plus:</strong> Advanced filtration and
              hydrogen production.
            </li>
            <li className="mb-2">
              ✅ <strong>Tyent UCE-13 Plus:</strong> Flagship model with
              superior power, design, and touchscreen features.
            </li>
          </ul>

          <p className="text-muted mt-3 fs-5">
            Perfect for modern homes, health-focused families, and those who
            demand performance and aesthetics.
          </p>

          <p className="mt-4">
            <Link
              href="/counter-top-water-ionizers"
              className="btn"
              style={{ backgroundColor: "#008AC7", color: "#fff" }}
            >
              View Counter Top Ionizers →
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
