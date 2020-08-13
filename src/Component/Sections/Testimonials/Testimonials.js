import React from 'react';

import section from '../../../HOC/Section';


const Testimonials = () =>{

  
    return(
      <section id="testimonials" className="testimonials">
        <div className="container ">
          <div className="section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
          </div>
          

            <div className="row justify-content-center">
              <div className="col-md-4 mt-4  d-flex">
                <div className="card d-flex mx-auto">
                  <div className="card-image"> <img className="img-fluid d-flex mx-auto mb-5" src={require("../../../img/testimonials/sunil.jpg")}  
                      alt=""/>  
                  </div>
                  <div className="card-text">
                      <div className="card-title">
                        Lorem Ipsum!
                      </div>
                      One of the most amazing team to work with. 
                      Top talent working on cutting-edge projects, 
                      coming up with innovative solutions. Incredible product, 
                      "Emigo App", based on cognitive intelligence.
                  </div>
                  <div className="footer">
                    <span id="name">Sunil Kumar<br/></span>
                    <span id="position">CEO of <a href="#/">Nescode</a></span> 
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4  d-flex">
                <div className="card d-flex mx-auto">
                  <div className="card-image"> <img className="img-fluid d-flex mx-auto mb-5" src={require("../../../img/testimonials/testimonials.jpg")} 
                       alt=""/> 
                  </div>
                  <div className="card-text">
                    <div className="card-title">Lorem Ipsum!</div> 
                    Good company for R&D in core Artificial Intelligence and Blockchain space. Convivial work environment and customer engagement.
                  </div>
                  <div className="footer mt-5">
                    <span id="name">Hari Mohan
<br/></span> 
                    <span id="position">CEO of <a href="#/">Facebook.com</a></span> 
                  </div>
                </div>
              </div>
        
            </div>
          
        </div>
      </section>
      
    )
}
export default Testimonials;
