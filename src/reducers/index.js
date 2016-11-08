import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  authenticate: authenticationReducer
});

export default rootReducer;
