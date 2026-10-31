export const metadata = {
  title: "TM-X Beauty Soap: Fermented Pomegranate Soap | Tyent",
  description: "Tyent TM-X Beauty Soap blends fermented pomegranate, honey and hyaluronic acid for gentle cleansing. 80g, Rs 999. Order now.",
};

import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import React from "react";
import soap from "@/asserts/soap/soap.png"

import "@/app/style/SoapButton.css"
import InDetail from "./InDetail";

const page = () => {
  const products = [
    {
      src: [soap],
    },
  ];

  const specifications = [
    { label: "Model", name: "TM-X Beauty Soap" },
    { label: "Price", name: 999 },
    { label: "Weight", name: "80g" },
    { label: "Instructions", name: ": TM-X soap contains high grade oil and natural glycerin, lease keep it dry because it is easily decomposed into moisture" },
    {
      label: "Purpose of use",
      name: "Disinfection and sterilization of food, utensils, and other apparatus",
    },
   
  ];

  return (
    <div>
      <div className="section-spacing">
        <h1 className="text-center mb-4" style={{ fontWeight: "600" }}>TM-X Beauty Soap</h1>
        <ProductSection products={products} specifications={specifications} />
      </div>
      
     <InDetail />
    </div>
  );
};

export default page;
