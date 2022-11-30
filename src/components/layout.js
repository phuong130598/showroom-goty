import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import {body,footer} from "./layout.module.css"

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
    <>
    <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <Header siteTitle={defaultTitle} />
      <div className={body}>
        <main>
          {children}
        </main>
        <footer className={footer}>
          © {new Date().getFullYear()} &middot; Built by {site.siteMetadata.author}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
