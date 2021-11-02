import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { getUserActivity } from "../../../api"
import "../../../styles/barChart.css"
import Loader from "../../Loader"

/**
 * renders a barchart component
 * @component
 * @param {string} this.props.id the user id
 */
class BarChartComp extends Component {
  static propTypes = {
    id: PropTypes.string,
  }

  state = { data: {}, isLoading: true }

  componentDidMount() {
    const id = this.props.id
    getUserActivity(id).then((result) => {
      this.setState({ data: result.data })
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { data, isLoading } = this.state
    const activity = !isLoading
      ? Object.values(data.sessions).map((elt) => {
          let day = elt.day.split("-")
          const newData = {
            day: day[2],
            kilogram: elt.kilogram,
            calories: elt.calories,
          }
          return newData
        })
      : null

    return (
      <>
        {!isLoading ? (
          <div className="barChart__container">
            <h3 className="barChart__title">Activité quotidienne</h3>
            <div className="barChart__legend">
              <div className="barChart__legend-item">
                <div className="barChart__legend-circle-0"></div>
                <span>Poids (kg)</span>
              </div>
              <div className="barChart__legend-item">
                <div className="barChart__legend-circle-1"></div>
                <span>Calories brûlées (kCal)</span>
              </div>
            </div>
            <ResponsiveContainer height={200} className="barChart">
              <BarChart data={activity} barGap={10}>
                <CartesianGrid vertical={false} strokeDasharray="1 2" />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={20}
                />
                <YAxis
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tickCount={3}
                />
                <Bar
                  dataKey="kilogram"
                  fill="#282D30"
                  barSize={8}
                  radius={[5, 5, 0, 0]}
                />
                <Bar
                  dataKey="calories"
                  fill="#E60000"
                  barSize={8}
                  radius={[5, 5, 0, 0]}
                  stackId="calories"
                />
                <Tooltip
                  separator=" "
                  contentStyle={{ background: "red", color: "white" }}
                  itemStyle={{ color: "white" }}
                  cursor={{ fill: "#cccccc60" }}
                  payload={[{ name: " " }]}
                  formatter={(value, props) => [
                    " ",
                    value + " " + (props === "kilogram" ? "kg" : "kCal"),
                  ]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <Loader />
        )}
      </>
    )
  }
}
export default BarChartComp
