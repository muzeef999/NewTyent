"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import spec from "@/asserts/nmp/spec.png"
import "@/app/style/Nmp.css"
import Aos from "aos";

const Touchpreview = () => {
  const items = [
    { id: 1, text: "Turbo water (11.5pH)" },
    { id: 2, text: "Acidic level 2 (5 - 5.5 pH)" },
    { id: 3, text: "Acidic level 1 (4 - 5 pH)" },
    { id: 4, text: "Purified water (7pH)" },
    { id: 5, text: "Alkaline level 1 (8.5 pH)" },
    { id: 6, text: "Alkaline level 2 (9 pH)" },
    { id: 7, text: "Alkaline level 3 (9.5 pH)" },
    { id: 8, text: "Time" },
    { id: 9, text: "pH" },
    { id: 10, text: "Water Flowrate" },
    { id: 11, text: "Voltage/Flow/Time" },
    { id: 12, text: "Remaining time" },
    { id: 13, text: "Door open" },
    { id: 14, text: "Temperature Error" },
    { id: 15, text: "Fixed qty discharge" },
    { id: 16, text: "System setup" },
    { id: 17, text: "Manual Cleaning" },
    { id: 18, text: "Voice ON/OFF" },
    { id: 19, text: "1st Filter indicator & reset" },
    { id: 20, text: "2nd Filter indicator & reset" },
  ];


  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <center>
      <h2 style={{color:'#008AC7', fontWeight:'600'}}>LCD Display and Touch Pad Overview</h2>
      

    <div className="image-container">
  <Image src={spec} alt="specifications" className="responsive-image" />
    </div>

    </center>
    
    <div className="grid-containerdisplay d-flex flex-wrap justify-content-center align-items-center">
  {items.map((item, index) => (
    <div key={item.id} className="custom-card m-2" data-aos={index % 2 === 0 ? "fade-up" : "zoom-in"}
    data-aos-delay={`${index * 50}`}>
    <div
      key={item.id}
      className="d-flex   grid-items-display align-items-center justify-content-center"
    >
      <span role="img" aria-label="water drop" className="touchpreviewnumber">{item.id}</span> {/* Water drop icon */}
      <p className="m-0 text-center">{item.text}</p> {/* Text wrapping */}
    </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Touchpreview;
