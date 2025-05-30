"use client"
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { Button, Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import BlogPostModal from "../../compoents/BlogPost";


// Ensure the API URL is available


export default function Page({params}) {
  const { slug } = params;
  const router = useRouter();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
  

  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`https://www.tyent.co.in/api/blog/${slug}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(true);
      }
    };

    fetchPost();
  }, [slug]);



  const handleDelete = async(data) => {
    await axios.delete(`/api/blog/${data}`).then((res) => router.push("/dashboard")).catch((err) => console.log(err));
  };



  if (error) {
    return (
      <div className="container">
        <h1>Blog Not Found</h1>
        <p>The requested blog post could not be found.</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }




  return (
    <div className="container">
      {/* Metadata */}
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description || "Read this blog to learn more."} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description || "Read this blog to learn more."} />
        <meta property="og:image" content={post.image || "/default-image.jpg"} />
        <meta property="og:url" content={`/blog/${slug}`} />
      </Head>

      {/* Blog Content */}
      <Row>
        <Col md={8}>
          <img src={post.img} style={{ width: "100%", borderRadius: "20px" }} alt={post.title} />
          <h1>{post.title}</h1>
          <div
            style={{ color: "#9f9f9f" }}
            className="d-flex justify-content-between align-items-center"
          >
            <p>
              <strong>By:</strong> {post.username}
            </p>
            <p>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-around align-items-center">
            <Button variant="warning" onClick={handleShow}>Update</Button>
            <Button onClick={() => handleDelete(post.slug)}>Delete</Button>
          </div>
        </Col>
      </Row>


      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <BlogPostModal post={post}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
