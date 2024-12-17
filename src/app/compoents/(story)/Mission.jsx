"use client"
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaDroplet } from 'react-icons/fa6';
import animationData from '@/asserts/icons/Business Goal.json'; 
import Lottie from 'react-lottie';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";
 
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


const Mission = () => {
    const waterTypes = [
        { name:"To provide innovative water solutions that improve the health and well-being of individuals and families across India.", type: "Health & Wellness", color: "#000"},
        { name:"To promote eco-friendly practices by reducing the dependency on single-use plastics and encouraging sustainable hydration.", type: "Sustainability", color: "#000" },
        { name:"To continuously innovate and deliver cutting-edge water ionization and purification systems.", type: "Technology Leadership", color: "#000"},
        { name:"To prioritize customer satisfaction by offering exceptional service, from product selection to after-sales support.", type: "Customer-Centric Approach", color: "#000"},
        { name:"To educate communities about the benefits of alkaline water and its role in fostering a healthier lifestyle.", type: "Education & Awareness", color: "#000"},
 
      ]; 


      const defaultOptions = {
        loop: true, // You can set loop: true for continuous loop
        autoplay: true, // Start automatically
        animationData: animationData, // Import the JSON animation data
      };



      useEffect(() => {

        if (typeof window === "undefined") return;
        
        const path = document.querySelector("#path"); // Select the <path> element
        if (!path) {
          console.error("Path element not found");
          return;
        }
        const pathLength = path.getTotalLength();
        
            gsap.utils.toArray(".circle-group").forEach((group) => {
              const circle = group.querySelector("circle");
              const text = group.querySelector("text");
              const cx = parseFloat(circle.getAttribute("cx"));
              const cy = parseFloat(circle.getAttribute("cy"));
        
              const startLength = pathLength * (cx / 1910); 
        
              gsap.to(group, {
                scrollTrigger: {
                  trigger: "#svg_id",
                  start: "top center",
                  end: "center center",
                  scrub: 1,
                  toggleActions: "play none none none",
                },
                motionPath: {
                  path: '#path', 
                  align: path, 
                  alignOrigin: [0.5, 0.5], // Center alignment
                  start: 0, 
                  end: startLength / pathLength, 
                 
                },
                duration: 3,
              });
            });
          }, []);
    
      return (
        <div >
       
<div className='container'>
<center>
  <div>
  <Lottie options={defaultOptions} width={100} height={100} style={{display: 'inline-block', verticalAlign: 'middle'}} />
  <h1 className='text-center' style={{ color: '#008AC7', fontWeight: '600',margin:'0', display: 'inline-block', verticalAlign:'middle',}}>
      Mission
  </h1>  
</div>
</center>



          <p className='text-center' style={{fontSize:'14px', fontWeight:500}}>
          Together, we aim to make every drop of water count towards a better, <br/> healthier future for India.
          </p>
          
    
        <Row className="justify-content-center ">
          {waterTypes.map((type, idx) => (
            <Col  style={{backgroundColor:"#e9f4fb", borderRadius:'30px', margin:'10px', padding:'15px'}}
              md={3}
              sm={6}
              xs={12}
              key={idx}
              className="d-flex   justify-content-center align-items-center mb-4"
            >
    
              {/* Water Type Details */}
              <div>
              <div className='d-flex'>   <FaDroplet  size={20} />
                <h6
                  style={{
                    color: `${type.color}`,
                    fontWeight: "700",
                    fontSize: "18px",
                    marginBottom: "5px",
                  }}
                >
                  {type.type}
                </h6>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#6c757d",
                    margin: "0",
                  }}
                >
                  {type.name}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        </div>
        <br/>
        <br/>
        
      <div>
        <svg
          id="svg_id"
          viewBox="0 0 1910 754"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            id="path"
            d="M5 529.156C44.5069 466.414 212.492 199.232 303 210.336C447.905 228.114 444.885 337.718 471.829 405.73C494.615 452.472 526.151 554.729 603.086 589.814C680.02 624.899 787.5 483.336 804.779 401.024C823.059 341.733 875.5 212.655 962.546 216.94C1049.59 221.225 1111.22 337.592 1134.09 401.024C1150.38 451.155 1202 584.155 1282.76 589.814C1368.1 595.793 1438.19 476.753 1466 401.024C1489.65 343.114 1545.98 238.437 1620 230.155C1679.46 223.503 1745.77 297.985 1784.25 361.955C1801.07 389.912 1814.4 420.73 1828.48 450.157C1856.08 507.805 1901.21 600.772 1908 598.156"
            stroke="#008AC7"
            strokeWidth="4"
            fill="none"
            strokeDasharray="9,9"
          />

          {/* Circle group with text inside it */}
          <g className="circle-group">
            <circle cx="1650" cy="250" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="1650"
                  y="250"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="1650" dy="-1.2em" fontSize="40" fontWeight="500">15+</tspan>
                  <tspan x="1650" dy="1.4em" fontSize="20" fontWeight="600">Plates warranty</tspan>
                 
                </text>

          </g>

          <g className="circle-group">
            <circle cx="1295" cy="550" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="1295"
                  y="550"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="1295" dy="-1.2em" fontSize="40" fontWeight="500">9</tspan>
                  <tspan x="1295" dy="1.4em" fontSize="20" fontWeight="600">Indian R&D</tspan>
                 
                </text>

          </g>

          <g className="circle-group">
            <circle cx="989" cy="210" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="989"
                  y="210"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="989" dy="-1.2em" fontSize="40" fontWeight="500">125+</tspan>
                  <tspan x="989" dy="1.4em" fontSize="20" fontWeight="600">Strong team</tspan>
                  
                </text>
          </g>

          <g className="circle-group">
            <circle cx="600" cy="550" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="600"
                  y="550"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="600" dy="-1.2em" fontSize="40" fontWeight="500">9M+</tspan>
                  <tspan x="600" dy="1.4em" fontSize="20" fontWeight="600">Most trusted</tspan>
                 
                </text>
          </g>

          <g className="circle-group">
            <circle cx="280" cy="210" r="100" fill="#008AC7" />
            <text
                  className="circle-text-1"
                  x="280"
                  y="210"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="24"
                >
                  <tspan x="280" dy="-1.2em" fontSize="40" fontWeight="500">73+</tspan>
                  <tspan x="280" dy="1.4em" fontSize="20" fontWeight="600">Indian Branches</tspan>
                  
                </text>
          </g>
        </svg>
      </div>



        </div>
      )
    }    

export default Mission