import React from "react";
import BlogCover from "../sections/BlogCover";
import BlogList from "../sections/BlogList";
import Footer from "../sections/Footer";

const Blogs = () => {
  return (
    <div>
      {/* Blog Cover Section */}
      <BlogCover />
      <BlogList />
      <Footer />
    </div>
  );
};

export default Blogs;
