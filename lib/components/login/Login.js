import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {login} from 'actions/loginAction';
import validator from 'validator';
import toastr from 'toastr';



class Login extends Component {
  state = {
		email: '',
    password: '',
    emailError: null,
		passwordError: null,
		loading: false,
	};
    setStateAsync = (state) => {
      return new Promise((resolve) => {
        this.setState(state, resolve)
      });
  }

  _handlerEmail = (e) =>{
    const value = e.target.value;
    this.setState({email: value});
  }

  _handlerPass = (e) => {
    const value = e.target.value;
    this.setState({password: value});
  }
   _handlerLogin = async (e) =>{
    if(!validator.isEmail(this.state.email))
      await this.setStateAsync({
        emailError: 'El email no tiene el formato esperado'
      });
    else
        await this.setStateAsync({
         emailError: null
       });
    if(validator.isEmpty(this.state.password))
         await this.setStateAsync({
        passwordError: 'Necesitas ingresar el password'
      });
    else
       await this.setStateAsync({
        passwordError: null
      });
    if (this.state.emailError == null && this.state.passwordError == null)
      this.props.login(this.state.email, this.state.password,this.props.history);
}

  render(){
    return (
      <div id="login-app">
        <div className="wrapper">
          <div className="form-signin">
            <h2 className="form-signin-heading">Please login</h2>
            <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus=""
            value={this.state.email} onChange={this._handlerEmail}/>
            <input type="password" className="form-control" name="password" placeholder="Password" required=""
            value={this.state.password} onChange={this._handlerPass}/>
            <label className="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
            </label>
            <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this.props.loading} onClick={this._handlerLogin}>
            {this.props.loading ? <i className="fa fa-spinner fa-spin"></i> : "Login"
            }
            </button>
          </div>
          <div className="container log-validation">
            {this.state.emailError && <div className="alert alert-danger">{this.state.emailError}</div>}
            {this.state.passwordError && <div className="alert alert-danger">{this.state.passwordError}</div>}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  ...state.loginInfo,
});

const mapDispatchToProps = {
  login,
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);