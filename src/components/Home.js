import React from 'react';
// import frontimg from "../assestes/bglogo.png";
import myimage from '../assestes/myphotoHome.png';
import svgbg from '../assestes/blob (2).svg';
import { useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Education from './Education';
import Skill from './Skill';
import ProjectDetail from './ProjectDetail';

function Home() {
    const navigate = useNavigate();

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
                            <button className='btn btn-lightdark' onClick={()=>navigate('/contactme')}>contact Me</button>
                            <a href='src\assestes\Resume.pdf' download><button className='btn btn-blue'>Get Resume</button></a>
                        </div>
                    </div>
                    <div className="img_section">
                        <img className='frontimg' src={myimage} alt="me" />
                        <img className='blob' src={svgbg} alt="blob" />
                    </div>
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
