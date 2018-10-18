import React from 'react'
import {InputText, InputEmail, InputCheck} from './Input'
const NewForm = (props) =>  (
  <div id="new-form-register">
    <InputText
			name="inputname"
			text="Nombre"
			value={props.Name_Investigator}
			onChangefn={props.changeName} isEnable />
    <InputEmail 
      name="inputemail"
      text="Email"
      value={props.Email} 
      onChangefn={props.changeEmail} isEnable/>
    <InputText
			name="inputpassword"
			text="Password"
			value={props.defaultPsw}/>
    <InputCheck 
      name="checkisAdmin"
      text="Es administrador"
      value={props.isAdmin}
      onChangefn={props.changeIsAdmin} isEnable/>
    <div className="content-center">
			<button type="button"
					className="btn btn-primary btn-lg"
					onClick={()=>{props.fnAction()}}
					> {props.saving ? <i className="fa fa-spinner fa-spin"></i> : "Guardar"
				}</button>
		</div>

  </div>
)


export default NewForm;