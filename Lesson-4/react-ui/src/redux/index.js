import { combineReducers } from 'redux'
import mainArea from './modules/mainArea'
import adminArea from './modules/adminArea'
 
export default combineReducers({
  mainArea,
  adminArea
});
