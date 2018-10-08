import axios from 'axios';
import {INIT_LOGIN,
	SUCCESS_LOGIN, FAIL_LOGIN} from 'actions/actionsTypes';
import apiconfig from './apiConfig';
import toastr from 'toastr';
const optionsTo = {
	"progressBar": true,
	"positionClass": "toast-bottom-right",
};
export function login(email, password, router){
	return dispatch => {
		dispatch({type: INIT_LOGIN});
		const url = `${apiconfig.PREFIX}${apiconfig.LOGIN}`;
		const data = {
			email: email,
			password: password
		}
		axios({
			method: 'POST',
			data: data,
			url: url,
			timeout: apiconfig.REQUEST_TIMEOUT,

		}).then((response) => {
			console.log(response.data);
			if(response.data.success){
				dispatch({type: SUCCESS_LOGIN, payload: response.data.resume});
				sessionStorage.setItem('userInfo', JSON.stringify(response.data.userInfo));
				//const val = JSON.parse(sessionStorage.userInfo);
				router.push('/resume');

			}else{
				toastr.error(response.data.message,"Error in login", optionsTo);
				dispatch({type:FAIL_LOGIN});

			}

		}).catch((error)=>{
			console.log(error)
			toastr.error("Error al iniciar sesion, intenta de nuevo por favor.","Error in login", optionsTo);
			dispatch({type:FAIL_LOGIN});
		});


	}
}

export function loadUser(id,tokenStr){
	return dispatch =>{
		dispatch({type:INIT_LOGIN});
		const url = `${apiconfig.PREFIX}${apiconfig.INVESTIGATOR}/${id}`;
		axios({
			method: 'GET',
			url: url,
			headers: {"Authorization" : `Bearer ${tokenStr}`} ,
			timeout: apiconfig.REQUEST_TIMEOUT,
		}).then((result) =>{
				dispatch({type: SUCCESS_LOGIN, payload: result.data});
		}).catch((error) =>{
			toastr.error('Error al obtener el usuario','Error',optionsTo)
			dispatch({type: FAIL_LOGIN})
		});

	}
}