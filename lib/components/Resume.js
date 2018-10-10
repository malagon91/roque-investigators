import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadUser} from 'actions/loginAction';
import {changeName, changeTitle, changeInst,
	changeDepto, changeAddress, changeUrl,
	changeEmail, changePhone, changeInfo
} from 'actions/resumeActions'

class Resume extends Component{

	componentDidMount() {
		const userLog = JSON.parse(sessionStorage.userInfo);
		if (this.props.resume == null)
			this.props.loadUser(userLog.Id,userLog.token);
		else{
			if( this.props.resume.Id !== userLog.Id)
				this.props.loadUser(userLog.Id, userLog.token);
		}
	}
	render(){
		return (
			<div className="container" id="my-resume">
			{this.props.loading ?
				<div className="icon-wrapper">
					<i className="fa fa-spinner fa-spin custom-icon"></i>
				</div> :
				<div className="form-wrapper">
					<h2>Bienvenido profesor</h2>
					{this.props.resume &&
					<div>
						<div className="row">
							<div className="col-md-3">
								<img src="./../images/background.jpg" alt="..." className="img-thumbnail"/>
								<div className="form-group">
									<label for="profileimage">Cambiar imagen</label>
									<input type="file" className="form-control-file" id="profileimage"/>
								</div>
							</div>
							<div className="col-md-9">
								<div className="form-group row">
									<label htmlFor="inputname" className="col-sm-2 col-form-label">Nombre</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputname" placeholder="Nombre"
										value={this.props.resume.Name_Investigator} onChange={(e) =>{ this.props.changeName(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputtitle" className="col-sm-2 col-form-label">Titulo</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputtitle" placeholder="Titulo"
										value={this.props.resume.Title} onChange={(e) =>{ this.props.changeTitle(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputinst" className="col-sm-2 col-form-label">Institucion</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputinst" placeholder="Institucion"
										value={this.props.resume.Institution} onChange={(e) =>{ this.props.changeInst(e.target.value)}}/>
									</div>
								</div>

								<div className="form-group row">
									<label htmlFor="inputdepto" className="col-sm-2 col-form-label">Departamento</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputdepto" placeholder="Departamento"
										value={this.props.resume.Depto} onChange={(e) =>{ this.props.changeDepto(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputaddress" className="col-sm-2 col-form-label">Direccion</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputaddress" placeholder="Direccion"
										value={this.props.resume.Address} onChange={(e) =>{ this.props.changeAddress(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputurl" className="col-sm-2 col-form-label">Url</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputurl" placeholder="Url"
										value={this.props.resume.Url} onChange={(e) =>{ this.props.changeUrl(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputemail" className="col-sm-2 col-form-label">Correo electronico</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputemail" placeholder="Email"
										value={this.props.resume.Email} readOnly/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputphone" className="col-sm-2 col-form-label">Telefono</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" id="inputphone" placeholder="Telefono"
										value={this.props.resume.Phone} onChange={(e) =>{ this.props.changePhone(e.target.value)}}/>
									</div>
								</div>
								<div className="form-group row">
									<label htmlFor="inputbio" className="col-sm-2 col-form-label">Bio</label>
									<div className="col-sm-10">
										<textarea type="text" className="form-control" id="inputbio" placeholder="Biografia"  rows="4"
										value={this.props.resume.Info} onChange={(e) =>{ this.props.changeInfo(e.target.value)}}/>
									</div>
								</div>
							</div>
						</div>
					</div>
					}
				</div>
			}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	...state.loginInfo
});

const mapDispatchToProps = {
	loadUser,
	changeName, changeTitle, changeInst,
	changeDepto, changeAddress, changeUrl,
	changeEmail, changePhone, changeInfo
}

export default connect(mapStateToProps,mapDispatchToProps)(Resume);