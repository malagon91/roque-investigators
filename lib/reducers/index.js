import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import loginInfo from './loginReducer'
import resumeReducer from './resumeReducer'

const rootReducer = combineReducers({
  investigators,
  loginInfo,
  ajaxCallsInProgress
});

export default  rootReducer;