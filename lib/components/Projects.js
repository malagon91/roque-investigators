import React, { Component } from 'react'
import {connect} from 'react-redux'
import debounce from 'lodash.debounce';
import { getProjects } from 'actions/projectActions'
import apiconfig from 'actions/apiConfig';
import Project from 'components/common/Project'
import {SearchText} from 'components/common/Input'
export class Projects extends Component {

  state={searchTerm: ''}

  componentDidMount() {
    this.props.getProjects(apiconfig.TOTAL_PAGINATE,this.props.start)
  }

  doSearch =  debounce(() =>{
    
  })

  _loadMore = () => {
    this.props.getProjects(apiconfig.TOTAL_PAGINATE, this.props.start)
  }
  _handleSearch = (value) => {
    this.setState({ searchTerm: value})  }
  
  render() {
    return (
      <div id="projects-list" className="container">
        <div className="title">
          <h3>Lista de proyectos</h3>
        </div>
        {this.props.data.length > 0 ?
          <div className="list">
            <SearchText onChangefn={this._search} text="Buscar proyecto"/>
            {Object.values(this.props.data).map(proj =>
              <Project key={proj.Id} project={proj}/>
            )}
            {this.props.error ? 
              <div className="alert alert-danger" role="alert">
                Error al cargar mas informacion, por favor refresca la pagina
              </div>
            :
              <div className="button-wrapper">
                <button type="button" className="btn btn-outline-success" onClick={this._loadMore} disabled={this.props.loading}>
                  {this.props.loading ? <i className="fa fa-spinner fa-spin"></i> : "Cargar mas"}
                </button>
              </div>
            }
          </div> :
          <div className="icon-wrapper">
            <i className="fa fa-spinner fa-spin custom-icon"></i>
          </div>
        }
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
