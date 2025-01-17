import ProductSection from "@/app/(home)/compoents/(products)/ProductSection";
import React from "react";
import soap from "@/asserts/soap/soap.png"
import { Container } from "react-bootstrap";
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
    { label: "Price", name: "999" },
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
        <ProductSection products={products} specifications={specifications} />
      </div>
      
     <InDetail />
    </div>
  );
};

export default page;
