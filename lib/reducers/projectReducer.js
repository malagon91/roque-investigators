import initialState from './initialState'
import {
	INI_LOAD_PROJECTS, FINISH_LOAD_PROJECTS,ERROR_LOAD_PROJECTS,UPDATE_LIMIT_PROJECT,
	LOAD_MY_PROJECTS, LOAD_PROJECTS, FINISH_SAVING_PROJECTS, INIT_SAVING_PROJECTS
} from 'actions/actionsTypes'

export default function projectReducer(state = initialState.project, action) {
	switch (action.type) {
		case INI_LOAD_PROJECTS:
			return {
				...state,
				loading: true,
			}
		case FINISH_LOAD_PROJECTS:
			return {
				...state,
				loading: false,
			}
		case INIT_SAVING_PROJECTS:
			return {
				...state,
				saving: true,
			}
		case FINISH_SAVING_PROJECTS:
			return {
				...state,
				saving: false,
			}
		case LOAD_PROJECTS:
			return {
				...state,
				data: [...state.data, ...action.payload],
				loading: false,
				error:false,
			}
		case UPDATE_LIMIT_PROJECT:
			return {
				...state, 
				start:  state.start + action.payload,
			}
		case LOAD_MY_PROJECTS:
			return {
				...state,
				my: action.payload,
				loading: false,
			}
		case ERROR_LOAD_PROJECTS:
			return {
				...state, 
				error:true,
				loading: false,
			}
		default:
			return state;
	}
}