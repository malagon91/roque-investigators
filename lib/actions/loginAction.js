import axios from 'axios';
import {INIT_LOGIN,
	SUCCESS_LOGIN, FAIL_LOGIN} from 'actions/actionsTypes';
import apiconfig from './apiConfig';
import toastr from 'toastr';

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
				toastr.error(response.data.message);
				dispatch({type:FAIL_LOGIN});

			}

		}).catch((error)=>{
			console.log(error)
		});


	}
}