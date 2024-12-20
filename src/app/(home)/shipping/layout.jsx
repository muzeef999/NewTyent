"use client";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "@/app/style/AppBar.css"
import "@/app/style/Shipping.css"
import ShippingAddresBar from "./ShippingAddresBar";

export default function ShippingLayout({ children,session }) {
  return (
    <div>
      <div style={{ fontFamily: "Poppins, sans-serif" }}>
     <main>
      <ShippingAddresBar />
      {children}</main>
      </div>
    </div>
  );
}
