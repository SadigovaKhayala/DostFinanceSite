import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import ProjectAreaGroup from '../components/ProjectAreaGroup';
import TeamAreaOne from '../components/TeamAreaOne';
import CounterAreaOne from '../components/CounterAreaOne';
import ContactAreaOne from '../components/ContactAreaOne';

const Project = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Project 01'} />

      {/* ProjectAreaGroup */}
      <ProjectAreaGroup />

      {/* TeamAreaOne */}
      <TeamAreaOne />

      {/* Counter Area One */}
      <CounterAreaOne />

      {/* Contact Area One */}
      <div className="pd-bottom-120">
        <ContactAreaOne />
      </div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Project;
