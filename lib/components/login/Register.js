import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getConfigs} from 'actions/adminActions'
import NewForm from 'components/common/NewForm'
class Register extends Component {
  state = {
    name: '',
    email: '',
    isAdmin: false,
    error: null,
  }// TODO: Add validations in name and email
  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }
  componentDidMount(){
    const userLog = JSON.parse(sessionStorage.userInfo);
    this.props.getConfigs(userLog.token);  
  }
  _changeName = (value) =>{
    this.setState({name: value})
  }
  _changeEmail = (value) =>{
    this.setState({email: value})
  }
  _changeisAdmin = (value) =>{
    this.setState({isAdmin: value})
  }
  _handleSave = () =>{
    console.log('saving')
  }

  render(){
    return (
      <div id="new-user-form" className="container">
        <h3>Registra un nuevo profesor</h3>
        <div className="form-content">
          {this.props.defaultPws != null ?
          <NewForm
            Name_Investigator={this.state.name}
            changeName={this._changeName}
            Email={this.state.email}
            changeEmail={this._changeEmail}
            defaultPsw={this.props.defaultPws}
            isAdmin={this.state.isAdmin}
            changeIsAdmin={this._changeisAdmin}
            fnAction={this._handleSave}
            saving={this.props.saving}/> :
            <div className="icon-wrapper">
              <i className="fa fa-spinner fa-spin custom-icon"></i>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.adminInfo
})

const mapDispatchToProps = {
  getConfigs
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);