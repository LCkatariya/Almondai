import React, { Component } from "react";

 
class Products extends Component {
  render() {
    return (
     <section className="product" id='product'>
          <div className="section-title" data-aos="fade-up">
              <h2>PRODUCTS</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
      
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">

              <div className="col-md-3 col-sm-6 d-flex ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <span><img src={require("../../../img/product/product-1.png")} alt=""></img></span>
                      </div>
                      <h3 className="title">EMIGO</h3>
                      <p className="description">"Emigo" app senses your facial expressions like your friend. 
                      It senses what you are up to and what needs to be done to enhance or change your mood. 
                      Meet your new virtual Friend Emigo that detects your emotion and will suggest you 
                      multimedia contents accordingly.</p>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 d-flex">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <span><img src={require("../../../img/product/product-2.svg")} alt=""></img></span>
                      </div>
                      <h3 className="title">SYNHEALTH</h3>
                      <p className="description">Synhealth.com is a technology company with a heart 
                      and dream that every Indian gets to access the best possible health care services. 
                      Synhealth provides Diagnostic Services at home with the highest quality results at 
                      honest prices that you could even search for.</p>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 d-flex">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <span><img src={require("../../../img/product/product-3.png")} alt=""></img></span>
                      </div>
                      <h3 className="title">TRACKMATE</h3>
                      <p className="description">A GPS-based school bus tracking system, 
                      which allows parents to check the status of their child’s daily 
                      trip to school to see if they have arrived safely at school. 
                      Since the school management can track the school bus’s movements 
                      including every stop and its speed, they will know if there is a delay.</p>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 d-flex">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <span><img src={require("../../../img/product/product-4.svg")} alt=""></img></span>
                      </div>
                      <h3 className="title">BLOCKCHAIN MULTIPOOL MINING SERVER</h3>
                      <p className="description">This portal is an extremely efficient, highly scalable, 
                      all-in-one, easy to setup cryptocurrency mining pool written entirely in Node.js. 
                      It contains a stratum poolserver; reward/payment/share processor; and a responsive 
                      user-friendly front-end website featuring mining instructions, in-depth live statistics, 
                      and an admin center.</p>
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 d-flex">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <span><img src={require("../../../img/product/product-5.png")} alt=""></img></span>
                      </div>
                      <h3 className="title">DATA SHIELD COI</h3>
                      <p className="description">ERC20 based token developed as Data security as the underlying assets. 
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