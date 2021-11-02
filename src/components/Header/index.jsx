import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "../../styles/header.css"

/**
 * renders the header
 * @component
 */
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" className="header__logo" />
        <nav className="header__nav">
          <Link to="/">
            <li className="header__nav-item">Accueil</li>
          </Link>
          <Link to="/">
            <li className="header__nav-item">Profil</li>
          </Link>
          <Link to="/">
            <li className="header__nav-item">Réglage</li>
          </Link>
          <Link to="/">
            <li className="header__nav-item">Communauté</li>
          </Link>
        </nav>
      </header>
    )
  }
}
export default Header
