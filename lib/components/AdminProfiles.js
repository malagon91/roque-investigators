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

  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  };

  render() {
    return (
      <div id="admin-panel" className="container">
        <h3>Modificar usuarios</h3>
        <button onClick={this.submit}>Confirm dialog</button>
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
                      Email={inv.Email}/>
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