import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './Herosection.css';
import img5 from '../assets/img5.png';
import img4 from '../assets/img-4.jpeg';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

const Carousel = () => {
  const slides = [
    {
      url: img1,
      text: 'We donated to 5000 farmers',
    },
    {
      url: img2,
      text: 'We donated to 5000 farmers',
    },
    {
      url: img3,
      text: 'We donated to 5000 farmers',
    },
    {
      url: img4,
      text: 'We donated to 5000 farmers',
    },
    {
      url: img5,
      text: 'We donated to 5000 farmers',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDot, setSelectedDot] = useState(null);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setSelectedDot(slideIndex);
    setTimeout(() => setSelectedDot(null), 500);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='max-w-[1200px] h-[580px] w-full m-auto py-4 px-4 relative group object-cover'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          style={{ backgroundImage: `url(${slide.url})` }}
          className={`w-full h-full rounded-2xl bg-center bg-cover duration-500 ${slideIndex === currentIndex ? '' : 'hidden'}`}
        >
          <div className="absolute text-2xl left-0 right-0 font-s bg-opacity-75 text-gray-900  text-center py-2">{slide.text}</div>
        </div>
      ))}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${selectedDot === slideIndex ? 'selected' : ''}`}
          >
            <RxDotFilled style={{ color: '#ED4C5A' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;