import React from 'react'
import { NavBar } from './navbar'
import { BookServiceDetails } from './book-service-details'

export const BookService = () => {
    return (
        <div className="book-service bg-cover bg-center bg-no-repeat h-full w-screen px-[150px] pt-[20px] relative">
            <NavBar />
            <BookServiceDetails />
        </div>
    )
}
