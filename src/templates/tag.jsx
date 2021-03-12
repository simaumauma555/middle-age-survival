import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header } from 'components';
import config from '../../config/site';
import Img from 'gatsby-image';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.white.light};
  padding: 5px 10px;
  border: solid 1px #fff;
  border-radius: 20px;
  &:hover {
    color: ${props => props.theme.colors.black.blue};
    background: ${props => props.theme.colors.white.light};
  }
`;

const Information = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
  h5 {
      position: relative;
      padding: 1rem 2rem;
      text-align: center;
      font-size: 25px;
      color: #0075a9;
      border-radius: 0 10px 10px 10px;
      background: #d8ecf5;
      margin-bottom: 3rem;
    }
  h5:before {
      font-family: 'Font Awesome 5 Free';
      font-size: 15px;
      font-size: 1.5rem;
      position: absolute;
      top: -24px;
      left: 0;
      height: 24px;
      padding: 0 1em;
      content: 'Click!';
      color: #fff;
      border-radius: 10px 10px 0 0;
      background: #0075a9;
    }
`;

const Tag = ({ pageContext }) => {
  const { posts, tagName } = pageContext;
  const upperTag = tagName.charAt(0).toUpperCase() + tagName.slice(1);
  return (
    <Layout>
      <Helmet title={`${tagName} | ${config.siteTitle}`} />
      <Header title={upperTag}>
        {/* <StyledLink to="/tags">All Tags</StyledLink> */}
      </Header>
      <Container>
        <Information>
          {posts.map((post, index) => (
            <Link key={index} to={post.frontmatter.path}>
              <h5>{post.frontmatter.title}</h5>
              {post.frontmatter.date}              
              {post.frontmatter.cover}
            </Link>
          ))}
        </Information>
      </Container>
    </Layout>
  );
};

export default Tag;

Tag.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.array,
    tagName: PropTypes.string
  }),
};
