import React from 'react'
import { Appointment } from './appointment'
import { Button } from '../utils/button'

export const BookServiceDetails = () => {
    return (
        <div className="flex justify-between">
            <div className="text-white mt-[150px]">
                <div className="font-semibold text-sm mb-3">
                    WELCOME TO N75 The Family Salon
                </div>
                <div className="font-bold text-4xl mb-6">
                    Discover Your Unique <br />& New Style
                </div>

                <div className="bg-[#FAF5F1]  rounded-2xl text-[#000212] inline-block p-5">
                    <span className="text-sm font-medium mb-3">
                        Book your service
                    </span>
                    <div className="flex flex-col md:flex-row  justify-between gap-3">
                        <Appointment />
                        <Button />
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className=" absolute bg-[#E8C9B5] top-[0] right-[150px] text-sm text-black flex gap-3 p-4 max-w-[260px] rounded-2xl">
                    <img src="/Security.svg" />
                    <span>No.1 Choice of the year Award</span>
                </div>
                <img
                    src="/model-1.png"
                    alt="model"
                    className="bottom-0  right-0"
                />
                <div className=" absolute rounded-3xl py-4 px-6 gap-4 flex items-center bg-[#E6C3AC] right-[80px] bottom-[100px]">
                    <span className="text-2xl font-semibold">4.0</span>
                    <div>
                        <img src="/reviews.svg" />
                        <span>Google reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
