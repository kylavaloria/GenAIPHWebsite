import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="relative bg-[url('/src/assets/Hero.png')] bg-cover bg-center text-center min-h-screen flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      {/* Overlay (Black vignette at the bottom) */}
      <div className="absolute inset-0 bg-gray-700 opacity-65"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 sm:px-10 lg:px-20 text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white">
          Gen AI PH Builders
        </h1>
        <p className="text-white mt-4 max-w-3xl text-sm sm:text-base lg:text-lg">
          <strong>Gen AI PH Builders</strong> is a community-driven organization dedicated to educating and empowering Filipinos in generative AI, promoting ethical use, innovation, and trust.
        </p>
        <a href="https://www.facebook.com/groups/1908503506266152" target="_blank">
          <button className="mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-[#3FDA99] text-white rounded-full shadow-md hover:bg-[#27B7B4] cursor-pointer text-sm sm:text-base lg:text-lg">
            Join Us
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
