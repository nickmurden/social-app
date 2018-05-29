import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>Social App</h1>
      </HeaderWrapper>
    );
  }
}

export default Header;