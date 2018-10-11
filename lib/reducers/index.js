import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import loginInfo from './loginReducer'

const rootReducer = combineReducers({
  investigators,
  loginInfo,
  ajaxCallsInProgress
});

export default  rootReducer;