import React from "react";
import { Row, Spinner } from "react-bootstrap";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import Image from "next/image";
import productImage from "@/asserts/NMP5.webp";
import { AiOutlineDelete } from "react-icons/ai"; 


const CartItems = ({ products, handleQtyChange, updatingProduct, deleteProduct }) => {
  return (
    <Row className="d-flex flex-column justify-content-between align-items-center">
      {products?.length > 0 ? (
        products.map((item, index) => (
          <div key={index}>
            <div className="d-flex justify-content-between align-items-center">
            <h5>{item.productName}</h5>
             <div onClick={() => {
              deleteProduct(item.productName)}}> <AiOutlineDelete color="#d11a2a" size={20} style={{cursor:'pointer'}} /></div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Image
                style={{
                  borderRadius: "20px",
                  border: "1px solid #000",
                }}
                alt="product image"
                width={100}
                height={100}
                src={productImage} // Replace with a valid image path
              />

              <div className="cartqty">
                <button
                  className="cartqtybutton"
                  onClick={() =>
                    handleQtyChange(item.productName, item.quantity - 1)
                  }
                  disabled={
                    item.quantity <= 1 || updatingProduct === item.productName
                  }
                >
                  {updatingProduct === item.productName ?  <Spinner animation="border" size="sm" /> : <RiSubtractLine />}
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="cartqtybutton"
                  type="button"
                  onClick={() =>
                    handleQtyChange(item.productName, item.quantity + 1)
                  }
                  disabled={updatingProduct === item.productName}
                >
                  {updatingProduct === item.productName ? <Spinner animation="border" size="sm" /> : <IoAddSharp />}
                </button>
              </div>

              <p style={{ fontWeight: "600" }} className="mb-0">
                ₹ {new Intl.NumberFormat("en-IN").format(item.price)}/-
              </p>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </Row>
  );
};

export default CartItems;
