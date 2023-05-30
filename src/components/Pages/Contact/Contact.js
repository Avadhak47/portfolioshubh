import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
// import Alert from '../../Alert/Alert';

function Contact({name, email, setName, setEmail, showaltr}) {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_dmh87do', 'template_t6u9039', form.current, 'l8CKqWZsVo7vYAaty')
            .then((result) => {
                showaltr(true);
                setTimeout(() => {
                    showaltr(false);
                }, 5000)
                console.log("done");
            }, (error) => {
                console.log("error");
            });
    };


    return (
        <div data-aos="fade-up"
            data-aos-duration="100" className='front contactbg'>
            <div data-aos="zoom-out-up" className='contact-text'>
                <h1>Contact Me</h1>
                <p>For any type of online project please don't hesitate to get in touch with me. The fastest way is to send me your message using the following email contact@domain.com</p>
            </div>
            <div className="contactdetail">
                {/* <div className='contactmethods'>
                    <div className="contactaddress">
                        <h2 className='heightlighted-text'>Address</h2>
                        <p>Nawa City 341507<br /></p>
                        <p>Rajasthan</p>
                    </div>
                    <div className="contactaddress">
                        <h2 className='heightlighted-text'>E-Mail</h2>
                        <p>shubhcodder014@gmail.com</p>
                    </div>
                    <div className="contactaddress">
                        <h2 className='heightlighted-text'>Phone</h2>
                        <p>+911023456789</p>
                    </div>
                    <div className="contactaddress">
                        <h2 className='heightlighted-text'>WhatsApp</h2>
                        <p>+911023456789</p>
                    </div>
                </div> */}
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="formlayout">
                    <div className="contenttext formtext">
                        <h2>Send message</h2>
                    </div>
                    {/* add a lable so that whenever a massage send  a banner showing your msg sent success..*/}
                    <form data-aos="fade-up" data-aos-anchor-placement="top-center" ref={form} onSubmit={sendEmail}>
                        <div className='input-item'>
                            <input type="text" name="Name" id="name" onChange={(e) => setName(e.target.value)} value={name} required />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className='input-item'>
                            
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input-item'>
                            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                            <label htmlFor="message">Write Your Message</label>
                        </div>
                        <button type='submit' value='send' className="btn btn-lightdark">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
