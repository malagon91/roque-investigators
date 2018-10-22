import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProjectsByUser, AddProject, UpdateProject, DeleteProject}
from 'actions/projectActions'
import RowProject from 'components/common/RowProject'
import ProjectForm from 'components/common/ProjectForm'
class MyProjects extends Component {
	state = {
		isEdit: false,
		messageForm: '',
		model: {
			Id: 0,
			Date_: '',
			Resume_: '',
			Title: '',
			Url: '',
		}
	}
	componentDidMount() {
		const userLog = JSON.parse(sessionStorage.userInfo);
		this.props.getProjectsByUser(userLog.Id, userLog.token)
	}

	_newForm = () => {
		this.setState({
			isEdit: true,
			messageForm:'Nuevo proyecto',
			model: {
				Id: 0,
				Date_: '',
				Resume_: '',
				Title: '',
				Url: '',
			}
		})
	}

	_handleNewForm = () => this.state.isEdit ? '' : 'remove_div'

	_handleUpdateForm = (proj) => {
		this.setState({
			isEdit: true,
			messageForm: 'Actualiza tu proyecto',
			model: {
				...proj
			}
		})
	}

	_cancelForm = () =>{
		this.setState({
			isEdit: false,
			messageForm:'Tus proyectos',
			model: {
				Id: 0,
				Date_: '',
				Resume_: '',
				Title: '',
				Url: '',
			}
		})
	}

	_handleDelete = (id) => {
		console.log(id)
	}

	_handleTitle = (title) =>{this.setState({model:{...this.state.model, Title: title}})}
	_handleUrl = (url) =>{this.setState({model:{...this.state.model, Url: url}})}
	_handleDate = (date) =>{this.setState({model:{...this.state.model, Date_: date}})}
	_handleResume = (resume) =>{this.setState({model:{...this.state.model, Resume_: resume}})}

  render() {
	return (
	  <div id="my-projects-menu" className="container">
			<h3>{this.state.messageForm}</h3>
			<div className={`form-wrapper ${this._handleNewForm()}`}>
				<ProjectForm 
					model={this.state.model}
					changeTitle={this._handleTitle}
					changeUrl={this._handleUrl}
					changeDate={this._handleDate}
					changeResume={this._handleResume}
					saving={this.props.saving}
					cancelFn={this._cancelForm}
					/>
			</div>
			{this.props.loading ?
        <div className="icon-wrapper">
          <i className="fa fa-spinner fa-spin custom-icon"></i>
        </div> :
				<div className="row table-wrapper">
						<div className="col">
						<table className="table">
							<thead className="thead-dark">
								<tr>
									<th scope="col">ID</th>
									<th scope="col">Titulo</th>
									<th scope="col">Url</th>
									<th scope="col">Fecha</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
              	{Object.values(this.props.my).map(proj =>
									<RowProject key={proj.Id}
										id={proj.Id}
										title={proj.Title}
										url={proj.Url}
										date={proj.Date_}
										updateFn={this._handleUpdateForm}
										deleteFn={this._handleDelete}
										model={proj}
										isDisabled={this.props.saving}
										/>
              	)}
            	</tbody>
						</table>
						</div>
				</div>
			}
			<div className="floating">
				<button onClick={this._newForm} className="btn btn-primary btn-circle"
					data-toggle="tooltip" data-placement="top" title="Agregar nuevos proyectos">
					<i className="fa fa-plus fa-2x"></i>
				</button>
			</div>
	  </div>
	)
  }
}

const mapStateToProps = (state) => ({
	...state.projectInfo
})

const mapDispatchToProps = {
	getProjectsByUser,
	AddProject,
	UpdateProject,
	DeleteProject
}
export default connect(mapStateToProps,mapDispatchToProps)(MyProjects)