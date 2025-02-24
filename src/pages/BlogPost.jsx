import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  PinterestShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  PinterestIcon,
} from "react-share";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // Detect if coming from Blogs (for animation)
  const isGoingBack = location.state?.from === "blogs";

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such blog found!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <motion.div
      initial={{ x: isGoingBack ? "-100%" : "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: isGoingBack ? "100%" : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="min-h-screen bg-[#F6FFFC]"
    >
      {loading ? (
        <p className="text-center text-[#27B7B4]">Loading...</p>
      ) : blog ? (
        <>
          {/* Header Section */}
          <div className="bg-gradient-to-b from-[#27B7B4] to-[#4BC3B0] py-8 px-5 text-white text-center relative">
            <button
              onClick={() => navigate("/blogs", { state: { from: "blogPost" } })}
              className="absolute top-4 left-4 text-white text-xl hover:opacity-70 cursor-pointer"
            >
              <FiArrowLeft size={25} />
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold">{blog.title}</h1>
            <p className="mt-2 text-sm sm:text-base">{blog.author}</p>
            <p className="text-xs sm:text-sm">{blog.date}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {blog.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white text-[#27B7B4] px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Blog Content Section */}
          <div className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-lg rounded-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-64 object-cover rounded-md"
            />

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

            {/* Blog Content (Markdown Support) */}
            <div className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
  <ReactMarkdown
    remarkPlugins={[remarkGfm, remarkBreaks]}
    rehypePlugins={[rehypeRaw]}
    components={{
      h1: ({ children }) => <h1 className="text-3xl font-bold mt-6 mb-4">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold mt-5 mb-3">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
      p: ({ children }) => <p className="mb-4">{children}</p>,
      ul: ({ children }) => <ul className="list-disc list-inside mb-4">{children}</ul>,
      ol: ({ children }) => <ol className="list-decimal list-inside mb-4">{children}</ol>,
      li: ({ children }) => <li className="ml-4">{children}</li>,
      blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-500 pl-4 italic">{children}</blockquote>,
      code: ({ children }) => <code className="bg-gray-200 px-1 py-0.5 rounded text-red-500">{children}</code>,
      pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded">{children}</pre>,
    }}
  >
    {blog.content?.join("\n")}
  </ReactMarkdown>
</div>


          </div>
        </>
      ) : (
        <p className="text-center text-[#27B7B4]">Blog not found.</p>
      )}
    </motion.div>
  );
};

export default BlogPost;
