import React from "react";
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('../compoents/Header'), {
  ssr: false,
});
const page = () => {

  const headerData = { 
    basic: "Trust, Satisfaction & Transformations",
    preheading:'Hear From Our Real',
    afterheading: "Satisfied Tyent India Customers",
    content: "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water. Our cutting-edge water ionizers are designed to provide superior antioxidant support, better hydration, and long-term wellness. But don’t just take our word for it - hear it from those who matter most, our valued customers!",
    img: "path/to/image.jpg", // Add image URL if needed
    animatedText: "Health, Wellness, Transformation" // Pass the animated text here
  }

  return (
    <div>
       <Header 
        basic={headerData.basic} 
        preheading={headerData.preheading} 
        afterheading={headerData.afterheading}
        content={headerData.content} 
        img={headerData.img}
        animatedText={headerData.animatedText} // Passing dynamic animated text
      />
      <div className="container">start</div>
    </div>
  );
};

export default page;
