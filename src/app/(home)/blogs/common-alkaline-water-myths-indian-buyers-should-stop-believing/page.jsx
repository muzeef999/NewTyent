import { formatDistanceToNow } from "date-fns";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import AuthorCard from "../[slug]/AuthorCard";

const recentBlogsData = [
  {
    slug: "tyent-uce-plus-series-luxury-water-ionizer-modern-homes",
    title: "Why the Tyent UCE-PLUS Series Is Becoming the Ultimate Luxury Upgrade for Modern Homes",
    img: "/blog-uce-plus-luxury.webp",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    slug: "ro-water-purifier-vs-water-ionizer",
    title: "The End of the RO Water Purifier? Why Water Ionizers Are Becoming the Future of Healthy Living",
    img: "/blog-ro-vs-ionizer.jpg",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    slug: "best-alternative-to-kangen-water-machines-in-india",
    title: "Best Alternative to Kangen Water Machines in India",
    img: "/blog-kangen-alternative.webp",
    createdAt: "2026-07-24T00:00:00.000Z",
  },
];

export const metadata = {
  title: "Common Alkaline Water Myths Indian Buyers Should Stop Believing",
  description:
    "Learn the truth behind common alkaline water myths in India. Compare ionizers, RO systems, bottled alkaline water, ORP, pH and Tyent technology.",
  openGraph: {
    title: "Common Alkaline Water Myths Indian Buyers Should Stop Believing",
    description:
      "Learn the truth behind common alkaline water myths in India. Compare ionizers, RO systems, bottled alkaline water, ORP, pH and Tyent technology.",
    images: "/blog-alkaline-myths.webp",
  },
};

const postDate = "2026-07-24T00:00:00.000Z";

