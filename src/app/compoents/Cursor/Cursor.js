"use client"
import React, { useEffect, useState } from 'react'
import style from "../Cursor/Cursor.module.css"
import {motion, spring} from 'framer-motion'


const Cursor = ({scaling}) => {

    const [smallCircle, setSmallCircle] = useState({x: 0,y: 0});

    useEffect(() => {

        const mousemove = (e) =>{
            setSmallCircle({x: e.clientX, y:e.clientY});
        }

        window.addEventListener("mousemove", mousemove);

    return () => {
         window.removeEventListener("mousemove", mousemove);
    }    
    },[])
  return (
    <div>
    <motion.div style={{scale: scaling ? 0.1:1}} animate={{x: smallCircle.x-8, y:smallCircle.y-8, transition:{type:"spring", mass:2}, }} className={style.smallContainer}>  </motion.div>
    </div>
  )
}

export default Cursor