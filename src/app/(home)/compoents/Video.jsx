"use client"
import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import RWebShareComp from './RWebShare';

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/fZSV5ebM3D0?rel=0&modestbranding=1",
    description: "World's No: 1 Tyent Alkaline water ionizer - Now officially available in India.",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/k213C_-BOq0?rel=0",
    description: "Tyent NMP series water ionizer (Above the Counter Extreme Series).",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/JAHUlOASNrI?rel=0",
    description: "Tyent Vs Enagic kangen, In-detail product, technology & warranty comparison.",
  },
];

const VideoCard = ({ src, description }) => {
  const iframeRef = useRef(null);
  

  return (
    <div>
     
    <div className="custom-card text-center" style={{ padding: "10px" }}>
     
        
      <div className="embed-responsive embed-responsive-16by9 mb-3">
        <iframe
          ref={iframeRef}
          className="embed-responsive-item"
          src={src}
          style={{ borderRadius: "18px", width: "100%", height: "220px" }}
          allowFullScreen
          title="Video"
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h6 className="text-start" style={{ flexGrow: 1 }}>
          {description}
        </h6>
        <RWebShareComp text={description} link={src} />
      </div>
    </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="container">
      <Row className='g-4'>
        {videos.map((video) => (
          <Col md={4} key={video.id}>
            <VideoCard src={video.src} description={video.description} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Video;
