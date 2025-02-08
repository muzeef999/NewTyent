"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogPostModal = ({ fetchBlogs, post }) => {
  const initialFormState = {
    img: "",
    content: "",
    username: "",
    title: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    category: "",
    tags: "",
    published: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const router = useRouter();

  // Sync formData with the incoming `post` prop
  useEffect(() => {
    if (post) {
      setFormData({
        img: post.img || "",
        content: post.content || "",
        username: post.username || "",
        title: post.title || "",
        metaTitle: post.metaTitle || "",
        metaDescription: post.metaDescription || "",
        metaKeywords: post.metaKeywords?.join(", ") || "",
        category: post.category || "",
        tags: post.tags?.join(", ") || "",
        published: post.published || false,
      });
    } else {
      setFormData(initialFormState);
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value.trim(),
    }));
  };

  const handleContentChange = (content) => {
    setFormData((prevData) => ({ ...prevData, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToPost = {
      ...formData,
      metaKeywords: formData.metaKeywords
        .split(",")
        .map((keyword) => keyword.trim()),
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      if (post) {
        // Update existing post
        await axios.patch(`/api/blog/${post.slug}`, dataToPost);
        alert("Blog updated successfully!");
      } else {
        // Create new post
        const response = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToPost),
        });

        if (response.ok) {
          alert("Blog posted successfully!");
        } else {
          throw new Error("Failed to post blog");
        }
      }

      setFormData(initialFormState);
      fetchBlogs(); // Refresh blog list
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formImg">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formMetaTitle">
            <Form.Label>Meta Title</Form.Label>
            <Form.Control
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formMetaDescription">
            <Form.Label>Meta Description</Form.Label>
            <Form.Control
              type="text"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formMetaKeywords">
            <Form.Label>Meta Keywords (comma-separated)</Form.Label>
            <Form.Control
              type="text"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formTags">
            <Form.Label>Tags (comma-separated)</Form.Label>
            <Form.Control
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formContent">
            <Form.Label>Content</Form.Label>
            <ReactQuill
              theme="snow"
              name="content"
              value={formData.content}
              onChange={handleContentChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formPublished" className="mb-3">
        <Form.Check
          type="checkbox"
          name="published"
          label="Published"
          checked={formData.published}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {post ? "Update Blog" : "Submit Blog"}
      </Button>
    </Form>
  );
};

export default BlogPostModal;
