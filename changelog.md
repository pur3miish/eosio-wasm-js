# EOS WASM JS

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
