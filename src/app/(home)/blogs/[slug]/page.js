import { formatDistanceToNow } from "date-fns";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import default_image from "@/asserts/default_image.webp";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in";

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
    keywords: post.metaKeywords,
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

  const [postRes, recentRes] = await Promise.all([
    fetch(`${apiUrl}/api/blog/${slug}`),
    fetch(`${apiUrl}/api/blog?limit=5`),
  ]);

  if (!postRes.ok) {
    notFound();
  }

  const post = await postRes.json();
  const recentBlogs = recentRes.ok ? await recentRes.json() : [];

  const formattedTime = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });

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
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </Col>

        <Col md={4}>
          <h3 className="fw-bold">Recent Blogs</h3>
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="mb-4 shadow-sm border rounded-4 overflow-hidden"
            >
              
              <Link
                href={`/blog/${blog.slug}`}
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
                    href={`/blog/${blog.slug}`}
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
