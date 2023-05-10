import React from 'react';
import ProjectList from './ProjectList.js';
import Project from './Project.js';
import "./Project.css";

function ProjectDetail() {

  return (
    <div className='projects_container'>
      <h1 className='heading'>My Projects</h1>
      <div className="projects">
        {ProjectList.map((val, index) => {
          return (<Project imglink={val.img} url={val.url} key={index} />)
        })}
      </div>
      <hr />
    </div>
  )
}

export default ProjectDetail;