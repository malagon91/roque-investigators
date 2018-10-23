import React from 'react'
import {InputText, TextArea} from './Input';

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

			<TextArea
				name="inputresume"
				text="Resumen"
				value={props.model.Resume_}
				onChangefn={props.changeResume} />

			<div className="form-group">
        <label className="control-label" htmlFor="date">Date</label>
        <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
      </div>
			
			<button type="button" className="btn btn-success btn-space" 
				onClick={() =>{}} disabled={props.saving}>Guardar</button>
			<button type="button" className="btn btn-info btn-space" 
				onClick={props.cancelFn} >Cancelar</button>
	</div>
)

export default ProjectForm;