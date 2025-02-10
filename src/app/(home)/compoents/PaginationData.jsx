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
    <div>
      {/* Display current paginated items */}
      <div className="item-list" >
        <Row>
          {currentItems?.length > 0 ? (
            currentItems.map((blog, index) => (
              <Col key={blog.slug} md={4} className="mb-4" data-aos={
                index % 3 === 0
                  ? "fade-right"
                  : index % 3 === 1
                  ? "fade-up"
                  : "fade-left"
              }>

                <Link
                  href={`/blogs/${blog.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="custom-card"
                    style={{ height: "480px", overflow: "hidden" }}
                  >
                    <div>
                      <img
                        style={{
                          width: "100%",
                          objectFit: "cover",
                          height: "250px",
                          borderRadius: "20px",
                        }}
                        src={blog.img || placeholderImg}
                        alt={blog.title || "Default Blog Image"}
                      />
                    </div>
                    <div
                      style={{ color: "#008ac7", marginTop: "20px" }}
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
                    <div className="d-flex justify-content-between align-items-center">
                      <h5
                        className="mt-2"
                        style={{
                          color: "#000",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {blog.title}
                      </h5>
                      <FiArrowUpRight size={30} />
                    </div>
                    <div
                      style={{
                        color: "#667085",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                  </div>
                </Link>
              </Col>
            ))
          ) : (
            <p>No blogs found.</p>
          )}
        </Row>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-between mt-4">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {Math.ceil(data?.length / itemsPerPage)}
        </p>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data?.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationData;
