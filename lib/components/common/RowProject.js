import React from 'react'
import Moment from 'react-moment';

const RowProject = (props) => (
	<tr>
    <th scope="row">{props.id}</th>
    <td>{props.title}</td>
    <td>{props.url}</td>
    <td>
        <Moment format="DD/MM/YYYY">{props.date}</Moment>
    </td>
    <td className="center-row">
        <button type="button" className="btn btn-danger btn-space" onClick={() =>{props.deleteFn(props.id) }} disabled={props.isDisabled}>Eliminar</button>
        <button type="button" className="btn btn-info " onClick={() =>{props.updateFn(props.model) }} disabled={props.isDisabled}>Actualizar</button>
    </td>
  </tr>
)

export default RowProject;