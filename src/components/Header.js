import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  text-align: center;
  .active {
    color: black;
    text-decoration: none;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <h1>Social App</h1>
        <Link to="/" activeClassName="active">Home</Link>
        {" | "}
        <Link to="about" activeClassName="active">About</Link>
        {" | "}
        <Link to="message" activeClassName="active">Message</Link>
      </HeaderWrapper>
    );
  }
}

export default Header;