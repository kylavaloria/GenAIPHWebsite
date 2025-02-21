import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E6FAF3] py-12 px-6 md:px-16 lg:px-24 text-[#198A71]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <img src="/logo.png" alt="Gen AI PH" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed max-w-sm">
            Gen AI PH Builders is a community-driven organization dedicated to educating and empowering Filipinos in generative AI, promoting ethical use, innovation, and trust.
          </p>
        </div>

        {/* Sponsors Placeholder */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Our Key Contributors</h3>
          <p className="text-sm text-gray-600">(Sponsors will be displayed here.)</p>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
          <p className="text-sm mb-4">📧 admin@genaiphbuilders.org</p>
          <h3 className="font-semibold text-lg mb-2">Socials</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-[#198A71] hover:text-[#0f6654] text-xl"><FaFacebookF /></a>
            <a href="#" className="text-[#198A71] hover:text-[#0f6654] text-xl"><FaTwitter /></a>
            <a href="#" className="text-[#198A71] hover:text-[#0f6654] text-xl"><FaInstagram /></a>
            <a href="#" className="text-[#198A71] hover:text-[#0f6654] text-xl"><FaYoutube /></a>
            <a href="#" className="text-[#198A71] hover:text-[#0f6654] text-xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-6" />
      <p className="text-center text-sm text-gray-600">© {new Date().getFullYear()} Gen AI PH Builders. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
