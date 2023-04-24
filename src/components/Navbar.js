import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import icon from "../assestes/icon.png";

function Navbar() {

    window.addEventListener('scroll', (event) => {
        let navbar = document.getElementsByClassName("navbar");

        if (window.pageYOffset !== undefined) {
            if (window.pageYOffset > 25) {
                navbar[0].style.background = "#26293c";
            }
            else {
                navbar[0].style.background = "transparent";
            }

        }
    })
    const links = document.querySelectorAll('.link');

    if (links!==undefined) {
        // console.log(links);
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                links.forEach((link) => {
                    link.classList.remove('active');
                });
                e.preventDefault();
                link.classList.add('active');
            });
        });
    }

    return (
        <div className='navbar'>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <Link to='/' className="navlogo">
                <img src={icon} alt="namelogo" />
                <h3>Shubham Tanwar</h3>
            </Link>

            <div className='navlinks'>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/skills" className="link">Skills</Link>
                <Link to="/services" className="link">Services</Link>
                <Link to="/educationqualifications" className="link">Education</Link>
                <Link to="/contactme" className="link">Contact Me</Link>
                <Link to="/projectdetails" className='link'>Project Details</Link>
                <div className="icon">
                    <a href="https://github.com/Shubh404-SE" target="blank"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
