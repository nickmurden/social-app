import * as types from '../actions/actionTypes'

// A reducer is a function that handles the action
// A reducer is just a function that accepts a state and an action and returns a new state
export default function messageReducer(state = [], action) { // Set state as an empty array, will eventually be the list of messages
  switch (action.type) {
    case types.CREATE_MESSAGE:
      return [...state,
        Object.assign({}, action.message)
      ];
      // using es6 spread operator, we return an new instance of the state array
      // then user object.assign to create a copy of the message that's passed in
      // Returns a new state containing new message
    default:
      return state;
  }
}