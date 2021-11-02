import React, { Component } from "react"
import PropTypes from "prop-types"
import "../../styles/icon.css"

/**
 * renders icon
 * @component
 * @param {("red-bckg"|"blue-bckg"|"yellow-bckg"|"pink-bckg")} [this.props.background] the css class style of the icon
 * @param {string} this.props.logo the icon
 */
class Icon extends Component {
  static propTypes = {
    background: PropTypes.string,
    logo: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className={"icon " + this.props.background}>
        <img src={this.props.logo} alt="" className="icon__logo" />
      </div>
    )
  }
}
export default Icon
