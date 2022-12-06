# eosio-wasm-js

A utility tool that serialises EOSIO based blockchain types to a WASM hex string.

This tool may be useful for those wanting to serialise actions in JS environments for EOSIO based blockchain actions.

# Setup

```shell
$ npm i eosio-wasm-js
```

# Support

- [Node.js](https://nodejs.org/en/) `>= 13`
- [Browser list](https://github.com/browserslist/browserslist) `> 0.5%, not OperaMini all, not IE > 0, not dead`

Consider a [BigInt](https://caniuse.com/?search=bigint) polyfill library for safari 13.

# API

- [Object serialize](#object-serialize)
- [function serialize_actions](#function-serialize_actions)

## Object serialize

The core object that contains all the EOSIO based types to serialize.

### Examples

_Ways to `require`._

> ```js
> const serialize = require('eosio-wasm-js')
> ```

_Ways to `import`._

> ```js
> import serialize from 'eosio-wasm-js'
> ```

_Serialize EOSIO name type._

> ```js
> serialize_name('eosio')
> ```
>
> The logged output was 0000000000ea3055

---

## function serialize_actions

Serializes a list of EOSIO actions.

| Parameter     | Type    | Description                   |
| :------------ | :------ | :---------------------------- |
| `action_list` | actions | List of actions to serialize. |

**Returns:** string — Serialized actions.
