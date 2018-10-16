import axios from 'axios';
import apiconfig from './apiConfig';
import toastr from 'toastr';
const optionsTo = {
	"progressBar": true,
	"positionClass": "toast-bottom-right",
};
import {
	CHANGE_NAME, CHANGE_TITLE, CHANGE_INST,
	CHANGE_DEPTO, CHANGE_ADDRESS, CHANGE_URL,
	CHANGE_EMAIL, CHANGE_PHONE, CHANGE_INFO,
	INIT_LOAD_FORM,END_LOAD_FORM,
  } from 'actions/actionsTypes'

  export function changeName(name){
	  return {
		  type: CHANGE_NAME,
		  payload: name,
	  }
  }

  export function changeTitle(title){
	return {
		type: CHANGE_TITLE,
		payload: title,
	}
}

export function changeInst(inst){
	return {
		type: CHANGE_INST,
		payload: inst,
	}
}

export function changeDepto(depto){
	return {
		type: CHANGE_DEPTO,
		payload: depto,
	}
}

export function changeAddress(address){
	return {
		type: CHANGE_ADDRESS,
		payload: address,
	}
}

export function changeUrl(url){
	return {
		type: CHANGE_URL,
		payload: url,
	}
}

export function changeEmail(email){
	return {
		type: CHANGE_EMAIL,
		payload: email,
	}
}

export function changePhone(phone){
	return {
		type: CHANGE_PHONE,
		payload: phone,
	}
}

export function changeInfo(info){
	return {
		type: CHANGE_INFO,
		payload: info,
	}
}

export function updateResume(resume,tokenStr){
	return dispatch =>{
		dispatch({type: INIT_LOAD_FORM})
		const model = Object.keys(resume).reduce((object, key) => {
			if (key !== 'existImage') {
				object[key] = resume[key]
			}
			return object
		}, {})
		const url = `${apiconfig.PREFIX}${apiconfig.USER}`;
		axios({
			method:'PUT',
			data: model,
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then(result =>{
			if (result.data.success){
			toastr.success("Se actualizo la informacion con exito","Informacion", optionsTo);
			dispatch({type:END_LOAD_FORM});
		}else{
			toastr.error(`Error al actualizar la informacion: ${result.data.message}`,"Informacion", optionsTo);
			dispatch({type:END_LOAD_FORM});
		}
		}).catch(error =>{
			toastr.error("Error al iniciar sesion, intenta de nuevo por favor.","Error", optionsTo);
			dispatch({type:END_LOAD_FORM});
		});
	}
}
