"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Display = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
  
    if (!svgElement) {
      console.error("SVG element not found!");
      return;
    }
  
    const durationPerStep = 2; // Duration for transitions
    const repeatDelay = 1; // Delay before restarting the loop
  
    const colors = [
      "#FF0000", // Red
      "#ff1aff", // Purple
      "#6595DD", // Dark Blue
      "#00D2FF", // Light Blue
      "#00FF12", // Green
      "#FFFF00", // Yellow
      "#FFA500", // Orange
      "#797A83", // Gray
    ];
  
    const phValues = [
      "11.5", // Red
      "9.5",  // Purple
      "9.0",  // Dark Blue
      "8.5",  // Light Blue
      "7.0",  // Green
      "5.5",  // Yellow
      "4.0",  // Orange
      "12:33", // Gray
    ];
  
    // Select required elements
    const dataDisplay = svgElement.querySelector("#dataDisplay");
    const displayColour = svgElement.querySelector("#displayColour");
    const textDisplay = svgElement.querySelector("#textDisplay");
    const textColorElement = svgElement.querySelector("#textcolor");
  
    if (!dataDisplay || !displayColour || !textDisplay || !textColorElement) {
      console.error("One or more required SVG elements are missing.");
      return;
    }
  
    // Set the initial opacity
    dataDisplay.style.opacity = 0;
    textDisplay.style.opacity = 0;
  
    // Initialize GSAP timeline
    const timeline = gsap.timeline({
      repeat: -1, // Infinite loop
      repeatDelay,
    });
  
    // Add transitions to the timeline
    colors.forEach((color, index) => {
      timeline.to(
        [displayColour, textColorElement], // Apply the same color to both elements
        {
          fill: color,
          duration: durationPerStep,
          ease: "power4.out",
          onStart: () => {
            // Fade in dataDisplay and update text
            if (index === 0) {
              gsap.to(dataDisplay, {
                opacity: 1,
                duration: 1,
                ease: "power4.inOut",
              });
            }
  
            const value = phValues[index % phValues.length];
            textDisplay.textContent = value;
  
            gsap.to(textDisplay, {
              opacity: 1,
              duration: 1,
              ease: "power4.out",
            });
          },
          onComplete: () => {
            // Fade out dataDisplay at the end of the loop
            if (index === colors.length - 1) {
              gsap.to(dataDisplay, {
                opacity: 0,
                duration: 1,
                ease: "power4.inOut",
              });
            }
  
            // Fade out text for the next transition
            gsap.to(textDisplay, {
              opacity: 0,
              duration: 1,
              ease: "power4.inOut",
            });
          },
        },
        index * durationPerStep // Stagger transitions
      );
    });
  
    // Cleanup on component unmount
    return () => {
      timeline.kill();
    };
  }, []);
  
  
    

  
  return (
    <div>
      <svg
        width="100%"
        height="auto"
        ref={svgRef}
        viewBox="0 0 660 497"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
            <g>
              <rect
                x="17.6172"
                y="17.2617"
                width="393.8077"
                height="458.885"
                id="displayColour"
                fill="red"
              />
              
              <g  id="allData" transform="translate(285, 0)">
              <g id="dataDisplay">
              <rect
                x="22.4531"
                y="25.9219"
                width="83.0769"
                height="6.23077"
                rx="1.38462"
                fill="#050E82"
              />
                
                <path
                  d="M47.2773 45.9826C47.2773 46.4395 47.1123 46.805 46.7823 47.0792C46.4574 47.3483 46.0284 47.4828 45.4953 47.4828C44.9165 47.4828 44.4368 47.3736 44.056 47.1553V46.173C44.4926 46.4877 44.9698 46.6451 45.4877 46.6451C45.7212 46.6451 45.9091 46.5893 46.0512 46.4776C46.1934 46.3608 46.2644 46.206 46.2644 46.013C46.2644 45.9216 46.2467 45.8404 46.2111 45.7693C46.1756 45.6983 46.102 45.6272 45.9903 45.5561C45.8837 45.485 45.7999 45.4343 45.739 45.4038C45.6831 45.3733 45.5638 45.3175 45.3811 45.2363C45.3303 45.2109 45.2922 45.1931 45.2668 45.183C45.079 45.0966 44.9267 45.0205 44.8099 44.9545C44.6931 44.8834 44.5662 44.7895 44.4291 44.6727C44.2921 44.556 44.188 44.4163 44.1169 44.2539C44.0509 44.0914 44.0179 43.9061 44.0179 43.698C44.0179 43.2613 44.1778 42.911 44.4977 42.647C44.8226 42.383 45.2516 42.251 45.7847 42.251C46.267 42.251 46.6833 42.3348 47.0336 42.5023V43.4314C46.6528 43.203 46.2467 43.0887 45.8151 43.0887C45.5765 43.0887 45.3887 43.142 45.2516 43.2486C45.1196 43.3553 45.0536 43.4923 45.0536 43.6599C45.0536 43.8274 45.1247 43.967 45.2668 44.0787C45.4141 44.1853 45.6324 44.3046 45.9218 44.4366C46.1248 44.528 46.2898 44.6093 46.4168 44.6803C46.5437 44.7463 46.6808 44.8403 46.828 44.9621C46.9803 45.084 47.092 45.2312 47.1631 45.4038C47.2392 45.5713 47.2773 45.7643 47.2773 45.9826ZM51.3559 43.0811H50.0537V47.4219H49.0865V43.0811H47.7843V42.2891H51.3559V43.0811Z"
                  fill="#050E82"
                />
                <path
                  d="M68.0351 98.6037C68.0351 99.0606 67.8701 99.4261 67.5401 99.7003C67.2152 99.9694 66.7862 100.104 66.2531 100.104C65.6743 100.104 65.1946 99.9947 64.8138 99.7764V98.794C65.2504 99.1088 65.7276 99.2662 66.2455 99.2662C66.479 99.2662 66.6669 99.2104 66.809 99.0987C66.9512 98.9819 67.0223 98.827 67.0223 98.6341C67.0223 98.5427 67.0045 98.4615 66.969 98.3904C66.9334 98.3194 66.8598 98.2483 66.7481 98.1772C66.6415 98.1061 66.5577 98.0554 66.4968 98.0249C66.441 97.9944 66.3216 97.9386 66.1389 97.8574C66.0881 97.832 66.05 97.8142 66.0246 97.804C65.8368 97.7177 65.6845 97.6416 65.5677 97.5756C65.451 97.5045 65.324 97.4106 65.187 97.2938C65.0499 97.177 64.9458 97.0374 64.8747 96.875C64.8087 96.7125 64.7757 96.5272 64.7757 96.319C64.7757 95.8824 64.9356 95.5321 65.2555 95.2681C65.5804 95.0041 66.0094 94.8721 66.5425 94.8721C67.0248 94.8721 67.4411 94.9559 67.7914 95.1234V96.0525C67.4106 95.824 67.0045 95.7098 66.573 95.7098C66.3343 95.7098 66.1465 95.7631 66.0094 95.8697C65.8774 95.9764 65.8114 96.1134 65.8114 96.281C65.8114 96.4485 65.8825 96.5881 66.0246 96.6998C66.1719 96.8064 66.3902 96.9257 66.6796 97.0577C66.8826 97.1491 67.0476 97.2304 67.1746 97.3014C67.3015 97.3674 67.4386 97.4614 67.5858 97.5832C67.7381 97.705 67.8498 97.8523 67.9209 98.0249C67.997 98.1924 68.0351 98.3854 68.0351 98.6037ZM72.1137 95.7022H70.8115V100.043H69.8444V95.7022H68.5421V94.9102H72.1137V95.7022Z"
                  fill="#0B1382"
                />
                <path
                  d="M47.3551 68.0538H46.7874V69.5769H47.3689C47.6366 69.5769 47.8374 69.51 47.9712 69.3762C48.1051 69.2377 48.172 69.0462 48.172 68.8015C48.172 68.5615 48.1004 68.3769 47.9574 68.2477C47.8189 68.1185 47.6181 68.0538 47.3551 68.0538ZM46.7874 72H45.9151V67.3338H47.3551C47.8858 67.3338 48.3012 67.4677 48.6012 67.7354C48.9058 68.0031 49.0581 68.3608 49.0581 68.8085C49.0535 69.1408 48.9727 69.4223 48.8158 69.6531C48.6589 69.8792 48.4443 70.0477 48.172 70.1585L49.3697 72H48.3243L47.2651 70.2969H46.7874V72ZM51.5149 72H49.9918V67.3338H51.5149C52.2118 67.3338 52.7818 67.5485 53.2249 67.9777C53.668 68.4069 53.8895 68.9492 53.8895 69.6046C53.8895 70.32 53.6749 70.8992 53.2457 71.3423C52.8164 71.7808 52.2395 72 51.5149 72ZM51.4872 68.0677H50.8849V71.2731H51.5011C51.9903 71.2731 52.3618 71.1231 52.6157 70.8231C52.8695 70.5185 52.9964 70.1123 52.9964 69.6046C52.9964 69.1569 52.8603 68.79 52.588 68.5038C52.3203 68.2131 51.9534 68.0677 51.4872 68.0677Z"
                  fill="#0B1382"
                />
                <path
                  d="M88.1379 48.1133H87.2656V43.4471H88.2556L89.3771 45.3925C89.5617 45.711 89.7256 46.0087 89.8686 46.2856C90.0163 46.5579 90.1156 46.7517 90.1663 46.8671L90.2425 47.0402C90.2056 46.6571 90.1871 46.1079 90.1871 45.3925V43.4471H91.0663V48.1133H90.0694L88.934 46.1748C88.754 45.8702 88.5902 45.5794 88.4425 45.3025C88.2994 45.021 88.2002 44.8179 88.1448 44.6933L88.0617 44.4994C88.1125 44.9379 88.1379 45.4941 88.1379 46.1679V48.1133ZM93.555 48.1133H92.0319V43.4471H93.555C94.2519 43.4471 94.8219 43.6617 95.265 44.091C95.7081 44.5202 95.9296 45.0625 95.9296 45.7179C95.9296 46.4333 95.715 47.0125 95.2858 47.4556C94.8566 47.8941 94.2796 48.1133 93.555 48.1133ZM93.5273 44.181H92.925V47.3864H93.5412C94.0304 47.3864 94.4019 47.2364 94.6558 46.9364C94.9096 46.6317 95.0366 46.2256 95.0366 45.7179C95.0366 45.2702 94.9004 44.9033 94.6281 44.6171C94.3604 44.3264 93.9935 44.181 93.5273 44.181Z"
                  fill="#071082"
                />
                <path
                  d="M94.0207 101.078H93.1484V96.412H94.1384L95.2599 98.3574C95.4445 98.6758 95.6084 98.9735 95.7515 99.2504C95.8991 99.5227 95.9984 99.7166 96.0491 99.832L96.1253 100.005C96.0884 99.622 96.0699 99.0727 96.0699 98.3574V96.412H96.9491V101.078H95.9522L94.8168 99.1397C94.6368 98.835 94.473 98.5443 94.3253 98.2674C94.1822 97.9858 94.083 97.7827 94.0276 97.6581L93.9445 97.4643C93.9953 97.9027 94.0207 98.4589 94.0207 99.1327V101.078ZM99.4378 101.078H97.9148V96.412H99.4378C100.135 96.412 100.705 96.6266 101.148 97.0558C101.591 97.485 101.812 98.0274 101.812 98.6827C101.812 99.3981 101.598 99.9774 101.169 100.42C100.739 100.859 100.162 101.078 99.4378 101.078ZM99.4101 97.1458H98.8078V100.351H99.424C99.9132 100.351 100.285 100.201 100.539 99.9012C100.792 99.5966 100.919 99.1904 100.919 98.6827C100.919 98.235 100.783 97.8681 100.511 97.582C100.243 97.2912 99.8763 97.1458 99.4101 97.1458Z"
                  fill="#0B1382"
                />
                <path
                  d="M64.3408 100.66H58.2777V99.9164C60.0133 99.8037 60.171 99.5783 60.171 98.1358V92.1403C60.171 91.081 60.1034 90.9683 59.2469 90.9007L58.1876 90.8556V90.202C59.5625 89.9766 60.9599 89.5934 62.47 89.1201V98.1358C62.47 99.5557 62.6278 99.8037 64.3408 99.9164V100.66Z"
                  fill="#0B1382"
                />
                <path
                  d="M78.6179 47.7695V46.4036C79.6058 45.493 80.4695 44.6568 81.209 43.8952C81.9541 43.1336 82.5308 42.4354 82.9392 41.8008C83.3531 41.1661 83.5601 40.5783 83.5601 40.0375C83.5601 39.469 83.4083 39.022 83.1048 38.6963C82.8013 38.3707 82.3708 38.2079 81.8134 38.2079C81.405 38.2079 81.0297 38.3266 80.6875 38.5639C80.3453 38.8012 80.028 39.0772 79.7355 39.3917L78.5599 38.2328C79.0677 37.6588 79.5975 37.22 80.1494 36.9165C80.7013 36.6074 81.358 36.4529 82.1197 36.4529C82.8371 36.4529 83.4635 36.5964 83.9989 36.8834C84.5397 37.1648 84.9592 37.5622 85.2572 38.0755C85.5552 38.5887 85.7042 39.1931 85.7042 39.8884C85.7042 40.5728 85.5166 41.2461 85.1413 41.9084C84.7715 42.5651 84.2776 43.2302 83.6594 43.9035C83.0413 44.5768 82.3653 45.2805 81.6312 46.0145C81.9182 45.9814 82.2328 45.9538 82.575 45.9317C82.9227 45.9096 83.2317 45.8986 83.5022 45.8986H86.234V47.7695H78.6179Z"
                  fill="#0B1482"
                />
                <path
                  d="M84.5163 100.734V99.3684C85.5042 98.4578 86.3679 97.6217 87.1075 96.8601C87.8525 96.0984 88.4293 95.4003 88.8377 94.7656C89.2516 94.1309 89.4585 93.5432 89.4585 93.0023C89.4585 92.4338 89.3068 91.9868 89.0032 91.6612C88.6997 91.3356 88.2692 91.1728 87.7118 91.1728C87.3034 91.1728 86.9281 91.2914 86.5859 91.5287C86.2437 91.766 85.9264 92.042 85.6339 92.3566L84.4584 91.1976C84.9661 90.6236 85.4959 90.1849 86.0478 89.8813C86.5997 89.5723 87.2565 89.4177 88.0181 89.4177C88.7356 89.4177 89.362 89.5612 89.8973 89.8482C90.4382 90.1297 90.8576 90.527 91.1556 91.0403C91.4537 91.5536 91.6027 92.1579 91.6027 92.8533C91.6027 93.5376 91.415 94.211 91.0397 94.8732C90.67 95.53 90.176 96.195 89.5579 96.8683C88.9398 97.5417 88.2637 98.2453 87.5297 98.9793C87.8167 98.9462 88.1312 98.9186 88.4734 98.8966C88.8211 98.8745 89.1302 98.8634 89.4006 98.8634H92.1325V100.734H84.5163Z"
                  fill="#0B1382"
                />
                <path
                  d="M40.8763 71.5381C40.0366 71.5381 39.3291 71.3956 38.7538 71.1105C38.1836 70.8202 37.7171 70.473 37.3543 70.0687L38.2251 68.9102C38.5361 69.2264 38.8963 69.4985 39.3058 69.7266C39.7204 69.9546 40.1947 70.0687 40.7286 70.0687C41.3039 70.0687 41.773 69.9235 42.1359 69.6333C42.5039 69.343 42.6879 68.9413 42.6879 68.4281C42.6879 68.0653 42.5946 67.7491 42.408 67.4796C42.2266 67.2049 41.9078 66.9924 41.4517 66.8421C41.0007 66.6917 40.3761 66.6166 39.5779 66.6166V65.2871C40.6146 65.2871 41.3324 65.1238 41.7316 64.7972C42.1359 64.4707 42.338 64.0638 42.338 63.5766C42.338 63.1308 42.1955 62.7809 41.9104 62.527C41.6305 62.273 41.2443 62.146 40.7519 62.146C40.3424 62.146 39.9666 62.2367 39.6245 62.4181C39.2876 62.5995 38.9585 62.8406 38.6371 63.1412L37.7041 62.0138C38.1344 61.6251 38.6034 61.3089 39.1114 61.0653C39.6245 60.8217 40.1947 60.6999 40.8219 60.6999C41.8067 60.6999 42.6075 60.9383 43.2243 61.4152C43.8463 61.892 44.1573 62.571 44.1573 63.4522C44.1573 64.0327 43.9915 64.5225 43.6597 64.9216C43.3332 65.3208 42.89 65.6318 42.3302 65.8546V65.9246C42.947 66.0853 43.4654 66.3859 43.8852 66.8265C44.3102 67.2671 44.5228 67.8347 44.5228 68.5292C44.5228 69.1616 44.3569 69.7032 44.0252 70.1542C43.6934 70.5999 43.2503 70.942 42.6957 71.1805C42.1462 71.4189 41.5398 71.5381 40.8763 71.5381Z"
                  fill="#0B1382"
                />
                <rect
                  x="68.1562"
                  y="51.8828"
                  width="33.9231"
                  height="6.57692"
                  rx="2.07692"
                  fill="#050E82"
                />
                
                <rect
                  x="22.4531"
                  y="80.2656"
                  width="27.3462"
                  height="6.57692"
                  rx="2.07692"
                  fill="#050E82"
                />
                
                <rect
                  x="53.2656"
                  y="80.2656"
                  width="48.8077"
                  height="6.57692"
                  rx="1.38462"
                  fill="#0B1382"
                />
                
                <path
                  d="M32.1572 98.1523H30.4402V95.1727H27.7042V98.1523H25.9984V90.6865H27.7042V93.7216H30.4402V90.6865H32.1572V98.1523ZM36.7435 98.1523H33.1214V97.2136C33.7195 96.8037 34.2457 96.3496 34.6998 95.8511C35.1595 95.3527 35.3894 94.9123 35.3894 94.5302C35.3894 94.2976 35.3201 94.1148 35.1817 93.9819C35.0432 93.8434 34.8328 93.7742 34.5503 93.7742C34.0795 93.7742 33.6337 93.9487 33.2128 94.2976V93.1262C33.3955 92.9933 33.6337 92.8797 33.9272 92.7856C34.2208 92.6914 34.5088 92.6443 34.7912 92.6443C35.3561 92.6443 35.8048 92.7939 36.1371 93.093C36.4749 93.3865 36.6438 93.7991 36.6438 94.3308C36.6438 95.289 36.0346 96.2194 34.8161 97.1222H36.7435V98.1523ZM44.7436 94.3973C44.7436 95.5419 44.4113 96.4687 43.7467 97.1776C43.0895 97.8791 42.2107 98.2299 41.1104 98.2299C40.0027 98.2299 39.1203 97.8791 38.463 97.1776C37.8058 96.476 37.4772 95.5493 37.4772 94.3973C37.4772 93.2527 37.8058 92.3296 38.463 91.628C39.1276 90.9191 40.0101 90.5646 41.1104 90.5646C42.2181 90.5646 43.1006 90.9154 43.7578 91.617C44.415 92.3185 44.7436 93.2453 44.7436 94.3973ZM39.7923 92.7357C39.4673 93.1419 39.3049 93.6957 39.3049 94.3973C39.3049 95.0988 39.4673 95.6563 39.7923 96.0699C40.1172 96.476 40.5566 96.6791 41.1104 96.6791C41.6643 96.6791 42.1036 96.476 42.4286 96.0699C42.7535 95.6563 42.916 95.0988 42.916 94.3973C42.916 93.6957 42.7535 93.1419 42.4286 92.7357C42.1036 92.3222 41.6643 92.1154 41.1104 92.1154C40.5566 92.1154 40.1172 92.3222 39.7923 92.7357Z"
                  fill="#0B1382"
                />
                <path
                  d="M93.7069 115.793L88.2188 115.838L88.3987 118.807L93.6169 118.762L93.7069 115.793Z"
                  fill="#0B1382"
                />
                <path
                  d="M93.6169 119.077H88.3987L88.4437 121.641H93.5719L93.6169 119.077Z"
                  fill="#0B1382"
                />
                <path
                  d="M93.5531 121.866H88.4437C88.5048 123.037 88.7253 123.683 89.4333 124.43C90.5196 124.556 91.276 124.536 92.7172 124.43C93.3126 123.959 93.4165 123.205 93.5531 121.866Z"
                  fill="#0B1382"
                />
                <path
                  d="M87.1328 115.57L87.5827 123.398C87.8218 124.398 88.1064 124.875 88.7972 125.647C90.4119 125.776 91.3438 125.797 93.0708 125.647C93.8503 125.105 94.1421 124.612 94.4653 123.398L94.8252 115.57"
                  stroke="#0B1382"
                  stroke-width="0.629785"
                  stroke-linecap="round"
                />
                <path
                  d="M83.378 111.769H99.6472C101.559 111.769 103.108 113.318 103.108 115.23V132.537C103.108 134.449 101.559 135.998 99.6472 135.998H83.378C81.4667 135.998 79.9173 134.449 79.9173 132.537V115.23C79.9173 113.318 81.4667 111.769 83.378 111.769Z"
                  stroke="#1D005C"
                  stroke-width="0.693973"
                />
                <path
                  d="M86.4387 150.697H84.4219V154.668H86.4387V150.697Z"
                  fill="#0B1382"
                />
                <path
                  d="M87.321 154.668V150.697L90.8504 148.113V157.189L87.321 154.668Z"
                  fill="#0B1382"
                />
                <path
                  d="M93.8906 149.312C96.1595 151.14 96.2003 154.056 93.8906 156.119"
                  stroke="#360373"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M92.3906 150.82C93.462 151.64 93.462 153.467 92.5797 154.476"
                  stroke="#360373"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M95.8438 148.113C98.7429 150.13 99.1841 154.857 95.8438 157.441"
                  stroke="#360373"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <line
                  x1="50.1508"
                  y1="148.805"
                  x2="50.1508"
                  y2="156.42"
                  stroke="#050E82"
                  stroke-width="0.692308"
                />
                <path
                  d="M50.1562 88.582L50.1563 103.12"
                  stroke="#050E82"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M64.3516 59.1523L64.3516 73.6908"
                  stroke="#252B80"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M64 34.2344L64 51.8882"
                  stroke="#050E82"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M77.8438 88.582L77.8438 103.12"
                  stroke="#050E82"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <line
                  x1="77.5024"
                  y1="149.148"
                  x2="77.5024"
                  y2="156.764"
                  stroke="#050E82"
                  stroke-width="0.692308"
                />
                <line
                  x1="63.9946"
                  y1="162.305"
                  x2="63.9946"
                  y2="169.92"
                  stroke="#050E82"
                  stroke-width="0.692308"
                />
                <path
                  d="M41.0889 167.136L41.4925 165.247L41.8885 164.92L42.1474 165.247L41.8199 166.755L41.0889 167.136ZM42.0179 164.813L42.4216 164.478H44.6376L43.8761 165.133H42.2845L42.0179 164.813ZM43.1146 169.192L43.4496 167.631L44.1731 167.303L43.7695 169.192L43.3735 169.519L43.1146 169.192ZM40.4872 169.961L41.2564 169.306H42.9851L43.2516 169.626L42.848 169.961H40.4872ZM41.2259 167.219L41.9189 166.861H43.5106L44.0512 167.219L43.3659 167.524H41.7742L41.2259 167.219ZM44.4251 169.192L44.8287 167.303L45.4151 167.631L45.08 169.192L44.684 169.519L44.4251 169.192ZM44.8668 167.136L45.2704 165.247L45.6664 164.92L45.9253 165.247L45.5979 166.755L44.8668 167.136ZM45.7959 164.813L46.1995 164.478H47.7911L48.0577 164.813L47.654 165.133H46.0624L45.7959 164.813ZM47.4103 166.755L47.7378 165.247L48.1338 164.92L48.3927 165.247L47.9891 167.136L47.4103 166.755ZM46.8925 169.192L47.2276 167.631L47.951 167.303L47.5474 169.192L47.1514 169.519L46.8925 169.192ZM44.7678 169.626L45.1714 169.306H46.763L47.0296 169.626L46.626 169.961H45.0343L44.7678 169.626ZM48.6143 166.534L48.8884 165.239L49.2997 164.92L49.5662 165.247L49.2921 166.534L48.8884 166.861L48.6143 166.534ZM49.4215 164.821L49.8251 164.478H51.1426L51.3863 164.821L50.9979 165.133H49.6881L49.4215 164.821ZM50.8151 166.534L51.0893 165.239L51.4777 164.912L51.7442 165.232L51.4701 166.526L51.0664 166.861L50.8151 166.534ZM48.957 166.976L49.3758 166.625H50.6781L50.9294 166.976L50.541 167.273H49.2311L48.957 166.976ZM51.7975 166.702L53.6176 164.478H54.3868L52.0184 167.364L51.7975 166.702ZM49.1321 169.961L51.135 167.524H51.8965L49.9013 169.961H49.1321ZM51.7823 169.169L52.0564 167.882L52.4677 167.554L52.7342 167.882L52.4601 169.177L52.0564 169.504L51.7823 169.169ZM52.5895 167.463L52.9855 167.151H54.2954L54.5619 167.455L54.1507 167.813H52.8484L52.5895 167.463ZM53.9831 169.169L54.2573 167.882L54.6381 167.547L54.9122 167.874L54.6381 169.169L54.2344 169.496L53.9831 169.169ZM52.1326 169.618L52.5286 169.306H53.8308L54.105 169.618L53.7014 169.961H52.3839L52.1326 169.618Z"
                  fill="#0B1382"
                />
                <path
                  d="M29.4087 167.403H27.7887V169.266H26.9095V164.599H29.6441V165.313H27.7887V166.69H29.4087V167.403ZM31.9012 169.266H31.0773V165.638L29.9696 166.309V165.444L31.1673 164.738H31.9012V169.266Z"
                  fill="#0B1382"
                />
                <path
                  d="M74.3319 167.524H72.7119V169.387H71.8327V164.721H74.5673V165.434H72.7119V166.811H74.3319V167.524ZM77.9875 169.387H75.0313V168.722C75.5713 168.339 76.0375 167.931 76.4298 167.497C76.8221 167.058 77.0183 166.664 77.0183 166.313C77.0183 166.082 76.9513 165.902 76.8175 165.773C76.6836 165.644 76.4898 165.579 76.2359 165.579C75.8529 165.579 75.4859 165.722 75.1352 166.008V165.198C75.2875 165.083 75.4767 164.988 75.7029 164.914C75.929 164.841 76.1552 164.804 76.3813 164.804C76.8244 164.804 77.1844 164.926 77.4613 165.171C77.7429 165.411 77.8836 165.75 77.8836 166.188C77.8836 167.01 77.3159 167.838 76.1806 168.674H77.9875V169.387Z"
                  fill="#0B1382"
                />
                <path
                  d="M87.1279 167.136L87.5315 165.247L87.9275 164.92L88.1865 165.247L87.859 166.755L87.1279 167.136ZM88.057 164.813L88.4606 164.478H90.6767L89.9152 165.133H88.3235L88.057 164.813ZM89.1536 169.192L89.4887 167.631L90.2122 167.303L89.8085 169.192L89.4125 169.519L89.1536 169.192ZM86.5263 169.961L87.2955 169.306H89.0242L89.2907 169.626L88.8871 169.961H86.5263ZM87.265 167.219L87.958 166.861H89.5496L90.0903 167.219L89.4049 167.524H87.8133L87.265 167.219ZM90.4642 169.192L90.8678 167.303L91.4542 167.631L91.1191 169.192L90.7231 169.519L90.4642 169.192ZM90.9059 167.136L91.3095 165.247L91.7055 164.92L91.9644 165.247L91.6369 166.755L90.9059 167.136ZM91.8349 164.813L92.2386 164.478H93.8302L94.0967 164.813L93.6931 165.133H92.1015L91.8349 164.813ZM93.4494 166.755L93.7769 165.247L94.1729 164.92L94.4318 165.247L94.0282 167.136L93.4494 166.755ZM92.9316 169.192L93.2666 167.631L93.9901 167.303L93.5865 169.192L93.1905 169.519L92.9316 169.192ZM90.8069 169.626L91.2105 169.306H92.8021L93.0686 169.626L92.665 169.961H91.0734L90.8069 169.626ZM94.6534 166.534L94.9275 165.239L95.3387 164.92L95.6053 165.247L95.3311 166.534L94.9275 166.861L94.6534 166.534ZM95.4606 164.821L95.8642 164.478H97.1817L97.4254 164.821L97.037 165.133H95.7271L95.4606 164.821ZM96.8542 166.534L97.1284 165.239L97.5167 164.912L97.7833 165.232L97.5091 166.526L97.1055 166.861L96.8542 166.534ZM94.996 166.976L95.4149 166.625H96.7171L96.9684 166.976L96.58 167.273H95.2702L94.996 166.976ZM97.8366 166.702L99.6567 164.478H100.426L98.0574 167.364L97.8366 166.702ZM95.1712 169.961L97.174 167.524H97.9356L95.9404 169.961H95.1712ZM97.8214 169.169L98.0955 167.882L98.5067 167.554L98.7733 167.882L98.4991 169.177L98.0955 169.504L97.8214 169.169ZM98.6286 167.463L99.0246 167.151H100.334L100.601 167.455L100.19 167.813H98.8875L98.6286 167.463ZM100.022 169.169L100.296 167.882L100.677 167.547L100.951 167.874L100.677 169.169L100.274 169.496L100.022 169.169ZM98.1717 169.618L98.5677 169.306H99.8699L100.144 169.618L99.7404 169.961H98.423L98.1717 169.618Z"
                  fill="#0B1382"
                />
                <path
                  d="M84.8932 60.1953L79.4688 64.565V67.227L84.8932 63.1587L90.3176 67.227V64.565L84.8932 60.1953Z"
                  fill="#050E82"
                />
                <path
                  d="M81.1663 69.7386L81.0156 68.1816L84.9333 64.8164L88.8007 68.0811L88.65 69.7386L84.9333 66.8757L81.1663 69.7386Z"
                  fill="#050E82"
                />
                <path
                  d="M84.8495 68.5859L81.4844 71.4991V73.0058L84.8495 70.3941L88.3151 73.0058V71.4991L84.8495 68.5859Z"
                  fill="#050E82"
                />
                <path
                  d="M24.1875 55.3438H60.8798"
                  stroke="#0B1382"
                  stroke-width="0.692308"
                  stroke-linecap="round"
                />
                <path
                  d="M40.0542 47.6914V38.3729H38.5588V36.4068H42.0203V48.6745L40.0542 47.6914Z"
                  fill="#050E82"
                />
                <path
                  d="M32.2101 153.656C32.2448 153.906 32.313 154.093 32.4146 154.217C32.6005 154.443 32.9191 154.556 33.3702 154.556C33.6404 154.556 33.8598 154.526 34.0284 154.466C34.3482 154.352 34.5081 154.14 34.5081 153.831C34.5081 153.65 34.4288 153.51 34.2701 153.41C34.1114 153.314 33.8623 153.228 33.5227 153.154L32.9426 153.024C32.3725 152.895 31.9783 152.755 31.7601 152.603C31.3908 152.351 31.2061 151.955 31.2061 151.417C31.2061 150.926 31.3846 150.519 31.7416 150.194C32.0985 149.869 32.6228 149.707 33.3145 149.707C33.8921 149.707 34.3841 149.86 34.7907 150.168C35.1997 150.473 35.4141 150.917 35.434 151.499H34.3333C34.3135 151.169 34.1697 150.935 33.902 150.796C33.7235 150.705 33.5016 150.659 33.2364 150.659C32.9414 150.659 32.7059 150.718 32.5299 150.837C32.3539 150.956 32.2659 151.122 32.2659 151.335C32.2659 151.531 32.3526 151.678 32.5261 151.774C32.6377 151.839 32.8757 151.914 33.2401 152.001L34.1846 152.228C34.5986 152.327 34.9109 152.46 35.1216 152.626C35.4489 152.884 35.6125 153.257 35.6125 153.745C35.6125 154.246 35.4203 154.662 35.0361 154.994C34.6543 155.324 34.1139 155.489 33.4149 155.489C32.7009 155.489 32.1394 155.327 31.7304 155.002C31.3214 154.675 31.1169 154.226 31.1169 153.656H32.2101ZM40.5134 150.837H37.613V152.001H40.2754V152.953H37.613V154.362H40.6472V155.348H36.4937V149.867H40.5134V150.837ZM45.5221 149.867V150.837H43.8823V155.348H42.7296V150.837H41.0823V149.867H45.5221Z"
                  fill="#0B1382"
                />
                <path
                  d="M58.5896 150.819V152.291H59.8874C60.1452 152.291 60.3385 152.261 60.4674 152.202C60.6955 152.098 60.8095 151.892 60.8095 151.585C60.8095 151.252 60.6992 151.029 60.4786 150.915C60.3546 150.851 60.1687 150.819 59.9208 150.819H58.5896ZM60.1588 149.867C60.543 149.874 60.838 149.921 61.0438 150.008C61.252 150.095 61.428 150.222 61.5718 150.391C61.6908 150.53 61.785 150.683 61.8544 150.852C61.9238 151.021 61.9585 151.213 61.9585 151.428C61.9585 151.689 61.8928 151.945 61.7615 152.198C61.6301 152.449 61.4132 152.626 61.1107 152.73C61.3636 152.832 61.5421 152.977 61.6462 153.165C61.7528 153.351 61.8061 153.636 61.8061 154.02V154.388C61.8061 154.639 61.816 154.808 61.8358 154.898C61.8656 155.039 61.935 155.143 62.0441 155.21V155.348H60.7835C60.7488 155.226 60.724 155.128 60.7091 155.054C60.6794 154.9 60.6633 154.743 60.6608 154.582L60.6534 154.072C60.6484 153.723 60.5839 153.49 60.46 153.373C60.3385 153.257 60.1092 153.198 59.7721 153.198H58.5896V155.348H57.4704V149.867H60.1588ZM66.9301 149.867V150.837H65.2903V155.348H64.1375V150.837H62.4903V149.867H66.9301ZM68.7484 150.819V152.291H70.0462C70.304 152.291 70.4973 152.261 70.6262 152.202C70.8543 152.098 70.9683 151.892 70.9683 151.585C70.9683 151.252 70.858 151.029 70.6374 150.915C70.5134 150.851 70.3275 150.819 70.0796 150.819H68.7484ZM70.3176 149.867C70.7019 149.874 70.9968 149.921 71.2026 150.008C71.4108 150.095 71.5868 150.222 71.7306 150.391C71.8496 150.53 71.9438 150.683 72.0132 150.852C72.0826 151.021 72.1173 151.213 72.1173 151.428C72.1173 151.689 72.0516 151.945 71.9203 152.198C71.7889 152.449 71.572 152.626 71.2695 152.73C71.5224 152.832 71.7009 152.977 71.805 153.165C71.9116 153.351 71.9649 153.636 71.9649 154.02V154.388C71.9649 154.639 71.9748 154.808 71.9946 154.898C72.0244 155.039 72.0938 155.143 72.2029 155.21V155.348H70.9423C70.9076 155.226 70.8828 155.128 70.8679 155.054C70.8382 154.9 70.8221 154.743 70.8196 154.582L70.8122 154.072C70.8072 153.723 70.7428 153.49 70.6188 153.373C70.4973 153.257 70.268 153.198 69.9309 153.198H68.7484V155.348H67.6292V149.867H70.3176Z"
                  fill="#0B1382"
                />
                <path
                  d="M86.8684 131.27C87.0719 131.319 87.2464 131.416 87.445 131.581L87.1107 132.012C86.7908 131.808 86.6357 131.76 86.437 131.76C86.3014 131.76 86.219 131.774 86.0833 131.803C85.9767 131.828 85.8652 131.837 85.7392 131.837C84.707 131.837 84.0867 131.144 84.0867 130.098C84.0867 129.046 84.707 128.353 85.7392 128.353C86.7666 128.353 87.3917 129.046 87.3917 130.098C87.3917 130.568 87.2173 130.999 86.8684 131.27ZM84.7845 130.098C84.7845 130.878 85.1431 131.338 85.7392 131.338C86.3304 131.338 86.689 130.878 86.689 130.098C86.689 129.313 86.3304 128.857 85.7392 128.857C85.1431 128.857 84.7845 129.313 84.7845 130.098ZM90.5933 128.949H89.4593V131.77H88.7906V128.949H87.6566V128.426H90.5933V128.949ZM92.4884 130.476V131.77H91.8245V130.476L90.642 128.426H91.398L92.1783 129.884L92.9343 128.426H93.6709L92.4884 130.476ZM95.1311 131.023C95.3734 131.023 95.5382 131.193 95.5382 131.43C95.5382 131.668 95.3734 131.837 95.1311 131.837C94.8936 131.837 94.7289 131.668 94.7289 131.43C94.7289 131.193 94.8936 131.023 95.1311 131.023ZM97.5935 128.358C98.4997 128.358 98.9698 128.852 99.0376 129.511L99.0425 129.56H98.3737L98.364 129.511C98.2816 129.099 98.0296 128.857 97.5838 128.857C97.0459 128.857 96.6824 129.317 96.6824 130.078C96.6824 130.912 97.0653 131.338 97.5741 131.338C98.0103 131.338 98.2623 131.077 98.3495 130.66L98.3592 130.611H99.0231L99.0183 130.66C98.9456 131.372 98.4028 131.837 97.545 131.837C96.6146 131.837 95.9749 131.183 95.9749 130.117C95.9749 129.022 96.6679 128.358 97.5935 128.358Z"
                  fill="#0B1382"
                />
                <rect
              x="22.9724"
              y="146.558"
              width="82.0385"
              height="12.4615"
              rx="2.59615"
              stroke="#050E82"
              stroke-width="1.03846"
            />
            <path
              d="M25.2344 139.117H71.2728"
              stroke="#0B1382"
              stroke-width="2.07692"
              stroke-linecap="round"
              stroke-dasharray="4.15 4.15"
            />
            <path
              d="M47.8156 113.437C47.8156 113.276 47.8044 113.037 47.782 112.719L48.2782 112.652L48.3385 113.014C48.4279 112.938 48.5195 112.871 48.6134 112.813C48.7117 112.751 48.8168 112.699 48.9285 112.659C49.0447 112.614 49.1676 112.592 49.2973 112.592C49.4805 112.592 49.6526 112.623 49.8135 112.686C49.9789 112.748 50.1219 112.849 50.2426 112.987C50.3677 113.126 50.4661 113.307 50.5376 113.53C50.6091 113.75 50.6448 114.02 50.6448 114.342C50.6448 114.668 50.5957 114.945 50.4974 115.173C50.4035 115.397 50.2783 115.58 50.1219 115.723C49.9699 115.861 49.7956 115.962 49.599 116.025C49.4068 116.087 49.2101 116.118 49.009 116.118C48.7944 116.114 48.5754 116.087 48.3519 116.038V117.493L47.8156 117.56V113.437ZM49.009 115.649C49.1967 115.649 49.3576 115.616 49.4917 115.549C49.6258 115.481 49.7353 115.39 49.8202 115.274C49.9096 115.153 49.9744 115.017 50.0146 114.865C50.0549 114.708 50.075 114.543 50.075 114.369C50.075 114.212 50.0593 114.056 50.028 113.899C50.0012 113.743 49.9543 113.604 49.8872 113.484C49.8247 113.358 49.7397 113.258 49.6325 113.182C49.5252 113.101 49.3934 113.061 49.2369 113.061C49.1207 113.061 49.0112 113.084 48.9084 113.128C48.8056 113.168 48.7073 113.22 48.6134 113.282C48.524 113.341 48.4368 113.408 48.3519 113.484V115.542C48.4011 115.56 48.4547 115.578 48.5128 115.595C48.5754 115.609 48.6469 115.622 48.7274 115.636C48.8123 115.645 48.9062 115.649 49.009 115.649ZM50.9481 111.459H51.5112V113.437H53.8243V111.459H54.3875V116.031H53.8243V113.939H51.5112V116.031H50.9481V111.459Z"
              fill="#260067"
            />

            
            
              </g>
              <g>
                          <text id="textcolor" fill="transparent" >
                            <tspan x="50" y="31.5" fontSize="6.5" fontWeight="900">
                            ALKALINE
                            </tspan>
                            <tspan x="76" y="57" fontSize="5.5" fontWeight="900">
                            TURBO
                            </tspan>
                            <tspan x="27.5" y="85.5" fontSize="5.5" fontWeight="900">
                            CLEAN
                            </tspan>
                            <tspan x="68" y="85.5" fontSize="5.5" fontWeight="900">
                            ACIDIC
                            </tspan>
                          </text>
              </g>
              <text id="textDisplay"
                fill="#0B1382"
                fontFamily="'MyCustomFont', sans-serif"
                fontSize="22"
                x="45"
                y="127"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                9.5
              </text>
              </g>
            </g>
        </g>
      </svg>
    </div>
  );
};

export default Display;