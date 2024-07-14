import React from 'react'

export const AboutUs = () => {
    return (
        <div className="bg-[#F3ECE4] px-[150px] py-[100px] flex justify-between gap-5">
            <div className="flex gap-7 max-w-[50%] items-center">
                <img
                    src="/about-us-1.png"
                    className="rounded-full self-end"
                    alt="about-us"
                />
                <img
                    src="/about-us-2.png"
                    alt="about-us"
                    className="rounded-full"
                />
                <img
                    src="/about-us-3.png"
                    alt="about-us"
                    className="rounded-full self-start"
                />
            </div>
            <div className="max-w-[50%]">
                <h1 className="mb-[50px]">About us</h1>
                <p className="mb-[40px]">
                    At N75 Salon, we believe that beauty is an art and every
                    individual is a canvas waiting to be adorned. We have been
                    proudly serving the Bangalore area with a commitment to
                    providing top-notch beauty and wellness services in an
                    environment that radiates warmth and relaxation
                </p>
                <p className="mb-[40px]">
                    Our team of highly skilled professionals is dedicated to
                    enhancing your natural beauty and nurturing your confidence.
                    With years of experience in the industry, we specialize in a
                    wide range of services, including hair styling, coloring,
                    nail care, skin treatments, and rejuvenating spa
                    experiences. Our experts stay updated with the latest trends
                    and techniques to ensure you receive the best quality care.
                </p>
                <p>
                    What sets us apart is our passion for personalized service.
                    We take the time to understand your unique preferences and
                    needs, tailoring our services to create a customized
                    experience that suits you perfectly. From a relaxing massage
                    to a transformative haircut, every visit to N75 Salon is an
                    opportunity for self-care and indulgence.
                </p>
            </div>
        </div>
    )
}
