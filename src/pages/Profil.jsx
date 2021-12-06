import React, { Component } from "react"
import Fetcher from "../api"
import BarChartComp from "../components/Chart/BarChartComp"
import LineChartComp from "../components/Chart/LineChartComp"
import RadarChartComp from "../components/Chart/RadarChartComp"
import RadialBarChart from "../components/Chart/RadialChartComp"
import Nutrient from "../components/Nutrient"
import energy from "../assets/energy.svg"
import chicken from "../assets/chicken.svg"
import apple from "../assets/apple.svg"
import cheeseburger from "../assets/cheeseburger.svg"
import "../styles/profil.css"
import Loader from "../components/Loader"

/**
 * Renders the user profil page
 * @component
 */
class Profil extends Component {
  state = { data: {}, isLoading: true }

  componentDidMount() {
    this._isMounted = true
    const { id } = this.props.match.params
    Fetcher.getUser(id).then((result) => {
      if (typeof result === "object") {
        this.setState({ data: result })
        this.setState({ isLoading: false })
      } else {
        this.props.history.push("/Error", { result })
      }
    })
  }

  render() {
    const { id } = this.props.match.params
    const { data, isLoading } = this.state
    return (
      <>
        {!isLoading ? (
          <main className="profil">
            <div className="profil__intel">
              <h1 className="profil__header">
                Bonjour
                <span className="profil__name">
                  {" " +
                    data.userInfos.lastName +
                    " " +
                    data.userInfos.firstName}
                </span>
              </h1>
              <p className="profil__appreciation">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </p>
              <section className="profil__charts-container">
                <div className="profil__charts">
                  <div className="profil__barChart">
                    <BarChartComp id={id} />
                  </div>
                  <div className="profil__sportChart">
                    <LineChartComp id={id} />
                    <RadarChartComp id={id} />
                    <RadialBarChart
                      score={data.todayScore ? data.todayScore : data.score}
                    />
                  </div>
                </div>
                <aside className="profil__nutrients-container">
                  <Nutrient
                    count={data.keyData.calorieCount + "Cal"}
                    nutrient="Calories"
                    logo={energy}
                    background="red-bckg"
                  />
                  <Nutrient
                    count={data.keyData.proteinCount + "g"}
                    nutrient="Proteines"
                    logo={chicken}
                    background="blue-bckg"
                  />
                  <Nutrient
                    count={data.keyData.carbohydrateCount + "g"}
                    nutrient="Glucides"
                    logo={apple}
                    background="yellow-bckg"
                  />
                  <Nutrient
                    count={data.keyData.lipidCount + "g"}
                    nutrient="Lipides"
                    logo={cheeseburger}
                    background="pink-bckg"
                  />
                </aside>
              </section>
            </div>
          </main>
        ) : (
          <Loader />
        )}
      </>
    )
  }
}
export default Profil
