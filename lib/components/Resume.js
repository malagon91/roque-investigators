import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {loadUser} from 'actions/loginAction';


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
				<div>
					<h2>Load successfully</h2>
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