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
          Under Counter Water Ionizers
        </h1>

        <p className="text-muted text-center mb-5 fs-5">
          Explore Tyent India's latest under counter water ionizers — a perfect
          blend of performance and elegance. Stay hydrated with hydrogen-rich
          alkaline water, all from a compact unit hidden beneath your kitchen counter.
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
                      <div className="border p-3 rounded shadow-sm h-100">
                        <Image
                          src={product.image}
                          alt={product.title}
                          className="img-fluid mb-3 rounded"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <h6 className="text-dark text-center">{product.title}</h6>
                      </div>
                    </a>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        ))}

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
              ✅ <strong>Tyent UCE-13 Plus:</strong> Flagship model with superior
              power, design, and touchscreen features.
            </li>
          </ul>

          <h3 className="mt-4" style={{ color: "#008AC7" }}>
            Benefits at a Glance
          </h3>
          <ul className="list-unstyled ps-3">
            <li>✔ Save counter space with sleek under sink design</li>
            <li>✔ Touchscreen faucet for intuitive control</li>
            <li>✔ Filters 99.9% of contaminants</li>
            <li>✔ High antioxidant and hydrogen-rich water</li>
            <li>✔ Boosts energy, metabolism, and detoxification</li>
          </ul>

          <p className="text-muted mt-3 fs-5">
            Perfect for modern homes, health-focused families, and those who
            demand performance and aesthetics.
          </p>

          <p className="mt-4">
            <Link href="/counter-top-ionizers" className="btn" style={{ backgroundColor: "#008AC7", color: "#fff" }}>
              View Counter Top Ionizers →
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
