import React from 'react';
import { customerReviewsData } from '../Data/CustomerReviewsData'; 

export const CustomerReviews = () => {
  return (
    <div className="bg-[#FAF6F3] py-12">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-20 md:mb-28">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviewsData.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg relative mb-10">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-12">
                <img src={review.image} alt={review.name} className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md" />
              </div>
              <div className="mt-12 text-center md:text-left">
              <img
                    src="/comma.svg"
                    className="rounded-full self-start"
                />
                <p className="text-lg text-gray-700 mb-4">{review.review}</p>
                <p className="text-lg font-bold text-gray-900">-{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

