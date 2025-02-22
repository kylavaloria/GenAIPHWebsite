import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true); // Navbar turns white
        if (currentScrollY > lastScrollY) {
          setHidden(true); // Hides navbar when scrolling down
        } else {
          setHidden(false); // Shows navbar when scrolling up
        }
      } else {
        setScrolled(false); // Navbar transparent again at the top
        setHidden(false); // Show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section className="relative bg-[url('/src/assets/Hero.png')] bg-cover bg-center text-center py-16">
      {/* Overlay (Black vignette at the bottom) */}
      <div className="absolute inset-0 bg-gray-700 opacity-65"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

      {/* ✅ Navbar with Auto-Hide on Scroll */}
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center pr-14 pl-14 py-2 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <img
          src={scrolled ? "./src/assets/logo-light.png" : "./src/assets/logo-dark.png"}
          alt="Gen AI Philippines"
          className="w-32 h-auto transition-all duration-300"
        />
        <ul className={`flex space-x-10 ${scrolled ? "text-[#198A71]" : "text-white"}`}>
          <li className="hover:underline opacity-100 hover:opacity-70 cursor-pointer">
            <a href="#home" scroll={false}>Home</a>
          </li>
          <li className="hover:underline opacity-100 hover:opacity-70 cursor-pointer">
            <a href="#about" scroll={false}>About Us</a>
          </li>
          <li className="hover:underline opacity-100 hover:opacity-70 cursor-pointer">
            <a href="#principles" scroll={false}>Principles</a>
          </li>
          <li className="hover:underline opacity-100 hover:opacity-70 cursor-pointer">
            <a href="#meetups" scroll={false}>Meetups</a>
          </li>
          <li className="hover:underline opacity-100 hover:opacity-70 cursor-pointer">
            <a href="#events" scroll={false}>Events</a>
          </li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold text-white">Gen AI PH Builders</h1>
        <p className="text-white mt-4 max-w-2xl">
          <strong>Gen AI PH Builders</strong> is a community-driven organization dedicated to educating and empowering Filipinos in generative AI, promoting ethical use, innovation, and trust.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#3FDA99] text-white rounded-full shadow-md hover:bg-[#27B7B4] cursor-pointer">
          Support Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
