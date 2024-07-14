import React from 'react'
import { NavBar } from './navbar'
import { BookServiceDetails } from './book-service-details'

export const BookService = () => {
    return (
        <div className="book-service bg-cover bg-center bg-no-repeat h-screen w-screen px-[150px] pt-[20px] relative">
            <NavBar />
            <BookServiceDetails />

            <div className="absolute bg-[#E8C9B5] top-[145px] right-[350px] text-sm text-black flex gap-3 p-4 max-w-[260px] rounded-2xl">
                <img src="/Security.svg" />
                <span>No.1 Choice of the year Award</span>
            </div>
            <img
                src="/model-1.png"
                alt="model"
                className="bottom-0 absolute right-0"
            />
            <div className="absolute rounded-3xl py-4 px-6 gap-4 flex items-center bg-[#E6C3AC] right-[80px] bottom-[100px]">
                <span className="text-2xl font-semibold">4.0</span>
                <div>
                    <img src="/reviews.svg" />
                    <span>Google reviews</span>
                </div>
            </div>
        </div>
    )
}
