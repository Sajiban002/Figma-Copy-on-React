import React from 'react';

function Hero() {
  return (
    <div className="heroSection">
      <div className="heroImage"></div>
      <div className="overlay"></div>
      <div className="heroContent">
        <p className="postedOn">POSTED ON STARTUP</p>
        <h1 className="heroTitle">Step-by-step guide to choosing great font pairs</h1>
        <p className="heroMeta">By James West | May 23, 2022</p>
        <p className="heroText">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className="readMoreButton">Read More {">"}</button>
      </div>
    </div>
  );
}

export default Hero;