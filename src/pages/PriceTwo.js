import React from 'react';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import PriceAreaThree from '../components/PriceAreaThree';

const PriceTwo = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Price 02'} />

      {/* PriceAreaThree */}
      <PriceAreaThree />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default PriceTwo;
