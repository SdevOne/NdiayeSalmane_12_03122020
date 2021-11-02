import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import { getUserPerformance } from "../../../api"
import "../../../styles/radarChart.css"
import Loader from "../../Loader"

/**
 * renders a radar chart component
 * @component
 * @param {string} this.props.id the user id
 */
class RadarChartComp extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  state = { data: {}, isLoading: true }

  componentDidMount() {
    const id = this.props.id
    getUserPerformance(id).then((result) => {
      this.setState({ data: result.data })
      this.setState({ isLoading: false })
    })
  }
  /**
   * formating radar chart data
   * @returns {Object}
   */
  getKind(data, isLoading) {
    const kind = !isLoading
      ? Object.values(data.data).map((elt) => {
          const category =
            elt.kind === 1
              ? "Cardio"
              : elt.kind === 2
              ? "Energie"
              : elt.kind === 3
              ? "Endurance"
              : elt.kind === 4
              ? "Force"
              : elt.kind === 5
              ? "Vitesse"
              : elt.kind === 6
              ? "Intesité"
              : "Erreur"
          const newData = {
            kind: category,
            value: elt.value,
          }
          return newData
        })
      : null
    return kind
  }

  render() {
    const { data, isLoading } = this.state
    const performance = this.getKind(data, isLoading)
    return (
      <>
        {!isLoading ? (
          <div className="radarChart__container">
            <ResponsiveContainer className="radarChart">
              <RadarChart
                data={performance}
                margin={{ top: 0, left: 0, right: 20, bottom: 0 }}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" stroke="#fff" orient="inner" />
                <Radar
                  dataKey="value"
                  fill="#FF0101"
                  fillOpacity={0.8}
                  margin={{ top: 3 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Loader />
        )}
      </>
    )
  }
}

export default RadarChartComp
