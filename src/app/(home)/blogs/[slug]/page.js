import { formatDistanceToNow } from "date-fns";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Col, Row } from "react-bootstrap";


const Share = dynamic(() => import("@/app/(home)/compoents/Share"), {
  ssr: false,
});



export async function generateMetadata({ params }) {
  const { slug } = params;

  // Use the full URL for the API request
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`
  );
  if (!res.ok) {
    // Return a fallback metadata if the post is not found
    return {
      title: "Blog Not Found",
      description: "The requested blog does not exist.",
    };

  }

  const post = await res.json();

  // Return dynamic metadata
  return {
    title: post.title,
    description: post.description || "Read this blog to learn more.",
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      images: post.image || "/default-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image || "/default-image.jpg",
    },
  };
}


export default async function BlogPage({ params }) {
  const { slug } = params;
  // Use the full URL for the API request
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`
  );
  if (!res.ok) {
    notFound(); // This will show a 404 page if the blog post is not found
  }
  const post = await res.json();



  return (
    <div className="container">
      <Row>
        <Col md={8}>
          <img src={post.img} style={{ width: "100%", borderRadius: "20px" }} />
          <h1>{post.title}</h1>
          <div
            style={{ color: "#9f9f9f" }}
            className="d-flex justify-content-between align-items-center"
          >
            <p>
              <strong>By:</strong> {post.username}
            </p>
            <p>
              {formatDistanceToNow(new Date(post.publishedAt), {
                addSuffix: true,
              })}
            </p>
          </div>
          <Share data={post} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Col>
        <Col md={4}>
          <h3>Recent Blogs</h3>
          
          <div className="d-flex">
           
          </div>

        </Col>
      </Row>
    </div>
  );
}
