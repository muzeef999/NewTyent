"use client"
import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";

const NightModeDispay = () => {

    const [currentTime, setCurrentTime] = useState('');
        
          useEffect(() => {
            const updateTime = () => {
              const now = new Date();
              const hours = String(now.getHours()).padStart(2, '0');
              const minutes = String(now.getMinutes()).padStart(2, '0');
              const seconds = String(now.getSeconds()).padStart(2, '0');
              setCurrentTime(`${hours}:${minutes}:${seconds}`);
            };
        
            // Initial call and set interval
            updateTime();
            const timer = setInterval(updateTime, 1000);
        
            // Cleanup interval on component unmount
            return () => clearInterval(timer);
          }, []);
        
    
          useEffect(() => {
            const groups = ["#alk1", "#alk2", "#alk3", "#h20", "#qty", "#turbo", "#acd1", "#acd2", "#acd3"];
            let currentIndex = 0;
        
            const highlight = () => {
              const currentGroup = groups[currentIndex];
              const others = groups.filter((id) => id !== currentGroup);
        
              // Highlight the current group
              gsap.to(currentGroup, { opacity: 1, scale: 1, duration: 0.5 });
              // Dim others
              gsap.to(others.join(", "), { opacity: 0.3, scale: 1, duration: 0.5 });
        
              // Update index
              currentIndex = (currentIndex + 1) % groups.length;
            };
        
            // Initial highlight and interval
            highlight();
            const interval = setInterval(highlight, 3000);
        
            return () => clearInterval(interval); // Cleanup on unmount
          }, []);
  return (
    <div>
        <svg
              width="100%"
              height="auto"
              viewBox="0 0 296 405"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_ii_4826_3862)">
                <g clipPath="url(#clip0_4826_3862)">
                  <rect
                    x="2.64453"
                    y="2"
                    width="291.252"
                    height="401.027"
                    rx="15.2289"
                    fill="#0E0E0E"
                  />
                  <g clipPath="url(#clip1_4826_3862)">
                    <rect
                      x="33.1016"
                      y="67.9922"
                      width="230.971"
                      height="302.039"
                      rx="7.61443"
                      fill="url(#paint0_linear_4826_3862)"
                    />
                    <g id="alk1">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(45.1602 113.672)"
                        fill="#024B70"
                      />
                      <text
                        x="78"
                        y="150"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        1
                      </text>
                      <text
                        x="78"
                        y="174"
                        font-size="21"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        ALK
                      </text>
                    </g>
                    <g id="alk2">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(116.1602 113.672)"
                        fill="#024B70"
                      />
                      <text
                        x="149"
                        y="150"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        2
                      </text>
                      <text
                        x="149"
                        y="174"
                        font-size="21"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        ALK
                      </text>
                    </g>
                    <g id="alk3">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(187.1602 113.672)"
                        fill="#024B70"
                      />
                      <text
                        x="220"
                        y="150"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        3
                      </text>
                      <text
                        x="220"
                        y="174"
                        font-size="21"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        ALK
                      </text>
                    </g>

                    <g id="h20">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(45.1602 185.672)"
                        fill="#024B70"
                      />
                      <text
                        x="78"
                        y="230"
                        font-size="30"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="900"
                      >
                        H20
                      </text>
                    </g>

                    <g id="qty">
                      <rect 
                        width="67.2608"
                        height="67.2608"
                        transform="translate(114.957 185.375)"
                        fill="#024B70"
                      />
                      <path
                        d="M132.723 192.992C135.527 193.652 136.462 194.822 136.847 198.068V216.153C137.626 219.526 138.881 220.898 141.923 222.498C148.225 223.09 151.631 223.067 157.47 222.498C161.18 221.526 162.189 219.916 163.18 216.153V192.992"
                        stroke="#6DC1F7"
                        strokeWidth="2.53814"
                        strokeLinecap="round"
                      />
                      <line
                        x1="148.585"
                        y1="199.34"
                        x2="156.834"
                        y2="199.34"
                        stroke="#6DC1F7"
                        strokeWidth="2.53814"
                        strokeLinecap="round"
                      />
                      <line
                        x1="152.394"
                        y1="206.317"
                        x2="156.836"
                        y2="206.317"
                        stroke="#6DC1F7"
                        strokeWidth="2.53814"
                        strokeLinecap="round"
                      />
                      <line
                        x1="147.953"
                        y1="212.661"
                        x2="156.836"
                        y2="212.661"
                        stroke="#6DC1F7"
                        strokeWidth="2.53814"
                        strokeLinecap="round"
                      />
                      <text
                        x="150"
                        y="248"
                        font-size="18"
                        text-anchor="middle"
                        fill="#6DC2F8"
                        font-weight="900"
                      >
                        QTY.C
                      </text>
                    </g>
                    <g id="turbo">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(187.1602 185.672)"
                        fill="#024B70"
                      />
                      <text
                        x="220"
                        y="225"
                        font-size="20"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="900"
                      >
                        TURBO
                      </text>
                    </g>
                    <g id="acd1">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(45.1602 257.672)"
                        fill="#024B70"
                      />
                      <text
                        x="78"
                        y="295"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        1
                      </text>
                      <text
                        x="78"
                        y="320"
                        font-size="20"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="900"
                      >
                        ACD
                      </text>
                    </g>
                    <g id="acd2">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(116.1602 257.672)"
                        fill="#024B70"
                      />
                      <text
                        x="149"
                        y="295"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        2
                      </text>
                      <text
                        x="149"
                        y="320"
                        font-size="20"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="900"
                      >
                        ACD
                      </text>
                    </g>
                    <g id="acd3">
                      <rect
                        width="67.2608"
                        height="67.2608"
                        transform="translate(187.1602 257.672)"
                        fill="#024B70"
                      />
                      <text
                        x="220"
                        y="295"
                        font-size="40"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="bold"
                      >
                        3
                      </text>
                      <text
                        x="220"
                        y="320"
                        font-size="20"
                        text-anchor="middle"
                        fill="#FFF"
                        font-weight="900"
                      >
                        ACD
                      </text>
                    </g>

                    <text
                      x="78"
                      y="355"
                      font-size="18"
                      text-anchor="middle"
                      fill="#FFF"
                      font-weight="400"
                    >
                      F1
                    </text>

                    <text
                      x="118"
                      y="355"
                      font-size="22"
                      text-anchor="middle"
                      fill="#FFF"
                      font-weight="5S00"
                    >
                      50%
                    </text>

                    <text
                      x="180"
                      y="355"
                      font-size="18"
                      text-anchor="middle"
                      fill="#FFF"
                      font-weight="400"
                    >
                      F2
                    </text>

                    <text
                      x="218"
                      y="355"
                      font-size="22"
                      text-anchor="middle"
                      fill="#FFF"
                      font-weight="500"
                    >
                      50%
                    </text>

                    <path
                      d="M38.1797 331.318H258.998V327.51H38.1797V331.318Z"
                      fill="#58ABC9"
                      mask="url(#path-24-inside-1_4826_3862)"
                    />
                    <text
                      x="212"
                      y="98"
                      font-size="19"
                      text-anchor="middle"
                      fill="#FFF"
                      font-weight="500"
                    >          {currentTime || 'Loading...'}
</text>

                    <g id="settings">
                      <path
                        d="M50.0129 99.2392L50.7174 95.9022C50.5295 95.7441 50.3599 95.5737 50.2086 95.3909C50.0572 95.2082 49.9129 95.0185 49.7757 94.8219L46.3703 95.0449L45.2604 89.3474L48.5075 88.2867C48.5311 88.1643 48.5616 88.049 48.599 87.9407L48.8319 87.2659C48.8693 87.1576 48.9164 87.048 48.9734 86.9371L47.0721 84.0991L51.4604 80.2997L54.0031 82.5759C54.2324 82.5059 54.4671 82.4471 54.7073 82.3995C54.9475 82.3519 55.1819 82.3209 55.4106 82.3067L56.9148 79.2457L62.413 81.1438L61.7086 84.4807C61.8964 84.6388 62.066 84.8092 62.2173 84.992C62.3687 85.1748 62.513 85.3644 62.6502 85.561L66.0556 85.3381L67.1655 91.0355L63.9184 92.0963C63.8948 92.2186 63.8644 92.334 63.827 92.4423L63.594 93.1171C63.5566 93.2254 63.5012 93.3321 63.4276 93.4372L65.3288 96.2752L60.9405 100.075L58.4228 97.807C58.1936 97.877 57.9588 97.9358 57.7186 97.9834C57.4784 98.031 57.244 98.062 57.0153 98.0763L55.5111 101.137L50.0129 99.2392ZM55.0551 93.7076C56.0215 94.0412 56.9641 93.9843 57.883 93.537C58.802 93.0897 59.4282 92.3829 59.7618 91.4165C60.0954 90.4502 60.0385 89.5076 59.5912 88.5886C59.1439 87.6697 58.4371 87.0435 57.4708 86.7099C56.4878 86.3705 55.541 86.4259 54.6304 86.8761C53.7198 87.3263 53.0977 88.0345 52.7641 89.0009C52.4305 89.9672 52.4832 90.9084 52.9222 91.8245C53.3611 92.7405 54.0721 93.3682 55.0551 93.7076Z"
                        fill="#9FD3EB"
                      />
                      <path
                        d="M67.4392 102.547L67.5862 100.676C67.4724 100.603 67.3677 100.522 67.2721 100.433C67.1765 100.344 67.0843 100.251 66.9954 100.153L65.1528 100.517L64.1416 97.4868L65.8382 96.6768C65.8423 96.6083 65.8508 96.5432 65.8635 96.4814L65.9426 96.0966C65.9553 96.0348 65.9732 95.9717 65.9964 95.9071L64.7568 94.4937L66.8813 92.1079L68.4309 93.1691C68.551 93.1146 68.675 93.0658 68.8027 93.0227C68.9304 92.9797 69.0561 92.9461 69.1799 92.922L69.7829 91.1445L72.9186 91.789L72.7716 93.6603C72.8854 93.7332 72.99 93.8141 73.0856 93.9031C73.1812 93.9921 73.2735 94.0853 73.3624 94.1828L75.205 93.8188L76.2161 96.8491L74.5196 97.6591C74.5154 97.7275 74.507 97.7926 74.4943 97.8544L74.4152 98.2392C74.4025 98.301 74.3798 98.3632 74.3471 98.4258L75.5867 99.8393L73.4622 102.225L71.9269 101.167C71.8067 101.221 71.6828 101.27 71.5551 101.313C71.4274 101.356 71.3017 101.39 71.1779 101.414L70.5748 103.191L67.4392 102.547ZM69.7972 99.1692C70.3483 99.2825 70.8587 99.1843 71.3284 98.8748C71.798 98.5653 72.0895 98.135 72.2028 97.5839C72.3161 97.0328 72.218 96.5224 71.9085 96.0528C71.599 95.5831 71.1686 95.2917 70.6175 95.1784C70.0569 95.0631 69.5442 95.1608 69.0793 95.4712C68.6144 95.7817 68.3253 96.2125 68.212 96.7636C68.0987 97.3147 68.1944 97.8246 68.4992 98.2933C68.8039 98.762 69.2366 99.0539 69.7972 99.1692Z"
                        fill="#9FD3EB"
                      />
                    </g>
                    <g id="sound">
                      <path
                        d="M84.4506 94.949V86.3828C81.5061 86.6517 79.3736 88.2914 79.6916 91.1418C80.0096 93.9923 81.6501 94.7104 84.4506 94.949Z"
                        fill="#A4DBF3"
                      />
                      <path
                        d="M86.3555 94.9446V86.3783C86.3555 86.0611 97.4257 84.095 99.6807 79.3984C99.0158 82.5078 98.8433 84.294 99.6807 87.6474C102.798 90.4081 101.806 91.6226 99.6807 93.6755C99.2316 96.2952 99.3425 98.4465 99.6807 102.559C96.3628 98.8226 95.6416 96.2704 86.3555 94.9446Z"
                        fill="#A4DBF3"
                      />
                    </g>
                    <g id="waterdroop">
                      <path
                        d="M147.985 94.0503C147.493 94.3315 146.842 94.4722 146.034 94.4722C144.997 94.4722 144.17 94.1601 143.555 93.5361C142.94 92.912 142.632 92.0946 142.632 91.0838C142.632 90.0115 142.913 89.1721 143.476 88.5656C144.038 87.9504 144.755 87.6427 145.625 87.6427C146.478 87.6427 147.154 87.9108 147.655 88.447C148.156 88.9743 148.407 89.739 148.407 90.741C148.407 91.0135 148.38 91.2992 148.328 91.598H143.937C144.025 92.1781 144.271 92.622 144.676 92.9296C145.08 93.2372 145.59 93.3911 146.205 93.3911C146.917 93.3911 147.51 93.2241 147.985 92.8901V94.0503ZM145.651 88.7107C145.212 88.7107 144.834 88.8733 144.517 89.1985C144.201 89.5149 144.003 89.9763 143.924 90.5828H147.154V90.3455C147.137 89.8445 147.001 89.449 146.746 89.1589C146.491 88.8601 146.126 88.7107 145.651 88.7107ZM154.648 94.1426C154.217 94.4062 153.668 94.5381 153 94.5381C151.954 94.5381 151.119 94.2085 150.495 93.5493C149.871 92.8901 149.559 92.0682 149.559 91.0838C149.559 90.1258 149.871 89.3083 150.495 88.6315C151.128 87.946 151.981 87.6032 153.053 87.6032C153.633 87.6032 154.165 87.7262 154.648 87.9723V89.1589C154.217 88.8864 153.73 88.7502 153.185 88.7502C152.49 88.7502 151.932 88.9699 151.51 89.4094C151.097 89.8489 150.891 90.4114 150.891 91.097C150.908 91.7738 151.115 92.3319 151.51 92.7714C151.906 93.2021 152.46 93.4174 153.172 93.4174C153.699 93.4174 154.191 93.2724 154.648 92.9824V94.1426ZM161.289 88.6052C161.843 89.2468 162.12 90.0686 162.12 91.0706C162.12 92.0726 161.834 92.8989 161.263 93.5493C160.7 94.1997 159.922 94.5249 158.929 94.5249C157.945 94.5249 157.171 94.2041 156.609 93.5625C156.046 92.9208 155.765 92.1078 155.765 91.1234C155.765 90.1214 156.055 89.2908 156.635 88.6315C157.215 87.9635 157.98 87.6295 158.929 87.6295C159.949 87.6295 160.735 87.9548 161.289 88.6052ZM157.11 91.0838C157.11 91.743 157.272 92.3012 157.598 92.7582C157.923 93.2065 158.367 93.4306 158.929 93.4306C159.527 93.4306 159.979 93.2109 160.287 92.7714C160.604 92.3319 160.762 91.7738 160.762 91.097C160.762 90.4026 160.612 89.8357 160.313 89.3962C160.015 88.948 159.549 88.7238 158.916 88.7238C158.345 88.7238 157.901 88.9524 157.584 89.4094C157.268 89.8577 157.11 90.4158 157.11 91.0838Z"
                        fill="#A4DBF3"
                      />

                      <path
                        d="M111.953 95.7993C111.409 96.0886 111.198 96.7674 111.535 97.2832C113.031 99.5721 115.25 101.311 117.854 102.21C120.812 103.231 124.046 103.094 126.906 101.826C129.766 100.559 132.04 98.2549 133.27 95.3782C134.5 92.5015 134.595 89.2658 133.535 86.3222C132.475 83.3787 130.339 80.9459 127.558 79.5136C124.776 78.0812 121.556 77.7557 118.544 78.6025C115.532 79.4492 112.953 81.4055 111.326 84.0774C109.892 86.4304 109.291 89.1847 109.598 91.9017C109.667 92.5139 110.262 92.9027 110.865 92.7787C111.469 92.6548 111.851 92.0648 111.794 91.4514C111.593 89.2895 112.091 87.109 113.231 85.238C114.565 83.0479 116.679 81.4444 119.148 80.7503C121.617 80.0563 124.257 80.3231 126.536 81.4972C128.816 82.6712 130.567 84.6653 131.436 87.0781C132.304 89.4909 132.227 92.1432 131.219 94.5011C130.211 96.8591 128.347 98.7476 126.002 99.7866C123.658 100.826 121.007 100.938 118.583 100.101C116.512 99.3859 114.738 98.0235 113.515 96.2299C113.167 95.7209 112.497 95.5101 111.953 95.7993Z"
                        fill="#A4DBF3"
                      />

                      <path
                        d="M115.547 92.4165C115.549 88.9265 117.491 86.6533 121.575 82.8984L121.578 82.9013C125.454 86.2249 128.235 88.6104 128.238 92.4165C128.24 96.2237 125.669 97.7189 121.575 98.1273C118.032 97.8492 115.544 95.9064 115.547 92.4165Z"
                        fill="#A4DBF3"
                      />
                    </g>
                    <g id="eco">
                      <path
                        d="M164.72 90.5141C164.72 97.3477 159.18 102.888 152.346 102.888C145.512 102.888 139.973 97.3477 139.973 90.5141C139.973 83.6804 145.512 78.1406 152.346 78.1406C159.18 78.1406 164.72 83.6804 164.72 90.5141ZM142.204 90.5141C142.204 96.1155 146.745 100.656 152.346 100.656C157.948 100.656 162.488 96.1155 162.488 90.5141C162.488 84.9126 157.948 80.3718 152.346 80.3718C146.745 80.3718 142.204 84.9126 142.204 90.5141Z"
                        fill="#A4DBF3"
                      />
                    </g>
                  </g>

                  <rect
                    x="35.6397"
                    y="70.5303"
                    width="225.895"
                    height="296.963"
                    rx="5.07629"
                    stroke="#D7D7D7"
                    strokeWidth="5.07629"
                  />
                  <path
                    d="M160.802 27.3043C142.202 14.2745 121.802 9.78372 96.6016 22.8043M150.002 25.2734C129.002 13.7656 112.802 19.2656 102.602 23.763"
                    stroke="url(#paint1_linear_4826_3862)"
                    strokeLinecap="round"
                  />
                  <path
                    d="M171 54C190.226 62.6364 201.131 62.6296 220.8 54"
                    stroke="white"
                  />
                  <path
                    d="M99.1763 31.072H120.876V35.188H112.14V50H107.94V35.188H99.1763V31.072ZM127.313 40.928L118.297 31.716C118.045 31.464 117.849 31.24 117.765 31.072H122.973C123.057 31.24 123.225 31.464 123.449 31.716L129.189 37.512C129.273 37.624 129.385 37.68 129.581 37.68C129.721 37.68 129.861 37.624 129.945 37.512L135.685 31.688C135.993 31.38 136.077 31.268 136.161 31.072H141.341C141.229 31.268 141.117 31.408 140.809 31.716L131.541 41.18V50H127.313V40.928ZM140.365 31.072H157.585V35.188H142.409C142.045 35.188 141.849 35.384 141.849 35.748V38.716H157.501V42.356H141.849V45.408C141.849 45.8 142.045 45.996 142.409 45.996H157.585V50H140.337C138.573 50 137.677 49.132 137.677 47.368V33.62C137.677 31.912 138.573 31.072 140.365 31.072ZM188.192 31.072V46.556C188.192 49.132 186.596 50.392 184.692 50.392C182.984 50.392 181.892 49.944 181.108 48.964L169.824 35.356C169.684 35.188 169.516 35.104 169.348 35.104C169.04 35.104 168.788 35.272 168.788 35.636V50H164.644V34.628C164.644 31.828 166.268 30.652 168.704 30.652C170.524 30.652 171.56 31.1 172.652 32.444L183.124 45.52C183.264 45.66 183.432 45.744 183.628 45.744C183.908 45.744 184.048 45.604 184.048 45.296V31.072H188.192ZM188.088 31.072H209.788V35.188H201.052V50H196.852V35.188H188.088V31.072Z"
                    fill="white"
                  />
                </g>

                <filter id="filter0_ii_4826_3862" x="-3.06503" y="0.09375" width="298.866" height="410.229" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-3.80722" dy="6.9799"/>
<feGaussianBlur stdDeviation="2.69678"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.482353 0 0 0 0 0.478431 0 0 0 0 0.47451 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_4826_3862"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-5.07629" dy="1.90361"/>
<feGaussianBlur stdDeviation="1.20562"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_4826_3862" result="effect2_innerShadow_4826_3862"/>
</filter>
<linearGradient id="paint0_linear_4826_3862" x1="148.587" y1="210.128" x2="148.587" y2="22.9401" gradientUnits="userSpaceOnUse">
<stop stop-color="#01344F"/>
<stop offset="1" stop-color="#006993"/>
</linearGradient>
<linearGradient id="paint1_linear_4826_3862" x1="136.202" y1="17" x2="74.6544" y2="34.5849" gradientUnits="userSpaceOnUse">
<stop offset="0.165" stop-color="white"/>
<stop offset="1" stop-color="#999999"/>
</linearGradient>
<clipPath id="clip0_4826_3862">
<rect x="2.64453" y="2" width="291.252" height="401.027" rx="15.2289" fill="white"/>
</clipPath>
<clipPath id="clip1_4826_3862">
<rect x="33.1016" y="67.9922" width="230.971" height="302.039" rx="7.61443" fill="white"/>
</clipPath>
<clipPath id="clip2_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(45.1602 113.672)"/>
</clipPath>
<clipPath id="clip3_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(45.1602 254.539)"/>
</clipPath>
<clipPath id="clip4_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(114.957 113.672)"/>
</clipPath>
<clipPath id="clip5_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(114.957 185.375)"/>
</clipPath>
<clipPath id="clip6_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(114.957 254.539)"/>
</clipPath>
<clipPath id="clip7_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(184.754 113.672)"/>
</clipPath>
<clipPath id="clip8_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(184.754 185.375)"/>
</clipPath>
<clipPath id="clip9_4826_3862">
<rect width="67.2608" height="67.2608" fill="white" transform="translate(184.754 254.539)"/>
</clipPath>
<clipPath id="clip10_4826_3862">
<path d="M38.1797 329.414H258.998V366.217H38.1797V329.414Z" fill="white"/>
</clipPath>

                <rect
                  x="2.64453"
                  y="2"
                  width="291.252"
                  height="401.027"
                  rx="15.2289"
                  stroke="#E7E9E8"
                  strokeWidth="3.80722"
                />
              </g>
            </svg>
    </div>
  )
}

export default NightModeDispay