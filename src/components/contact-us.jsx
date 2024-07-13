import React, { useState } from 'react';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      agree: formData.agree,
    };

    try {
    console.log({payload})
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success
        alert('Message sent successfully!');
      } else {
        // Handle error
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-[#FAF6F3] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Contact us</h2>
          <p className="mb-8 text-base">Contact us about anything related to our company or services. We'll do our best to get back to you as soon as possible.</p>
        </div>
        <div className="lg:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name*</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#FAF6F3]" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number*</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#FAF6F3]" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email Address*</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#FAF6F3]" required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject*</label>
              <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#FAF6F3]" required>
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about your enquiry*</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-[#FAF6F3]" required></textarea>
            </div>
            <div className="flex items-start mb-4">
              <input id="agree" name="agree" type="checkbox" checked={formData.agree} onChange={handleChange} className="h-4 w-4 text-indigo-600 border-gray-300 rounded bg-[#FAF6F3]" required />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">
                I agree to the <a href="#" className="text-indigo-600">Privacy Policy, Terms & Conditions</a>
              </label>
            </div>
            <button type="submit" className="w-full bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors">
              Submit &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

