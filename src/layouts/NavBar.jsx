import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/header-logo.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      {/* <img src={logo} alt="Gatsby Logo" /> ##左上のロゴをコメントアウトで削除 */}
    </StyledLink>
    <Nav>
      <Link to="/blog">All</Link>
      <Link to="/tags/英語・海外">English/Global</Link>
      <Link to="/tags/キャリア">Career</Link>
      <Link to="/tags/資産形成">Investment</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/privacy-policy">プライバシーポリシー</Link> */}
    </Nav>
  </Headroom>
);

export default NavBar;
