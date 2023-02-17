import uint from './uint.mjs'
import checkDateParse from './utils/checkDataParse.mjs'

/**
 * Convert date in ISO format to `time_point_sec` (seconds since epoch) WASM string.
 * @param {string} time_string ISO date.
 * @returns {string} seconds since epoch.
 */
function time_point_sec(time_string) {
  return uint(Math.round(checkDateParse(time_string + 'Z') / 1000), 4)
}

export default time_point_sec
