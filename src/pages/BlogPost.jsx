import React from "react";
import { useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton, PinterestShareButton } from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon, PinterestIcon } from "react-share";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shareUrl = window.location.href;

  // Sample data (Replace this with an actual API fetch if available)
  const blog = {
    id: id,
    title: "Title of the Blog",
    author: "John Doe",
    date: "Feb 23, 2025",
    tags: ["Data Science", "LLM"],
    image: "https://via.placeholder.com/600",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...`,
  };

  return (
    <div className="min-h-screen bg-[#F6FFFC]">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-[#27B7B4] to-[#4BC3B0] py-8 px-5 text-white text-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-white text-xl hover:opacity-70 cursor-pointer"
        >
          <FiArrowLeft size={25} />
        </button>
        <h1 className="text-2xl sm:text-3xl font-bold">{blog.title}</h1>
        <p className="mt-2 text-sm sm:text-base">{blog.author}</p>
        <p className="text-xs sm:text-sm">{blog.date}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {blog.tags.map((tag, index) => (
            <span key={index} className="bg-white text-[#27B7B4] px-3 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-md">
        <img src={blog.image} alt={blog.title} className="w-full h-48 sm:h-64 object-cover rounded-md" />

        {/* Share Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <PinterestShareButton url={shareUrl} media={blog.image}>
            <PinterestIcon size={40} round />
          </PinterestShareButton>

          <EmailShareButton url={shareUrl} subject={blog.title} body={blog.content}>
            <EmailIcon size={40} round />
          </EmailShareButton>

          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
        </div>

        {/* Blog Content */}
        <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
