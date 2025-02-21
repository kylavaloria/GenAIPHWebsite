import React from "react";

const About = () => {
  return (
    <section className="bg-[#E0FFF9] py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left side - Text content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#27B7B4] mb-4">
            About Gen AI PH Builders
          </h2>
          <p className="text-gray-700 font-semibold">
            <strong>Gen AI PH Builders</strong> is a community-driven organization
            dedicated to empowering and educating Filipinos about generative AI.
            Through advocacy, innovation, and ethical awareness, we aim to dispel
            myths, promote responsible AI use, and equip individuals with the
            knowledge to leverage AI for societal benefit.
          </p>
          <p className="mt-4 text-gray-700">
            Our vision is to see Filipino innovators lead the way in AI-driven
            advancements, fostering a future where technology enhances human
            potential in an inclusive and sustainable manner. Rooted in integrity,
            trust, and ownership, we create a secure space for learning,
            collaboration, and responsible AI development.
          </p>
        </div>

        {/* Right side - Placeholder for video */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-lg h-64 bg-gray-300 flex items-center justify-center">
            <span className="text-4xl text-gray-500">▶</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
