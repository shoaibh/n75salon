import React, { useMemo, useState } from 'react'
import { Tabs } from '../utils/tabs'
import data from '../assets/data.json'
import { Card } from './card'

export const OurServices = () => {
    const [active, setActive] = useState('all')
    const [currentSlide, setCurrentSlide] = useState(0)

    const serviceData = useMemo(() => {
        if (active === 'all') return data.services
        return data.services.filter((d) => d.type === active)
    }, [data, active])

    const totalSlides = Math.ceil(serviceData.length / 4)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        )
    }

    console.log({ currentSlide })

    return (
        <div className="bg-[#FAF5F1] w-full px-[150px] py-[150px]">
            <h1>Our Services</h1>

            <div className="mt-[30px] flex justify-between items-center">
                <span>
                    Beyond haircut, discover a comprehensive range of services,{' '}
                    <br />
                    from colouring to extensions
                </span>
                <div>
                    <Tabs active={active} setActive={setActive} />
                </div>
            </div>

            <div className="relative overflow-hidden">
                <button
                    className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    onClick={prevSlide}
                    style={{ display: currentSlide === 0 ? 'none' : '' }}
                >
                    &#10094;
                </button>
                <div
                    className="transition-transform duration-500 gap-4 flex mt-[30px] justify-between"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {serviceData?.map((s, index) => (
                        <div className="flex-1 min-w-[24%] " key={index}>
                            <Card
                                title={s.title}
                                img={s.img}
                                desc={s.desc}
                                bgColor={s.bgColor}
                                key={index}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
    )
}
