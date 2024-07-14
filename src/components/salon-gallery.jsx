import React, { useState, useEffect } from 'react'
import { salonGalleryData } from '../Data/SalonGalleryData'

export const SalonGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = Math.ceil(salonGalleryData.length / 3)

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 3000) // Change slide every 3 seconds
        return () => clearInterval(interval)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        )
    }

    const getSlides = () => {
        const slides = []
        for (let i = 0; i < totalSlides; i++) {
            const start = i * 3
            const end = start + 3
            slides.push(salonGalleryData.slice(start, end))
        }
        return slides
    }

    const slides = getSlides()

    return (
        <div className="bg-[#FAF6F3] py-24">
            <div className=" mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-14">
                    Our Salon Gallery
                </h2>
                <div className="relative">
                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                        onClick={prevSlide}
                    >
                        &#10094;
                    </button>
                    <div className="overflow-hidden">
                        <div
                            className="whitespace-nowrap transition-transform duration-500"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 100
                                }%)`,
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="inline-block w-full"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        {slide.map((image) => (
                                            <div
                                                key={image.id}
                                                className="w-full h-64 lg:h-96 overflow-hidden"
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={`Slide ${image.id}`}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
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
    )
}

export default SalonGallery
