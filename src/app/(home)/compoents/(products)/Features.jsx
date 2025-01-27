"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Features = ({data, delay }) => {



  return (
      <div style={{padding:'10px'}}
          key={data.id}
          data-aos="fade-up" // AOS animation for fade-up
          data-aos-delay={delay } // Delay to stagger the animations
        >
          <div className="custom-card">
            <div className="justify-content-center align-items-center">
              <div style={{ width: '100%' }}>
                <Image
                  src={data.icon}
                  alt={data.title}
                  layout="responsive"
                  width={100} // Set a fixed width to maintain consistency
                  height={100} // Set a fixed height to maintain aspect ratio
                  priority
                  placeholder="blur"
                />
              </div>
              
              <div>
                <h4 style={{ color: '#008AC7', fontWeight: 500 }}><b>{data.title}</b></h4>
                <p style={{ fontSize: '14px' }}>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Features
