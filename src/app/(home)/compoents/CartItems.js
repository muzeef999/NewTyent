import React from "react";
import { Row, Spinner } from "react-bootstrap";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import Image from "next/image";
import nmp5 from "@/asserts/NMP5.webp";
import nmp9 from "@/asserts/NMP9.webp";
import uce from "@/asserts/Uce.webp";
import Hybrid from "@/asserts/Hybrid.webp";
import soap from "@/asserts/soap/soap.png";
import watergen from "@/asserts/watergen.png";
import { AiOutlineDelete } from "react-icons/ai"; 


const CartItems = ({ products, handleQtyChange, updatingProduct, deleteProduct }) => {

  const modelImageMap = {
    "Tyent NMP-5": nmp5,
    "Tyent NMP-7": nmp5,
    "Tyent NMP-9": nmp9,
    "Tyent NMP-11": nmp9,
    "Tyent UCE-9 Plus": uce,
    "Tyent UCE-11 Plus": uce,
    "Tyent UCE-13 Plus": uce,
    "Tyent H2-Hybrid": Hybrid,
    "TM-X Beauty Soap": soap,
    "TIE - N15WR" : watergen,
  };
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
                src={modelImageMap[item.productName]}
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
