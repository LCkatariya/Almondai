import React, { Fragment } from 'react';
import Home from './Home/Home';
import Clint from './Clint/Clint';
import Countup from './Clint/Countup';
import Services from './Services/Services';
import Features from './Features/Features';
import Testimonials from './Testimonials/Testimonials';
import Portfolio from './Portfolio/Portfolio';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Solution from './Solution/Solution';
import Products from './Products/Product';



const Sections = () => {
  return (
      <Fragment>
          <Home /><br/><br/>
          
          <Products />
          
          <Services />
          <Features />
          <Solution />
          <Testimonials />
          <Portfolio />
          <Team />
          <Countup />
          <Clint /><br/>
          <Contact />
          
      </Fragment>
   
  );
};

export default Sections;
