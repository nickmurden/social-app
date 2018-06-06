import * as types from '../actions/actionTypes'

// A reducer is a function that handles the action
// A reducer is just a function that accepts a state and an action and returns a new state
export default function messageReducer(state = [], action) { // Set state as an empty array, will eventually be the list of messages
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;

    default:
      return state;
  }
}