import axios from 'axios';
import {INI_LOAD_ADMIN_INFO,LOAD_ADMIN_INFO, FINISH_LOAD_ADMIN_INFO,
  CHANGE_DEFAULT_PASSWORD,END_SAVING_ADMIN_INFO,SAVING_ADMIN_INFO,
  FINISH_LOADING_PANEL, INIT_LOADING_PANEL}
  from 'actions/actionsTypes';
import apiconfig from './apiConfig';
import toastr from 'toastr';
const optionsTo = {
	"progressBar": true,
	"positionClass": "toast-bottom-right",
};

export function changeDefaultPassword(pass) {
  return {
    type: CHANGE_DEFAULT_PASSWORD,
    payload: pass
  }
}
export function getConfigs(tokenStr){
  return dispath =>{
    const url = `${apiconfig.PREFIX}${apiconfig.CONFIG_ADMIN}`;
    axios({
      method:'GET',
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT
    }).then(result =>{
      dispath({type:LOAD_ADMIN_INFO, payload: result.data.DefaultPsw})
    }).catch(error =>{
      dispath({type:FINISH_LOAD_ADMIN_INFO})
      toastr.error("Error al obtener la informacion, refresca la pagina","Informacion", optionsTo);
    })
  }
}

export function saveDefaultPsw(password, tokenStr){
  return dispath => {// TODO: logic to save the new default password
    dispath({type:INI_LOAD_ADMIN_INFO});
    const url = `${apiconfig.PREFIX}${apiconfig.CONFIG_ADMIN}`;
    axios({
      method:'PUT',
      data: {Password_: password},
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
    }).then(result => {
      dispath({type:FINISH_LOAD_ADMIN_INFO})
      toastr.success("Se actualizo la informacion con exito","Informacion", optionsTo);
    }).catch(error => {
      dispath({type: FINISH_LOAD_ADMIN_INFO})
      toastr.error("Error al actualizar el password","Informacion", optionsTo);
    })
  }
}

export function addNewUser(model, tokenStr, route){
  return dispatch =>{
    dispatch({type:SAVING_ADMIN_INFO});
    const user = {// fill other fields to avoid null values
      ...model,
      Title: '',
      Institution:'',
      Depto: '',
      Address: '',
      Url: '',
      Phone: '',
      Info: '',
    }
    const url = `${apiconfig.PREFIX}${apiconfig.USER}`;
    axios({
			method:'POST',
			data: user,
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then(result =>{
			if (result.data.success){
			toastr.success("Se inserto el usuario con exito","Informacion", optionsTo);
      dispatch({type:END_SAVING_ADMIN_INFO});
       route.push('/admin')
		}else{
			toastr.error(`Error al insertar el usuario: ${result.data.message}`,"Informacion", optionsTo);
			dispatch({type:END_SAVING_ADMIN_INFO});
		}
		}).catch(error =>{
      console.log(error)
			toastr.error("Error del sistema, intenta de nuevo por favor.","Error", optionsTo);
			dispatch({type:END_SAVING_ADMIN_INFO});
		});

  }
}
//TOOD: Add logic to do the next funcions
export function deleteUser(id, tokenStr){
  return dispatch =>{
    dispatch({type: INIT_LOADING_PANEL})
    const url = `${apiconfig.PREFIX}${apiconfig.USER}/${id}`;
    axios({
      method: 'DELETE',
      url: url,
      headers: {"Authorization" : `Bearer ${tokenStr}`} ,
      timeout: apiconfig.REQUEST_TIMEOUT,
    }).then( result => {
      dispatch({type: FINISH_LOADING_PANEL})
      toastr.success("Se guardo la informacion con exito")
    }).catch (error => {
      dispatch({type: FINISH_LOADING_PANEL})
      toastr.error("Error al procesar la informacion, intenta de nuevo por favor", optionsTo)
    });
  }
}

export function resetPassword(id, password,tokenStr ){
  return dispatch =>{

  }
}

export function updatePrivileges(id,newAdmin,tokenStr){
  return dispatch =>{

  }
}
