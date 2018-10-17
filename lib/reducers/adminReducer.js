import initialState from './initialState';
import {INI_LOAD_ADMIN_INFO, LOAD_ADMIN_INFO, FINISH_LOAD_ADMIN_INFO, CHANGE_DEFAULT_PASSWORD} 
from 'actions/actionsTypes'
export default function adminReducer(state= initialState.adminInfo,action){
  switch (action.type){
    case INI_LOAD_ADMIN_INFO:
      return {
        ...state,
        loading:true,
      }
    case LOAD_ADMIN_INFO:// TODO: Change default password
      return{
        ...state,
        defaultPws: action.payload,
      }
    case FINISH_LOAD_ADMIN_INFO:
      return {
        ...state,
        loading: false,
      }
    case CHANGE_DEFAULT_PASSWORD:
      return{
        ...state,
        defaultPws: action.payload,
      }
    default:
      return state;
  }
}