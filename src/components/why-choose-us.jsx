import React from 'react'
import { People } from '../svgs/people'
import { whyChooseUsData } from '../Data/WhyChooseUs'

export const WhyChooseUs = () => {
    return (
        <div className="bg-[#9F2B2B] text-white py-12 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-20">
                <div className="flex flex-col	justify-between pl-0 text-center col-span-1 lg:col-span-1">
                    <div>
                        <h2 className="text-4xl text-left font-bold mb-4">
                            Why Choose Us
                        </h2>
                        <p className="mb-8 text-base text-left">
                            Beyond haircut, discover a comprehensive range of
                            services, from colouring to extensions
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row justify-start md:space-x-16 space-y-4 md:space-y-0">
                        <div className="text-left">
                            <div className="text-3xl font-bold">30K</div>
                            <div className="text-sm">Satisfied clients</div>
                        </div>
                        <div className="border-l border-white h-0 md:h-12 md:visible invisible"></div>
                        <div className="text-left">
                            <div className="text-3xl font-bold">15+</div>
                            <div className="text-sm">Services</div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        {whyChooseUsData.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-center bg-red-600 p-6 rounded-xl"
                            >
                                <div className="flex items-center mr-6">
                                    {item.icon === 'People' && <People />}
                                </div>
                                <p className="text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
