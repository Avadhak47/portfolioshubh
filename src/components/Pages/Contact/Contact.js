import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Alert from '../../Alert';

function Contact() {
    const [showaltr, isaltr] = useState(false);
    const [clienName, setName] = useState("");
    const [clientEmail, setemail] = useState("");
    const banner = [clienName, clientEmail];
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_dmh87do', 'template_t6u9039', form.current, 'l8CKqWZsVo7vYAaty')
            .then((result) => {
                isaltr(true);
                setTimeout(()=>{
                    isaltr(false);
                }, 5000)
                console.log("done");
            }, (error) => {
                console.log("error");
            });
    };


    return (
        <div className='front contactbg'>
            <div className='contact-text'>
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
                <div className="formlayout">
                {showaltr && <Alert alert={banner}/>}
                    <div className="contenttext formtext">
                        <h2>Send message</h2>
                    </div>
                    {/* add a lable so that whenever a massage send  a banner showing your msg sent success..*/}
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="Name" id="name" onChange={(e)=>setName(e.target.value)} value={clienName} placeholder='Your Name' />
                        <input type="email" name="email" id="email" onChange={(e)=>setemail(e.target.value)} value={clientEmail} placeholder='Your E-Mail Address' />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                        <button type='submit' value='send' className="btn btn-lightdark">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
