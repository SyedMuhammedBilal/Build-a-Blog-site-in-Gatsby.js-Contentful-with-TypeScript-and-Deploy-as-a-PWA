import React from "react"
//import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/header.css"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="head-container">
    <h3 className="logo">Gatsby</h3>
    <a className="cta" href="#" ><button className="btn">Contact</button></a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
