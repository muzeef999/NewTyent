"use client"
import React from 'react'
import { ShareSocial } from 'react-share-social'

const Share = ({data}) => {
    const style = {
        root: {
            border: 0,
            margin:0,
            padding:0,
            color:'#008AC7 !important',
            width:'100%',
          },
  
  copyContainer: {
    color:'#008AC7 !important',
    background: '#eef7fc',
    border:'none'
  },
  copyText: {
    color: '#FF5722 !important', // Highlighted color for the copy URL code
    fontWeight: 'bold', // Make the URL bold for better visibility
  },
  title: {
    color: '#008AC7',
    fontStyle: 'italic'
  }
};

const shareUrl = `https://tyent.co.in/blogs/${data.slug}`;

  return (
    <div  style={{ margin: 0, padding: 0 }}>
     <ShareSocial 
  url = {shareUrl}
  socialTypes= {['facebook','twitter','whatsapp','linkedin','telegram','reddit','email']}
  style={style}
/>

    </div>
  )
}

export default Share