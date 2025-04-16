import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import BlogGroupTwo from '../components/BlogGroupTwo';

const BlogTwo = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Blog 02'} />

      {/* BlogGroupTwo */}
      <BlogGroupTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogTwo;
