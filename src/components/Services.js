import React from 'react';
import '../style/Services.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import DiamondIcon from '@mui/icons-material/Diamond';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

function Services() {
    return (
        <div className='outercontainer' >
            <div className='service-outer-text'>
                <h1>My Services</h1>
                <p>I can help startups and companies with the following services.</p>
            </div>
            <div className="service-details">
                <div className="service">
                    <div className="iconlogo">
                        <DiamondIcon></DiamondIcon>
                    </div>
                    <h2>Web Design</h2>
                    <p>I strive for two things in design: simplicity and clarity. Great design is born of those two things.</p>
                </div>
                <div className="service">
                    <div className="iconlogo">
                        <LaptopIcon></LaptopIcon>
                    </div>
                    <h2>Web Developement</h2>
                    <p>Responsive Web design always plays a importent role when ever going to promote your website.</p>
                </div>
                <div className="service">
                    <div className="iconlogo">
                        <IntegrationInstructionsIcon></IntegrationInstructionsIcon>
                    </div>
                    <h2>Api Developement</h2>
                    <p>Your mind is programmable - if you are not programming your mind, else will programme it for you.</p>
                </div>
            </div>
            <div className='service-outer-text ' style={{marginBottom:"0rem"}}>
                <h1>Why Work With Me?</h1>
                <p>I am a great communicator and love to invest the necessary time to understand the customer's problem very well.</p>
            </div>
        </div>
    )
}

export default Services
