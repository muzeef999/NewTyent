"use client";
import React, { useState } from "react";

const YouTubeFacade = ({ videoId, title, style = {} }) => {
  const [loaded, setLoaded] = useState(false);

  const defaultStyle = {
    borderRadius: "18px",
    width: "100%",
    height: "210px",
    border: "none",
    ...style,
  };

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title || "Video"}
        style={defaultStyle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      aria-label={`Play: ${title}`}
      style={{
        ...defaultStyle,
        position: "relative",
        cursor: "pointer",
        background: "#000",
        padding: 0,
        overflow: "hidden",
        display: "block",
      }}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title || "Video thumbnail"}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.85,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "64px",
          height: "44px",
          backgroundColor: "rgba(255, 0, 0, 0.85)",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </button>
  );
};

export default YouTubeFacade;
