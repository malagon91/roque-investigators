import  {createStore, applyMiddleware} from 'redux';
import  rootReducer from 'reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import {composeWithDevTools} from 'redux-devtools-extension';


export default  function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
    applyMiddleware(axiosMiddleware(axios),reduxImmutableStateInvariant()))
  );
}