import React from 'react';

import section from '../../../HOC/Section';


const Portfolio = () =>{
    return(
      <section id="portfolio" className="portfolio">
        <div className="container">

          <div className="section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

            <div className="col-lg-4 col-md-6 portfolio-item filter-app d-flex ">
              <div className="portfolio-wrap">
                <img src={require("../../../img/solutions/solution-1.png")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="../img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web d-flex">
              <div className="portfolio-wrap">
                <img src={require("../../../img/solutions/solution-2.png")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="../img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app d-flex">
              <div className="portfolio-wrap">
                <img src={require("../../../img/solutions/solution-3.png")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="../img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
       
    )
}
export default Portfolio;
