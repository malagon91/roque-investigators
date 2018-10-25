import React from 'react'
import {InputText, TextArea} from './Input';
import DatePicker from './DatePicker'
const ProjectForm = (props) => (
	<div id="new-project-form">
		<div className="row">
			<div className="col-md-8">
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

				<TextArea
					name="inputresume"
					text="Resumen"
					value={props.model.Resume_}
					onChangefn={props.changeResume} />

			</div>
			<div className="col-md-4">
				<label className="label-form">Fecha de publicacion</label>
				<DatePicker
					onDayClick={props.handleDayClick}
					selectedDay={props.selectedDate}/>
			</div>
		</div>
			<button type="button" className="btn btn-success btn-space"
				onClick={props.savingForm} disabled={props.saving}>Guardar</button>
			<button type="button" className="btn btn-info btn-space"
				onClick={props.cancelFn} >Cancelar</button>
	</div>
)

export default ProjectForm;