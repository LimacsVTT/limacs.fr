import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const PageTemplate = ({ data }) => {
  const { html, frontmatter: { title: suffix } = {} } = data.markdownRemark;
  return (
    <Layout title={{ suffix }}>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
