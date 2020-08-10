import React, { Component } from "react";

 
class Products extends Component {
  render() {
    return (
     <section className="product" id='product'>
          <div className="section-title" data-aos="fade-up">
              <h2>PRODUCTS</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
      
        <div class="container">
          <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">

              <div class="col-md-3 col-sm-6 d-flex ">
                  <div class="serviceBox">
                      <div class="service-icon">
                          <span><i class=""><img src="http://www.visionrival.com/images/ico.png"></img></i></span>
                      </div>
                      <h3 class="title">EMIGO</h3>
                      <p class="description">"Emigo" app senses your facial expressions like your friend. 
                      It senses what you are up to and what needs to be done to enhance or change your mood. 
                      Meet your new virtual Friend Emigo that detects your emotion and will suggest you 
                      multimedia contents accordingly.</p>
                  </div>
              </div>

              <div class="col-md-3 col-sm-6 d-flex">
                  <div class="serviceBox purple">
                      <div class="service-icon">
                      <span><i class=""><img src="http://www.visionrival.com/images/synhealth.svg"></img></i></span>
                      </div>
                      <h3 class="title">SYNHEALTH</h3>
                      <p class="description">Synhealth.com is a technology company with a heart 
                      and dream that every Indian gets to access the best possible health care services. 
                      Synhealth provides Diagnostic Services at home with the highest quality results at 
                      honest prices that you could even search for.</p>
                  </div>
              </div>

              <div class="col-md-3 col-sm-6 d-flex">
                  <div class="serviceBox">
                      <div class="service-icon">
                          <span><i class=""><img src="http://www.visionrival.com/images/token.png"></img></i></span>
                      </div>
                      <h3 class="title">TRACKMATE</h3>
                      <p class="description">A GPS-based school bus tracking system, 
                      which allows parents to check the status of their child’s daily 
                      trip to school to see if they have arrived safely at school. 
                      Since the school management can track the school bus’s movements 
                      including every stop and its speed, they will know if there is a delay.</p>
                  </div>
              </div>

              <div class="col-md-3 col-sm-6 d-flex">
                  <div class="serviceBox purple">
                      <div class="service-icon">
                      <span><i class=""><img src="http://www.visionrival.com/images/nomp.svg"></img></i></span>
                      </div>
                      <h3 class="title">BLOCKCHAIN MULTIPOOL MINING SERVER</h3>
                      <p class="description">This portal is an extremely efficient, highly scalable, 
                      all-in-one, easy to setup cryptocurrency mining pool written entirely in Node.js. 
                      It contains a stratum poolserver; reward/payment/share processor; and a responsive 
                      user-friendly front-end website featuring mining instructions, in-depth live statistics, 
                      and an admin center.</p>
                  </div>
              </div>

              <div class="col-md-3 col-sm-6" d-flex>
                  <div class="serviceBox">
                      <div class="service-icon">
                          <span><i class=""><img src="http://www.visionrival.com/images/shield.png"></img></i></span>
                      </div>
                      <h3 class="title">DATA SHIELD COI</h3>
                      <p class="description">ERC20 based token developed as Data security as the underlying assets. 
                      Total token supply is 100,000,000,000 DSCoin.ERC20 Contract: 0xee395235ac363725c6b8-95d8994706cb7050482f</p>
                  </div>
              </div>
             
            </div>
          </div>
      </section>
    );
  }
}

export default Products