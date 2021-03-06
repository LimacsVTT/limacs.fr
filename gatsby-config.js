const gatsbyConfigWordpress = require('./gatsby-config-wordpress.js');

module.exports = {
  siteMetadata: {
    title: 'Limacs VTT - Lectoure',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-transformer-remark',
    gatsbyConfigWordpress,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Limacs VTT Club Lectourois',
        short_name: 'Limacs',
        start_url: '/',
        background_color: '#dd8500',
        theme_color: '#dd8500',
        icon: 'src/images/limacs-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
