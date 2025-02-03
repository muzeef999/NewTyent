"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "@/app/Redux/cartSlice";

const OrderComponent = ({ selectedAddress }) => {
  const { user } = useSelector((state) => state.auth);
  const { products, totalAmount, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const placeOrder = async () => {
    if (!user || !selectedAddress) {
      alert("Please select an address.");
      return;
    }

    setIsPlacingOrder(true);

    try {
      const { data } = await axios.post("/api/create-order", {
        userId: user.id,
        products,
        address: selectedAddress,
      });

      const res = await loadRazorpayScript();
      if (!res) {
        alert("Failed to load Razorpay SDK.");
        setIsPlacingOrder(false);
        return;
      }

      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "Your Store",
        description: "Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          const verifyRes = await axios.post("/api/verify-payment", {
            orderId: data.orderId,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          });

          if (verifyRes.data.success) {
            alert("Payment successful!");
            dispatch(clearCart());
            setOrderResponse(verifyRes.data);
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phoneNumber,
        },
        theme: { color: "#008ac7" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Order placement failed:", error);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="order-section">
      <button
      style={{backgroundColor:'#008ac7', color:'#FFF'}} 
        className="btn" 
        onClick={placeOrder} 
        disabled={isPlacingOrder}
      >
        {isPlacingOrder ? "Processing..." : "Pay with Razorpay"}
      </button>

      {orderResponse && (
        <div className="order-confirmation">
          <h4>Order Placed Successfully!</h4>
          <p>Order ID: {orderResponse.orderId}</p>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;
