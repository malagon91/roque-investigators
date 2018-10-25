import React, { Component } from 'react'
import {connect} from 'react-redux'
import validator from 'validator'
import {getProjectsByUser, AddProject, UpdateProject, DeleteProject}
from 'actions/projectActions'
import { confirmAlert } from 'react-confirm-alert'; // Import
import RowProject from 'components/common/RowProject'
import ProjectForm from 'components/common/ProjectForm'
import moment from 'moment'
import apiconfig from 'actions/apiConfig';


class MyProjects extends Component {
	state = {
		isEdit: false,
		messageForm: '',
		errorMessage: null,
		selectedDate: new Date(),
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

	setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

	_newForm = () => {
		this.setState({
			isEdit: true,
			messageForm:'Nuevo proyecto',
			selectedDate: new Date(),
			model: {
				Id: 0,
				Date_: moment(new Date()).format(apiconfig.FORMAT_DATE),
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
			selectedDate: new Date(proj.Date_),
			model: {
				...proj, Date_: moment(new Date(proj.Date_)).format(apiconfig.FORMAT_DATE),
			}
		})
	}

	_cancelForm = () =>{
		this.setState({
			isEdit: false,
			messageForm:'Tus proyectos',
			selectedDate: new Date(),
			model: {
				Id: 0,
				Date_: moment(new Date()).format(apiconfig.FORMAT_DATE),
				Resume_: '',
				Title: '',
				Url: '',
			}
		})
	}

	_handleDelete = (id) => {
		confirmAlert({
		  title: 'Eliminar proyecto',
		  message: 'Estas seguro de eliminar el registro?',
		  buttons: [
			{
			  label: 'Si',
			  onClick: () => {
				const userLog = JSON.parse(sessionStorage.userInfo);
				this.props.DeleteProject(id, userLog.Id, userLog.token);
			  }
			},
			{
			  label: 'No',
			  onClick: () => {}
			}
		  ]
		})
	  }

	_validForm = async () => {
		if (validator.isEmpty(this.state.model.Title) ||
		validator.isEmpty(this.state.model.Url) || validator.isEmpty(this.state.model.Resume_))
			await this.setStateAsync({
				errorMessage: 'Necesitas llenar todos los campos para poder continuar'
			});
		else
			await this.setStateAsync({
				errorMessage: null
			});
	}
	_handleForm = async () => {
		await this._validForm();
		if(this.state.errorMessage == null){
			const userLog = JSON.parse(sessionStorage.userInfo);
			if(this.state.model.Id > 0){ //update project
				this._update(userLog.Id, userLog.token)
			}else{// new project
				this._save(userLog.Id,userLog.token)
			}
	}
	}

	_save = async (id, token) => {
		const model = {
			IdUser: id,
			Resume_: this.state.model.Resume_,
			Title: this.state.model.Title,
			Url: this.state.model.Url,
			Date_: this.state.model.Date_,
		}
		this.props.AddProject(model,id,token)
		this._cancelForm()
	}

	_update = (id, token) =>{
		const model = {
			Id: this.state.model.Id,
			IdUser: id,
			Resume_: this.state.model.Resume_,
			Title: this.state.model.Title,
			Url: this.state.model.Url,
			Date_: this.state.model.Date_,
		}
		this.props.UpdateProject(model,id,token)
		this._cancelForm()

	}

	_handleTitle = (title) =>{this.setState({model:{...this.state.model, Title: title}})}
	_handleUrl = (url) =>{this.setState({model:{...this.state.model, Url: url}})}
	_handleResume = (resume) =>{this.setState({model:{...this.state.model, Resume_: resume}})}
	_handleDayClick= (day, { selected }) =>{
		this.setState({
			selectedDate: selected ? new Date() : day,
			model:{...this.state.model, Date_: moment(selected ? new Date() : day).format(apiconfig.FORMAT_DATE)}
		});}
  render() {
	return (
	  <div id="my-projects-menu" className="">
			<h3>{this.state.messageForm}</h3>
			{this.state.isEdit &&
			<div className={`form-wrapper `}>
				<ProjectForm
					model={this.state.model}
					changeTitle={this._handleTitle}
					changeUrl={this._handleUrl}
					changeResume={this._handleResume}
					saving={this.props.saving}
					cancelFn={this._cancelForm}
					handleDayClick={this._handleDayClick}
					selectedDate={this.state.selectedDate}
					savingForm={this._handleForm}
					/>
					<div className="container log-validation">
					{this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
					</div>
			</div>
			}
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
										isDisabled={this.state.isEdit}
										/>
              	)}
            	</tbody>
						</table>
						</div>
				</div>
			}
			<div className="floating">
				<button onClick={this._newForm} className="btn btn-primary btn-circle"
					data-toggle="tooltip" data-placement="top" title="Agregar nuevos proyectos" disabled={this.state.isEdit}>
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