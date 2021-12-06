import React, { Component } from "react"
import PropTypes from "prop-types"
import Fetcher from "../../../api"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import "../../../styles/radarChart.css"
import Loader from "../../Loader"

/**
 * renders a radar chart component
 * @component
 * @param {string} this.props.id user id
 */
class RadarChartComp extends Component {
  static propTypes = {
    id: PropTypes.string,
  }
  state = { data: {}, isLoading: true }

  componentDidMount() {
    const id = this.props.id
    Fetcher.getUserPerformance(id).then((result) => {
      if (typeof result === "object") {
        this.setState({ data: result })
        this.setState({ isLoading: false })
      } else {
        this.props.history.push("/Error", { result })
      }
    })
  }

  render() {
    const { data, isLoading } = this.state
    return (
      <>
        {!isLoading ? (
          <div className="radarChart__container">
            <ResponsiveContainer className="radarChart">
              <RadarChart
                data={data}
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
