import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogCover = ({ navigate }) => {
  return (
    <div className="relative w-full aspect-[4.5/1] bg-gradient-to-b from-gray-400 to-gray-600 flex items-center justify-center text-white">
      {/* ✅ Back Arrow with Reverse Transition */}
      <button
        onClick={() => navigate("/", { state: { from: "blogs" } })} // ✅ Track navigation direction
        className="absolute top-6 left-6 flex items-center gap-2 text-white hover:opacity-70 cursor-pointer"
      >
        <ArrowLeft size={25} />
      </button>

      {/* Blog Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p className="mt-4 text-sm">
          <strong>Gen AI PH Builders</strong> is a community-driven organization dedicated to educating
          and empowering Filipinos.
        </p>
      </div>
    </div>
  );
};

export default BlogCover;
