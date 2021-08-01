import React from 'react';


const Home = () => {
  return (
    <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">MAKING LIFE INTERESTING USING <br/>AI & BLOCKCHAIN</h1>
              
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="https://ilearnplace.com/" className="btn-get-started scrollto">Shop Now</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img mt-4" data-aos="fade-left" data-aos-delay="300">
              <a href='https://ilearnplace.com/'><img src={require("../../../img/Asset 3.png")} className="img-fluid animated" alt="" /></a>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
