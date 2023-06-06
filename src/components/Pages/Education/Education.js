import React from 'react';
import './Education.css';
import smk from '../../../assestes/TopLogo.png';
import jnulogo from '../../../assestes/jnulogo.png';

function Education() {
    return (
        <div data-aos="fade-up" className='qualificationsection'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" >Education Qualifications</h1>
            <div className="institutes">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="institute">
                    <div className="institute_logo">
                        <img src={smk} alt="#" />
                        <p>2017-2018</p>
                    </div>
                    <p>completed my school(10th) from SMPKD Shikshan Shansthan, Firozabad with a percentage of 93.00% having some good exprence</p>
                </div>
                <div data-aos="zoom-out-up"  className="institute">
                    <div className="institute_logo">
                        <img src={smk} alt="#" />
                        <p>2019-2020</p>
                    </div>
                    <p>completed my intermidiate school(12th) from  SMPKD Shikshan Shansthan, Firozabad with a percentage of 92.66% having some good exprence and knowledge</p>
                </div>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="institute">
                    <div className="institute_logo">
                        <img src={jnulogo} alt="#" />
                        <p>2020-Present</p>
                    </div>
                    <p>Continueing my Graduation in B.TECH in computer science and engineering at SCHOOL OF ENGINEERING JNU DEHLI with current SGPA of 7.3 with high knowledge and expreience. </p>
                </div>
            </div>

        </div>
    )
}

export default Education;
