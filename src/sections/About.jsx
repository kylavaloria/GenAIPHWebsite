import React from "react";
import ParticlesBackground from "../animations/ParticlesBackground"; // Retaining background effect
import promoVideo from "../assets/Promotion.mp4"; // Fixed video import

const About = () => {
  return (
    <section className="relative bg-[#E0FFF9] py-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-base/8 py-6 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#27B7B4] mb-4">
            About Gen AI PH Builders
          </h2>
          <p className="text-[#4BC3B0] text-sm sm:text-base">
            <strong>Gen AI PH Builders</strong> is a community-driven organization
            dedicated to empowering and educating Filipinos about generative AI.
            Through advocacy, innovation, and ethical awareness, we aim to dispel
            myths, promote responsible AI use, and equip individuals with the
            knowledge to leverage AI for societal benefit.
          </p>
          <p className="mt-4 text-[#4BC3B0] text-sm sm:text-base">
            Our vision is to see Filipino innovators lead the way in AI-driven
            advancements, fostering a future where technology enhances human
            potential in an inclusive and sustainable manner. Rooted in integrity,
            trust, and ownership, we create a secure space for learning,
            collaboration, and responsible AI development.
          </p>
        </div>

        {/* Right side - Video */}
        <div className="md:w-1/2 w-full flex justify-center">
          <video
            className="w-full max-w-lg sm:max-w-xl aspect-video shadow-xl rounded-lg"
            controls
            autoPlay
            loop
            muted
          >
            <source src={promoVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
