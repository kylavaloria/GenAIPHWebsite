import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-200 to-gray-400 text-center py-20">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
        <img src="/logo.png" alt="Gen AI Philippines" className="h-10" />
        <ul className="flex space-x-6 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Principles</li>
          <li>Meetups</li>
          <li>Events</li>
          <li>Blogs</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold text-white">Gen AI PH Builders</h1>
        <p className="text-white mt-4 max-w-2xl">
          <strong>Gen AI PH Builders</strong> is a community-driven organization dedicated to educating and empowering Filipinos in generative AI, promoting ethical use, innovation, and trust.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-400 text-white rounded-full shadow-md hover:bg-green-500 transition">
          Support Us
        </button>
      </div>

      {/* Carousel Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default Hero;
