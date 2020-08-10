import React from 'react';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon, InlineIcon } from '@iconify/react';
import iosArrowRight from '@iconify/icons-ion/ios-arrow-right';
import BackToTop from "react-back-to-top-button";

import section from '../../../HOC/Section';


const Footer = () =>{
    return(
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Almondai</h3>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="fa fa-chevron-right"></i><a href="#">Home</a></li>
                                <li><i className="fa fa-chevron-right"></i><a href="#">About us</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Services</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Terms of service</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                    
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br></br>
                                New York, NY 535022<br></br>
                                United States <br></br>
                                <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                <strong>Email:</strong> info@example.com<br></br>
                            </p>

                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
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
                <div className="credits">
                    Designed by <a href="/#">Almondai group</a>
                </div>
            </div>
        </footer>
      
    )
}
export default Footer;

