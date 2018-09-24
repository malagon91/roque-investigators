import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  investigators,
  ajaxCallsInProgress
});

export default  rootReducer;