import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import adminInfo from './adminReducer'
import loginInfo from './loginReducer'
import projectInfo from './projectReducer'

const rootReducer = combineReducers({
  investigators,
  loginInfo,
  adminInfo,
  projectInfo,
});

export default  rootReducer;