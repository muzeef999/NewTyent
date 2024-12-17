import React from "react";
import '@/app/style/WhyDrinkTyentWater.css'; // External CSS file for styling

const WhyDrinkTyentWater = ({ title, content }) => {


 
  return (
    <>
     <div className="custom-card d-flex flex-column">
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <p className="card-content">{content}</p>
    </div>
    </div>
    </>
  );
};

export default WhyDrinkTyentWater;
