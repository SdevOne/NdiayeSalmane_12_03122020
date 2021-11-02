import React, { Component } from "react"
import "../../styles/aside.css"
import Icon from "../Icon"
import yoga from "../../assets/yoga.svg"
import swimmer from "../../assets/swimmer.svg"
import cyclist from "../../assets/cyclist.svg"
import dumbbell from "../../assets/dumbbell.svg"

/**
 * renders the aside component
 * @component
 */
class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <div className="aside__icon-container">
          <Icon logo={yoga} />
          <Icon logo={swimmer} />
          <Icon logo={cyclist} />
          <Icon logo={dumbbell} />
        </div>
        <p className="aside__copyright">Copiryght, SportSee 2020</p>
      </aside>
    )
  }
}

export default Aside
