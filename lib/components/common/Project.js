import React from 'react'

const Project = (props) =>(
        <div className="jumbotron item">
          <h1>{props.project.Title}</h1>
          <span className="badge badge-pill badge-secondary">{props.project.Name_Investigator}</span>
          <p className="text-justify">
            {props.project.Resume_}
          </p>
          <p><a className="btn btn-primary btn-lg" target="_blank" href={props.project.Url} 
          role="button">Ver mas</a></p>
        </div>
)

export default Project;