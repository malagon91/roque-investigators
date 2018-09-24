import  {createStore, applyMiddleware} from 'redux';
import  rootReducer from 'reducers/index';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';



export default  function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(axiosMiddleware(axios)));
}