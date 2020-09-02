/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    author: "Michael Van Loon vs Kalush",
    description:
      "Schoonmaak Loont focust op kwaliteit en zorgt ervoor dat geniet u van een schoon en representatief resultaat, zonder dat u ergens omkijken naar heeft.",
    siteUrl: `https://www.schoonmaakloont.nl/`,
    keywords: [
      "Mileubewust",
      "Dienstverlening",
      "Schoonmaak",
      "Ramen wassen",
      "Kantoor",
      "Desinfectie",
      "Corona",
      "Virusvrij",
      "Innovatief",
      "Particulier",
      "Cleaning",
      "Klantvriendelijk",
      "Schoonmaakdiensten",
      "Appartementen",
      "Woningen",
      "Huizen",
      "Flats",
      "Renovatie",
      "Reinigen",
      "Ramen wassen",
      "Cleaning",
      "Klantvriendelijk",
      "meubels",
      "sanitair",
      "Schoonmaken",
      "Kantoor",
      "Office",
      "Cleaning",
      "Klantvriendelijk",
      "Bureaus",
      "randapparatuur",
      "computer",
      "Virus",
      "Virus vrij",
      "Corona",
      "Covid19",
      "Desinfectie",
      "Desinfecteren",
      "Ozon",
      "Kantoor",
      "Huis",
      "Appartementen",
      "Gezondheid",
      "gecertificeerd",
      "Woning",
      "Ramen", "Wassen", "Schoonmaak", "Schoonmaker", "Glazen", "Ramen lappen", "Ramen zemen", "Wasser", "Cleaning", "Diestverlening", "Thuis", "Kantoor", "Appartementen",
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/components/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `assets`,
    //     path: `${__dirname}/src/assets/`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        // custom: {
        //   families: ["SegoeUI"],
        //   urls: ["/fonts/fonts.scss"],
        // },
        google: {
          families: ["Droid Sans", "Droid Serif"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
