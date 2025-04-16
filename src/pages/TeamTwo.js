import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import TeamAreaGroupTwo from '../components/TeamAreaGroupTwo';

const TeamTwo = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={'Team 02'} />

      {/* TeamAreaGroupTwo */}
      <TeamAreaGroupTwo />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamTwo;
