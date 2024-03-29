/**
 * Serializes any unsigned integer (uint) to hexadecimal string.
 * @name uint
 * @kind function
 * @param {number | string | bigint} number the uint thta will be serialized
 * @param {number} bytes Number of bytes to place the uint into.
 * @returns {string} Hex string.
 * @ignore
 */
const uint = (number, bytes) => {
  number = BigInt(number);

  if (number < BigInt(0)) throw new Error("expected a positive number");
  if (number > "0x".padEnd(2 + bytes * 2, "ff"))
    throw new Error(`uint “${number}” is too large for ${bytes} bytes`);
  const hexString = number.toString(16).padStart(bytes * 2, "0"); // 2 nibble per byte

  let hex_endian = "";
  hexString
    .match(/[a-zA-Z0-9]{2}/gmu)
    .reverse()
    .forEach((i) => (hex_endian += i));

  return hex_endian;
};

export default uint;
