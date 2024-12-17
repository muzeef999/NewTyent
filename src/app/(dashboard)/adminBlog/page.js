"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import failedImage from "@/asserts/failedImage.png";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import BlogPostModal from "../compoents/BlogPost";

const Page = () => {
  const [show, setShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const placeholderImg = failedImage;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blog");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Blogs</h1>
        <Button variant="primary" onClick={handleShow}>
          Create Blog Post
        </Button>
      </div>

      <div className="grid-container-blog">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/adminBlog/${blog.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div className="custom-card">
              <div style={{ width: "100%" }}>
                <img src={blog.img}
                  style={{ border: "1px solid #000", borderRadius: "20px", width:'100%'}}
                  alt={blog.title}
                />
              </div>
              <h5
                className="mt-2"
                style={{
                  color: "#000",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {blog.title}
              </h5>
              <div
                style={{ color: "#9f9f9f" }}
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  <strong>By:</strong> {blog.username}
                </p>
                <p>
                  {formatDistanceToNow(new Date(blog.publishedAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
              <p style={{ color: "#9f9f9f" }}>
                <strong>Category:</strong> {blog.category}
              </p>
              <p
                style={{
                  color: "#9f9f9f",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {blog.content}
              </p>
            </div>
          </Link>
        ))} 
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogPostModal fetchBlogs={fetchBlogs} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
