import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getConfigs} from 'actions/adminActions'

class Register extends Component {

  componentDidMount(){
    const userLog = JSON.parse(sessionStorage.userInfo);
    this.props.getConfigs(userLog.token);  }
  render(){
    return (
      <div id="new-user-form" className="container">
        <h3>Un nuevo profesor</h3>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.investigators
})

const mapDispatchToProps = {
  getConfigs
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);