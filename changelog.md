# EOSIO WASM JS

## v5.0.2

- exports file .js.

## v5.0.1

- Dependencies updates.

## v5.0.0

### Major

- ESM modules/ no longer using the .mjs extension.
- Test suite changed to moch/chai.

## v4.1.1

### Patch

- Fixed byte serialisation bug, hex codes are two chars long for one byte, fix the leb128 encoding.

## v4.1.0

- Added serailisation for public keys R1, K1 and WA and legacy.

## v4.0.1

### Patch

- Fixes added to package.json exports (missing file extenstions) and removed main field.

## v4.0.0

### Major

- Renamed index.js to [serialize.js](./serialize.js)

### Patch

- Added Deno support.

## v3.0.1

### Patch

- Exports bug fixed in [package.json](/package.json)

## v3.0.0

### Major

- Package is now ESM from CJS.
- Serialize action data argument is now called serialize [hex_data](/actions.js).

## v2.1.1

### Patch

- Range error for asset type changed to include magnitude size.

## V2.1.0

### Minor

- Added serialisation support for eosio `action(s)` and `permission(s)`, `transaction_header`.

### Patch

- Bug fix, uint serialization was using Buffers, which are unsupported in browsers.
- Dependency updates.
- Closed [BigInt](https://github.com/amilajack/eslint-plugin-compat/issues/457) compat issues.

## V2.0.0

- Dependencies are now peer dependencies

## V1.0.0

- Initial release.
