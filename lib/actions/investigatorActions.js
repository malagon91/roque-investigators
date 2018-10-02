import axios from 'axios';
import {INIT_LOAD_INVESTIGATORS,
	 SUCCESS_LOAD_INVESTIGATORS, ERROR_LOAD_INVESTIGATORS} from 'actions/actionsTypes' //'/actions/actionTypes';
import apiconfig from './apiConfig';


export function loadInvestigators(){
 return dispatch => {
	dispatch({type: INIT_LOAD_INVESTIGATORS,});
	axios({
		method: 'GET',
		url: apiconfig.INVESTIGATORS,
		timeout:  apiconfig.REQUEST_TIMEOUT,

	}).then((response) => {
		dispatch({
			type: SUCCESS_LOAD_INVESTIGATORS,
			payload: response.data,
		});
	}).catch((error) => {
		dispatch({
			type: ERROR_LOAD_INVESTIGATORS,
			payload: error,
		});
	});
 }
}
