import React from 'react'

const RowInvestigator = props => (
  <tr>
    <th scope="row">{props.Id}</th>
    <td>{props.Name_Investigator}</td>
    <td>{props.Email}</td>
    <td><input type="checkbox" checked={props.isAdmin} readOnly/></td>
    <td className="center-row">
        <button type="button" className="btn btn-danger btn-space" onClick={() =>{props.deleteFn(props.Id) }}>Eliminar</button>
        <button type="button" className="btn btn-info btn-space" onClick={() =>{props.restorePass(props.Id) }}>Reset</button>
        <button type="button" className="btn btn-dark" onClick={()=>{props.turnAdmin(props.Id,props.isAdmin) }}>Admin</button>
    </td>
  </tr>
);

export default RowInvestigator;
