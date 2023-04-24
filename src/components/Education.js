import React from 'react';
import '../style/Education.css';
import vidyabharti from '../assestes/vidyabhartiinstitute.jpeg';
import princeschool from '../assestes/princeschoollogo.jpeg';
import jnulogo from '../assestes/jnulogo.png';

function Education() {
    return (
        <div className='qualificationsection'>
            <h1>Education Qualifications</h1>
            <div className="institutes">
                <div className="institute">
                    <div className="institute_logo">
                        <img src={vidyabharti} alt="#" />
                        <p>2017-2018</p>
                    </div>
                    <p>completed my school(10th) from ADRASH VIDYA MANDIR SCHOOL, NAWA CITY with a percentage of 91.33% having some good exprence</p>
                </div>
                <div className="institute">
                    <div className="institute_logo">
                        <img src={princeschool} alt="#" />
                        <p>2019-2020</p>
                    </div>
                    <p>completed my intermidiate school(12th) from PRINCE SCHOOL SIKAR with a percentage of 86.66% having some good exprence and knowledge</p>
                </div>
                <div className="institute">
                    <div className="institute_logo">
                        <img src={jnulogo} alt="#" />
                        <p>2020-Present</p>
                    </div>
                    <p>Continueing my Graduation in B.TECH in computer science and engineering at SCHOOL OF ENGINEERING JNU DELHI with a CGPA of 6.29 with high knowledge and expreiencex </p>
                </div>
            </div>

        </div>
    )
}

export default Education;
