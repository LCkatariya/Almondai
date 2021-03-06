import React from 'react';

import section from '../../../HOC/Section';

const Team = () =>{
    return(
      <section id="team" className="team ">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
            <h2>Team</h2>
            <p>None of us is as smart as all of us.</p>
          </div>

          <div className="row">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src={require("../../../img/team/vikash.jpg")} className="img-fluid" alt="" />
                  
                </div>
                <div className="member-info">
                  <h4>Vikash Saini</h4>
                  <span>CEO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src={require("../../../img/team/ankit.jpeg")} className="img-fluid" alt="" />
                  
                </div>
                <div className="member-info">
                    <h4>Ankit Kumar Khandelwal</h4>
                    <span>Head Digital Mrketing Analyst</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src={require("../../../img/team/ashok.jpeg")} className="img-fluid" alt="" />
                  
                </div>
                <div className="member-info">
                  <h4>Ashok Kumar Saini</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src={require("../../../img/team/IMG20191130162753.jpg")} className="img-fluid" alt="" />
                  
                </div>
                <div className="member-info">
                  <h4>Lalchand Saini</h4>
                  <span>Engineer</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>   
      
    )
}
export default Team;
