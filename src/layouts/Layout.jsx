import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from 'components';
import { NavBar, Footer } from 'layouts';
import theme from '../../config/theme';
import headroom from '../styles/headroom';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }

          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }

          h1 {
            font-family: ${theme.fontFamily.heading};
            font-size: 30px;
          }


          h2{
            padding: 0.5em;/*文字周りの余白*/
            color: #494949;/*文字色*/
            background: #f5f5f5;/*背景色*/
            border-left: solid 5px #0075c2;/*左線（実線 太さ 色）*/
            width:100%;
          }
          
          h3 {
            padding: 0.25em 0.5em;/*上下 左右の余白*/
            color: #494949;/*文字色*/
            background: transparent;/*背景透明に*/
            border-left: solid 5px #0075c2;/*左線*/
          }

          h4{
            display:inline;
            background: linear-gradient(transparent 70%, #a7d6ff 70%);
            font-size: 25px;
          }
          .post-date {
            text-align: right;
          }
          .fa-check{
            color: #7fff7f;
            font-size:20px;
          }
          .fa-check-red{
            color: #ff7f7f;
            font-size:20px;
          }
          
          .checklist{
            font-weight: bold;
            // Font-size is defined in Content.jsx file.
          }
          
          .author-bio{
            font-size: 13px;
          }
          
          .author-bio2{
            font-size: 15px;
          }
                          
          .box{
            padding: 0.5em 1em;
            margin: 2em 0;
            background: #f0f7ff;
            border: dashed 2px #5b8bd0;/*点線*/
            width:fit-content;
          }
          .box2{
            padding: 0.5em 1em;
            margin: 2em 0;
            background: #ffe5f2;
            border: dashed 2px #ff7fbf;/*点線*/
            width:fit-content;
          }

          .centered-link{
            display: block;
            width: fit-content;
            margin: 0 auto;
          }

          .stressed-line{
            background: linear-gradient(transparent 70%,#ffff7a 60%);
            font-weight: bold; 
          }
          .stressed-line-red{
            background: linear-gradient(transparent 70%,#ffa8a8 60%);
            font-weight: bold; 
          }

          ${headroom}
        `}
      />
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
