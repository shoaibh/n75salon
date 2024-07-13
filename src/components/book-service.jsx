import React from "react";
import { NavBar } from "./navbar";
import { BookServiceDetails } from "./book-service-details";

export const BookService = () => {
    return <div className="book-service bg-cover bg-center bg-no-repeat h-[75vh] w-screen px-[200px] pt-[20px] relative">
      
        <NavBar />
      <BookServiceDetails /> 
      <img src="/model-1.png" alt="model" className="bottom-0 absolute right-0" />
  </div>;
};
