import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink, Link } from 'react-router-dom';
import icon from "../assestes/icon.png";

import { VscChromeClose } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';


const navlinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "skills", path: "/skills" },
    { title: "Education", path: "/educationqualifications" },
    { title: "ContactMe", path: "/contactme" },
    {title: "Services", path:"/services"},
    { title: "ProjectDetails", path: "/projectdetails" },
]

function Navbar() {
    const [mobileMenu, setmobileMenu] = useState();
    const [show, setshow] = useState("hide");


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

    const openMobileMenu = () => {
        setmobileMenu(true);
        setshow("show");
        console.log("hello");
    }
    const closemobileMenue = () => {
        setmobileMenu(false);
        setshow("hide");
    }

    return (
        <div className='navbar'>
            <Link to='/' className="navlogo">
                <img src={icon} alt="namelogo" />
                <h3>hubham Tanwar</h3>
            </Link>

            <div className={`linkouter ${show}`} onClick={closemobileMenue}>  </div>

            <div className={`navlinks ${show}`}>
                {navlinks.map((val, index) => (
                    <NavLink key={index} onClick={closemobileMenue} to={val.path} className="link">{val.title}</NavLink>
                ))}
                <div className="icon">
                    <a href="https://github.com/Shubh404-SE" target="blank"><GitHubIcon /></a>
                </div>
            </div>
            {mobileMenu ? (
                <VscChromeClose id='menu__toggle' onClick={closemobileMenue} />
            ) : (
                <SlMenu id='menu__toggle' onClick={openMobileMenu} />
            )}
        </div>
    )
}
export default Navbar;
