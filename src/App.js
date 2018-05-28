import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Message />
      </AppWrapper>
    );
  }
}

export default App;
