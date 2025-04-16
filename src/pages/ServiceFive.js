import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import ServiceAreaGroupFive from '../components/ServiceAreaGroupFive';
import PricingAreaTwo from '../components/PricingAreaTwo';

const ServiceFive = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 05'} />

      {/* ServiceAreaGroupFive */}
      <ServiceAreaGroupFive />

      {/* PricingAreaTwo */}
      <PricingAreaTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceFive;
