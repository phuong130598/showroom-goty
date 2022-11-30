module.exports = {
  siteMetadata: {
    title: `Showroom: Games of the Year`,
    description: `Want to know which game won the GOTY reward for each year? Look no further! This is the website that will give you all the information that you need for each GOTY winner of each year.`,
    author: `Phuong Nguyen Ky`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://showroom-goty.local/graphql",
      },
    },
  ],
}
