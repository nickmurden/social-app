import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as messageActions from '../actions/messageActions';

const MessageWrapper = styled.div`
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

  onClickPost(e) {
    e.preventDefault();
    this.props.dispatch(messageActions.createMessage(this.state.message)); // Fire off an action
  }

  messageRow(message, index) {
    return <div key={index}>{message.content}</div>;
  }

  render() {
    return (
      <MessageWrapper>
        {this.props.messages.map(this.messageRow)}
        <form>
          {/* <div className="message__input" aria-labelledby="" name="message" id="" contentEditable="true" spellcheck="true" role="textbox" aria-multiline="true" data-placeholder-default="Say anything" onChange={this.onMessageChange} value={this.state.message.content}>Say anything</div> */}
          <input className="message__input" type="text" onChange={this.onMessageChange} value={this.state.message.content} />
          <input type="submit" onClick={this.onClickPost} value="Post" />
        </form>
      </MessageWrapper>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages // messages defined in root reducer
  };
}
export default connect(mapStateToProps)(Message);