import React, { useState } from 'react';
// import frontimg from "../assestes/bglogo.png";

import { useNavigate } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Skill_Service/Services';
import Education from '../Education/Education';
import Skill from '../Skill_Service/Skill';
import Alert from '../../Alert/Alert';


function Home() {
    const navigate = useNavigate();
    const [clienName, setName] = useState("");
    const [clientEmail, setemail] = useState("");
    const [showaltr, isaltr] = useState(false);
    const banner = [clienName, clientEmail];

    return (
        <>
            <div className='front'>
                <div className="profile-container">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="profile-details">

                        <div className="profile-name">
                            <span>Hii There<br /></span>
                            <span>I'm </span>
                            <h2 className='heightlighted-text'>Avadhesh Kumar</h2>
                        </div>
                        <div className="prifile-role">
                            <span><br />
                                <b>Software Engineer</b><br />
                                <br />
                                And I love to design and create beautiful and efficient software and websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</span>
                        </div>
                        <div className='profile-options'>
                            <button className='btn btn-lightdark' onClick={() => navigate('/contactme')}>contact Me</button>
                            <a href='src\assestes\Resume.pdf' download><button className='btn btn-blue'>Get Resume</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Alert alert={banner} showaltr={showaltr} />
            <About />
            <Skill data-aos="zoom-in-down" />
            <Services />
            <Education />
            <Contact name={clienName} email={clientEmail} setName={setName} setEmail={setemail} showaltr={isaltr} />
        </>
    )
}

export default Home
