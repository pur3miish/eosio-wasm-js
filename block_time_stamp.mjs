import uint from "./uint.mjs";
import checkDateParse from "./utils/checkDataParse.mjs";

/**
 * Convert date in ISO format to `block_timestamp_type` (half-seconds since a different epoch)
 * @param {string} time_String ISO date format.
 * @returns {string} hex string.
 */
function block_time_stamp(time_String) {
  return uint(
    Math.round((checkDateParse(time_String + "Z") - 946684800000) / 500),
    4
  );
}

export default block_time_stamp;
