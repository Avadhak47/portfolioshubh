import React from 'react';
import ProjectList from '../components/ProjectList.js';
import Project from './Project.js';
import "../style/Project.css";

function ProjectDetail() {
    
  return (
    <div className='projects_container'>
      {ProjectList.map((val, index)=>{
        console.log(val);
        return(<Project imglink={val.img} url={val.url} key={index} />)
        
      })}
      {/* hello */}
    </div>
  )
}

export default ProjectDetail;