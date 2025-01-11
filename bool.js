/**
 * Serialise Boolean.
 * @kind function
 * @name bool
 * @param {string| boolean | number} boolean true or false.
 * @returns {string} Hexstring
 * @ignore
 */
function bool(boolean) {
  return boolean ? "01" : "00";
}

export default bool;
