"use client"
import React from 'react'
import { IoShareSocial } from 'react-icons/io5'
import { RWebShare } from "react-web-share";


const RWebShareComp = ({text,link}) => {
  return (
    <div>
         <RWebShare
          data={{
            text: text.text,
            url:  link.src,
            title: "Tyent",
          }}
          onClick={() => console.log("Shared successfully!")}
        >
          <button className="filterbutton">
            <IoShareSocial />
          </button>
        </RWebShare>
    </div>
  )
}

export default RWebShareComp