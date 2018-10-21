import axios from 'axios';
import {
	INI_LOAD_PROJECTS, FINISH_LOAD_PROJECTS,
	LOAD_MY_PROJECTS, LOAD_PROJECTS, FINISH_SAVING_PROJECTS, INIT_SAVING_PROJECTS
} from 'actions/actionsTypes'
import apiconfig from './apiConfig';
import {loadInvestigators} from './investigatorActions';
import toastr from 'toastr';
const optionsTo = {
	"progressBar": true,
	"positionClass": "toast-bottom-right",
};

export function getProjects() {
	return dispatch => {
		dispatch({ type: INI_LOAD_PROJECTS })
		const Url = `${apiconfig.PREFIX}${apiconfig.PROJECT}`;
		axios({
			method: 'GET',
			url: Url,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then(result => {
			if (result.data.success)
				dispatch({
					type: LOAD_PROJECTS,
					payload: response.data.data,
				})
			else{
				toastr.error(`Error al obtener la informacion, ${response.data.message}`,`Error`, optionsTo);
				dispatch({type:FINISH_LOAD_PROJECTS});
			}
		}).catch(error => {
			toastr.error(`Error al obtener la informacion, intentalo de nuevo`,`Error`, optionsTo);
			dispatch({type:FINISH_LOAD_PROJECTS});
		})
	}
}

export function getProjectsByUser(id, tokenStr){
	return dispatch =>{
		dispatch({type: INI_LOAD_PROJECTS})
		const Url = `${apiconfig.PREFIX}${apiconfig.PROJECT}/${id}`;
		axios({
			method: 'GET',
			url: Url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then (result => {
			if (result.data.success)
			dispatch({
				type: LOAD_MY_PROJECTS,
				payload: result.data.data,
			})
		else{
			toastr.error(`Error al obtener la informacion, ${response.data.message}`,`Error`, optionsTo);
			dispatch({type:FINISH_LOAD_PROJECTS});
		}
		}).catch( error => {
			toastr.error(`Error al obtener la informacion, intentalo de nuevo`,`Error`, optionsTo);
			dispatch({type:FINISH_LOAD_PROJECTS});
		})
	}
}

export function AddProject(model, tokenStr){
	return dispatch =>{
		dispatch({type: INIT_SAVING_PROJECTS})
		const Url = `${apiconfig.PREFIX}${apiconfig.PROJECT}`;
		axios({
			method: 'POST',
			url: Url,
			data: model,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then( result => {
			if (result.data.success){
				toastr.success("Se guardo el registro correctamente","Informacion", optionsTo)
				dispatch({type:FINISH_SAVING_PROJECTS});
			}else{
				toastr.error(`Error al guardar el registro, ${response.data.message}`,`Error`, optionsTo);
				dispatch({type:FINISH_SAVING_PROJECTS});
			}
		}).catch( error => {
			toastr.error(`Error al guardar el registro, intenta mas tarde`,`Error`, optionsTo);
			dispatch({type:FINISH_SAVING_PROJECTS});
		})
	}
}

export function UpdateProject(model, tokenStr){
	return dispatch =>{
		dispatch({type: INIT_SAVING_PROJECTS})
		const Url = `${apiconfig.PREFIX}${apiconfig.PROJECT}`;
		axios({
			method: 'PUT',
			url: Url,
			data: model,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then( result => {
			if (result.data.success){
				toastr.success("Se guardo el registro correctamente","Informacion", optionsTo)
				dispatch({type:FINISH_SAVING_PROJECTS});
			}else{
				toastr.error(`Error al actualizar el registro, ${response.data.message}`,`Error`, optionsTo);
				dispatch({type:FINISH_SAVING_PROJECTS});
			}
		}).catch( error => {
			toastr.error(`Error al guardar el registro, intenta mas tarde`,`Error`, optionsTo);
			dispatch({type:FINISH_SAVING_PROJECTS});
		})
	}
}

export function DeleteProject(id, tokenStr){
	return dispatch =>{
		dispatch({type: INI_LOAD_PROJECTS})
		const Url = `${apiconfig.PREFIX}${apiconfig.PROJECT}/${id}`;
		axios({
			method: 'DELETE',
			url: Url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then(result => {
			if (result.data.success){
				toastr.success("Se elimino el registro correctamente","Informacion", optionsTo)
				dispatch({type:FINISH_SAVING_PROJECTS});
			}else{
				toastr.error(`Error al eliminar el registro, ${response.data.message}`,`Error`, optionsTo);
				dispatch({type:FINISH_SAVING_PROJECTS});
			}
		}).catch( error => {
			toastr.error(`Error al eliminar el registro, intenta mas tarde`,`Error`, optionsTo);
			dispatch({type:FINISH_SAVING_PROJECTS});
		})
	}
}