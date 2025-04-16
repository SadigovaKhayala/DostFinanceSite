import React from 'react';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import PriceAreaOne from '../components/PriceAreaOne';

const PriceOne = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Price 01'} />

      {/* PriceAreaOne */}
      <PriceAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default PriceOne;
