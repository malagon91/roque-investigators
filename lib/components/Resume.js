import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Resume extends Component{
	render(){
		return (
			<div id="my-resume">
				<i className="fa fa-spinner fa-spin"></i>
			</div>
		);
	}
}
const mapStateToProps = (state) =>({
...state.loginInfo
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(Resume);