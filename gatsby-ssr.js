/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') { return; }

  const headComponents = getHeadComponents();
  headComponents.forEach(el => {
    if (el.type === 'style') {
      /* eslint-disable no-param-reassign */
      el.type = 'link';
      el.props.href = el.props['data-href'];
      el.props.rel = 'stylesheet';
      el.props.type = 'text/css';

      delete el.props['data-href'];
      delete el.props.dangerouslySetInnerHTML;
      /* eslint-enable */
    }
  });
};
