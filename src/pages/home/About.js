import React from 'react';

function About() {
  return (
    <div className="aboutMissionSection">
      <div className="aboutBox">
        <h3 className="sectionTitle">ABOUT US</h3>
        <h2 className="aboutTitle">We are a community of content writers who share their learnings</h2>
        <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" className="readMoreLink">Read More {">"}</a>
      </div>
      <div className="missionBox">
        <h3 className="sectionTitle">OUR MISSION</h3>
        <h2 className="missionTitle">Creating valuable content for creatives all around the world</h2>
        <p className="missionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export default About;