
module.exports = {
  siteMetadata: {
    author: "Michael Van Loon",
    description:
      "Schoonmaak Loont focust op kwaliteit en zorgt ervoor dat geniet u van een schoon en representatief resultaat, zonder dat u ergens omkijken naar heeft.",
    siteUrl: `https://www.schoonmaakloont.nl/`,
    keywords: [...new Set([
      "Milieubewuste",
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
      "Ramen",
      "Wassen",
      "Schoonmaak",
      "Schoonmaker",
      "Glazen",
      "Ramen lappen",
      "Ramen zemen",
      "Wasser",
      "Cleaning",
      "Dienstverlening",
      "Thuis",
      "Kantoor",
      "Appartementen",
    ])],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.schoonmaakloont.nl`,
      },
    },
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
          include: /assets/, // not sure if configed corectly
        },
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
  ],
}
