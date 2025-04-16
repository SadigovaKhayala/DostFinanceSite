import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import BlogGroupThree from '../components/BlogGroupThree';

const BlogThree = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Blog 03'} />

      {/* BlogGroupThree */}
      <BlogGroupThree />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogThree;
