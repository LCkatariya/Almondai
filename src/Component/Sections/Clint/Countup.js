import React from 'react';

import section from '../../../HOC/Section';


const Countup = () =>{
    return(
      <section id="counts" className="counts">
        <div className="container">
          <div className="row">
            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                <img src={require("../../../img/counts-img.svg")} alt="" className="img-fluid" />
            </div>
            <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
              <div className="content d-flex flex-column justify-content-center">
                <div className="row">

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <i className="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">15</span>
                            <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                        </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                          <i className="icofont-document-folder"></i>
                          <span data-toggle="counter-up">20</span>
                          <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                          <i className="icofont-clock-time"></i>
                          <span data-toggle="counter-up">4</span>
                          <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                          <i className="icofont-award"></i>
                          <span data-toggle="counter-up">7</span>
                          <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Countup;