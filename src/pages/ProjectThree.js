import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import TeamAreaOne from '../components/TeamAreaOne';
import CounterAreaOne from '../components/CounterAreaOne';
import ContactAreaOne from '../components/ContactAreaOne';
import CaseStudyAreaGroupOne from '../components/CaseStudyAreaGroupOne';

const ProjectThree = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Project 03'} />

      {/* CaseStudyAreaGroupOne */}
      <CaseStudyAreaGroupOne />

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

export default ProjectThree;
