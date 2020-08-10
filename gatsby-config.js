/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Segoe UI"],
          urls: ["/fonts/fonts.css"],
        },
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
  ],
}
