"use client";
import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { IoCallOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "@/app/Redux/cartSlice";

const ProductSection = ({ products, specifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.user); // Access user data from Redux

  const handleTab = (index) => {
    setCurrentIndex(index);
  };

  const model = specifications.find((item) => item.label === "Model")?.name;
  const price = specifications.find((item) => item.label === "Price")?.name;

  const addToCart = () => {
    if (userData) {
      const cartItemData = {
        userId: userData.id,
        productName: model,
        qty: qty,
        price: price, 
      };
      dispatch(postCart(cartItemData));
    } else {
      router.push("/Signin");
    }
  };
  const selectedSpecifications = specifications.filter((item) =>
    [
      "Electrode/Plates",
      "pH Range",
      "ORP Range",
      "Hydrogen Range",
      "Generates",
      "Warranty",
    ].includes(item.label)
  );

  return (
    <div>
      {/* Header Section */}
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <div style={{ width: "100%", margin: "30px", position: "relative" }}>
            {products.map((item, itemIndex) => (
              <div
                className="d-flex justify-content-center align-items-center"
                key={itemIndex}
              >
                {/* Thumbnail Images */}
                <div className="thumb d-flex flex-column mt-3">
                  {item.src.map((img, index) => (
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      key={index}
                      onClick={() => handleTab(index)}
                      style={{
                        cursor: "pointer",
                        border:
                          currentIndex === index ? "2px solid #008AC7" : "none",
                        margin: "10px",
                        width: "80px", // Thumbnail size
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                    />
                  ))}
                </div>

                {/* Main Image */}
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={item.src[currentIndex]}
                    alt={`Product ${currentIndex + 1}`}
                    width="100%"
                    style={{ borderRadius: "22px", padding: "25px" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex gap-3 justify-content-center align-items-center">
            <button className="appbardemo">
              <IoCallOutline />
              &nbsp;Call to Order
            </button>

            <button className="appbardemo" onClick={() => addToCart()}>
              <MdOutlineShoppingCart />
              &nbsp;Add to Cart
            </button>
          </div>
        </Col>
        <Col md={6}>
          <h1 style={{ fontWeight: 600, color: "#008AC7" }}>{model}</h1>
          <hr />
          <h4>
            M.R.P: <span style={{ fontWeight: 500 }}>₹ {new Intl.NumberFormat("en-IN").format(price)}/-</span>
          </h4>
          <hr />
          <h4 style={{ fontWeight: 500 }}>Specifications</h4>
          <hr />
          <Table className="custom-table table-borderless" hover responsive>
            <tbody>
              {selectedSpecifications.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.label}</td>
                  <td>: {item.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <button className="appbardemo">
            <RxDownload />
            &nbsp;Download Brochure
          </button>
          <hr />
          <h6>
            *Depends on input water quality and Flow rate (No use of external
            chemicals, salts, or artificial enhancers)
          </h6>
          <hr />
          <h6>
            *Only Tyent, with its patented turbo technology, can produce water
            with an 11.5 pH and 2.5 pH naturally, without the need for
            chemicals, artificial enhancers, or salts.
          </h6>
          <hr />
        </Col>
      </Row>
    </div>
  );
};

export default ProductSection;
