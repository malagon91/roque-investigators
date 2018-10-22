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
			value={props.resume.Title}
			onChangefn={props.changeTitle} isEnable />

		<InputText
			name="inputinst"
			text="Institucion"
			value={props.resume.Institution}
			onChangefn={props.changeInst} isEnable />
	</div>
)

export default ProjectForm;