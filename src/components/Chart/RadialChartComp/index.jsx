import React, { Component } from "react"
import PropTypes from "prop-types"
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"
import "../../../styles/radialBarChart.css"
import Loader from "../../Loader"

/**
 * renders a radial chart
 * @component
 * @param {number} this.props.score the score achieved in the goal
 */
class RadialChartComp extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
  }
  render() {
    const score = this.props.score.toString().split(".")
    const radialData = [{ all: 100 }, { score: score, fill: "#FF0101" }]
    return (
      <>
        {score.length === 2 ? (
          <div className="radialBarChart__container">
            <h3 className="radialBarChart__title">Score</h3>
            <div className="radialBarChart__score-container">
              <p className="radialBarChart__score">
                <span className="radialBarChart__score-percent">
                  {score[1]}%
                </span>
                <br />
                <span className="radialBarChart__score-txt">
                  de votre objectif
                </span>
              </p>
            </div>
            <ResponsiveContainer className="radialBarChart">
              <RadialBarChart
                width={258}
                height={263}
                data={radialData}
                innerRadius="50%"
                outerRadius="100%"
                barCategoryGap={0}
              >
                <RadialBar dataKey="score" radius={10} />
                <RadialBar dataKey="all" clockWise />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Loader />
        )}
      </>
    )
  }
}
export default RadialChartComp
