// src/components/BlogTile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const BlogTile = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate(`/blog-post/${blog.id}`);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-104">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-3 text-[#27B7B4]">{blog.title}</h3>
      <p className="text-xs text-gray-500 mt-1">
        By <span className="font-semibold">{blog.author}</span> | {blog.date}
      </p>
      <p className="text-sm text-[#4BC3B0] mt-2">
        {blog.description.length > 50
          ? `${blog.description.substring(0, 50)}...`
          : blog.description}
      </p>
      <div className="flex flex-wrap mt-2">
        {blog.tags?.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-[#E0FFF9] text-[#27B7B4] text-xs px-2 py-1 rounded-full mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-4 flex items-center gap-2 text-xs text-[#27B7B4] cursor-pointer group hover:underline"
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
