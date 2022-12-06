'use strict'

const { serialize_actions } = require('./actions.js')
const serialize_asset = require('./asset.js')
const serialize_block_timestamp_type = require('./block_time_stamp.js')
const serialize_bool = require('./bool.js')
const serialize_bytes = require('./bytes.js')
const serialize_checksum = require('./checksum.js')
const serialize_extended_asset = require('./extended_asset.js')
const serialize_float128 = require('./float128.js')
const serialize_float32 = require('./float32.js')
const serialize_float64 = require('./float64.js')
const serialize_int = require('./int.js')
const serialize_name = require('./name.js')
const serialize_public_key = require('./public_key.js')
const serialize_signature = require('./signature.js')
const serialize_string = require('./string.js')
const serialize_symbol = require('./symbol.js')
const serialize_symbol_code = require('./symbol_code.js')
const serialize_time_point = require('./time_point.js')
const serialize_time_point_sec = require('./time_point_sec.js')
const serialize_uint = require('./uint.js')
const serialize_varint32 = require('./varint32.js')
const serialize_varuint32 = require('./varuint32.js')

/**
 * The core object that contains all the EOSIO based types to serialize.
 * @name serialize
 * @kind Object
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
 *
 * serialize_name('eosio')
 * ```
 * The logged output was 0000000000ea3055
 *
 */

exports.actions = x => serialize_actions(x)
exports.asset = x => serialize_asset(x)
exports.block_timestamp_type = x => serialize_block_timestamp_type(x)
exports.bool = x => serialize_bool(x)
exports.bytes = x => serialize_bytes(x)
exports.checksum160 = x => serialize_checksum(x, 20)
exports.checksum256 = x => serialize_checksum(x, 32)
exports.checksum512 = x => serialize_checksum(x, 64)
exports.extended_asset = x => serialize_extended_asset(x)
exports.float32 = x => serialize_float32(x)
exports.float64 = x => serialize_float64(x)
exports.float128 = x => serialize_float128(x)
exports.int8 = x => serialize_int(x, 1)
exports.int16 = x => serialize_int(x, 2)
exports.int32 = x => serialize_int(x, 4)
exports.int64 = x => serialize_int(x, 8)
exports.int128 = x => serialize_int(x, 16)
exports.name = x => serialize_name(x)
exports.public_key = x => serialize_public_key(x)
exports.signature = x => serialize_signature(x)
exports.string = x => serialize_string(x)
exports.symbol_code = x => serialize_symbol_code(x)
exports.symbol = x => serialize_symbol(x)
exports.time_point_sec = x => serialize_time_point_sec(x)
exports.time_point = x => serialize_time_point(x)
exports.uint8 = x => serialize_uint(x, 1)
exports.uint16 = x => serialize_uint(x, 2)
exports.uint32 = x => serialize_uint(x, 4)
exports.uint64 = x => serialize_uint(x, 8)
exports.uint128 = x => serialize_uint(x, 16)
exports.varint32 = x => serialize_varint32(x)
exports.varuint32 = x => serialize_varuint32(x)
