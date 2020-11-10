module.exports = {
  siteMetadata: {
    title: 'Brahmilabs Website',
    image: 'https://brahmilabs.in/src/assets/img/brahmilabs-homeshot.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Brahmilabs',
        short_name: 'Brahmilabs',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/light-bulb-icon.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
