import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; // Import ng arrow icon

const BlogTile = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-bold mt-2 text-[#27B7B4]">{blog.title}</h3>
      <p className="text-sm text-[#4BC3B0] mt-2">{blog.description}</p>
      <button
        onClick={() => navigate(`/blog-post/${blog.id}`)}
        className="mt-4 flex items-center gap-2 text-xs text-[#27B7B4] cursor-pointer group hover:underline pb-18"
        >
        See More
        <div className="w-5 h-5 flex items-center justify-center border border-[#27B7B4] rounded-full transition-all duration-300 group-hover:bg-[#27B7B4]">
            <FiArrowRight size={11} className="text-[#27B7B4] transition-all duration-300 group-hover:text-white" />
        </div>
    </button>
    </div>
  );
};

export default BlogTile;
