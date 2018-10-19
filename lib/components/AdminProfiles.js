import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './../../node_modules/react-confirm-alert/src/react-confirm-alert.css' // Import css
import RowInv from './common/RowInv'
import {loadInvestigators} from 'actions/investigatorActions';
import {deleteUser,updatePrivileges,resetPassword,getConfigs} from 'actions/adminActions'


class AdminProfiles extends Component {

  componentDidMount(){
    const userLog = JSON.parse(sessionStorage.userInfo);
    this.props.loadInvestigators();
    this.props.getConfigs(userLog.token);
  }

  deleteUser = (id) => {
    confirmAlert({
      title: 'Eliminar profesor',
      message: 'Estas seguro de eliminar el registro?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            const userLog = JSON.parse(sessionStorage.userInfo);
            this.props.deleteUser(id, userLog.token);
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  };

  restorePsw = (id) => {
    confirmAlert({
      title:'Restaurar el password',
      message: '¿Estas seguro de restaurar el password del usuario?',
      buttons:[
        {
          label: 'Si',
          onClick: () =>{
            const userLog = JSON.parse(sessionStorage.userInfo);
            this.props.resetPassword(id, this.props.defaultPws,userLog.token);
          }
        },
        {
          label: 'No',
          onClick: () =>{}
        }
      ]
    })

  }
  _turnAdmin = (id, isAdmin) => {
    confirmAlert({
      title: 'Tipo de usuario',
      message: '¿Estas seguro de cambiar el perfil del usuario?',
      buttons:[
        {
          label: 'Si',
          onClick: () => {
            const userLog = JSON.parse(sessionStorage.userInfo);
            const admin = isAdmin ? 0 : 1;// revert the privileges if it is true turn in false 
            this.props.updatePrivileges(id, admin, userLog.token);
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })

  }
  render() {
    return (
      <div id="admin-user-panel" className="container">
        <h3>Modificar usuarios</h3>
      {this.props.loading ?
        <div className="icon-wrapper">
          <i className="fa fa-spinner fa-spin custom-icon"></i>
        </div> :
         <div className="row content-table">
          <div className="col">
            <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Es Admin</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>

            <tbody>
              {Object.values(this.props.data).map(inv =>
              <RowInv key={inv.Id}
                      Id={inv.Id}
                      Name_Investigator={inv.Name_Investigator}
                      Email={inv.Email}
                      isAdmin={ inv.isAdmin == 1 }
                      deleteFn={this.deleteUser}
                      restorePass={this.restorePsw}
                      turnAdmin={this._turnAdmin}/>
              )}
            </tbody>
        </table>
          </div>
        </div>
      }
    </div>
    )
  }
}

const mapStatetoProps = (state) =>({
...state.investigators,
defaultPws: state.adminInfo.defaultPws
})

const mapDispatchToProps = {
  loadInvestigators,
  deleteUser,
  updatePrivileges,
  resetPassword,
  getConfigs,
}

export default connect(mapStatetoProps,mapDispatchToProps)(AdminProfiles);