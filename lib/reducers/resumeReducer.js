import {INIT_LOGIN,SUCCESS_LOGIN,FAIL_LOGIN} from 'actions/actionsTypes' //'/actions/actionTypes';
import initialState from './initialState';

export default function resumeReducer(state = initialState.loginInfo.resume, action){
	switch (action.type){
    default:
      return state;
  }
}