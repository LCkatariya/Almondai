import React from 'react';
import BackToTop from "react-back-to-top-button";

import section from '../../../HOC/Section';

import { Icon, InlineIcon } from '@iconify/react';
import iosTelephoneOutline from '@iconify/icons-ion/ios-telephone-outline';
import mapMarkerLine from '@iconify/icons-clarity/map-marker-line';
import emailLine from '@iconify/icons-clarity/email-line';



const Contact = () =>{


    return(
      <section id="contact" className="">
        <div className="container" data-aos="fade-up">

					<div className="section-title" data-aos="">
						<h2>Contact Us</h2>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
					</div>

					<div className="row contact-info">
						<div className="col-md-4">
							<div className="contact-addresss">
								<Icon icon={mapMarkerLine} className="icon" />
								<h3>Address</h3>
								<address>A108 Adam Street, NY 535022, USA</address>
							</div>
						</div>

					<div className="col-md-4">
							<div className="contact-phone">
								<Icon icon={iosTelephoneOutline} className="icon"/>
								<h3>Phone Number</h3>
								<p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
							</div>
					</div>

					<div className="col-md-4">
							<div className="contact-email">
								<Icon icon={emailLine} className="icon" />
								<h3>Email</h3>
								<p><a href="mailto:info@example.com">info@example.com</a></p>
							</div>
					</div>
				</div>
					<div className="form">
						<form action="forms/contact.php" method="post" role="form" className="php-email-form">

							<div className="row">
									<div className="form-group col-md-6">
											<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
											<div className="validate"></div>
									</div>
									<div className="form-group col-md-6">
										<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
										<div className="validate"></div>
									</div>
							</div>

							<div className="form-group">
									<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
									<div className="validate"></div>
							</div>
									<div className="form-group">
									  <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
										<div className="validate"></div>
									</div>
									<div className="mb-3">
										<div className="loading">Loading</div>
										<div className="error-message"></div>
										<div className="sent-message">Your message has been sent. Thank you!</div>
									</div>
									<div className="text-center"><button type="submit">Send Message</button></div>
						</form>									
          </div>
				</div>
			</section>
    )
}
export default Contact;






