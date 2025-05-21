"use client";

import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";

const PaginationData = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data?.length / itemsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <Row className="gy-4">
        {currentItems?.length > 0 ? (
          currentItems.map((blog, index) => (
            <Col
              key={blog.slug}
              md={4}
              data-aos={
                index % 3 === 0
                  ? "fade-right"
                  : index % 3 === 1
                  ? "fade-up"
                  : "fade-left"
              }
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-decoration-none"
              >
                <div className="shadow-sm  rounded-4 h-100 d-flex flex-column justify-content-between">
                  <img
                    src={blog.img}
                    alt={blog.title || "Blog Image"}
                    className="w-100 rounded-top mb-3 object-fit-cover"
                    style={{ height: "230px" }}
                  />

                  <div className="d-flex p-3 justify-content-between text-secondary small mb-2">
                    <span>
                      <strong>By:</strong> {blog.username}
                    </span>
                    <span>
                      {formatDistanceToNow(new Date(blog.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>

                  <div className="d-flex p-3 justify-content-between align-items-center mb-2">
                    <h2 className="fs-5 text-black fw-semibold mb-1">{blog.title}</h2>

                    <FiArrowUpRight size={24} color="#008ac7" />
                  </div>

                </div>
              </Link>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No blogs found.</p>
        )}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-5">
        <button
          className="btn btn-outline-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <span className="text-muted">
          Page {currentPage} of {Math.ceil(data?.length / itemsPerPage)}
        </span>

        <button
          className="btn btn-outline-primary"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data?.length / itemsPerPage)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PaginationData;
