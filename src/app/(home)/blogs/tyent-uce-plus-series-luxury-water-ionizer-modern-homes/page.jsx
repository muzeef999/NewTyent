import { formatDistanceToNow } from "date-fns";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import AuthorCard from "../[slug]/AuthorCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in";

export const metadata = {
  title: "Tyent UCE-PLUS Series | Luxury Water Ionizer for Homes",
  description:
    "Discover why the Tyent UCE-PLUS Series is the ultimate luxury upgrade for modern homes with award-winning design, advanced water ionization, and space-saving installation.",
  keywords:
    "Tyent UCE-PLUS, under counter water ionizer, under sink alkaline water ionizer, luxury water ionizer India, best premium under sink ionizer, UCE-9 Plus, UCE-11 Plus, UCE-13 Plus",
  openGraph: {
    title: "Tyent UCE-PLUS Series | Luxury Water Ionizer for Homes",
    description:
      "Discover why the Tyent UCE-PLUS Series is the ultimate luxury upgrade for modern homes with award-winning design, advanced water ionization, and space-saving installation.",
    images: "/blog-uce-plus-luxury.webp",
  },
};

const postDate = "2026-08-01T00:00:00.000Z";

export default async function BlogPost() {
  let recentBlogs = [];
  try {
    const recentRes = await fetch(`${apiUrl}/api/blog?limit=5`);
    if (recentRes.ok) {
      recentBlogs = await recentRes.json();
    }
  } catch (e) {}

  const formattedTime = formatDistanceToNow(new Date(postDate), {
    addSuffix: true,
  });

  return (
    <div className="container py-4" style={{ overflowX: "hidden" }}>
      <Row>
        <Col md={8} className="mb-4" style={{ overflowX: "hidden" }}>
          <img
            src="/blog-uce-plus-luxury.webp"
            alt="Why the Tyent UCE-PLUS Series Is Becoming the Ultimate Luxury Upgrade for Modern Homes"
            className="w-100 rounded-3 mb-3"
          />

          <div className="text-muted d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0">
              <strong>By:</strong> Tyent India
            </p>
            <p className="mb-0">{formattedTime}</p>
          </div>

          <div className="mt-4">
            <h1 className="fw-bold mb-4" style={{ fontSize: "28px" }}>
              Why the Tyent UCE-PLUS Series Is Becoming the Ultimate Luxury Upgrade for Modern Homes
            </h1>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Introduction
            </h2>
            <p>
              Minimalism is a must-have in modern architecture, but it should not sacrifice health and functionality. Modern homeowners value streamlined, uncluttered kitchens with state-of-the-art technology. An under-sink alkaline water ionizer precisely fills this gap, changing the way modern families experience hydration and raising the luxury interior d&eacute;cor.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              The Modern Home Design Philosophy: Function Meets Form
            </h2>
            <p>
              Contemporary kitchen designs celebrate clean lines, premium materials, and hidden appliances. An old outdated large countertop or wall mounted water purifier does not fit in with the minimalist idea. Installing an under-sink water ionizer with modern design allows architects and designers to keep seamless surfaces in quartz or marble. The method perfectly captures the basic principle of using better health technology without overpowering beautiful and highly curated spaces.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Introducing the Tyent UCE-PLUS Series
            </h2>
            <p>
              The Tyent UCE-PLUS series sets the standard for most aesthetic and luxury design with advanced hydration to meet today&apos;s modern lifestyle. This system conceals the main machine under the counter, regardless of whether you select the Tyent under-counter ionizer 9-plate, 11-plates or the ultimate 13-plate flagship. You only interact with an intuitive, smartphone-style lcd touchscreen designer faucet. It&apos;s the best premium under-sink ionizer in India and around the world today.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Award-Winning, Space-Saving Design
            </h2>
            <p>
              This under-counter alkaline water ionizer system is ideal for minimalists, eliminating the clutter of countertop water systems. The front-loading filter replacement system ensures easy maintenance under the sink. This under-counter 9/11/13-plate water ionizers in India have strong electrolysis units under the counter so that your gorgeous kitchen island is not cluttered by some bulky gadget.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Four Elegant Finishes for Every Interior Style
            </h2>
            <p>
              When it comes to long-term investments, design aesthetics is a huge factor. The designer faucet is made of professional-grade medical grade stainless steel available in 4 different colours Gold, Satin Silver, Antique and Black, perfectly matched with top kitchen faucets by Tyent. These Tyent under-counter water ionizers harmonise with any colour scheme. Regardless of the warm rustic or cool modern shades in your kitchen, the beautiful fixture always looks incredibly fabulous.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              More Than an Appliance: A Design Statement
            </h2>
            <p>
              This futuristic fixture is not a conventional kitchen utensil, but a stylish design feature. A Tyent UCE-PLUS under-sink alkaline water ionizer gives an instant upgrade to the overall kitchen aesthetics. Investing in a premium Tyent UCE-PLUS under-sink water ionizer in India ensures that you create a striking architectural impression and enjoy the maximum advantages for hydration health.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              The Technology Behind the Luxury
            </h2>
            <p>
              In addition to its gorgeous appearance, Tyent offers unparalleled technological performance.
            </p>
            <ul>
              <li>Engineers use advanced Japanese medical-grade Solid Hybrid Mesh Plates for exceptional electrolysis conductivity, superior surface area and greater anti-oxidant production.</li>
              <li>The Patented SMPS PLUS&reg; power supply naturally generates a broad pH range from 11.5-2.5 without any use of artificial chemicals, enhancers or salt.</li>
              <li>Kidney-dialysis level purification with dual 0.01-micron filters that eliminate nano-plastics, nano-virus and heavy metals.</li>
            </ul>
            <p>
              For maximum power, the Tyent UCE-11 PLUS under-counter ionizer in India or the Tyent UCE-13 PLUS under-counter ionizer in India can produce high antioxidant levels easily.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Why It&apos;s Quietly Becoming a Trend in Modern Homes
            </h2>
            <p>
              Today, homeowners who are health-conscious are looking for chemical-free water with antioxidants but do not want to compromise on the look of the kitchen. An under-counter alkaline water ionizer solves this common problem in an instant. When it comes to the search for the best under-sink water ionizer, Tyent UCE PLUS series has became a most popular choice in India, modern families can have medical-grade hydration and flawlessly maintain their immaculate, design-focused home interiors.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Conclusion
            </h2>
            <p>
              Take your kitchen to the next level today. The Tyent UCE-PLUS series brings beauty, health, modern design and the latest in technology straight to the door of your modern home.
            </p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="mb-3">
              <p className="fw-bold mb-1">1. What makes the Tyent UCE-PLUS different from a regular water purifier?</p>
              <p>Instead of just filtering the water, Tyent uses advanced Japanese medical-grade solid hybrid mesh plates to create antioxidant-enriched molecular hydrogen rich alkaline water.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">2. Does an under-counter ionizer save kitchen counter space?</p>
              <p>Yes, it totally conceals the main machine beneath the sink, and only a beautifully designed one touch touchscreen faucet is visible above your counter.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">3. What colour finishes is the UCE-PLUS series available in?</p>
              <p>Tyent designs the designer faucet in four elegant finishes, including gorgeous Satin Silver, Gold, Black and Antique, which match any interior.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">4. Is the Tyent UCE-PLUS suitable for modern, minimalist kitchen designs?</p>
              <p>Absolutely. Its best design award-winning with space-saving design will seamlessly fit with minimalist and contemporary architectural spaces without taking up any extra space.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">5. Is a water ionizer a good long-term investment for a home?</p>
              <p>Yes, Tyent offers long-lasting medical-grade titanium plates with an incredible 15-year warranty.</p>
            </div>
          </div>

          <AuthorCard authorKey="dr-srinivasa-yadav-kandula" />
        </Col>

        <Col md={4}>
          <h3 className="fw-bold">Recent Blogs</h3>
          {recentBlogs.map((blog) => (
            <div
              key={blog.id || blog.slug}
              className="mb-4 shadow-sm border rounded-4 overflow-hidden"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-decoration-none"
              >
                <div className="p-3">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-100 rounded-3 mb-3 object-fit-cover"
                    style={{ height: "200px" }}
                  />
                  <div className="d-flex flex-column gap-2">
                    <h2 className="fs-5 text-black fw-semibold mb-1">
                      {blog.title}
                    </h2>
                    <p className="text-muted small mb-2">
                      <span>{blog.publishedAt}</span>
                      {formatDistanceToNow(new Date(blog.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}
