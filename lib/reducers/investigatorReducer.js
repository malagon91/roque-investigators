import {INIT_LOAD_INVESTIGATORS, SUCCESS_LOAD_INVESTIGATORS, ERROR_LOAD_INVESTIGATORS,
  FINISH_LOADING_PANEL,INIT_LOADING_PANEL
} from 'actions/actionsTypes' //'/actions/actionTypes';
import initialState from './initialState';

export default function investigatorReducer(state = initialState.investigators,action){
  switch (action.type){
    case INIT_LOAD_INVESTIGATORS:
      return {...state, loading: true };
    case SUCCESS_LOAD_INVESTIGATORS:
      return {...state, data: action.payload, loading: false, error: null}
    case ERROR_LOAD_INVESTIGATORS:
      return {...state, loading: false, error: action.payload}
    case INIT_LOADING_PANEL:
    return{
      ...state,
      loading: true,
    }
    case FINISH_LOADING_PANEL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}