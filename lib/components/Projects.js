import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getProjects } from 'actions/projectActions'
import apiconfig from 'actions/apiConfig';
import Project from 'components/common/Project'

export class Projects extends Component {
  state = {
    limit: apiconfig.TOTAL_PAGINATE,
    start: 0,
  }
  componentDidMount() {
    this.props.getProjects(this.state.limit, this.state.start)
  }
  
  render() {
    return (
      <div id="projects-list" className="container">
        <div className="title">
          <h3>Lista de proyectos</h3>
        </div>
        {this.props.data.length > 0 &&(
          <div className="list">
            {Object.values(this.props.data).map(proj =>
              <Project project={proj}/>
            )}
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  ...state.projectInfo
})

const mapDispatchToProps = {
  getProjects,
}

export default connect(mapStateToProps,mapDispatchToProps)(Projects)
