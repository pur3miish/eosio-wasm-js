# eosio wasm js

eosio-wasm-js is a tool that converts EOSIO blockchain types into a WASM hex string, making it handy for serializing actions in JS environments for EOSIO transactions.

## Installation

For Node.js

```shell
$ npm i eosio-wasm-js
```

For Deno, make sure you include this import in your `deno.json` file:

```JSON
{
  "imports": {
   "eosio-wasm-js/": "https://deno.land/x/eosio_wasm_js/"
  }
}
```

## Example

```js
import serialize from "eosio-wasm-js/serialize.js";

console.log(serialize.asset("EOS"));
```

> The logged output was “000000000000000001454f5300000000”.

## Support

- [Node.js](https://nodejs.org/en/) `>= 13`.
- [Browser list](https://github.com/browserslist/browserslist) `> 0.5%, not OperaMini all, not IE > 0, not dead`.
- [Deno.js](https://deno.land) Version `^1.30.0`.

Consider a [BigInt](https://caniuse.com/?search=bigint) polyfill library for safari 13.

## Exports

The [npm](https://npmjs.com) package [`eosio-wasm-js`](https://npm.im/eosio-wasm-js) features [optimal JavaScript module design](https://jaydenseric.com/blog/optimal-javascript-module-design). It doesn’t have a main index module, so use deep imports from the ECMAScript modules that are exported via the [`package.json`](./package.json) field [`exports`](https://nodejs.org/api/packages.html#exports):

- [`actions.js`](actions.js)
- [`asset.js`](asset.js)
- [`block_time_stamp.js`](block_time_stamp.js)
- [`bool.js`](bool.js)
- [`bytes.js`](bytes.js)
- [`checksum.js`](checksum.js)
- [`extended_asset.js`](extended_asset.js)
- [`float32.js`](float32.js)
- [`float64.js`](float64.js)
- [`float128.js`](float128.js)
- [`int.js`](int.js)
- [`name.js`](name.js)
- [`public_key.js`](public_key.js)
- [`serialize.js`](serialize.js)
- [`signature.js`](signature.js)
- [`string.js`](string.js)
- [`symbol.js`](symbol.js)
- [`symbol_code.js`](symbol_code.js)
- [`time_point.js`](time_point.js)
- [`time_point_sec.js`](time_point_sec.js)
- [`uint.js`](uint.js)
- [`varint32.js`](varint32.js)
- [`varuint32.js`](varuint32.js)
- [`transaction_header.js`](transaction_header.js)
- [`permission.js`](permission.js)
