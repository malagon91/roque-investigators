import axios from 'axios';
import {INI_LOAD_ADMIN_INFO,LOAD_ADMIN_INFO, FINISH_LOAD_ADMIN_INFO,
  CHANGE_DEFAULT_PASSWORD} 
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