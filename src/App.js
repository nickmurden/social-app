import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: calc(100vh - 40px);
  background: #f6f6f6;
  *::-moz-selection {
    color: #F7D323;
  }
  *::selection {
    color: #F7D323;
  }
`;

injectGlobal`
  body {
    padding: 20px;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Message />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
