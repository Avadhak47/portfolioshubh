import React from 'react';
import frontimg from "../assestes/bglogo.png";
import { Link } from 'react-router-dom';
import About from './About';

function Home() {
    return (
        <>
        <div className="homepage">
            <div className='front'>
                <div className="profile-container">
                    <div className="profile-details">
                        <div className="profile-name">
                            <span>Hii There<br /></span>
                            <span>I'm </span>
                            <span className='heightlighted-text'>SHUBHAM TANWAR</span>
                        </div>
                        <div className="prifile-role">
                            <span>and I'm a <br />
                                <b>Front-end Developer.</b><br />
                                <br />
                                And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch</span>
                        </div>
                        <div className='profile-options'>
                            <Link to="/"><button className='btn btn-lightdark'>contact Me</button></Link>
                            <Link to="/"><button className='btn btn-blue'>Get Resume</button></Link>
                        </div>
                    </div>
                    <img src={frontimg} alt="image" />
                </div>
            </div>
        </div>
        <About />
        </>
    )
}

export default Home
