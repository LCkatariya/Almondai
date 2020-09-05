import React, { useState } from 'react';

import section from '../../../HOC/Section';

import { Icon } from '@iconify/react';
import iosTelephoneOutline from '@iconify/icons-ion/ios-telephone-outline';
import mapMarkerLine from '@iconify/icons-clarity/map-marker-line';
import emailLine from '@iconify/icons-clarity/email-line';



const Contact = () =>{
	const [name , setName] = useState("");
	const [email , setEmail] = useState("");
	const [subject , setSubject] = useState("");
	const [message , setMessage] = useState("");

	const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = { name , email , subject , message };
            const response = await fetch("http://34.206.109.62:3000/contacts",
            {
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            //window.location="/";
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }


    return(
      <section id="contact" className="">
        <div className="container" data-aos="fade-up">

					<div className="section-title" data-aos="">
						<h2>Contact Us</h2>
						<p>We are pleased to hear any feedback from you.</p>
					</div>

					<div className="row contact-info">
						<div className="col-md-4">
							<div className="contact-addresss">
								<Icon icon={mapMarkerLine} className="icon" />
								<h3>Address</h3>
								<address>1st Floor, Amara, Above SBI, 
									Beside Reliance Fresh, BTM 2nd Stage, 
									Bengaluru, Karnataka 560076</address>
							</div>
						</div>

					<div className="col-md-4">
							<div className="contact-phone">
								<Icon icon={iosTelephoneOutline} className="icon"/>
								<h3>Phone Number</h3>
								<p><a href="#/">+91 8058 136137</a></p>
							</div>
					</div>

					<div className="col-md-4">
							<div className="contact-email">
								<Icon icon={emailLine} className="icon" />
								<h3>Email</h3>
								<p><a href="#/">info@almondai.com</a></p>
							</div>
					</div>
				</div>
					<div className="form">
						<form className="php-email-form" onSubmit={onSubmitForm}>

							<div className="row">
								<div className="form-group col-md-6">
									<input type="text" name="name" className="form-control" 
									id="name" placeholder="Your Name" value={name} 
									onChange={e => setName(e.target.value)} />
								</div>
								<div className="form-group col-md-6">
									<input type="email" className="form-control" name="email" 
									id="email" placeholder="Your Email" value={email} 
									onChange={e => setEmail(e.target.value)}/>
								</div>
							</div>

							<div className="form-group">
								<input type="text" className="form-control" name="subject" 
								id="subject" placeholder="Subject" value={subject} 
								onChange={e => setSubject(e.target.value)} />
							</div>
							<div className="form-group">
								<textarea className="form-control" name="message" rows="5"  
								placeholder="Message" value={message} 
								onChange={e => setMessage(e.target.value)}></textarea>
							</div>
							<div className="text-center"><button type="submit">Send Message</button></div>
						</form>									
                    </div>
				</div>
			</section>
    )
}
export default Contact;






