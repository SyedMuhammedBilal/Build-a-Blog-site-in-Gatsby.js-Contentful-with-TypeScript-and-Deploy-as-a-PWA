import React from "react"
//import { Link } from "gatsby"
import PropTypes from "prop-types"

import "../styles/header.css"
import { navigate } from "gatsby"


const Header = () => (
  <header className="head-container">
    <h3 className="logo">Gatsby</h3>
    <a className="cta" href="#" ><button className="btn" onClick={() => {
      navigate('/')
    }}>Home</button></a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
