import React from 'react';

import section from '../../../HOC/Section';


const Portfolio = () =>{
    return(
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
             
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="400">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app d-flex ">
              <div className="">
              <iframe width="100%" height="65%" src="https://www.youtube.com/embed/LDyPnhUZWp8" frameBorder="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} ></iframe>
                <div className="portfolio-info">
                  <h4>SmartCam</h4>
                  <p>Number plate detection and text recognition is widely 
                    research area due to a much practical application. 
                    But number plate bounding box detection and text 
                    recognition in wild or any environment condition like 
                    lighting, weather, or plate orientation is still is 
                    challenging.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web d-flex">
              <div className="">
              <iframe width="100%" height="65%" src="https://www.youtube.com/embed/LeOGVMlVIfI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>                <div className="portfolio-info">
                  <h4>Emigo</h4>
                  <p>"Emigo" app senses your facial expressions like your friend. 
                    It senses what you are up to and what needs to be done to 
                    enhance or change your mood. Meet your new virtual Friend 
                    Emigo that detects your emotion and will suggest you 
                    multimedia contents accordingly.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app d-flex">
              <div className="">
              <a href="http://www.synhealth.com/"><img style={{ width:"100%", height:"65%",backgroundColor:"blue"}} src={require("../../../img/portfolio/synhealth.svg")} alt="" /></a>
                <div className="portfolio-info">
                  <h4>SynHealth</h4>
                  <p>Synhealth.com is a ‘Technology company with a heart and dream 
                    that every Indian gets to access the best possible health care. 
                    We are provided Diagnosis Service @home with guarantees highest 
                    quality results at honest prices you could even search for. 
                    We have wide range of health care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    )
}
export default Portfolio;



