import React, { Component } from "react"
import PropTypes from "prop-types"
import Fetcher from "../../../api"
// import { getUserAverage } from "../../../api"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import "../../../styles/lineChart.css"
import Loader from "../../Loader"

/**
 * renders a line chart component
 * @component
 * @param {string} this.props.id user id
 */
class LineChartComp extends Component {
  static propTypes = {
    id: PropTypes.string,
  }
  state = { data: {}, isLoading: true }

  componentDidMount() {
    const id = this.props.id
    Fetcher.getUserAverage(id).then((result) => {
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
          <div className="lineChart__container">
            <h3 className="lineChart__title">Durée moyenne des sessions</h3>
            <ResponsiveContainer height={150} className="lineChart">
              <LineChart
                cx="50%"
                cy="50%"
                data={data}
                fill="#fff000"
                margin={{ top: 1, left: 10, right: 10 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  fill="#fff"
                />
                <Line
                  type="monotoneX"
                  dot={false}
                  dataKey="sessionLength"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeDashArray="20 10 20"
                />
                <Tooltip
                  separator=" "
                  payload={[{ name: " " }]}
                  formatter={(value, props) => [
                    value + " " + (props === "sessionLength" ? "min" : " "),
                  ]}
                  itemStyle={{ color: "black" }}
                  cursor={{ stroke: "#00000020", strokeWidth: 70 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Loader />
        )}
      </>
    )
  }
}

export default LineChartComp
