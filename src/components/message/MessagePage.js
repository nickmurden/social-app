import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MessageList from './messageList';
import * as messageActions from '../../actions/messageActions';


class Message extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {messages} = this.props;
    return (
      <MessageList messages={messages} />
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages // messages defined in root reducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
    // Wrap actions in a call to dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);