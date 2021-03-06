'use strict'
const serialize_asset = require('./serialize/asset.js')
const serialize_block_timestamp_type = require('./serialize/block_time_stamp.js')
const serialize_bool = require('./serialize/bool.js')
const serialize_bytes = require('./serialize/bytes.js')
const serialize_checksum = require('./serialize/checksum.js')
const serialize_extended_asset = require('./serialize/extended_asset.js')
const serialize_float128 = require('./serialize/float128.js')
const serialize_float32 = require('./serialize/float32.js')
const serialize_float64 = require('./serialize/float64.js')
const serialize_int = require('./serialize/int.js')
const serialize_name = require('./serialize/name.js')
const serialize_public_key = require('./serialize/public_key.js')
const serialize_signature = require('./serialize/signature.js')
const serialize_string = require('./serialize/string.js')
const serialize_symbol = require('./serialize/symbol.js')
const serialize_symbol_code = require('./serialize/symbol_code.js')
const serialize_time_point = require('./serialize/time_point.js')
const serialize_time_point_sec = require('./serialize/time_point_sec.js')
const serialize_uint = require('./serialize/uint.js')
const serialize_varint32 = require('./serialize/varint32.js')
const serialize_varuint32 = require('./serialize/varuint32.js')

/**
 * The core object that contains all the EOSIO based types to serialize.
 * @name serialize
 * @kind object
 * @example <caption>Ways to `require`.</caption>
 * ```js
 * const serialize = require('eosio-wasm-js')
 * ```
 * @example <caption>Ways to `import`.</caption>
 * ```js
 * import serialize from 'eosio-wasm-js'
 * ```
 * @example <caption>Serialize EOSIO name type.</caption>
 * ```js
 * import serialize_name from 'eosio-wasm-js/public/serialize/name.js'
 *
 * serialize_name('eosio')
 * ```
 * The logged output was 0000000000ea3055
 *
 */
const serialize = {
  asset: x => serialize_asset(x),
  block_timestamp_type: x => serialize_block_timestamp_type(x),
  bool: x => serialize_bool(x),
  bytes: x => serialize_bytes(x),
  checksum160: x => serialize_checksum(x, 20),
  checksum256: x => serialize_checksum(x, 32),
  checksum512: x => serialize_checksum(x, 64),
  extended_asset: x => serialize_extended_asset(x),
  float32: x => serialize_float32(x),
  float64: x => serialize_float64(x),
  float128: x => serialize_float128(x),
  int8: x => serialize_int(x, 1),
  int16: x => serialize_int(x, 2),
  int32: x => serialize_int(x, 4),
  int64: x => serialize_int(x, 8),
  int128: x => serialize_int(x, 16),
  name: x => serialize_name(x),
  public_key: x => serialize_public_key(x),
  signature: x => serialize_signature(x),
  string: x => serialize_string(x),
  symbol_code: x => serialize_symbol_code(x),
  symbol: x => serialize_symbol(x),
  time_point_sec: x => serialize_time_point_sec(x),
  time_point: x => serialize_time_point(x),
  uint8: x => serialize_uint(x, 1),
  uint16: x => serialize_uint(x, 2),
  uint32: x => serialize_uint(x, 4),
  uint64: x => serialize_uint(x, 8),
  uint128: x => serialize_uint(x, 16),
  varint32: x => serialize_varint32(x),
  varuint32: x => serialize_varuint32(x)
}

module.exports = serialize
