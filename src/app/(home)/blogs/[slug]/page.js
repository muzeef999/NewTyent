import { formatDistanceToNow } from "date-fns";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import default_image from "@/asserts/default_image.webp";
import Link from "next/link";
import AuthorCard from "./AuthorCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in";

const staticRecentBlogs = [
  {
    id: "static-1",
    slug: "tyent-uce-plus-series-luxury-water-ionizer-modern-homes",
    title: "Why the Tyent UCE-PLUS Series Is Becoming the Ultimate Luxury Upgrade for Modern Homes",
    img: "/blog-uce-plus-luxury.webp",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "static-2",
    slug: "ro-water-purifier-vs-water-ionizer",
    title: "The End of the RO Water Purifier? Why Water Ionizers Are Becoming the Future of Healthy Living",
    img: "/blog-ro-vs-ionizer.jpg",
    createdAt: "2026-08-01T00:00:00.000Z",
  },
  {
    id: "static-3",
    slug: "best-alternative-to-kangen-water-machines-in-india",
    title: "Best Alternative to Kangen Water Machines in India",
    img: "/blog-kangen-alternative.webp",
    createdAt: "2026-07-24T00:00:00.000Z",
  },
  {
    id: "static-4",
    slug: "common-alkaline-water-myths-indian-buyers-should-stop-believing",
    title: "Common Alkaline Water Myths Indian Buyers Should Stop Believing",
    img: "/blog-alkaline-myths.webp",
    createdAt: "2026-07-24T00:00:00.000Z",
  },
];

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`${apiUrl}/api/blog/${slug}`);

  if (!res.ok) {
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };
  }

  const post = await res.json();

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${apiUrl}/blog/${slug}`,
      images: post.image || default_image,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,

      images: post.image || default_image,
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = params;

  const postRes = await fetch(`${apiUrl}/api/blog/${slug}`);

  if (!postRes.ok) {
    notFound();
  }

  const post = await postRes.json();
  const recentBlogs = staticRecentBlogs.filter((b) => b.slug !== slug);

  const formattedTime = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });

  // Map blog author to author card
  const authorMap = {
    "Dr. Srinivasa Yadav Kandula": "dr-srinivasa-yadav-kandula",
    "Dr Srinivasa Yadav Kandula": "dr-srinivasa-yadav-kandula",
    "Srinivasa": "dr-srinivasa-yadav-kandula",
    "Dr. G. Sree Suma": "dr-g-sree-suma",
    "Dr G Sree Suma": "dr-g-sree-suma",
    "Sree Suma": "dr-g-sree-suma",
  };
  const authorKey = authorMap[post.username] || (post.authorSlug ? post.authorSlug : "dr-srinivasa-yadav-kandula");

  // Interlinking map: slug -> [{ keyword, url }]
  const interlinkMap = {
    "the-tyent-advantage-why-your-family-deserves-the-ultimate-hydration": [
      { keyword: "Why Tyent", url: "/why-tyent" },
      { keyword: "basic filtration", url: "/filter-1" },
      { keyword: "essential minerals like calcium and magnesium", url: "/7-types-of-Tyent-water" },
    ],
    "the-tyent-uce-13-plus-transforming-your-home-hydration": [
      { keyword: "space-saving under-counter design", url: "/under-counter-water-ionizers" },
      { keyword: "1-micron ultra-filtration", url: "/0.1-micron-filters" },
      { keyword: "Platinum Lifetime Warranty", url: "/why-tyent" },
      { keyword: "Best Alkaline Water Ionizer in India", url: "/under-counter-water-ionizers" },
      { keyword: "space-saving under-the-counter design", url: "/under-counter-water-ionizers" },
      { keyword: "Dual Filtration", url: "/0.1-micron-filters" },
    ],
  };

  // Apply interlinking to blog content
  let blogContent = post.content;
  const interlinks = interlinkMap[slug];
  if (interlinks) {
    interlinks.forEach(({ keyword, url }) => {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(?<!<a[^>]*>)(?<!<[^>]*)\\b(${escaped})\\b(?![^<]*<\\/a>)`, "i");
      blogContent = blogContent.replace(
        regex,
        `<a href="${url}" style="color:#291495;text-decoration:underline;font-weight:600">$1</a>`
      );
    });
  }

  return (
    <div className="container py-4" style={{ overflowX: "hidden" }}>
      <Row>
        <Col md={8} className="mb-4" style={{ overflowX: "hidden" }}>
          <img
            src={post.img}
            alt={post.title}
            className="w-100 rounded-3 mb-3"
          />

          <div className="text-muted d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0">
              <strong>By:</strong> {post.username}
            </p>
            <p className="mb-0">{formattedTime}</p>
          </div>

          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          ></div>

          <AuthorCard authorKey={authorKey} />
        </Col>

        <Col md={4}>
          <h3 className="fw-bold">Recent Blogs</h3>
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
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
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-decoration-none"
                    aria-label={`Read more about ${blog.title}`}
                  ></Link>
                  
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
