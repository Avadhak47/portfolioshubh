import React from 'react';
import aboutme from "../assestes/about-us.png";
import '../style/About.css';

function About() {
  return (
    <div className='Aboutpage'>
      <div className='about-details'>
            <h1>About Me</h1>
            <p>My name is <span className='heightlighted-text'>SHUBHAM TANWAR.</span></p>
            <p>My portfolio is a representation of all that I have leanred exprenced and accompalished as a science and engineering student. My personal philosophy when it comes to education and learning is closly related to several cognitive theories of motivation. I believe that what goes on the class room is my responsibility and by working with students all of us can create an ideal enviroment for education, safety, understanding and even fun, by keeping things positive, I believe that theory is just and theory before it pratically possible.</p>
            <button className='btn btn-blue'>Get Resume</button>
      </div>
      <img src={aboutme} alt="Aboutme"/>
    </div>
  )
}

export default About
