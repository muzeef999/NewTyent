"use client";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { postCart } from "@/app/Redux/cartSlice";
import Image from "next/image";
import "@/app/style/AppBar.css"
import { Modal } from "react-bootstrap";
import Login from "../Login";


const ProductSection = ({ products, specifications }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [urlFound, setUrlFound] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);



  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user); // Access user data from Redux
  const thumbRef = useRef(null);


  const handleTab = (index) => {
    const thumbItems = thumbRef.current.children; // Get all thumbnail elements
    const selectedThumb = thumbItems[index]; // Get the clicked thumbnail
    const container = thumbRef.current; // The scrollable container
  
    // Calculate the position to scroll to
    const containerWidth = container.offsetWidth; // Visible width of the container
    const thumbWidth = selectedThumb.offsetWidth; // Width of a single thumbnail
    const thumbLeft = selectedThumb.offsetLeft; // Distance of the thumbnail from the container's left edge
  
    // Calculate the scroll position to center the thumbnail
    const scrollTo = thumbLeft - (containerWidth / 2) + (thumbWidth / 2);
  
    // Smoothly scroll to the calculated position
    container.scrollTo({
      left: Math.max(0, scrollTo), // Prevent scrolling to a negative position
      behavior: "smooth",
    });
  
    // Update the currentIndex
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
  const  desc = specifications.find((item) => item.label === "sub-head")?.name;

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
      
      setShowLoginModal(true)

    }
  };

  const selectedSpecifications = specifications.filter((item) => true).slice(2,8);


  


    useEffect(() => {
      const currentUrl = window.location.href;
  
      // Check for 'hybrid-h2' specifically and set color based on it
      if (currentUrl.includes("hybrid-h2")) {
        setUrlFound("hybrid-h2"); // Mark it for 'hybrid-h2'
      } else if (currentUrl.includes("uce")) {
        setUrlFound("uce"); // Mark it for 'uce'
      } else {
        setUrlFound(false); // No match found
      }
    }, []);


 
  return (
    <>
    <div style={{width:'100%', overflow:"hidden"}}>
      {/* Header Section */}
      <Container style={{overflowX:'hidden'}}>
      <Row className="mb-5 align-items-top justify-content-between">
        <Col sm={12} md={12} lg={6} xl={6}>
          <div style={{ width: "100%", position: "relative" }}>
            {products.map((item, itemIndex) => (
              <div
                className="justify-content-center align-items-top"
                key={itemIndex}
              >     
                {/* Main Image */}
                <div className="justify-content-center align-items-top" style={{borderRadius:'22px'}}>
                  <div style={{width:'100%', height:'auto'}}>
                  <Image 
                    src={item.src[currentIndex]}
                    alt={`Product ${currentIndex + 1}`}
                    layout="responsive" priority
                    style={{ borderRadius: "22px", padding: "16px" }}
                  />
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="mt-3 thumb" ref={thumbRef}>
                  {item.src.map((img, index) => (
                    <Image className={
                      currentIndex === index 
                        ? `${urlFound === "hybrid-h2" ? "thumbnail-white" : urlFound == "uce" ? "thumbnail-black " : "thumbnail"}`
                        : "thumbnail-none"
                    }
                    data-active={currentIndex === index} // Set the data-active attribute
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      key={index}
                      onClick={() => handleTab(index)} 
                      style={{ userSelect:'all', pointerEvents:'auto'}}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </Col>    
        <Col sm={12} md={12} lg={6} xl={6}>
          <h1 style={{ fontWeight: 600,color: urlFound === "hybrid-h2" ? "#000" : urlFound === "uce" ? "#000" : "#008AC7"}}>{model}</h1>
          <h1 style={{color:'#000',fontSize:'20px'}}>{desc}</h1>
          <hr />
          <h4 className="m-2">
  M.R.P: <span style={{ fontWeight: 500 }}>
    ₹ {
      !isNaN(price) && price !== null && price !== ""
        ? new Intl.NumberFormat("en-IN").format(Number(price)) + "/-"
        : String(price)
    }
  </span>
</h4>
          <hr />
          <h4 className="m-2" style={{ fontWeight: 500 }}>Specifications</h4>
          <hr />
          <Table  className="custom-table table-borderless" hover responsive>
            <tbody>
              {selectedSpecifications.map((item, idx) => (
                <tr key={idx}>
                  <td style={{color: urlFound === "hybrid-h2" ? "#000" : "#000"}}>{item.label}</td>
                  <td style={{color: urlFound === "hybrid-h2" ? "#000" : "#000"}}>: {item.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          
          <div className="d-flex gap-3 justify-content-start align-items-center">
            <button className={`${ urlFound ===  "hybrid-h2" ? "appbarhybrid" : urlFound === "uce" ? "appbardemoblack" : "appbardemo"  }`}>
              <IoCallOutline />
              &nbsp;Call to Order
            </button>

            <button className={`${ urlFound ===  "hybrid-h2" ? "appbarhybrid" : urlFound === "uce" ? "appbardemoblack" : "appbardemo"   }`} onClick={() => addToCart()}>
              <MdOutlineShoppingCart />
              &nbsp;Add to Cart
            </button>
          </div>
          
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
      </Container>
      
    </div>
     {/* Login Modal */}

     <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
          <Modal.Body>
            <Login setShowLoginModal={setShowLoginModal} />
          </Modal.Body>
        </Modal>
    </>
  );
};

export default ProductSection;
