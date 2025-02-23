import React from "react";
import BlogTile from "../components/BlogTile";

const blogData = [
  {
    id: 1,
    title: "Lorem Ipsum Loreming",
    description: "Lorem Ipsum is simply dummy text of the printing...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Another Blog Title",
    description: "This is another sample description of a blog...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Another Blog Title",
    description: "This is another sample description of a blog...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Another Blog Title",
    description: "This is another sample description of a blog...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Another Blog Title",
    description: "This is another sample description of a blog...",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Another Blog Title",
    description: "This is another sample description of a blog...",
    image: "https://via.placeholder.com/300",
  },
  // Add more sample blogs here...
];

const BlogList = () => {
  return (
    <div className="relative bg-[#E5FFF9] px-6 sm:px-12 lg:px-24 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center mx-auto">
        {blogData.map((blog) => (
          <BlogTile key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
