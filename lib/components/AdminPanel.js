import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getConfigs, saveDefaultPsw,changeDefaultPassword} from 'actions/adminActions'
import {InputText} from './common/Input'
class AdminPanel extends Component {
  state = {
    errors: {
      password: null,
    }
  }
  componentDidMount(){
    const userLog = JSON.parse(sessionStorage.userInfo);
    this.props.getConfigs(userLog.token);
  }
  _handleCLick = () => {
    if (this.props.defaultPws.length > 0) {
      const userLog = JSON.parse(sessionStorage.userInfo);
      this.props.saveDefaultPsw(this.props.defaultPws, userLog.token)
      this.setState({
        errors: {
          ...this.state.errors,
          password: null
        }
      })
    } else 
      this.setState({
        errors: {
          ...this.state.errors,
          password: 'Ingresa el password'
        }
      })
  }

  render() {
    return (
      <div id="admin-panel" className="container">
        <h3>Configuraciones importantes</h3>
        {this.props.defaultPws == null ?
          <div className="icon-wrapper">
            <i className="fa fa-spinner fa-spin custom-icon"></i>
          </div> : 
          <div className="row config-panel">
          <div className="col-md-12">
            <InputText
              name="inputpsw"
              text="Password por default"
              value={this.props.defaultPws}
              onChangefn={this.props.changeDefaultPassword} isEnable />
            <div className="content-center">
              <button type="button"
                  className="btn btn-success"
                  onClick={this._handleCLick}
                  > {this.props.loading ? <i className="fa fa-spinner fa-spin"></i> : "Actualizar Informacion"
                }</button>
            </div>
            <div className="log-validation">
                  {this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>}
                </div>
          </div>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.adminInfo
})

const mapDispatchToProps = {
  getConfigs,
  saveDefaultPsw,
  changeDefaultPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)
