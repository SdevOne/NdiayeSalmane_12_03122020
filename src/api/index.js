/**
 * get the data
 */
class Fetcher {
  /**
   * get user data
   * @param {number} userId
   * @returns {Object} User data
   */
  static async getUser(userId) {
    try {
      const response = await fetch("http://localhost:3001/user/" + userId)
      const jsonRes = await response.json()
      if (jsonRes) {
        return jsonRes.data
      }
    } catch (error) {
      return "Les données n'ont pu être récupérées"
    }
  }
  /**
   * get user activity data
   * @param {number} userId
   * @returns {Object} User activity data
   */
  static async getUserActivity(userId) {
    try {
      const response = await fetch(
        "http://localhost:3001/user/" + userId + "/activity"
      )
      const jsonRes = await response.json()
      if (jsonRes) {
        const data = Object.values(jsonRes.data.sessions).map((elt) => {
          let day = elt.day.split("-")
          const formattedData = {
            day: day[2],
            kilogram: elt.kilogram,
            calories: elt.calories,
          }
          return formattedData
        })
        return data
      }
    } catch (error) {
      return "Les données n'ont pu être récupérées"
    }
  }
  /**
   * get user average sessions data
   * @param {number} userId
   * @returns {Object} User average data
   */
  static async getUserAverage(userId) {
    try {
      const response = await fetch(
        "http://localhost:3001/user/" + userId + "/average-sessions"
      )
      const jsonRes = await response.json()
      if (jsonRes) {
        const average = Object.values(jsonRes.data.sessions).map((elt) => {
          return elt
        })
        return average
      }
    } catch (error) {
      return {
        error: "Les données n'ont pu être récupérées",
      }
    }
  }
  /**
   * get user performance data
   * @param {number} userId
   * @returns {Object} User performance data
   */
  static async getUserPerformance(userId) {
    const response = await fetch(
      "http://localhost:3001/user/" + userId + "/performance"
    )
    const jsonRes = await response.json()
    if (jsonRes) {
      const kind = Object.values(jsonRes.data.data).map((elt) => {
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
        const formattedData = {
          kind: category,
          value: elt.value,
        }
        return formattedData
      })
      return kind
    }
  }
  catch(error) {
    return {
      error: "Les données n'ont pu être récupérées",
    }
  }
}

export default Fetcher
