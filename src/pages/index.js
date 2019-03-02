import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data: { wordpressPage: { content } } }) => (
  <Layout>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
);

export default IndexPage;

export const query = graphql`
  {
    wordpressPage( path: { eq: "/" } ) {
      date
      modified
      content
    }
  }
`;
