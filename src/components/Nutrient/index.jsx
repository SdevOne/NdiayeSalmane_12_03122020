import React, { Component } from "react"
import Icon from "../Icon"
import PropTypes from "prop-types"
import "../../styles/nutrient.css"

/**
 * Renders a nutrient component
 * @component
 * @param {string} this.props.logo icon
 * @param {("red-bckg"|"blue-bckg"|"yellow-bckg"|"pink-bckg")} this.props.background css class style of the icon
 * @param {string} this.props.count nutrient value
 * @param {string} this.props.nutrient nutrient type
 */
class Nutrient extends Component {
  static propTypes = {
    logo: PropTypes.string,
    background: PropTypes.string,
    count: PropTypes.string,
    nutrient: PropTypes.string,
  }

  render() {
    return (
      <div className="nutrient__container">
        <div className="nutrient__content">
          <Icon logo={this.props.logo} background={this.props.background} />
          <div className="nutrient__intel">
            <p className="nutrient__average">{this.props.count}</p>
            <p className="nutrient__type">{this.props.nutrient}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Nutrient
