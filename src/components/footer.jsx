import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 py-8">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className="pb-8 mb-8">
          <div className="flex flex-col justify-between items-center md:items-start space-y-8 md:space-y-0">
            <div className="text-center md:text-left w-full">
              <h2 className="text-center md:text-left py-8 text-2xl font-bold text-white mb-4 border-b border-gray-700" style={{ fontFamily: 'Gabriela', fontSize: '32px', fontWeight: '400', lineHeight: '40.99px'}}>n75salon</h2>
            </div>

            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-96 gap-12 w-full">
              <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>

                <p className="text-sm">
                  SABARI, 1ST FLOOR, N-36, Jeevan Bima Nagar
                  Main Rd, Hal, HAL 3rd Stage, Jeevan Bima Nagar,
                  Bengaluru, Karnataka 560075
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-sm flex justify-center md:justify-start items-center mb-2">
                  <FaPhone className="mr-2" /> +91 - 76187 81514
                </p>
                <p className="text-sm flex justify-center md:justify-start items-center">
                  <FaEnvelope className="mr-2" /> n75salon@gmail.com
                </p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white mb-2">Follow Us On</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaGoogle size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400">
           Copyright&copy; N75 Salon
        </div>
      </div>
    </footer>
  );
};

export default Footer;
