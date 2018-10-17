import  {combineReducers} from 'redux';
import investigators from './investigatorReducer';
import adminReducer from './adminReducer'
import loginInfo from './loginReducer'

const rootReducer = combineReducers({
  investigators,
  loginInfo,
  adminReducer,
});

export default  rootReducer;