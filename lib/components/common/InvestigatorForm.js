import React from 'react'
import Input from './Input';
import TextArea from './Area';

const InvestigatorForm = (props) => (
	<div>
		<Input
			name="inputname"
			text="Nombre"
			value={props.resume.Name_Investigator}
			onChangefn={props.changeName} isEnable />

		<Input
			name="inputtitle"
			text="Titulo"
			value={props.resume.Title}
			onChangefn={props.changeTitle} isEnable />

		<Input
			name="inputinst"
			text="Institucion"
			value={props.resume.Institution}
			onChangefn={props.changeInst} isEnable />

		<Input
			name="inputdepto"
			text="Departamento"
			value={props.resume.Depto}
			onChangefn={props.changeDepto} isEnable />

		<Input
			name="inputaddress"
			text="Direccion"
			value={props.resume.Address}
			onChangefn={props.changeAddress} isEnable />

		<Input
			name="inputurl"
			text="Url"
			value={props.resume.Url}
			onChangefn={props.changeUrl} isEnable />

		<Input
			name="inputemail"
			text="Correo electronico"
			value={props.resume.Email}
		/>

		<Input
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
					onClick={()=>{props.fnAction(props.resume)}}
					>Actualizar Informacion</button>
		</div>
	</div>
);

export default InvestigatorForm;