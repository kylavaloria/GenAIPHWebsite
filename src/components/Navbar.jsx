import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Import menu icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // ✅ State para sa mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
        setHidden(currentScrollY > lastScrollY);
      } else {
        setScrolled(false);
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-14 py-3 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#E0FFF9] shadow-md" : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {/* ✅ Logo */}
      <img
        src={scrolled ? "./src/assets/logo-light.png" : "./src/assets/logo-dark.png"}
        alt="Gen AI Philippines"
        className="w-28 md:w-32 h-auto transition-all duration-300"
      />

      {/* ✅ Desktop Menu (hidden sa mobile) */}
      <ul className={`hidden md:flex space-x-8 ${scrolled ? "text-[#198A71]" : "text-white"}`}>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <a href="#about">About Us</a>
        </li>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <a href="#principles">Principles</a>
        </li>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <a href="#meetups">Meetups</a>
        </li>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <a href="#events">Events</a>
        </li>
        <li className="hover:underline hover:opacity-70 cursor-pointer">
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>

      {/* ✅ Mobile Menu Button (Hamburger Icon) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`md:hidden text-2xl transition-all duration-300 hover:opacity-60 cursor-pointer ${
          scrolled ? "text-[#198A71]" : "text-white"
        }`}
      >
        <FiMenu />
      </button>

      {/* ✅ Mobile Menu with X Button (visible kapag open) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#198A71] text-white flex flex-col items-center justify-center space-y-6 text-xl transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* ✅ X Button (Close Menu) */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-5 right-5 text-3xl text-white hover:opacity-70 cursor-pointer"
        >
          <FiX />
        </button>

        <a href="#home" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>About Us</a>
        <a href="#principles" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>Principles</a>
        <a href="#meetups" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>Meetups</a>
        <a href="#events" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>Events</a>
        <Link to="/blogs" className="hover:opacity-70 hover:underline" onClick={() => setIsOpen(false)}>Blogs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
