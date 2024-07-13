import React from "react";
import { Appointment } from "./appointment";
import { Button } from "../utils/button";

export const BookServiceDetails = () => {
    return <div className="text-white mt-[150px]">
      
        <div className="font-semibold text-sm mb-3">
        WELCOME TO N75 The Family Salon
        </div>
        <div className="font-bold text-4xl mb-6">
        Discover Your Unique <br />
        & New Style
        </div>

        <div className="bg-[#E0E0E0] rounded-2xl text-[#000212] inline-block p-5">
            <span className="text-sm font-medium mb-3">Book your service</span>
            <div className="flex justify-between">
                <Appointment />
                <Button /> 
            </div>
        </div>
        
  </div>;
};
