import {INIT_LOGIN,SUCCESS_LOGIN,FAIL_LOGIN,
	CHANGE_NAME, CHANGE_TITLE, CHANGE_INST,
	CHANGE_DEPTO, CHANGE_ADDRESS, CHANGE_URL,
	CHANGE_EMAIL, CHANGE_PHONE, CHANGE_INFO
} from 'actions/actionsTypes' //'/actions/actionTypes';
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
		//Actions to edit profile info
		case CHANGE_NAME:
		return {
		  ...state,
		  resume:{...state.resume, Name_Investigator: action.payload },
		}
	  case CHANGE_TITLE:
		return {
		  ...state,
		 resume: {...state.resume, Title: action.payload},
		}
	  case CHANGE_INST:
		return {
		  ...state,
		 resume:{...state.resume, Institution: action.payload},
		}
	  case CHANGE_DEPTO:
		return {
		  ...state,
		  resume: {...state.resume, Depto: action.payload},
		}
	  case CHANGE_ADDRESS:
		return {
		  ...state,
		  resume: {...state.resume,  Address: action.payload},
		}
	  case CHANGE_URL:
		return {
		  ...state,
		  resume: {...state.resume, Url: action.payload},
		}
		case CHANGE_PHONE:
		return {
		  ...state,
		 state: {...state.resume, Phone: action.payload},
		}
	  case CHANGE_INFO:
		return {
		  ...state,
		  resume: {...state.resume, Info: action.payload},
		}
		default:
			return state;
	}
}