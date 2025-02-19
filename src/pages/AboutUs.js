import React from 'react';
import About from './aboutUs/About';
import OurTeam from './aboutUs/Ourteam';
import BlogSection from './aboutUs/Blog'; 
import Team from './home/Team'; 
import Authors2 from './aboutUs/Authors2';

function AboutUs() {
  return (
    <div>
      <About />
      <OurTeam />
      <BlogSection />
      <Authors2 />
      <Team />
    </div>
  );
}

export default AboutUs;