import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import {body,footer} from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title} />
      <div className={body}>
        <main>{children}</main>
        <footer className={footer}>
          © {new Date().getFullYear()} &middot; Built by Phuong Nguyen Ky
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
