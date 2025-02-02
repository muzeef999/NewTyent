"use client";
import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/app/Redux/cartSlice";

const OrderComponent = ({ selectedAddress, paymentMethod }) => {
  const { user } = useSelector((state) => state.auth);
  const { products, totalAmount, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderResponse, setOrderResponse] = useState(null);

  const placeOrder = async () => {
    if (!user || !selectedAddress || !paymentMethod) {
      alert("Please select an address and payment method.");
      return;
    }

    setIsPlacingOrder(true);

    const orderData = {
      userId: user.id,
      items: products,
      totalAmount,
      totalItems,
      address: selectedAddress,
      paymentMethod,
    };

    try {
      const response = await axios.post("/api/orders", orderData);
      setOrderResponse(response.data);
      dispatch(clearCart()); // Clear the cart after successful order
    } catch (error) {
      console.error("Order placement failed:", error);
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="order-section">
      <h3>Order Summary</h3>
      <p>Total Amount: ₹{totalAmount}</p>
      <p>Total Items: {totalItems}</p>

      <h1>
        {selectedAddress ? (
          <div>
            <p>{selectedAddress.fullName}</p>
            <p>{selectedAddress.address}</p>
            <p>{selectedAddress.city}</p>
            <p>{selectedAddress.postalCode}</p>
            <p>{selectedAddress.country}</p>
          </div>
        ) : (
          "No address selected"
        )}
      </h1>

      <button 
        className="btn btn-primary" 
        onClick={placeOrder} 
        disabled={isPlacingOrder}
      >
        {isPlacingOrder ? "Placing Order..." : "Place Order"}
      </button>

      {orderResponse && (
        <div className="order-confirmation">
          <h4>Order Placed Successfully!</h4>
          <p>Order ID: {orderResponse.orderId}</p>
          <p>Estimated Delivery: {orderResponse.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;
