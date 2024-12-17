import React from 'react'
import lamp from '@/asserts/icons/Lamp.json'
import Lottie from 'react-lottie';

const Vision = () => {

  const defaultOptions = {
    loop: true, // You can set loop: true for continuous loop
    autoplay: true, // Start automatically
    animationData: lamp, // Import the JSON animation data
  };


  return (
    <div>
      
<center>
  <div>
  <Lottie options={defaultOptions} width={100} height={100} style={{display: 'inline-block', verticalAlign: 'middle'}} />
  <h1 className='text-center' style={{ color: '#008AC7', fontWeight: '600',margin:'0', display: 'inline-block', verticalAlign:'middle',}}>
  Vision
  </h1>  
</div>
</center>
          <p className='text-center' style={{fontSize:'14px', fontWeight:500}}>
          To revolutionize hydration in India by becoming the most trusted name in <br/> advanced water ionization and purification solutions, contributing to a <br/> healthier, more sustainable future for generations to come.
          </p>
          <br/>
    </div>
  )
}

export default Vision