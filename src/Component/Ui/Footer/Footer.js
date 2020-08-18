import React from 'react';
import { Icon } from '@iconify/react';
import iosArrowRight from '@iconify/icons-ion/ios-arrow-right';
import BackToTop from "react-back-to-top-button";



const Footer = () =>{
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Almondai</h3>
                            <p>Started with a perusal, how Machine Learning, 
                                Deep Learning, and Computer Vision are making 
                                our life easy and engaging, it soon became a passion 
                                for us to work around these technologies.We stand by our
                                values: the passion for quality, commitment to long-term 
                                value creation, respect for people and for the planet.</p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Icon icon={iosArrowRight}/><a href="home">Home</a></li>
                                <li><Icon icon={iosArrowRight}/><a href="#services">Services</a></li>
                                <li><Icon icon={iosArrowRight}/><a href="#features">Feature</a></li>
                                <li><Icon icon={iosArrowRight}/><a href="#portfolio">Portfolio</a></li>
                                <li><Icon icon={iosArrowRight}/><a href="#team">Team</a></li>
                            </ul>
                        </div>
                    
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                            BTM 2nd Stage  <br></br>
                            Bengaluru, Karnataka 560076<br></br>
                                India <br></br>
                                <strong>Phone:</strong> +91 8058 136137<br></br>
                                <strong>Email:</strong> info@almondai.com<br></br>
                            </p>

                            <div className="social-links">
                                <a href="https://twitter.com/VisionRival" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/visionRival/" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#/" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#/" className="google-plus"><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.linkedin.com/company/13346467/" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                         </div>
                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Mission</h4>
                            <p>VisionRival's mission is to provide our product engineering expertise with integrity, quality & execution excellence for our customer's success.</p>
                            <form action="" method="post">
                            <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
                <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={1500}
                    easing="easeInOutQuint"
                >
                <i className="fas fa-chevron-circle-up"></i>
                </BackToTop>
            </div>
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>Almondai</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
      
    )
}
export default Footer;

