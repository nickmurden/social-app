import React, { Component } from 'react';
import Message from '../Message';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  align-items: center;
  font-family: 'Rufina', serif;
  text-align: center;
`;

class HomePage extends Component {
  render() {
    return (
      <HomeWrapper>
        <Message />
      </HomeWrapper>
    );
  }
}

export default HomePage;
