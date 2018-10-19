import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import validator from 'validator'
import { getConfigs} from 'actions/adminActions'
import { addNewUser } from 'actions/adminActions'
import NewForm from 'components/common/NewForm'
class Register extends Component {
  state = {
    name: '',
    email: '',
    isAdmin: false,
    emailError: null,
    nameError: null,
  }
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
  _validForm = async () => {
    if(!validator.isEmail(this.state.email))
      await this.setStateAsync({
        emailError: 'El email no tiene el formato esperado'
      });
    else
        await this.setStateAsync({
          emailError: null
       });
    if(validator.isEmpty(this.state.name))
      await this.setStateAsync({
        nameError: 'Necesitas ingresar el nombre del usuario'
      });
    else
     await this.setStateAsync({
      nameError: null
    });
  }
  _handleSave = async () =>{
    await this._validForm();
    if(this.state.nameError == null && this.state.emailError == null){
      const userLog = JSON.parse(sessionStorage.userInfo);
      const model = {
        Name_Investigator: this.state.name,
        Password_: this.props.defaultPws,
        Email: this.state.email,
        isAdmin: this.state.isAdmin ? 1 : 0 ,
      }
     
     this.props.addNewUser(model,userLog.token,this.props.history);
    }
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
        <div className="container log-validation">
            {this.state.emailError && <div className="alert alert-danger">{this.state.emailError}</div>}
            {this.state.nameError && <div className="alert alert-danger">{this.state.nameError}</div>}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.adminInfo
})

const mapDispatchToProps = {
  getConfigs,
  addNewUser
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Register));