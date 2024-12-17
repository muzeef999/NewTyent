import React from "react";

const TyentLineAnimation = () => {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "top",
  };

  const lineWrapperStyle = {
    position: "relative",
    width: "90%",
    height: "3px",
    backgroundColor: "#ddd", // Background for the line container
    overflow: "hidden",
    alignItems: "top",
  };

  const animatedLineStyle = {
    position: "absolute",
    height: "3px",
    width: "100%",
    backgroundColor: "#008ac7",
    transform: "translateX(-100%)",
    animation: "drawLine 2s linear forwards",
  };

  const dotStyle = {
    marginTop:'-10px',
    width: "22px",
    height: "22px",
    backgroundColor: "#008ac7",
    opacity: 0,
    borderRadius: "30px",
    transform: "scale(0)",
    animation: "appearDot 0.5s ease-out 2s forwards",
    alignItems: "top",
  };

  return (
    <div style={containerStyle}>
      {/* Line container */}
      <div style={lineWrapperStyle}>
        <div style={animatedLineStyle}></div>
      </div>
      {/* Dot */}
      <div style={dotStyle}></div>
      <style>
        {`
          @keyframes drawLine {
            to {
              transform: translateX(0);
            }
          }

          @keyframes appearDot {
            to {
              opacity: 1;
              transform: scale(1);
            }
              
          }
        `}
      </style>
    </div>
  );
};

export default TyentLineAnimation;
