import React from 'react'

const Skill_item = (props) => {

    const {langauge, percentage} = props.lang;

  return (
    <div className='skill_item'>
      <span>{langauge}</span>
      <div className="progress">
        <div className="progress_in" style={{width:`${percentage}`}}></div>
        <div className="skill_percent">{percentage}</div>
      </div>
    </div>
  )
}

export default Skill_item;
