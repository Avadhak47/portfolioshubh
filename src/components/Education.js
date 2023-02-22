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
                    <p>completed my school(10th) from B B HIGH SCHOOL with a percentage of 82% having some good exprence</p>
                </div>
                <div className="institute">
                    <div className="institute_logo">
                        <img src={princeschool} alt="#" />
                        <p>2019-2020</p>
                    </div>
                    <p>completed my intermidiate school(12th) from e-tech residential college with a percentage of 66.17% having some good exprence and knowledge</p>
                </div>
                <div className="institute">
                    <div className="institute_logo">
                        <img src={jnulogo} alt="#" />
                        <p>2020-Present</p>
                    </div>
                    <p>Completed my Graduation in B.TECH in computer science and engineering at PARALA MAHARAJA ENGINEERING COLLEGE with a CGPA of 82.1 with high knowledge and expreiencex </p>
                </div>
            </div>

        </div>
    )
}

export default Education;
