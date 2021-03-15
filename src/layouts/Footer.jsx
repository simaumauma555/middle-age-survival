import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 2rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;


const Footer = () => (
  <Wrapper>
    <Text>
    {/* 　<Link to="/about">本サイトについて</Link>  */}
     <Link to="/privacy-policy">プライバシーポリシー</Link>
     <Link to="/contact">お問い合わせ</Link>
    </Text>
  </Wrapper>
);
export default Footer;
