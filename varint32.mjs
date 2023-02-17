import varuint32 from './varuint32.mjs'

/**
 * varint32
 * @name varint32
 * @kind function
 * @param {number} number variable unsigend integer to sign.
 * @returns {string} varint32 hex string.
 * @ignore
 */
function varint32(number) {
  return varuint32((number << 1) ^ (number >> 31))
}

export default varint32
