import React from 'react'

export const Card = ({ bgColor, title, img, desc }) => {
    return (
        <div className="rounded-2xl">
            <div
                style={{ backgroundColor: bgColor }}
                className="rounded-t-lg p-4 pt-4 pb-0 relative  h-[255px]"
            >
                <span>{title}</span>
                <img
                    src={img}
                    alt={title}
                    className="absolute bottom-0 left-0"
                />
            </div>

            <div className="bg-white rounded-b-lg py-5 h-[300px]">
                <ul className="list-disc ml-7">
                    {desc.map((d, index) => (
                        <li key={index}>{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
