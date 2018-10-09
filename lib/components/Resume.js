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
					<div className="form-group row">
						<label htmlFor="inputname" className="col-sm-2 col-form-label">Nombre</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="inputname" placeholder="Nombre"
							 value={this.props.resume.Name_Investigator} onChange={(e) =>{ this.props.changeName(e.target.value)}}/>
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