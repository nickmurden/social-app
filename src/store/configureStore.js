// This is where we configure the Redux store
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// redux-immutable-state-invariant spits an error on you when you try to mutate your state either inside a dispatch or between dispatches


// Create a function that configures the store, to be called at app entry point
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}