import React from "react";
import '@/app/style/WhyDrinkTyentWater.css'; // External CSS file for styling
import Image from "next/image";

const WhyDrinkTyentWater = ({icon, title, content }) => {


 
  return (
    <>
     <div className="custom-card d-flex flex-column" style={{color:'#FFF'}}>
    <div className="card-body">
       <Image src={icon} width={50} height={50} />
      <h4 className="card-title m-0 mt-3">{title}</h4>
      <p className="card-content">{content}</p>
    </div>
    </div>
    </>
  );
};

export default WhyDrinkTyentWater;
