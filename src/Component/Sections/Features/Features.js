import React from 'react';

import section from '../../../HOC/Section';


const Features = () =>{
    return(
      <section id="features" className="features">
        <div className="container">  
          <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="300">

            <div className="col-lg-3 col-md-4 d-flex">
              <div className="icon-box">
                  <img src={require("../../../img/features/features-1.png")} className="icon" alt=""></img>
                  <h6><a href="#/">ARTIFICIAL INTELLIGENCE</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-md-0 d-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-2.png")} className="icon" alt=""></img>                  
              <h6><a href="#/">COMPUTER VISION</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-md-0 d-flex">
              <div className="icon-box">
                  <img src={require("../../../img/features/features-3.png")} className="icon" alt=""></img>
                  <h6><a href="#/">DEEP LEARNING</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 d-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-4.png")} className="icon" alt=""></img>
                  <h6><a href="#/">MACHINE LEARNING</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
            <img src={require("../../../img/features/features-5.png")} className="icon" alt=""></img>
                  <h6><a href="#/">EDGE INTELLIGENCE</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-6.png")} className="icon" alt=""></img>
                  <h6><a href="#/">ROBOTIC VISION</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-7.png")} className="icon" alt=""></img>
                  <h6><a href="#/">BLOCKCHAIN DEVELOPMENT</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
                  <img src={require("../../../img/features/features-8.png")} className="icon" alt=""></img>
                  <h6><a href="#/">ETHEREUM</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
                  <img src={require("../../../img/features/features-9.png")} className="icon" alt=""></img>
                  <h6><a href="#/">PARITY</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
                <img src={require("../../../img/features/features-10.png")} className="icon" alt=""></img>
                  <h6><a href="#/">ICO/CROWDSALE</a></h6>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-4 mt-4 d-flexd-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-11.png")} className="icon" alt=""></img>
                  <h6><a href="#/">SMART CONTRACTS DEVELOPMENT</a></h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mt-4 d-flex">
              <div className="icon-box">
              <img src={require("../../../img/features/features-12.png")} className="icon" alt=""></img>
                  <h6><a href="#/">HYPERLEDGER</a></h6>
              </div>
            </div>
          </div>
        </div>
      </section>          
    )
}
export default Features;
