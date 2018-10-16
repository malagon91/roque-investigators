import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import {loadUser} from 'actions/loginAction';
import {changeName, changeTitle, changeInst,
	changeDepto, changeAddress, changeUrl,
	changeEmail, changePhone, changeInfo,
	updateResume
} from 'actions/resumeActions'
import InvestigatorForm from './common/InvestigatorForm'

class Resume extends Component{

	componentDidMount() {
		this.forceUpdate()
		const userLog = JSON.parse(sessionStorage.userInfo);
		if (this.props.resume == null)
			this.props.loadUser(userLog.Id,userLog.token);
		else{
			if( this.props.resume.Id !== userLog.Id)
				this.props.loadUser(userLog.Id, userLog.token);
		}
	}
	_handleClick = () =>{
		const userLog = JSON.parse(sessionStorage.userInfo);
		this.props.updateResume(this.props.resume, userLog.token)
	}
	_imageName = (existImage, id) => existImage ? `./profile/${id}_profile.jpg?${new Date().getTime()}` 
																							:	`./profile/no_profile.jpg?${new Date().getTime()}`


	_goToProfilePicture = () =>{
		this.props.history.push('/picture');
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
							<div className="col-md-3 content-center">
								<img src={`${this._imageName(this.props.resume.existImage,this.props.resume.Id)}`} alt="profile" className="img-thumbnail margin-bottom"/>
								<div className="content-center margin-bottom">
								<button type="button" className="btn btn-info" onClick={this._goToProfilePicture}>Cambiar foto</button>
								</div>
							</div>
							<div className="col-md-9">
								<InvestigatorForm
								resume={this.props.resume}
								changeName={this.props.changeName}
								changeTitle={this.props.changeTitle}
								changeInst={this.props.changeInst}
								changeDepto={this.props.changeDepto}
								changeAddress={this.props.changeAddress}
								changeUrl={this.props.changeUrl}
								changePhone={this.props.changePhone}
								changeInfo={this.props.changeInfo}
								fnAction={this._handleClick}
								saving={this.props.saving}
								/>
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
	changeEmail, changePhone, changeInfo,
	updateResume
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Resume));