import React from 'react'
import {InputText, TextArea} from './Input';

const InvestigatorForm = (props) => (
	<div>
		<InputText
			name="inputname"
			text="Nombre"
			value={props.resume.Name_Investigator}
			onChangefn={props.changeName} isEnable />

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

		<InputText
			name="inputdepto"
			text="Departamento"
			value={props.resume.Depto}
			onChangefn={props.changeDepto} isEnable />

		<InputText
			name="inputaddress"
			text="Direccion"
			value={props.resume.Address}
			onChangefn={props.changeAddress} isEnable />

		<InputText
			name="inputurl"
			text="Url"
			value={props.resume.Url}
			onChangefn={props.changeUrl} isEnable />

		<InputText
			name="inputemail"
			text="Correo electronico"
			value={props.resume.Email}
		/>

		<InputText
			name="inputphone"
			text="Telefono"
			value={props.resume.Phone}
			onChangefn={props.changePhone} isEnable />

		<TextArea
			name="inputbio"
			text="Bio"
			value={props.resume.Info}
			onChangefn={props.changeInfo} />

		<div className="content-center">
			<button type="button"
					className="btn btn-success"
					onClick={()=>{props.fnAction()}}
					> {props.saving ? <i className="fa fa-spinner fa-spin"></i> : "Actualizar Informacion"
				}</button>
		</div>
	</div>
);

export default InvestigatorForm;