import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import prism from '../styles/prism';

const Wrapper = styled.div`
  ${prism};
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 16px;
    line-height: 2;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  .box li, .box a, .box ol, .box p {
    font-size: 13px;
    margin-bottom: 2px;
    margin-top: 2px;
  } 
  .box h4{
    margin-bottom: 2px;
    font-weight: bold;
    background: none;
    font-size: 20px;
  }
  .box2 li, .box2 a, .box2 ol, .box2 p {
    font-size: 13px;
    margin-bottom: 2px;
    margin-top: 2px;
  } 
  .box-normal li, .box-normal ol{
    font-size: 15px;
    margin-bottom: 2px;
    margin-top: 2px;
    font-weight: bold;    
  }

  a:not(.gatsby-resp-image-link):not(.anchor) {
    color: #4496d3;
    // box-shadow: inset 0 -2px 0 ${props => props.theme.colors.primary.base}; ハイパーリンクの水色下線をコメントアウト
    // border-bottom: 1px solid ${props => props.theme.colors.primary.base};　ハイパーリンクの水色下線をコメントアウト
    transition: ${props => props.theme.transitions.default.transition};
    text-decoration: none;
    &:hover,
    &:focus {
      background: ${props => props.theme.colors.primary.base};
      color: black;
    }
  }
  h1 {
    margin-top: 3rem;
  }
  h2 {
    margin-top: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: inline-block;
    position: relative;
    a {
      box-shadow: none;
      border-bottom: none;
      &:hover,
      &:focus {
        background: none;
      }
    }
    &:hover {
      .anchor svg {
        opacity: 0.8;
      }
    }
  }
  .checklist, .checklist-crossmark, .checklist-questionmark{
    font-size: 20px;
  }
`;

const Content = ({ input }) => (
  <Wrapper dangerouslySetInnerHTML={{ __html: input }} />
);

export default Content;

Content.propTypes = {
  input: PropTypes.any.isRequired,
};
