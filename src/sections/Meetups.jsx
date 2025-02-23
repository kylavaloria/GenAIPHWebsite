import React from "react";
import ParticlesBackground from "../animations/ParticlesBackground";
import meetup1 from "../assets/Meetup-1.jpg";
import meetup2 from "../assets/Meetup-2.jpg";
import meetup3 from "../assets/Meetup-3.jpg";
import meetup4 from "../assets/Meetup-4.jpg";

const Meetups = () => {
  return (
    <section className="relative bg-[#E5FFF9] py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Unique Particles for Meetups Section */}
      <ParticlesBackground id="meetups-particles" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left py-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#27B7B4] mb-4">
            About The <br /> Monthly Meetups
          </h2>
          <p className="text-[#4BC3B0] text-sm sm:text-base mb-4">
            Our monthly meetups are the cornerstone of our mission to empower Filipinos by demystifying
            generative AI. We aim to unite tech and non-tech industries, helping them adapt to our constantly
            evolving world.
          </p>
          <p className="text-[#4BC3B0] text-sm sm:text-base">
            We tackle pressing challenges like misinformation, copyright concerns, and usage issues, striving
            to inspire innovation and promote ethical AI use.
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="w-full aspect-[4/3] bg-cover bg-center shadow-lg rounded-lg" style={{ backgroundImage: `url(${meetup1})` }}></div>
          <div className="w-full aspect-[4/3] bg-cover bg-center shadow-lg rounded-lg" style={{ backgroundImage: `url(${meetup2})` }}></div>
          <div className="w-full aspect-[4/3] bg-cover bg-center shadow-lg rounded-lg" style={{ backgroundImage: `url(${meetup3})` }}></div>
          <div className="w-full aspect-[4/3] bg-cover bg-center shadow-lg rounded-lg" style={{ backgroundImage: `url(${meetup4})` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Meetups;
