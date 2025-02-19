import React from 'react';
import Hero from './home/Hero';
import Posts from './home/Posts';
import About from './home/About';
import Category from './home/Category'; 
import SpecialP from './home/SpecialP'; 
import Authors from './home/Authors'; 
import Logos from './home/Logos'; 
import Rate from './home/Rate'; 
import Team from './home/Team'; 

function Home() {
  return (
    <>
      <Hero />
      <Posts />
      <About />
      <Category />
      <SpecialP />
      <Authors />
      <Logos />
      <Rate />
      <Team />
    </>
  );
}

export default Home;