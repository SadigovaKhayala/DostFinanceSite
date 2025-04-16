import React from "react";
import BlogDetailsArea from "../components/BlogDetailsArea";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterSix";
import NavBar from "../components/NavBar";

const BlogDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogDetails;
