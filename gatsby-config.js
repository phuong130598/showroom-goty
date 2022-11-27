module.exports = {
  siteMetadata: {
    title: `Showroom: Games of the Year`,
    description: `This website will show you the games that won the 'Game of the Year' award for each year.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://showroom-goty.local/graphql",
      },
    },
  ],
}
