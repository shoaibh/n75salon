import React from "react";

export const Appointment = () => {
    return <div>
      <div className="flex border border-black rounded-lg">
            {/* Service Selector */}
            <div className="flex  w-1/2">
            <img src="/home.svg" width={20} height={20}/>
            <div className="border-r border-black">
            
        <div className="flex items-center space-x-2 text-gray-500 text-xs">
          
          <span >Services</span>
          <span className="ml-auto">&#9662;</span>
        </div>
        <div className=" mt-2 text-base">
          <span className="text-black whitespace-nowrap">Skin Care Services</span>
        </div>
                </div>
                </div>


            {/* Appointment Date Selector */}
            <div className="flex  w-1/2">
            <img  src="/calender.svg" width={20} height={20}/>

            <div className="">
        <div className="flex items-center space-x-2 text-gray-500 text-xs">
          
          <span>Appointment Date</span>
          <span className="ml-auto">&#9662;</span>
        </div>
        <div className="mt-2 text-base">
          <span className="text-black whitespace-nowrap">Select date</span>
                    </div>
                    </div>

      </div>
    </div>
  </div>;
};
