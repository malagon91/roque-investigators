import {INIT_LOGIN,SUCCESS_LOGIN,FAIL_LOGIN} from 'actions/actionsTypes' //'/actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.loginInfo,action){
	switch (action.type){
		case INIT_LOGIN:
			return {
				...state,
				loading: true
			}
		case SUCCESS_LOGIN:
			return {
				...state,
				loading: false,
				resume: action.payload
			}
		case FAIL_LOGIN:
			return{
				...state,
				loading:false,
			}

		default:
			return state;
	}
}