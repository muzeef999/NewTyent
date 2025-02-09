"use client";

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import dynamic from "next/dynamic";

const BlogPostModal = dynamic(() => import("../compoents/BlogPost"), { ssr: false });

// Dynamically importing the pagination component
const AdminPaginationData = dynamic(() => import("../compoents/AdminPaginationData"), {
  ssr: false,
  loading: () => <p>Loading pagination...</p>,
});

// Ensure the API URL is available
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://tyent.co.in"; // Fallback URL

const Page = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`strokeWidth/api/blog`);
      if (!res.ok) {
        console.error(`Error fetching blogs: ${res.status} ${res.statusText}`);
        return [];
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return [];
    }
  };

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    fetchBlogs().then((data) => {
      setBlogs(data);
      setIsLoading(false);
    });
  }, []);

  const blogsPerPage = 6;

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
      <h1 className="m-4">All Blog Posts</h1>

      <Button variant="primary" onClick={handleShow}>
        Create Blog Post
      </Button>

      </div>
      {isLoading ? (
        <p>Loading blogs...</p>
      ) : blogs.length > 0 ? (
        <AdminPaginationData data={blogs} itemsPerPage={blogsPerPage} />
      ) : (
        <p>No blogs available at the moment. Please check back later.</p>
      )}

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BlogPostModal />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Page;
