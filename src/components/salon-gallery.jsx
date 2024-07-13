import React, { useState, useEffect } from 'react';
import { salonGalleryData } from '../Data/SalonGalleryData';

export const SalonGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(salonGalleryData.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const getSlides = () => {
    const slides = [];
    for (let i = 0; i < totalSlides; i++) {
      const start = i * 3;
      const end = start + 3;
      slides.push(salonGalleryData.slice(start, end));
    }
    return slides;
  };

  const slides = getSlides();

  return (
    <div className="bg-gray-100 py-12">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Salon Gallery</h2>
        <div className=" my-20 relative">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <div className="overflow-hidden">
            <div
              className="whitespace-nowrap transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="inline-block w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {slide.map((image) => (
                      <img
                        key={image.id}
                        src={image.src}
                        alt={`Slide ${image.id}`}
                        className="w-full h-auto rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonGallery;
