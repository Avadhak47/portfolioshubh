import React from 'react';
import frontimg from "../assestes/bglogo.png";
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Education from './Education';
// import img from "../assestes/icon.png";
import Skill from './Skill';
import ProjectDetail from './ProjectDetail';

function Home() {

    return (
        <>
            <div className='front'>
                <div className="profile-container">
                    <div className="profile-details">
                        <div className="profile-name">
                            <span>Hii There<br /></span>
                            <span>I'm </span>
                            <h2 className='heightlighted-text'>SHUBHAM TANWAR</h2>
                        </div>
                        <div className="prifile-role">
                            <span><br />
                                <b>Front-end Developer.</b><br />
                                <br />
                                And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</span>
                        </div>
                        <div className='profile-options'>
                            <Link to="/contactme"><button className='btn btn-lightdark'>contact Me</button></Link>
                            <a href='#'><button className='btn btn-blue'>Get Resume</button></a>
                        </div>
                    </div>
                    <img src={frontimg} alt="image" />
                </div>
            </div>
        <About />
        <Skill />
        <Services />
        <ProjectDetail/>
        <Education />
        <Contact />
        </>
    )
}

export default Home
