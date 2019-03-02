import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import Header from '../Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';


const Layout = ({ data, children }) => {
  const { allWordpressSiteMetadata: { edges: [{ node: wpMeta }] } } = data;
  return (
    <>
      <Helmet title={wpMeta.name} meta={[{ name: 'description', content: wpMeta.description }]}>
        <html lang="fr" />
      </Helmet>
      <Container>
        <Header />
        <Row>
          <Col>
            <Container className="main-content">
              {children}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default props => (
  <StaticQuery
    query={graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
              url
              home
            }
          }
        }
      }
    `}
    render={data => (<Layout {...props} data={data} />)}
  />
);
