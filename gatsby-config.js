const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
  title: `Sunday5K club`,
  description: `Every day is a good day when you run`,
  siteUrl: `https://www.sunday5k.club`
  },  
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer()
        ],
        precision: 8
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-81070839-1"
      }
    }
  ]
}