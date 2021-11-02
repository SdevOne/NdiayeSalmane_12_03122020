import React, { Component } from "react"
import "../styles/error.css"
/**
 * Renders the error page
 * @component
 */
class Error extends Component {
  render() {
    return (
      <div className="error__container">
        <h1 className="error__title">Erreur</h1>
        <p className="error__txt">Le profil recherché n'existe pas</p>
      </div>
    )
  }
}
export default Error
