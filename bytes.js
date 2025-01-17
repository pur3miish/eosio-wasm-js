import varuint32 from "./varuint32.js";

/**
 * Serilaises byte string to WASM bytes.
 * @param {string} byte_string The byte string.
 * @returns {string} The byte string.
 */
function bytes(byte_string) {
  if (!byte_string.match(/^[A-F0-9a-f]+$/gmu))
    throw new Error("Invalid hexadecimal string.");

  byte_string = byte_string.toLowerCase();

  return varuint32(byte_string.length / 2) + byte_string;
}

export default bytes;
