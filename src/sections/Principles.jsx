import React from "react";

const Principles = () => {
  return (
    <section className="bg-gradient-to-b from-[#27B7B4] to-[#125655] text-white py-16 px-6 sm:px-10 lg:px-16">
      <div className="text-center">
        <div className="max-w-5xl mx-auto">
          {/* Mission Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mission</h2>
            <p className="mb-8 sm:mb-12 text-sm sm:text-base opacity-90">
              Our goal is to empower and educate the Filipino community about generative AI by providing
              accurate information, fostering innovation, and promoting ethical usage. We strive to dispel
              myths and concerns through advocacy and community engagement, ensuring that generative AI is
              used responsibly and creatively to benefit society.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Vision</h2>
            <p className="mb-8 sm:mb-12 text-sm sm:text-base opacity-90">
              We envision a future where Filipino innovators are at the forefront of this technology, shaping
              a world where AI enhances human capabilities and fosters an inclusive and sustainable society.
            </p>
          </div>
        </div>

        {/* Core Principles Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16">Core Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Integrity */}
          <div className="text-center px-6">
            <h3 className="text-xl font-bold mb-4 sm:mb-6">Integrity</h3>
            <p className="text-sm sm:text-base opacity-90">
              It is a long established fact that a reader will be distracted by readable content when looking at its layout.
            </p>
          </div>

          {/* Trust */}
          <div className="text-center px-6">
            <h3 className="text-xl font-bold mb-4 sm:mb-6">Trust</h3>
            <p className="text-sm sm:text-base opacity-90">
              Foster a secure environment where users can rely on generative AI to provide authentic and accurate information.
            </p>
          </div>

          {/* Ownership */}
          <div className="text-center px-6">
            <h3 className="text-xl font-bold mb-4 sm:mb-6">Ownership</h3>
            <p className="text-sm sm:text-base opacity-90">
              Support creators by clearly defining rights and ownership, encouraging innovative and responsible AI content creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
