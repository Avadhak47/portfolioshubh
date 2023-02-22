import React from 'react';
import '../style/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className='footercontainer'>
            <div className='footercontent'>
                <div className="socialmedialinks">
                    <a href="/"><FacebookIcon /></a>
                    <a href="/"><TwitterIcon /></a>
                    <a href="/"><InstagramIcon /></a>
                    <a href="/"><YouTubeIcon /></a>
                </div>
                <div className='copyrights'>
                    <h3>Thank You</h3>
                </div>
            </div>
        </div>
    )
}

export default Footer
