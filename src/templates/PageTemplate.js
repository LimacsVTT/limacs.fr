import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function Template ({ data }) {
  const { html } = data.markdownRemark;
  return (
    <Layout>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
