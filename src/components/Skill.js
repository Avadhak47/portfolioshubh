import React from 'react';
import "../style/Skill.css";

function Skill() {
    return (
        <div className='skillcintainer'>
        <h2 className='heading'>Skills</h2>
            <div class="wrapper">
                <div class="pie-wrap">
                    <div class="light-yellow entry">
                        <p>90%</p>
                        <p class="entry-value">C</p>
                    </div>
                    <div class="sky-blue entry">
                        <p>85%</p>
                        <p class="entry-value">C++</p>
                    </div>
                    <div class="pink entry">
                        <p>59%</p>
                        <p class="entry-value">Java</p>
                    </div>
                    <div class="purple entry">
                        <p>45%</p>
                        <p class="entry-value">Python</p>
                    </div>
                    <div class="green entry">
                        <p>80%</p>
                        <p class="entry-value">React</p>
                    </div>
                    <div class="wheat entry">
                        <p>90%</p>
                        <p class="entry-value">HTML-CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
