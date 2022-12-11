import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {header, title, nav, navList, navLink} from './header.module.css'
const Header = ({ siteTitle }) => (
  <header className={header}>
    <h1 className={title}>{siteTitle}</h1>
    <nav>
        <ul className={nav}>
          <li className={navList}>
            <Link to="/" className={navLink}>
              Home
            </Link>
          </li>
          <li className={navList}>
            <Link to="/games" className={navLink}>
              Games
            </Link>
          </li>
          <li className={navList}>
            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
