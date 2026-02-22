"use client";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/app/style/AppBar.css"
import "@/app/style/Shipping.css"
import ShippingAddresBar from "./ShippingAddresBar";
import React from "react";

export default function ShippingLayout({ children }) {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <main>
        <ShippingAddresBar />
        {children}
      </main>
    </div>
  );
}
