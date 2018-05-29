import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.div`
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
  p {
    margin: 0;
    font-size: 70px;
  }
`;

class Message extends React.Component {
  render() {
    return (
      <MessageWrapper>
        <form>
          <div className="message__input" aria-labelledby="" name="message" id="" contenteditable="true" spellcheck="true" role="textbox" aria-multiline="true" data-placeholder-default="Say anything">Say anything</div>
          <button type="submit">Post</button>
        </form>
      </MessageWrapper>
    );
  }
}

export default Message;