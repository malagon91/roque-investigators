import * as types from './../actions/actionsTypes' //'/actions/actionTypes';
import initialState from './initialState';

export default function investigatorReducer(state = initialState.investigators,action){
  switch (action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}