import React from 'react'

const Project = (props) =>(
        <div className="jumbotron item">
          <h1>Titulo del proyecto</h1>
          <span className="badge badge-pill badge-secondary">Miguel Malagon</span>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <p><a className="btn btn-primary btn-lg" target="_blank" href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies" 
          role="button">Ver mas</a></p>
        </div>
)

export default Project;