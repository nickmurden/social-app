import React from 'react';
import styled from 'styled-components';

const MessageListItemWrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  .message__stats {
    display: flex;
    div {
      margin-right: 15px;
    }
  }
  p {
    margin: 0;
    font-size: 50px;
  }
`;

const MessageListItem = ({message}) => {
  return (
    <MessageListItemWrapper>
      <p>{message.content}</p>
      <div className="message__stats">
        <div>Shares {message.shares}</div>
        <div>Likes {message.likes}</div>
      </div>
    </MessageListItemWrapper>
  );
};

export default MessageListItem;