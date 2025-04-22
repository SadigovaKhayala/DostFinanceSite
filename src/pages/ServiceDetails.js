import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterSix";
import NavBar from "../components/NavBar";
import ServiceDetailsArea from "../components/ServiceDetailsArea";

const ServiceDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Vakansiya"} />

      {/* Service Details Area */}
      <ServiceDetailsArea />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
