import * as React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout title="Home">
    <div>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
  </Layout>
)
export const homeQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default IndexPage;
