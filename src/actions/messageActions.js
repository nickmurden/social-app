import * as types from './actionTypes';
import messageApi from '../api/mockMessageApi';

export function loadMessagesSucces(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function loadMessages() {
  return function(dispatch) {
    return messageApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSucces(messages));
    }).catch(error => {
      throw(error);
    });
  };
}