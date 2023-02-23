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
   "eosio-wasm-js": "https://deno.land/x/eosio_wasm_js"
  }
}
```

## Example

```js
import serialize from "eosio-wasm-js/serialize.mjs";

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

- [`actions.mjs`](actions.mjs)
- [`asset.mjs`](asset.mjs)
- [`block_time_stamp.mjs`](block_time_stamp.mjs)
- [`bool.mjs`](bool.mjs)
- [`bytes.mjs`](bytes.mjs)
- [`checksum.mjs`](checksum.mjs)
- [`extended_asset.mjs`](extended_asset.mjs)
- [`float32.mjs`](float32.mjs)
- [`float64.mjs`](float64.mjs)
- [`float128.mjs`](float128.mjs)
- [`int.mjs`](int.mjs)
- [`name.mjs`](name.mjs)
- [`public_key.mjs`](public_key.mjs)
- [`serialize.mjs`](serialize.mjs)
- [`signature.mjs`](signature.mjs)
- [`string.mjs`](string.mjs)
- [`symbol.mjs`](symbol.mjs)
- [`symbol_code.mjs`](symbol_code.mjs)
- [`time_point.mjs`](time_point.mjs)
- [`time_point_sec.mjs`](time_point_sec.mjs)
- [`uint.mjs`](uint.mjs)
- [`varint32.mjs`](varint32.mjs)
- [`varuint32.mjs`](varuint32.mjs)
- [`transaction_header.mjs`](transaction_header.mjs)
- [`permission.mjs`](permission.mjs)
