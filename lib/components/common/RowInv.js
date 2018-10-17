import React from 'react'

const RowInvestigator = props => (
  <tr>
    <th scope="row">{props.Id}</th>
    <td>{props.Name_Investigator}</td>
    <td>{props.Email}</td>
    <td className="center-row">
        <button type="button" className="btn btn-danger btn-space" onClick={props.deleteFn}>Eliminar</button>
        <button type="button" className="btn btn-info" onClick={props.restorePass}>Reset Password</button>

    </td>
  </tr>
);

export default RowInvestigator;
