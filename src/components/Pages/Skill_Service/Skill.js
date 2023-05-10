import React from 'react';
import "./Skill.css";
import Lang from './SkillLan';
import Skill_item from './Skill_item';

function Skill() {



    return (
        <div className='skill_container'>
            <h2 className='heading'>Skills</h2>
            <div className="wrapper">
                {Lang.map((item, index)=>{
                    return(
                        <Skill_item key={index} lang={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Skill
