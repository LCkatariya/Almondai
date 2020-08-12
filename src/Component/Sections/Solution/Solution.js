import React, { Component } from "react";

 
class Solution extends Component {
  render() {
    return (
     <section className="solution" id='solution'>
          <div className="section-title" data-aos="fade-up">
              <h2>SOLUTIONS</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
      
        <div className="container">
          <div className="row justify-content-center"  data-aos="fade-up" data-aos-delay="300">

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <img src={require("../../../img/solutions/solution-1.png")} alt=""></img>
                      </div>
                      <h3 className="title">ICO/CROWDSALE</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <img src={require("../../../img/solutions/solution-2.png")} alt=""></img>
                      </div>
                      <h3 className="title">CONSORTIUM BLOCKCHAIN</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <img src={require("../../../img/solutions/solution-3.png")} alt=""></img>
                      </div>
                      <h3 className="title">SMART CONTRACT</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <img src={require("../../../img/solutions/solution-4.png")} alt=""></img>
                      </div>
                      <h3 className="title">AI AS A SERVICE</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <img src={require("../../../img/solutions/solution-5.png")} alt=""></img>
                      </div>
                      <h3 className="title">ADAS</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <img src={require("../../../img/solutions/solution-6.png")} alt=""></img>
                      </div>
                      <h3 className="title">VISION INTELLIGENCE</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <img src={require("../../../img/solutions/solution-7.png")} alt=""></img>
                      </div>
                      <h3 className="title">AI ENABLED IOT SOLUTIONS</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox purple">
                      <div className="service-icon">
                      <img src={require("../../../img/solutions/solution-8.png")} alt=""></img>
                      </div>
                      <h3 className="title">AI ON EDGE</h3>
                      
                  </div>
              </div>

              <div className="col-md-3 col-sm-6 ">
                  <div className="serviceBox">
                      <div className="service-icon">
                          <img src={require("../../../img/solutions/solution-9.png")} alt=""></img>
                      </div>
                      <h3 className="title">SERVELESS</h3>
                      
                  </div>
              </div>

            </div>
          </div>
      </section>
    );
  }
}

export default Solution