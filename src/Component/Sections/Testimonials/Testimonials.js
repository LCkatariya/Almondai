
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";




export default class Testimonials extends Component {
  render() {
    return (
        <section>
          <div id="testimonials" className="section-title" data-aos="fade-up">
              <h2>Testimonials</h2>
              <p>We believe, Well done is better than well said.</p>
          </div>
          <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
          >
              <div className="">
                  <img src={require("../../../img/testimonials/sunil.jpg")} alt=""/>
                  <div className="myCarousel">

                      <p>
                        One of the most amazing team to work with. 
                        Top talent working on cutting-edge projects, 
                        coming up with innovative solutions. Incredible product, 
                        "Emigo App", based on cognitive intelligence.
                      </p>
                      <div className="footer">
                        <span id="name">Sunil Kumar<br/></span>
                        <span id="position">CEO of <a href="#/">Nescode</a></span> 
                      </div>
                  </div>
              </div>
          

              <div className="">
                  <img src={require("../../../img/testimonials/testimonials.jpg")} alt="" />
                  <div className="myCarousel">

                      <p className="">
                        Good company for R&D in core Artificial Intelligence and Blockchain space. Convivial work environment and customer engagement.
                      </p>     
                      <div className="footer mt-5">
                        <span id="name">Hari Mohan
                        <br/></span> 
                      </div>
                  </div>
              </div>

          </Carousel>
        </section>
    );
  }
}