import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  
  // Sample data (dapat ito galing sa database)
  const blog = {
    id: id,
    title: "Lorem Ipsum Loreming",
    author: "John Doe",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    date: "Feb 23, 2025",
    tags: ["React", "Web Dev"],
    image: "https://via.placeholder.com/600",
    content: "This is the full content of the blog post...",
  };

  return (
    <div className="container mx-auto py-10 px-5">
      <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-5">{blog.title}</h1>
      <p className="text-sm text-gray-500">By {blog.author} | {blog.date}</p>
      <div className="mt-4">
        {blog.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm mr-2">
            #{tag}
          </span>
        ))}
      </div>
      <p className="mt-6 text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
