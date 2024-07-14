import React from 'react'

export const SpecialPackage = ({ title, services, total, offerPrice }) => {
    return (
        <div className="border h-full border-gray-300 bg-white rounded-lg p-6 w-full mx-auto my-4">
            <div className="flex justify-between pb-4 border-b border-[#D9D9D9] items-center mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <span className="bg-[#6E4B37] text-white rounded-lg px-3 py-1 text-sm">{`Save ₹${
                    total - offerPrice
                }`}</span>
            </div>
            <ul className="mb-4">
                <li className="flex justify-between py-1 pb-4 border-b border-[#D9D9D9]">
                    <span>Treatment</span>
                    <span>Price</span>
                    <span>Offer</span>
                </li>
                {services.map((service, index) => (
                    <li key={index} className="flex justify-between py-1">
                        <span>{service.service_title}</span>
                        <span>{`₹${service.price}`}</span>
                        <span>{`₹${service.offer_price}`}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
