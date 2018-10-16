import React, { Component } from 'react'
import { connect } from 'react-redux';
import RowInv from './common/RowInv'
import {loadInvestigators} from 'actions/investigatorActions';


class AdminProfiles extends Component {

  componentDidMount(){
    this.props.loadInvestigators();
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