export default async function BlogPost() {
  const recentBlogs = recentBlogsData;

  const formattedTime = formatDistanceToNow(new Date(postDate), {
    addSuffix: true,
  });

  return (
    <div className="container py-4" style={{ overflowX: "hidden" }}>
      <Row>
        <Col md={8} className="mb-4" style={{ overflowX: "hidden" }}>
          <img
            src="/blog-alkaline-myths.webp"
            alt="Common Alkaline Water Myths Indian Buyers Should Stop Believing"
            className="w-100 rounded-3 mb-3"
          />

          <div className="text-muted d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0">
              <strong>By:</strong> Tyent India
            </p>
            <p className="mb-0">{formattedTime}</p>
          </div>

          <div className="mt-4">
            <h1 className="fw-bold mb-4" style={{ fontSize: "28px" }}>Common Alkaline Water Myths Indian Buyers Should Stop Believing</h1>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Introduction</h2>
            <p>There is this very popular Alkaline Water available across India, which is being extremely promoted across all online and offline retail stores in the country. This water is being promoted with extremely high marketing pitches and as a result, many myths are being created on how it works and many misconceptions are being created among its customers. This guide attempts to correct many of the common myths associated with Alkaline Water and separates science of Ionizer Water Purifiers from the cheap Alkaline Filters, Mineral Water Additives and Packaged Alkaline Bottled Water available in the market.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Why Alkaline Water Myths Are So Common in India</h2>
            <p>There are a lot of products in the Indian market such as water ionizers, alkaline water filters, mineral alkaline water drops and even bottled alkaline water. Since these products are being aggressively marketed online, customers are comparing them a lot. Moreover, customers are comparing these products on the wrong parameters. Most of the customers are unaware of the basic electrolysis technology used in water ionizers and hence such misleading advertisements are being highly promoted across various online retail stores in India.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Myth 1: All Alkaline Water Products Work the Same Way</h2>
            <p>This is false. Add Minerals to Raise pH and increase Antioxidants in your Drinking Water. Alkaline water pouches, mineral cartridges and bottled alkaline water only raise the pH of water by adding chemical minerals. Electrolysis-based water ionizers on the other hand restructure the water at the molecular level to create the most powerful antioxidant on the planet – active hydrogen and very negative ORP.</p>
            <p>Chemical alkalinity All these products increase the pH of the water by adding chemical minerals, but they have no antioxidant activity.</p>
            <p>Electrolytic ionization generates molecular hydrogen and measurably negative ORP.</p>
            <p>They are not intended to be a replacement for each other.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Myth 2: Higher pH Always Means Better Health Benefits</h2>
            <p>This is misleading. A higher pH number alone does not determine water quality. Water with a pH of 11 but no molecular hydrogen or negative ORP offers limited benefit. ORP value matters more than pH for antioxidant potential. A quality ionizer produces drinking water at pH 8.5–9.5 with ORP between −300mV and −800mV.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Myth 3: RO Water and Ionized Alkaline Water Are the Same</h2>
            <p>This is incorrect.Higher pH does not necessarily equal better quality water. Whilst water with a pH of 11 may be of limited value to you unless it also contains molecular hydrogen and has a negative ORP then the value of ORP far outweighs that of pH when it comes to giving you powerful antioxidant effects. As an indicator of quality water then a water ionizer is able to produce a water of pH 8.5 to 9.5 with an ORP of -300mV to -800mV.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Why Tyent Water Ionizers Deliver What Other Products Can't</h2>
            <p>Tyent water ionizers Use solid mesh platinum-coated titanium plates in the electrolysis process. The Tyent machines can create water with a pH as low as 1.7 or as high as 12.5 and an ORP as low as -1150mV. In addition, all of the Tyent ionizers come with Multi-Stage Deep Filtration Systems that can remove more than 200 contaminants from the water prior to ionization. Therefore, these machines are far superior to the chemical based alkaline products available in India, and the rest of the world for that matter, as well as basic RO add-ons.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Conclusion + Call to Action</h2>
            <p>Not all alkaline water is created equal! Research your ionizer of interest in detail. Look into the ORP of the ionized water (if created), the quality of the plates, the type of filters used, and more. Spend your money on a quality machine and run your own tests to see results before getting ripped off by over-hyped water.</p>

            <h2 className="fw-bold mt-4 mb-3" style={{ fontSize: "22px" }}>Frequently Asked Questions (FAQs)</h2>

            <div className="mb-3">
              <p className="fw-bold mb-1">Q: Is alkaline water from an ionizer different from alkaline water pouches or bottles sold in India?</p>
              <p>A: Ionizers create molecular hydrogen and have very negative ORP by electrolysis, compared to chemical elevation of pH in pouches.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">Q: Does drinking high pH alkaline water daily cause any side effects?</p>
              <p>A: For drinking purposes water with a pH above 10 is not meant for daily consumption. Water with a pH of 8.5 to 9.5 is best for daily consumption on a</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">Q: Can a regular RO purifier produce the same quality alkaline water as a Tyent ionizer?</p>
              <p>A: Regular RO water is stripped of all the minerals in the water and therefore creates positive ORP while Tyent ionized water with all the minerals from your water creates negative ORP.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">Q: How do I know if the alkaline water I'm drinking is genuinely ionized?</p>
              <p>A: The best way to determine if your water is being ionized as opposed to just made alkaline is to test the ORP with a digital meter, a reading of negative indicates ionized water and a reading of positive indicates chemically alkaline water.</p>
            </div>

            <div className="mb-3">
              <p className="fw-bold mb-1">Q: Why is Tyent considered a more reliable alkaline water ionizer brand in India?</p>
              <p>A: Tyent Ionizers have 13 platinum-coated plates, ORP as low as −1150mV and a Lifetime Warranty.</p>
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
                className="text-decoration-none">
              <div className="p-3">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-100 rounded-3 mb-3 object-fit-cover"
                  style={{ height: "200px" }}
                />
                <div className="d-flex flex-column gap-2">
                  <h2 className="fs-5 text-black fw-semibold mb-1">{blog.title}</h2>
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
