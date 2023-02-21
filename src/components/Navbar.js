import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

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


    return (
        <div className='navbar'>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <Link to='/' className="navlogo">
                <img src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2" alt="namelogo" />
                <h3>Shubham Tanwar</h3>
            </Link>

            <div className='navlinks'>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/" className="link">Skills</Link>
                <Link to="/" className="link">Services</Link>
                <Link to="/" className="link">Education</Link>
                <Link to="/" className="link">Services</Link>
                <Link to="/" className='link'>Project Details</Link>
                <div className="icon">
                    <a href="/"><GitHubIcon /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
