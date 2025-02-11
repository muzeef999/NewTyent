import { formatDistanceToNow } from "date-fns";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Col, Row, Card } from "react-bootstrap";
import default_image from "@/asserts/default_image.webp"


const FormOnly = dynamic(() => import("@/app/(home)/compoents/Form/FormOnly"),{ssr:false})


const Share = dynamic(() => import("@/app/(home)/compoents/Share"), { ssr: false });

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
    description: post.description || "Read this blog to learn more.",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${apiUrl}/blog/${slug}`,
      images: post.image || default_image,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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

  return (
    <div className="container py-4" style={{overflowX:'hidden'}}>
      <Row>
        <Col md={8} className="mb-4" style={{overflowX:'hidden'}}>
          <img
            src={post.img}
            alt={post.title}
            className="w-100 rounded-3 mb-3"
          />
          <h1 className="fw-bold mb-3">{post.title}</h1>
          <div className="text-muted d-flex justify-content-between align-items-center mb-3">
            <p className="mb-0">
              <strong>By:</strong> {post.username}
            </p>
            <p className="mb-0">
              {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
            </p>
          </div>
          <Share data={post} />
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Col>

        <Col md={4}>
          <FormOnly />
          <h3 className="fw-bold mb-3">Recent Blogs</h3>
          {recentBlogs.map((blog) => (
            <Card key={blog.id} className="mb-3 shadow-sm border-0 rounded-3">
              <Card.Body>
                <Card.Title className="fs-5">{blog.title}</Card.Title>
                <Card.Text className="text-muted small">
                  {formatDistanceToNow(new Date(blog.publishedAt), { addSuffix: true })}
                </Card.Text>
                <a href={`/blog/${blog.slug}`} className="stretched-link"></a>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}