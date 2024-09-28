import React from 'react';

export default function About () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Hero Section with Real Estate Image */}
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/urban-living-city-lifestyle-society-graphic_53876-121023.jpg?t=st=1727482503~exp=1727486103~hmac=c8b2c99473526379f26c2418257c728699e29e08ecc8b9d005bcdb97db0a00cd&w=826" // Replace with your actual image path
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
       
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 -mt-16 relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">About Us</h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            At Dream Homes Realty, we believe that finding the perfect home is about more than just property – it's about discovering the place where your dreams can flourish. With over two decades of experience in the real estate market, we've helped thousands of families and individuals find their ideal homes, investments, and commercial properties.
          </p>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Our Expertise</h3>
          
          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-8">
            <li className="mb-2"><span className="font-semibold">Diverse Portfolio:</span> From cozy apartments to luxurious estates, we have properties to suit every lifestyle and budget.</li>
            <li className="mb-2"><span className="font-semibold">Local Knowledge:</span> Our team of local experts provides unparalleled insights into neighborhoods and market trends.</li>
            <li className="mb-2"><span className="font-semibold">Investment Guidance:</span> We offer expert advice on lucrative real estate investments to help grow your portfolio.</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Our Commitment</h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            At Dream Homes Realty, we're committed to providing exceptional service throughout your real estate journey. Our team of experienced agents combines in-depth market knowledge with a personalized approach to ensure that every client receives the attention and expertise they deserve.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we're here to guide you every step of the way. Our goal is not just to meet your expectations, but to exceed them, turning your real estate dreams into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

