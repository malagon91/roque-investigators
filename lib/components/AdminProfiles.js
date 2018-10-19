import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './../../node_modules/react-confirm-alert/src/react-confirm-alert.css' // Import css
import RowInv from './common/RowInv'
import {loadInvestigators} from 'actions/investigatorActions';
import {deleteUser} from 'actions/adminActions'


class AdminProfiles extends Component {

  componentDidMount(){
    this.props.loadInvestigators();
  }

  deleteUser = (id) => {
    confirmAlert({
      title: 'Eliminar profesor',
      message: 'Estas seguro de eliminar el registro?',
      buttons: [
        {
          label: 'Si',
          onClick: async () => {
            const userLog = JSON.parse(sessionStorage.userInfo);
            await this.props.deleteUser(id, userLog.token);
            this.props.loadInvestigators();
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
            console.log('si')
          }
        },
        {
          label: 'No',
          onClick: () => {
            console.log('no')
          }
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
          onClick: () => {console.log('si')}
        },
        {
          label: 'No',
          onClick: () => {console.log('no')}
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
      }
    </div>
    )
  }
}

const mapStatetoProps = (state) =>({
...state.investigators,
})

const mapDispatchToProps = {
  loadInvestigators,
  deleteUser,
}

export default connect(mapStatetoProps,mapDispatchToProps)(AdminProfiles);