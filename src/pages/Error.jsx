import React, { Component } from "react"
import "../styles/error.css"
/**
 * Renders the error page
 * @component
 */
class Error extends Component {
  render() {
    const error =
      typeof this.props.location.state.result !== "object"
        ? this.props.location.state.result
        : null

    return (
      <div className="error__container">
        <h1 className="error__title">Erreur</h1>
        <p className="error__txt">
          {error ? error : "Le profil recherché n'existe pas"}
        </p>
      </div>
    )
  }
}
export default Error
