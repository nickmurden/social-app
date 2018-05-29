import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

class FooterLinks extends React.Component {
  render() {
    return (
      <div>
        <span>About</span>
        <span>Contact</span>
      </div>
    )
  }
};

class Copyright extends React.Component {
  render() {
    return (
      <div>
        <span>Copyright 2018 Social App</span>
      </div>
    )
  }
};

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterLinks />
        <Copyright />
      </FooterWrapper>
    );
  }
}

export default Footer;