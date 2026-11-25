"use client"
import React from 'react'
import { IoShareSocial } from 'react-icons/io5'
import { RWebShare } from "react-web-share";


const RWebShareComp = ({text,link}) => {
  return (
    <div>
         <RWebShare
          data={{
            text: typeof text === "string" ? text : text?.text,
            url: typeof link === "string" ? link : link?.src,
            title: "Tyent",
          }}
          onClick={() => console.log("Shared successfully!")}
        >
          <button type="button" className="filterbutton" aria-label="Share">
            <IoShareSocial />
          </button>
        </RWebShare>
    </div>
  )
}

export default RWebShareComp