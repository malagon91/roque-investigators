import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadUser} from 'actions/loginAction';
import {changeName, changeTitle, changeInst,
	changeDepto, changeAddress, changeUrl,
	changeEmail, changePhone, changeInfo
} from 'actions/resumeActions'
import Input from './common/Input';
import TextArea from './common/Area';

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
	_handleClick(){

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
								<img src={`./profile/${this.props.resume.Id}_profile.jpg`} alt="..." className="img-thumbnail margin-bottom"/>
								<div className="btn-wrapper">
								<button type="button" className="btn btn-info">Cambiar foto</button>
								</div>
							</div>
							<div className="col-md-9">
								<Input
									name="inputname"
									text="Nombre"
									value={this.props.resume.Name_Investigator}
									onChangefn={this.props.changeName} isEnable/>

								<Input
									name="inputtitle"
									text="Titulo"
									value={this.props.resume.Title}
									onChangefn={this.props.changeTitle} isEnable/>

								<Input
									name="inputinst"
									text="Institucion"
									value={this.props.resume.Institution}
									onChangefn={this.props.changeInst} isEnable/>

								<Input
									name="inputdepto"
									text="Departamento"
									value={this.props.resume.Depto}
									onChangefn={this.props.changeDepto} isEnable/>

								<Input
									name="inputaddress"
									text="Direccion"
									value={this.props.resume.Address}
									onChangefn={this.props.changeAddress} isEnable/>

								<Input
									name="inputurl"
									text="Url"
									value={this.props.resume.Url}
									onChangefn={this.props.changeUrl} isEnable/>

								<Input
									name="inputemail"
									text="Correo electronico"
									value={this.props.resume.Email}
									/>

								<Input
									name="inputphone"
									text="Telefono"
									value={this.props.resume.Phone}
									onChangefn={this.props.changePhone} isEnable/>

								<TextArea
									name="inputbio"
									text="Bio"
									value={this.props.resume.Info}
									onChangefn={this.props.changeInfo} />
								<div className="btn-wrapper">
									<button type="button" className="btn btn-success">Actualizar Informacion</button>
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