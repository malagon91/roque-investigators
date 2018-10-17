import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './../../node_modules/react-confirm-alert/src/react-confirm-alert.css' // Import css
import RowInv from './common/RowInv'
import {loadInvestigators} from 'actions/investigatorActions';


class AdminProfiles extends Component {

  componentDidMount(){
    this.props.loadInvestigators();
  }

  deleteUser = () => {
    confirmAlert({
      title: 'Eliminar profesor',
      message: 'Estas seguro de eliminar el registro?',
      buttons: [
        {
          label: 'Si',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  };

  restorePsw = () =>{

  }
  render() {
    return (
      <div id="admin-panel" className="container">
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
            <th scope="col">Actions</th>
          </tr>
          </thead>

            <tbody>
              {Object.values(this.props.data).map(inv =>
              <RowInv key={inv.Id}
                      Id={inv.Id}
                      Name_Investigator={inv.Name_Investigator}
                      Email={inv.Email}
                      deleteFn={this.deleteUser}
                      restorePass={this.restorePsw}/>
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
  loadInvestigators
}

export default connect(mapStatetoProps,mapDispatchToProps)(AdminProfiles);