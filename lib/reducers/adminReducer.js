import initialState from './initialState';
import {INI_LOAD_ADMIN_INFO, LOAD_ADMIN_INFO, ERROR_LOAD_ADMIN_INFO} 
from 'actions/actionsTypes'
export default function adminReducer(state= initialState.adminInfo,action){
  switch (action.type){
    case action.INI_LOAD_ADMIN_INFO:
      return {
        ...state,
        loading:true,
      }
    case action.LOAD_ADMIN_INFO:
      return{
        ...state,
        
      }
    default:
      return state;
  }
}