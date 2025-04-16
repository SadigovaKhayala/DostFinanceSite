import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import PricingAreaOne from '../components/PricingAreaOne';
import ServiceAreaGroupTwo from '../components/ServiceAreaGroupTwo';

const ServiceTwo = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 02'} />

      {/* Service Area One */}
      <ServiceAreaGroupTwo />

      {/* Pricing Area One */}
      <PricingAreaOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceTwo;
