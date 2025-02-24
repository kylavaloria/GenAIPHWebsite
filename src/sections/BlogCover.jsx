import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogCover = () => {
  const navigate = useNavigate(); // ✅ Gamitin useNavigate() sa loob ng component

  return (
    <div className="bg-gradient-to-b from-[#27B7B4] to-[#4BC3B0] py-8 px-5 text-white text-center relative">
      {/* ✅ Back Arrow with Reverse Transition */}
      <button
        onClick={() => navigate("/", { state: { from: "blogs" } })}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 text-white hover:opacity-70 cursor-pointer"
      >
        <ArrowLeft size={25} />
      </button>

      {/* Blog Title */}
      <div className="text-center">
        <h1 className="text-lg sm:text-3xl font-bold">Blogs</h1>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
          Read our latest blogs about AI and tech.
        </p>
      </div>
    </div>
  );
};

export default BlogCover;
