import { serialize_actions } from './actions.mjs'
import serialize_asset from './asset.mjs'
import serialize_block_timestamp_type from './block_time_stamp.mjs'
import serialize_bool from './bool.mjs'
import serialize_bytes from './bytes.mjs'
import serialize_checksum from './checksum.mjs'
import serialize_extended_asset from './extended_asset.mjs'
import serialize_float128 from './float128.mjs'
import serialize_float32 from './float32.mjs'
import serialize_float64 from './float64.mjs'
import serialize_int from './int.mjs'
import serialize_name from './name.mjs'
import serialize_public_key from './public_key.mjs'
import serialize_signature from './signature.mjs'
import serialize_string from './string.mjs'
import serialize_symbol from './symbol.mjs'
import serialize_symbol_code from './symbol_code.mjs'
import serialize_time_point from './time_point.mjs'
import serialize_time_point_sec from './time_point_sec.mjs'
import serialize_uint from './uint.mjs'
import serialize_varint32 from './varint32.mjs'
import serialize_varuint32 from './varuint32.mjs'

export default {
  actions: x => serialize_actions(x),
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
