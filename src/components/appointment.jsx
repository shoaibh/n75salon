import React from 'react'

export const Appointment = () => {
    return (
        <div className="flex flex-col md:flex-row border border-black rounded-lg w-full min-w-7 p-3 gap-3">
            {/* Service Selector */}
            <div className="flex  w-1/2 items-center gap-3">
                <img src="/home.svg" width={20} height={20} />
                <div className="border-r border-black relative w-full">
                    <label className="block text-xs">Services</label>
                    <select className="block appearance-none w-full bg-transparent">
                        <option>Skin Care Services</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                        <img src="/dropdown.svg" />
                    </div>
                </div>
            </div>

            {/* Appointment Date Selector */}
            <div className="flex  w-1/2  items-center gap-3 ml-3">
                <img src="/calender.svg" width={20} height={20} />

                <div className="relative w-full">
                    <label className="block text-xs">Appointment Date</label>
                    <select className="block appearance-none w-full bg-transparent">
                        <option>Select Date</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <img src="/dropdown.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
