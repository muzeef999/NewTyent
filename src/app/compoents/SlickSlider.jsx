import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/style/SlickSlider.css';
import icon1 from '@/asserts/logos/1.png'
import icon2 from '@/asserts/logos/2.png'
import icon3 from '@/asserts/logos/3.png'
import icon4 from '@/asserts/logos/4.png'
import icon5 from '@/asserts/logos/5.png'
import icon6 from '@/asserts/logos/6.png'
import icon7 from '@/asserts/logos/7.png'
import icon8 from '@/asserts/logos/8.png'
import Image from 'next/image';

// Importing images dynamically to avoid loading all at once
const iconImages = [
  { src: icon1, alt: "Icon 1" },
  { src: icon2, alt: "Icon 2" },
  { src: icon3, alt: "Icon 3" },
  { src: icon4, alt: "Icon 4" },
  { src: icon5, alt: "Icon 5" },
  { src: icon6, alt: "Icon 6" },
  { src: icon7, alt: "Icon 7" },
  { src: icon8, alt: "Icon 8" },
  // Add more icons here as necessary
];

const SlickSlider = () => {
  const settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  // This state can be used to manage dynamically loaded content or images if needed
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically load images when the component mounts
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
