import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import BlogGroupFour from '../components/BlogGroupFour';

const BlogFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Blog 04'} />

      {/* BlogGroupFour */}
      <BlogGroupFour />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default BlogFour;
