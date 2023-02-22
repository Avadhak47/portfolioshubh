import React from 'react';
import '../style/Services.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import DiamondIcon from '@mui/icons-material/Diamond';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

function Services() {
    return (
        <div className='outercontainer' >
            <h1>My Services</h1>
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
        </div>
    )
}

export default Services
