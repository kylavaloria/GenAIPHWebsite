import React from "react";

const Meetups = () => {
  return (
    <section className="bg-[#E6FFFA] py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-[#037D7D] mb-4">
            About The <br /> Monthly Meetups
          </h2>
          <p className="text-[#037D7D] mb-4">
            Our monthly meetups are the cornerstone of our mission to empower Filipinos by demystifying
            generative AI. We aim to unite tech and non-tech industries, helping them adapt to our constantly
            evolving world.
          </p>
          <p className="text-[#037D7D]">
            We tackle pressing challenges like misinformation, copyright concerns, and usage issues, striving
            to inspire innovation and promote ethical AI use.
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
          <div className="bg-gray-300 h-32 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-32 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-32 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-32 w-full rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Meetups;
