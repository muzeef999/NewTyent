import dynamic from 'next/dynamic';
import React from 'react'
import smps from '@/asserts/smps.png'
const Header = dynamic(() => import("../compoents/Header"), { ssr: false });

const page = () => {

     const headerData = {
            basic: "Trust, Satisfaction & Transformations",
            preheading: "Hear From Our Real",
            afterheading: "Satisfied Tyent India Customers",
            content:
              "At Tyent India, we take immense pride in the health transformations and positive lifestyle changes our customers experience through our hydrogen-rich alkaline water.",
            img: smps,
            animatedText: "Health, Wellness, Transformation",
          };
  
          return (
    <div>
        <Header {...headerData} />
        <div className='container'>
            <h1>Hello</h1>
        </div>
    </div>
  )
}

export default page