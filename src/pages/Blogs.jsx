// src/pages/Blogs.jsx
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "../config/firebase";
import BlogTile from "../components/BlogTile";
import BlogCover from "../sections/BlogCover";
import Footer from "../sections/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        window.scroll(0, 0);
        setBlogs(blogData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute w-full h-full"
    >
      <BlogCover />
      <div className="relative bg-[#E5FFF9] px-6 sm:px-12 lg:px-24 py-10">
        {loading ? (
          <p className="text-center text-[#27B7B4]">Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mx-auto">
            {blogs.map((blog) => (
              <BlogTile key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
};

export default Blogs;
