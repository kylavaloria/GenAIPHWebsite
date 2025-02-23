import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import ParticlesBackground from "../animations/ParticlesBackground";

const Footer = () => {
  return (
    <footer className="bg-[#E5FFF9] py-10 px-6 sm:px-10 lg:px-24 text-[#198A71]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <img src="./src/assets/logo-light.png" alt="Gen AI PH" className="w-28 mx-auto sm:mx-0 mb-3" />
          <p className="text-[#27B7B4] text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
            Gen AI PH Builders is a community-driven organization dedicated to educating and empowering Filipinos in generative AI, promoting ethical use, innovation, and trust.
          </p>
        </div>

        {/* Sponsors Placeholder */}
        <div className="text-center">
          <h3 className="text-[#27B7B4] font-semibold text-lg mb-2">Our Key Contributors</h3>
          <p className="text-sm text-gray-600">(Partners will be displayed here.)</p>
        </div>

        {/* Contact & Socials */}
        <div className="text-center sm:text-left">
          <h3 className="text-[#27B7B4] font-semibold text-lg mb-2">Contact Us</h3>
          <a
            href="mailto:admin@genaiphbuilders.org"
            className="flex justify-center sm:justify-start items-center space-x-2 text-[#27B7B4] hover:text-[#125655] text-sm mb-4 cursor-pointer"
          >
            <FaEnvelope className="text-lg" />
            <span>admin@genaiphbuilders.org</span>
          </a>

          <h3 className="text-[#27B7B4] font-semibold text-lg mb-2">Socials</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="https://www.facebook.com/genaicom" target="_blank" className="text-[#27B7B4] hover:text-[#125655] text-xl"><FaFacebookF /></a>
            <a href="https://www.youtube.com/@GenAIPhilippines" target="_blank" className="text-[#27B7B4] hover:text-[#125655] text-xl"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/gen-ai-philippines/" target="_blank" className="text-[#27B7B4] hover:text-[#125655] text-xl"><FaLinkedin /></a>
            <a href="https://github.com/GenAIPHBuilders-org" target="_blank" className="text-[#27B7B4] hover:text-[#125655] text-xl"><FaGithub /></a>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#27B7B4] my-6" />
      <p className="text-center text-sm text-[#27B7B4]">
        © {new Date().getFullYear()} Gen AI PH Builders. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
