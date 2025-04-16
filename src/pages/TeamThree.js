import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import TeamAreaGroupThree from '../components/TeamAreaGroupThree';
import WorkProcessOne from '../components/WorkProcessOne';

const TeamThree = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Team 03'} />

      {/* TeamAreaGroupThree */}
      <TeamAreaGroupThree />

      {/* WorkProcessOne */}
      <WorkProcessOne />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamThree;
