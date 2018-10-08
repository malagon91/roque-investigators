import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadUser} from 'actions/loginAction';


class Resume extends Component{

	componentDidMount() {
		debugger;
		const userLog = JSON.parse(sessionStorage.userInfo);
		if (this.props.resume == null)
			this.props.loadUser(userLog.Id,userLog.token);
		else{
			if( this.props.resume.Id !== userLog.Id)
				this.props.loadUser(userLog.Id, userLog.token);
		}
		console.log(this.props.resume.Id)
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
					<div className="form-group row">
						<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Nombre</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="inputEmail3" placeholder="Nombre" 
							/>
						</div>
					</div>
				</div>
			}
			</div>
		);
	}
}
const mapStateToProps = (state) =>({
...state.loginInfo
});

const mapDispatchToProps = {
loadUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(Resume);