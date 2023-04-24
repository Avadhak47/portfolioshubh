import React from 'react';
import "../style/Skill.css";
import Lang from './SkillLan';

function Skill() {



    return (
        <div className='skillcintainer'>
            <h2 className='heading'>Skills</h2>
            <div className="wrapper">
                {Lang.map((item, index)=>{
                    return(
                        <button className='skillbtn' key={index} >{item}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
