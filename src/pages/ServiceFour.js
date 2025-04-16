import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import ServiceAreaGroupFour from '../components/ServiceAreaGroupFour';
import PricingAreaTwo from '../components/PricingAreaTwo';

const ServiceFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Service 04'} />

      {/* ServiceAreaGroupFour */}
      <ServiceAreaGroupFour />

      {/* PricingAreaTwo */}
      <PricingAreaTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceFour;
