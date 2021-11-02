/**
 * get user intel
 * @param {number} userId
 * @returns {Promise}
 */
export const getUser = async (userId) => {
  const response = await fetch("http://localhost:3001/user/" + userId)
  const jsonRes = await response.json()
  if (jsonRes) {
    return jsonRes
  }
}
/**
 * get user activity intel
 * @param {number} userId
 * @returns {Promise}
 */
export const getUserActivity = async (userId) => {
  const response = await fetch(
    "http://localhost:3001/user/" + userId + "/activity"
  )
  const jsonRes = await response.json()
  if (jsonRes) {
    return jsonRes
  }
}
/**
 * get user average sessions intel
 * @param {number} userId
 * @returns {Promise}
 */
export const getUserAverage = async (userId) => {
  const response = await fetch(
    "http://localhost:3001/user/" + userId + "/average-sessions"
  )
  const jsonRes = await response.json()
  if (jsonRes) {
    return jsonRes
  }
}
/**
 * get user performance intel
 * @param {number} userId
 * @returns {Promise}
 */
export const getUserPerformance = async (userId) => {
  const response = await fetch(
    "http://localhost:3001/user/" + userId + "/performance"
  )
  const jsonRes = await response.json()
  if (jsonRes) {
    return jsonRes
  }
}
