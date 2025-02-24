import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Principles from "../sections/Principles";
import Meetups from "../sections/Meetups";
import SuccessEvents from "../sections/SuccessEvents";
import Footer from "../sections/Footer";

const Home = () => {
  const location = useLocation();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("hasNavigated") === "true") {
      setHasNavigated(true);
    } else {
      sessionStorage.setItem("hasNavigated", "true");
    }
  }, []);

  return (
    <motion.div
      initial={
        hasNavigated
          ? location.state?.from === "blogs"
            ? { x: "100%" } // From Blogs → Slide from right
            : { x: "-100%" } // Default: Slide from left
          : false // No animation on first load
      }
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={hasNavigated ? { duration: 0.4, ease: "easeInOut" } : {}}
    >
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="principles"><Principles /></div>
      <div id="meetups"><Meetups /></div>
      <div id="events"><SuccessEvents /></div>
      <Footer />
    </motion.div>
  );
};

export default Home;
