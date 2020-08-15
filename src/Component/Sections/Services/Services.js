import React from 'react';

import section from '../../../HOC/Section';


const Services = () =>{
    return(
      <section id="services" className="services">
        <div className="container">
    
          <div className="section-title" data-aos="fade-up">
              <h2>services</h2>
              <p>We do believe in the contribution towards our community</p>
          </div>
    
          <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon"><i ><img src={require("../../../img/community_project/communite-p-1.png")} alt=""/></i></div>
                    <h4 className="title"><a href="#/">ETHEREUM LIGHT WALLET</a></h4>
                    <p className="description">"Ethereum wallet based on Geth, written on React Native.</p>
                </div>
              </div>
      
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon"><i ><img src={require("../../../img/community_project/communite-p-2.png")}alt=""/></i></div>
                    <h4 className="title"><a href="#/">WEB3 REACT NATIVE</a></h4>
                    <p className="description">React Native wrapper for Web3-Java. Helps to develop fast, smart contract based fontend mobile application.</p>
                </div>
              </div>
      
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon"><i ><img src={require("../../../img/community_project/communite-p-3.png")} alt=""/></i></div>
                    <h4 className="title"><a href="#/">BLOCKCHAIN IN PYTHON</a></h4>
                    <p className="description">Minimal blockchain code written on python to understand the basic concepts of blockchain and mining.</p>
                </div>
              </div>
      
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon"><i ><img src={require("../../../img/community_project/communite-p-4.png")} alt=""/></i></div>
                    <h4 className="title"><a href="#/">CRYPTODATING</a></h4>
                    <p className="description">Ethereum blockchain based dating app written on smart contract.</p>
                </div>
              </div>
      
          </div>    
        </div>
      </section>
    )
}
export default Services;

