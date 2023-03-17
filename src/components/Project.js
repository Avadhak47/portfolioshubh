import React from 'react';

function Project(props) {
    // console.log(props.imglink);
  return (
    <div className='project_container'>
      <a href={props.url}><img src={props.imglink} alt="img" /></a>
      <button className='btn btn-blue'>Git-Repo</button>
    </div>
  )
}

export default Project
