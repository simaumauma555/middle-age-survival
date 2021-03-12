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
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 15px;
    a{
      margin-left: 0.5rem;
    }
  }
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      {/* <img src={logo} alt="Gatsby Logo" /> ##左上のロゴをコメントアウトで削除 */}
    </StyledLink>
    <Nav>
      <Link to="/blog"><u>全記事</u></Link>
      <Link to="/tags/英語・海外"><u>英語・海外</u></Link>
      <Link to="/tags/キャリア"><u>キャリア</u></Link>
      <Link to="/tags/資産形成"><u>資産形成</u></Link>
    </Nav>
  </Headroom>
);

export default NavBar;
