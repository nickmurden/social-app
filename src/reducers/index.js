// This is the root reducer
import {combineReducers} from 'redux';
import messages from './messageReducer';

// combineReducers is a function that comes from Redux
const rootReducer = combineReducers({
  messages
  // This is an object, could be messages: messages
});

export default rootReducer;