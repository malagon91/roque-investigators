import {
  CHANGE_NAME, CHANGE_TITLE, CHANGE_INST,
  CHANGE_DEPTO, CHANGE_ADDRESS, CHANGE_URL,
  CHANGE_EMAIL, CHANGE_PHONE, CHANGE_INFO
} from 'actions/actionsTypes'
import initialState from './initialState';

export default function resumeReducer(state = initialState.loginInfo.resume, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        Name_Investigator: action.payload,
      }
    case CHANGE_TITLE:
      return {
        ...state,
        Title: action.payload,
      }
    case CHANGE_INST:
      return {
        ...state,
        Institution: action.payload,
      }
    case CHANGE_DEPTO:
      return {
        ...state,
        Depto: action.payload,
      }
    case CHANGE_ADDRESS:
      return {
        ...state,
        Address: action.payload,
      }
    case CHANGE_URL:
      return {
        ...state,
        Url: action.payload,
      }
      case CHANGE_PHONE:
      return {
        ...state,
        Phone: action.payload,
      }
    case CHANGE_INFO:
      return {
        ...state,
        Info: action.payload,
      }
    default:
      return state;
  }
}