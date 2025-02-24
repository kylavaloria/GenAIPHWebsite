import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import BlogCover from "../sections/BlogCover";
import BlogList from "../sections/BlogList";
import Footer from "../sections/Footer";

const Blogs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGoingBack = location.state?.from === "blogs"; // ✅ Detect back navigation

  return (
    <motion.div
      initial={{ x: isGoingBack ? "-100%" : "100%" }} // ✅ No fade, pure slide
      animate={{ x: "0%" }}
      exit={{ x: isGoingBack ? "100%" : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute w-full h-full"
    >
      <BlogCover navigate={navigate} />
      <BlogList />
      <Footer />
    </motion.div>
  );
};

export default Blogs;
