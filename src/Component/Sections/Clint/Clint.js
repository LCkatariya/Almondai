import React from 'react';

import section from '../../../HOC/Section';

const Clint = () =>{
    return(
      <section>
      {/* <header class="section-title">
            <h2>Our Associations</h2>
          </header> */}
      <div id="clients" className="clients" >
          
          <div className="container">
              <div className="row justify-content-center">         
                 
                  <div className="col-lg-2 col-md-4 col-7 d-flex">
                    <img src={require("../../../img/clients/Untitled presentation.jpg")}  className="img-fluid" alt="" data-aos="zoom-in" />
                  </div>

                  <div className="col-lg-2 col-md-4 col-7 d-flex">
                    <img src={require("../../../img/clients/client-7.png")} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
                  </div>
        
                  <div className="col-lg-2 col-md-4 col-7 d-flex">
                    <img src={require("../../../img/clients/download (7).png")} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
                  </div>  
              </div> 
          </div>
          </div>
      </section>
    )
}
export default Clint;