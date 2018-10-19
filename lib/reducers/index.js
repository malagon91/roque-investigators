import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import adminInfo from './adminReducer'
import loginInfo from './loginReducer'

const rootReducer = combineReducers({
  investigators,
  loginInfo,
  adminInfo,
});

export default  rootReducer;