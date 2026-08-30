"use client"
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/style/SlickSlider.css';
import icon1 from '@/asserts/logos/1.png'
import icon2 from '@/asserts/logos/47.png'
import icon3 from '@/asserts/logos/4.png'
import icon4 from '@/asserts/logos/50.png'
import icon5 from '@/asserts/logos/49.png'
import icon6 from '@/asserts/logos/48.png'
import icon7 from '@/asserts/logos/45.png'
import icon8 from '@/asserts/logos/44.png'
import icon9 from '@/asserts/logos/46.png'
import Image from 'next/image';

// Importing images dynamically to avoid loading all at once
const iconImages = [
  { src: icon1, alt: "GVK logo" },
  { src: icon2, alt: "GMR logo" },
  { src: icon3, alt: "KL University logo" },
  { src: icon4, alt: "Scavolini logo" },
  { src: icon5, alt: "Dasha logo" },
  { src: icon6, alt: "Bossard logo" },
  { src: icon7, alt: "Sai Neeraj logo" },
  { src: icon8, alt: "KLE CTIE logo" },
  { src: icon9, alt: "Starkey logo" },
];

const SlickSlider = () => {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // Smallest screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(iconImages);
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={80}
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
