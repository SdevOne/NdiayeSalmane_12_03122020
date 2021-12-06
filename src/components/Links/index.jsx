import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../../styles/links.css"

/**
 * renders cards who redirect to profiles
 * @component
 */
class Links extends Component {
  render() {
    let linksClass = "links"
    return (
      <div className={linksClass}>
        <Link to="/profil/12" className="links__item">
          Profil 1
        </Link>
        <Link to="/profil/18" className="links__item">
          Profil 2
        </Link>
      </div>
    )
  }
}

export default Links
