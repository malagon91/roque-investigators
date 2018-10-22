import React, { Component } from 'react'
import { connect } from 'react-redux'
import validator from 'validator'
import { withRouter } from 'react-router-dom'
import {changePassword} from 'actions/resumeActions'
export class ChangePassword extends Component {
  state = {
    old: '',
    new: '',
    confirm: '',
    confirmError:null,
  }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  _validForm = async () => {// TODO: add validations in form
    if(validator.isEmpty(this.state.old) || validator.isEmpty(this.state.new) || validator.isEmpty(this.state.confirm))
      await this.setStateAsync({
        confirmError: 'Debes llenar todos los campos'
      });
    else{
      if (this.state.new !== this.state.confirm)
        await this.setStateAsync({
          confirmError: 'Los passwords no coinciden'
        });
      else if (this.state.new.length < 8)
        await this.setStateAsync({
          confirmError: 'El password debe tener al menos 8 letras'
        });
      else{
        await this.setStateAsync({
          confirmError: null
        });
        }
    }
  }

  _handleClick = async () =>{
    await this._validForm();
    if(this.state.confirmError == null){
      const userLog = JSON.parse(sessionStorage.userInfo);
      this.props.changePassword(userLog.Id, this.state.old, this.state.confirm, userLog.token, this.props.history);
    }
  }
  render() {
    return (
      <div id="change-password-form">
        <h3>Es hora de cambiar tu password</h3>
        <div className="form-password container">
          <div className="form-group row">
            <label htmlFor="inputOldPassword" className="col-sm-3 col-form-label">Anterior: </label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="inputOldPassword" placeholder="Password actual"
              value={this.state.old} onChange={(e) =>{ this.setState({old: e.target.value})}} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputNewPassword" className="col-sm-3 col-form-label">Nuevo: </label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="inputNewPassword" placeholder="Nuevo Password"
              value={this.state.new} onChange={(e) =>{ this.setState({new: e.target.value})}} />
            </div>
          </div>
          <div className="form-group row last-row">
            <label htmlFor="inputConfirmPassword" className="col-sm-3 col-form-label">Confirmar: </label>
            <div className="col-sm-9">
              <input type="password" className="form-control" id="inputConfirmPassword" placeholder="Confirmar Password"
              value={this.state.confirm} onChange={(e) =>{ this.setState({confirm: e.target.value})}} />
            </div>
          </div>
          <button type="button"
					  className="btn btn-info btn-lg"
					  onClick={this._handleClick}
					  disabled={this.props.saving} > {this.props.saving ? <i className="fa fa-spinner fa-spin"></i> : "Actualizar password"
			  	}</button>
          <div className="container log-validation">
            {this.state.emptyError && <div className="alert alert-danger">{this.state.emptyError}</div>}
            {this.state.confirmError && <div className="alert alert-danger">{this.state.confirmError}</div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>({
  ...state.loginInfo
})

const mapDispatchToProps = {
  changePassword
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChangePassword))