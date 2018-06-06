import React from 'react';
import styled from 'styled-components';
import MessageListItem from './MessageListItem';

const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  align-items: center;
  font-family: 'Rufina', serif;
  text-align: center;
  form {
    display: contents;
    width: 100%;
    height: 100%;
  }
  .message__input {
    margin: 40px 0;
    border: 0;
    background: none;
    width: 100%;
    font-size: 70px;
    text-align: center;
    font-family: 'Rufina', serif;
    &:focus {
      outline: none;
    }
  }
`;

const MessageList = ({messages}) => {
  return (
    <MessageListWrapper>
      {messages.map(message =>
        <MessageListItem key={message.id} message={message}/>
      )}
    </MessageListWrapper>
  );
};

export default MessageList;