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
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: { content: "" }
    };

    this.onMessageChange = this.onMessageChange.bind(this);
    this.onClickPost = this.onClickPost.bind(this);

  }

  onMessageChange(event) {
    const message = this.state.message;
    message.content = event.target.value;
    this.setState({message: message });
  }

  onClickPost() {
    alert(`Posting ${this.state.message.content}`);
  }

  render() {
    return (
      <MessageWrapper>
        <form>
          {/* <div className="message__input" aria-labelledby="" name="message" id="" contentEditable="true" spellcheck="true" role="textbox" aria-multiline="true" data-placeholder-default="Say anything" onChange={this.onMessageChange} value={this.state.message.content}>Say anything</div> */}
          <input className="message__input" type="text" onChange={this.onMessageChange} value={this.state.message.content} />
          <input type="submit" onClick={this.onClickPost} value="Post" />
        </form>
      </MessageWrapper>
    );
  }
}

export default Message;