import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {footer,page,main} from "./layout.module.css"

const Layout = ({ children,title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  const defaultTitle = site.siteMetadata?.title
  return (
    <div className={page}>
    <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <Header siteTitle={defaultTitle} />
      <main className={main}>
        {children}
      </main>
      <footer className={footer}>
        © {new Date().getFullYear()} &middot; Built by {site.siteMetadata.author}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
