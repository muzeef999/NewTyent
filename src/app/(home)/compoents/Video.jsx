"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import RWebShareComp from "./RWebShare";
import YouTubeFacade from "./YouTubeFacade";

const videos = [
  {
    id: 1,
    videoId: "fZSV5ebM3D0",
    description:
      "World's No: 1 Tyent Alkaline water ionizer - Now officially available in India.",
    animation: "fade-left",
  },
  {
    id: 2,
    videoId: "k213C_-BOq0",
    description:
      "Tyent NMP series water ionizer (Above the Counter Extreme Series).",
    animation: "fade-up",
  },
  {
    id: 3,
    videoId: "JAHUlOASNrI",
    description:
      "Tyent Vs Enagic kangen, In-detail product, technology & warranty comparison.",
    animation: "fade-right",
  },
];

const VideoCard = ({ videoId, description, animation }) => {
  return (
    <div data-aos={animation} data-aos-duration="1000" className="h-100">
      <div
        className="custom-card text-center d-flex flex-column h-100"
        style={{
          padding: "10px",
          border: "1px solid #ebebeb",
          borderRadius: "20px",
          backgroundColor: "#fff"
        }}
      >
        <div
          className="embed-responsive embed-responsive-16by9 mb-3"
          data-aos="zoom-in"
        >
          <YouTubeFacade videoId={videoId} title={description} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 8px 8px 8px",
            flexGrow: 1
          }}
          data-aos="slide-up"
        >
          <p
            className="text-start mb-0"
            style={{
              flexGrow: 1,
              fontSize: "14.5px",
              fontWeight: "500",
              color: "#4a4a4a",
              lineHeight: "1.4",
              paddingRight: "15px"
            }}
          >
            {description}
          </p>
          <div style={{ flexShrink: 0, color: "#00aef0" }}>
            <RWebShareComp text={description} link={`https://www.youtube.com/watch?v=${videoId}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="container">
      <Row className="g-5">
        {videos.map((video) => (
          <Col md={4} key={video.id}>
            <VideoCard videoId={video.videoId} description={video.description} animation={video.animation} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Video;
