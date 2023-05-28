import React from 'react';
import './Education.css';
import vidyabharti from '../../../assestes/vidyabhartiinstitute.jpeg';
import princeschool from '../../../assestes/princeschoollogo.jpeg';
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
                        <img src={vidyabharti} alt="#" />
                        <p>2017-2018</p>
                    </div>
                    <p>completed my school(10th) from ADRASH VIDYA MANDIR SCHOOL, NAWA CITY with a percentage of 91.33% having some good exprence</p>
                </div>
                <div data-aos="zoom-out-up"  className="institute">
                    <div className="institute_logo">
                        <img src={princeschool} alt="#" />
                        <p>2019-2020</p>
                    </div>
                    <p>completed my intermidiate school(12th) from PRINCE SCHOOL SIKAR with a percentage of 86.66% having some good exprence and knowledge</p>
                </div>
                <div data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="institute">
                    <div className="institute_logo">
                        <img src={jnulogo} alt="#" />
                        <p>2020-Present</p>
                    </div>
                    <p>Continueing my Graduation in B.TECH in computer science and engineering at SCHOOL OF ENGINEERING JNU DEHLI with current SGPA of 7.0 with high knowledge and expreiencex </p>
                </div>
            </div>

        </div>
    )
}

export default Education;
