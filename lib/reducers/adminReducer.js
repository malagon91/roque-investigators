import initialState from './initialState';
import {INI_LOAD_ADMIN_INFO, LOAD_ADMIN_INFO, FINISH_LOAD_ADMIN_INFO, CHANGE_DEFAULT_PASSWORD,
        SAVING_ADMIN_INFO,END_SAVING_ADMIN_INFO,} 
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
    case SAVING_ADMIN_INFO:
      return {
        ...state,
        saving:true,
      }
    case END_SAVING_ADMIN_INFO:
      return {
        ...state,
        saving:false,
      }
    default:
      return state;
  }
}