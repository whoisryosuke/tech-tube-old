module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `./src/database/`,
      },
    },
    `gatsby-transformer-json`,
  ],
}
