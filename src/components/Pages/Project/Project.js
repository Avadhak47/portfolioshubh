import React from 'react';

function Project(props) {
  return (
    <div className='project_container'>
      <a href={props.url}><img src={props.imglink} alt="img" /></a>
      <button className='btn btn-blue' > <a href="#" target={"_blank"}>Git-Repo</a> </button>
    </div>
  )
}

export default Project
