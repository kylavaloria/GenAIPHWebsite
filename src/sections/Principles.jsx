import React from "react";

const Principles = () => {
  return (
    <section className="bg-gradient-to-b from-[#3DB9A3] to-[#035E5E] text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Mission Section */}
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="text-lg mb-12">
          Our goal is to empower and educate the Filipino community about generative AI by providing
          accurate information, fostering innovation, and promoting ethical usage. We strive to dispel
          myths and concerns through advocacy and community engagement, ensuring that generative AI is
          used responsibly and creatively to benefit society.
        </p>

        {/* Vision Section */}
        <h2 className="text-3xl font-bold mb-4">Vision</h2>
        <p className="text-lg mb-12">
          We envision a future where Filipino innovators are at the forefront of this technology, shaping
          a world where AI enhances human capabilities and fosters an inclusive and sustainable society.
        </p>

        {/* Core Principles Section */}
        <h2 className="text-3xl font-bold mb-8">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Integrity */}
          <div className="text-center border-r md:border-r-2 border-white last:border-none px-4">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-sm opacity-90">
              It is a long established fact that a reader will be distracted by the readable content of
              a page voluptatem accantium doloremque laudantium when looking at its layout.
            </p>
          </div>

          {/* Trust */}
          <div className="text-center border-r md:border-r-2 border-white last:border-none px-4">
            <h3 className="text-xl font-bold mb-2">Trust</h3>
            <p className="text-sm opacity-90">
              Foster a secure environment where users can rely on generative AI to provide authentic and
              accurate information, safeguarding against misinformation.
            </p>
          </div>

          {/* Ownership */}
          <div className="text-center px-4">
            <h3 className="text-xl font-bold mb-2">Ownership</h3>
            <p className="text-sm opacity-90">
              Support creators by clearly defining rights and ownership, encouraging innovative and
              responsible creation of AI-generated content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
