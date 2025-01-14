"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { IoCallOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "@/app/Redux/cartSlice";
import Image from "next/image";

const ProductSection = ({ products, specifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [urlFound, setUrlFound] = useState(false);

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.user); // Access user data from Redux

  const handleTab = (index) => {
    setCurrentIndex(index);
  };


  

  const thumbnails = document.querySelectorAll('.thumbnail');

  thumbnails.forEach((thumbnail, index) => {
    if (currentIndex === index) {
      thumbnail.setAttribute('data-active', 'true');
    } else {
      thumbnail.setAttribute('data-active', 'false');
    }
  });

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


  
  useEffect(() => {

    const currentUrl = window.location.href;
    const isUrlMatch = currentUrl.includes("uce") || currentUrl.includes("hybrid-h2");
    setUrlFound(isUrlMatch);

  },[]);


 
  return (
    <div>
      {/* Header Section */}
      <Row className="mb-5 align-items-top">
        <Col md={6}>
          <div style={{ width: "100%", position: "relative" }}>
            {products.map((item, itemIndex) => (
              <div
                className="d-flex justify-content-center align-items-top"
                key={itemIndex}
              >
                {/* Thumbnail Images */}
                <div className="thumb d-flex flex-column mt-3">
                  {item.src.map((img, index) => (
                    <Image className={
                      currentIndex === index 
                        ? `${urlFound ? "thumbnail-black " : "thumbnail"}`
                        : "thumbnail-none"
                    }
                    data-active={currentIndex === index} // Set the data-active attribute
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      key={index}
                      onClick={() => handleTab(index)}
                      
                    />
                  ))}
                </div>

                {/* Main Image */}
                <div className="d-flex justify-content-center align-items-top" style={{borderRadius:'22px'}}>
                  <div style={{width:'100%', height:'auto'}}>
                  <Image 
                    src={item.src[currentIndex]}
                    alt={`Product ${currentIndex + 1}`}
                    layout="responsive" priority
                    style={{ borderRadius: "22px", padding: "16px" }}
                  />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex gap-3 justify-content-center align-items-center">
            <button className={`${ urlFound? "appbardemoblack" : "appbardemo"  }`}>
              <IoCallOutline />
              &nbsp;Call to Order
            </button>

            <button className={`${ urlFound ? "appbardemoblack" : "appbardemo"  }`} onClick={() => addToCart()}>
              <MdOutlineShoppingCart />
              &nbsp;Add to Cart
            </button>
          </div>
        </Col>
        <Col md={6}>
          <h1 style={{ fontWeight: 600, color: urlFound ?"#000": "#008AC7" }}>{model}</h1>
          <hr />
          <h4 className="m-2">
            M.R.P: <span style={{ fontWeight: 500 }}>₹ {new Intl.NumberFormat("en-IN").format(price)}/-</span>
          </h4>
          <hr />
          <h4 className="m-2" style={{ fontWeight: 500 }}>Specifications</h4>
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
          <button className={`${ urlFound ? "appbardemoblack" : "appbardemo"  }`}>
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
