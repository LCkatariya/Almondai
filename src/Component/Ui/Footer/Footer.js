import React from 'react';
// npm install --save-dev @iconify/react @iconify/icons-ion
import { Icon, InlineIcon } from '@iconify/react';
import iosArrowRight from '@iconify/icons-ion/ios-arrow-right';
import BackToTop from "react-back-to-top-button";

import section from '../../../HOC/Section';


const Footer = () =>{
    return(
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 footer-info">
                            <h3>Almondai</h3>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="fa fa-chevron-right"></i><a href="#">Home</a></li>
                                <li><i class="fa fa-chevron-right"></i><a href="#">About us</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Services</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Terms of service</a></li>
                                <li><Icon icon={iosArrowRight} /> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>
                    
                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br></br>
                                New York, NY 535022<br></br>
                                United States <br></br>
                                <strong>Phone:</strong> +1 5589 55488 55<br></br>
                                <strong>Email:</strong> info@example.com<br></br>
                            </p>

                            <div class="social-links">
                                <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="google-plus"><i class="fab fa-google-plus-g"></i></a>
                                <a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-newsletter">
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
                <i class="fas fa-chevron-circle-up"></i>
                </BackToTop>
            </div>
            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong>Almondai</strong>. All Rights Reserved
                </div>
                <div class="credits">
                    Designed by <a href="/#">Almondai group</a>
                </div>
            </div>
        </footer>
      
    )
}
export default Footer;

