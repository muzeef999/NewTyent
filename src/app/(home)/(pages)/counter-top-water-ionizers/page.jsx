// File: pages/counter-top-ionizers.js

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Container } from "react-bootstrap";

import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";

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
        <h1 className="mb-4 text-center" style={{ color: "#008AC7" }}>Counter Top Water Ionizers</h1>

        <p className="text-muted text-center mb-5 fs-5">
          Tyent India's Counter Top Water Ionizers are a fusion of futuristic design and world-class technology. Experience unmatched health benefits with premium-grade alkaline water—right from your kitchen counter.
        </p>

        <h4 className="mb-4" style={{ color: "#008AC7" }}>Explore Our Premium Models</h4>
        {ProductData.map((section, idx) => (
          <div key={idx} className="mb-5">
            <Row className="g-4">
              {section.products.map((product, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Link href={product.link || "#"} passHref legacyBehavior>
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
          <h2 className="mb-3" style={{ color: "#008AC7" }}>Why Choose Tyent Counter Top Ionizers?</h2>
          <p className="fs-5">
            Our ionizers are more than just appliances—they are an investment in a healthier, more vibrant lifestyle. Here's why Tyent stands out:
          </p>
          <ul className="list-unstyled ps-3">
            <li className="mb-3">
              <strong>NMP-5</strong>: Ultra-compact and economical with 5 platinum-coated titanium plates. Ideal for beginners.
            </li>
            <li className="mb-3">
              <strong>NMP-7</strong>: Advanced balance of performance and cost. Delivers a wide pH range and enhanced antioxidant levels.
            </li>
            <li className="mb-3">
              <strong>NMP-9</strong>: Performance powerhouse offering hydrogen-rich water and powerful detox support.
            </li>
            <li className="mb-3">
              <strong>NMP-11</strong>: Flagship model with 11 plates, touchscreen display, and unmatched water output.
            </li>
          </ul>

          <h3 className="mt-4" style={{ color: "#008AC7" }}>Unbeatable Health & Wellness Advantages</h3>
          <ul className="list-unstyled ps-3">
            <li className="mb-2">✔ Boosts hydration with micro-clustered water molecules</li>
            <li className="mb-2">✔ Neutralizes harmful free radicals with strong antioxidants</li>
            <li className="mb-2">✔ Promotes weight management and metabolic health</li>
            <li className="mb-2">✔ Enhances skin clarity and slows aging effects</li>
            <li className="mb-2">✔ Easy to install and maintain on any counter top</li>
            <li className="mb-2">✔ Dual filtration system eliminates 99.9% of contaminants</li>
          </ul>

          <p className="text-muted mt-3 fs-5">
            Designed for modern living, Tyent Counter Top Ionizers fuse sleek aesthetics with medical-grade performance. Elevate your hydration game with the best in the industry.
          </p>

          <p className="mt-4">
            <Link href="/under-counter-ionizers" className="btn" style={{ backgroundColor: "#008AC7", color: "#fff" }}>
              Explore Under Counter Models →
            </Link>
          </p>
        </div>
      </Container>
    </>
  );
}
