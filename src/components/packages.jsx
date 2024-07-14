import React, { useMemo, useState } from 'react'
import { PackagesTabs } from '../utils/packages-tabs'
import data from '../assets/data.json'
import { PackageComponent } from './package-component'
import { SpecialPackage } from './special-package'

export const Packages = () => {
    const [active, setActive] = useState('men')
    const [currentSlide, setCurrentSlide] = useState(0)
    const packageData = useMemo(() => {
        return data.packages.filter((d) => d.type === active)
    }, [data, active])

    const totalSlides = Math.ceil(packageData.length / 2)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        )
    }

    return (
        <div className="bg-[#FAF5F1] w-full px-[150px] py-[150px]">
            <h1>Packages & Offers</h1>
            <div className="mt-[30px] flex justify-between items-center">
                <span>
                    Explore our exclusive package deals and enjoy great savings.{' '}
                    <br /> These offers are for Week Days only.
                </span>
                <div>
                    <PackagesTabs active={active} setActive={setActive} />
                </div>
            </div>
            <div className="relative overflow-hidden ">
                <button
                    className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    onClick={prevSlide}
                    style={{ display: currentSlide === 0 ? 'none' : '' }}
                >
                    &#10094;
                </button>
                <div className="mx-[100px] overflow-hidden">
                    <div
                        className="transition-transform duration-500 gap-4 flex mt-[30px] h-full justify-between"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {active === 'special_package' &&
                            data.special_packages.map((p, index) => (
                                <div className="min-w-[49%] " key={index}>
                                    <SpecialPackage
                                        key={index}
                                        title={p.title}
                                        services={p.services}
                                        total={p.total}
                                        offerPrice={p.offer_price}
                                    />
                                </div>
                            ))}
                        {active !== 'special_package' &&
                            packageData.map((p, index) => (
                                <div className="min-w-[49%] " key={index}>
                                    <PackageComponent
                                        key={index}
                                        title={p.title}
                                        services={p.services}
                                        total={p.total}
                                        offerPrice={p.offer_price}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                <button
                    className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>{' '}
        </div>
    )
}
