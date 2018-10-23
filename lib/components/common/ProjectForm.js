import React from 'react'
import {InputText, TextArea} from './Input';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './../../../node_modules/react-datepicker/dist/react-datepicker.css';
const ProjectForm = (props) => (
	<div id="new-project-form">
		<InputText
			name="inputid"
			text="ID"
			value={props.model.Id}
			/>

		<InputText
			name="inputtitle"
			text="Titulo"
			value={props.model.Title}
			onChangefn={props.changeTitle} isEnable />

		<InputText
			name="inputurl"
			text="Url"
			value={props.model.Url}
			onChangefn={props.changeUrl} isEnable />

			<InputText
				name="inputdate"
				text="Fecha"
				value={props.model.Date_}
				onChangefn={props.changeDate} isEnable />

			<DatePicker
      		  selected={moment(props.model.Date_)}
        	  onChange={props.changeDate}
    		/>

			<TextArea
				name="inputresume"
				text="Resumen"
				value={props.model.Resume_}
				onChangefn={props.changeResume} />

			<button type="button" className="btn btn-success btn-space"
				onClick={() =>{}} disabled={props.saving}>Guardar</button>
			<button type="button" className="btn btn-info btn-space"
				onClick={props.cancelFn} >Cancelar</button>
	</div>
)

export default ProjectForm;