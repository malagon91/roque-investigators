import react from 'react'

const RowProject = (props) => (
	<tr>
    <th scope="row">{props.Id}</th>
    <td>{props.Name_Investigator}</td>
    <td>{props.Email}</td>
    <td><input type="checkbox" checked={props.isAdmin} readOnly/></td>
    <td className="center-row">
        <button type="button" className="btn btn-danger btn-space" onClick={() =>{props.deleteFn(props.Id) }} disabled={props.isDisabled}>Eliminar</button>
        <button type="button" className="btn btn-info btn-space" onClick={() =>{props.restorePass(props.Id) }} disabled={props.isDisabled}>Actualizar</button>
    </td>
  </tr>
)