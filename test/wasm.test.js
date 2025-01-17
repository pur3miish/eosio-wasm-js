import { deepStrictEqual, rejects, strictEqual, throws } from "assert";
import { expect } from "chai";

import serialise_asset from "../asset.js";
import block_time_stamp from "../block_time_stamp.js";
import bool from "../bool.js";
import bytes from "../bytes.js";
import checksum from "../checksum.js";
import extended_asset from "../extended_asset.js";
import float32 from "../float32.js";
import float64 from "../float64.js";
import float128 from "../float128.js";
import integer from "../int.js";
import name from "../name.js";
import public_key from "../public_key.js";
import wasm from "../serialize.js";
import signature from "../signature.js";
import string from "../string.js";
import symbol from "../symbol.js";
import symbol_code from "../symbol_code.js";
import time_point from "../time_point.js";
import time_point_sec from "../time_point_sec.js";
import transaction_header from "../transaction_header.js";
import unsigned_integer from "../uint.js";
import varint32 from "../varint32.js";
import varuint32 from "../varuint32.js";

it("asset serialisation", () => {
  expect(wasm.asset("1.012345678901234560 EOS")).to.equal(
    "804bcf0408930c0e12454f5300000000"
  );
  expect(wasm.asset("10.12345678901234560 EOS")).to.equal(
    "804bcf0408930c0e11454f5300000000"
  );
  expect(serialise_asset("10123400 EOS")).to.equal(
    "88789a000000000000454f5300000000"
  );
  expect(serialise_asset("1 SYS")).to.equal("01000000000000000053595300000000");
  expect(serialise_asset("100.9999 EOS")).to.equal(
    "4f690f000000000004454f5300000000"
  );
  expect(serialise_asset("1 ABCDEFG")).to.equal(
    "01000000000000000041424344454647"
  );
  expect(serialise_asset("2.3 HIJKLMN")).to.equal(
    "17000000000000000148494a4b4c4d4e"
  );
  expect(serialise_asset("4.56 OPQRSTU")).to.equal(
    "c801000000000000024f505152535455"
  );
  expect(serialise_asset("7.890 VWXWZ")).to.equal(
    "d21e00000000000003565758575a0000"
  );
  throws(
    () => serialise_asset("1.1012345678901234560 EOS"),
    "Expected throws large integer overflow/max precision."
  );
  throws(
    () => serialise_asset("1 LARGERTHAN7"),
    "EXPECTED THROW >7 SYMBOL CHARS"
  );
  throws(() => serialise_asset("1"), "EXPECTED THROW MISSING SYMBOL.");
});

it("symbol serialisation", () => {
  strictEqual(
    wasm.symbol("4,VWXWZ"),
    "04565758575a0000",
    "Expected equality 1."
  );
  strictEqual(symbol("10,A"), "0a41000000000000", "Expected equality 2.");
  strictEqual(symbol("18,A"), "1241000000000000", "Expected equality 3.");
  strictEqual(symbol("0,A"), "0041000000000000", "Expected equality 4.");
  strictEqual(symbol("10,ABCDEFG"), "0a41424344454647", "Expected equality 5.");

  throws(() => symbol("qwe"), "Expected throw 1 - precision max.");
  throws(() => symbol("19,A"), "Expected throw 1 - precision max.");
  throws(
    () => symbol("5,ABCDEFGH"),
    "Expected throw 2 - Max length symbol string."
  );
});

it("integer serilisation", () => {
  strictEqual(wasm.int8(127), "7f");
  strictEqual(wasm.int16(127), "7f00");
  strictEqual(wasm.int32(127), "7f000000");
  strictEqual(wasm.int64(127), "7f00000000000000");
  strictEqual(wasm.int128(127), "7f000000000000000000000000000000");
  strictEqual(wasm.uint8(255), "ff");
  strictEqual(wasm.uint16(255), "ff00");
  strictEqual(wasm.uint32(255), "ff000000");
  strictEqual(wasm.uint64(255), "ff00000000000000");
  strictEqual(wasm.uint128(255), "ff000000000000000000000000000000");
  strictEqual(integer(127, 1), "7f");
  strictEqual(integer(0, 1), "00");
  strictEqual(integer(-1, 1), "ff");
  strictEqual(integer(-128, 1), "80");
  throws(() => integer(-129, 1));
  throws(() => integer(128, 1));
  strictEqual(unsigned_integer(0xffff, 2), "ffff");
  throws(() => unsigned_integer(-1, 1));
  throws(() => unsigned_integer(257, 1));
});

it("name serialisation", () => {
  strictEqual(wasm.name("eosio"), "0000000000ea3055", "expected equality 0");
  strictEqual(name("eosio"), "0000000000ea3055", "expected equality 0");
  strictEqual(name(""), "0000000000000000", "expected equality 1");

  strictEqual(name("eosio.token"), "00a6823403ea3055");
  strictEqual(name("rattusmcguee"), "a0946648629db3b9");
  strictEqual(name("4343kekistan"), "304dc60e2a38c820");
  strictEqual(name("a12345.ghisjj"), "ffb06b0c14324430");
  throws(
    () => name("abc123sd..wez"),
    "Expected throw - 13 character must be [a-j1-5.]"
  );
  throws(() => name("abc123sdW"), "Expected throw - uppercase");
  throws(() => name("abc123s8W"), "Expected throw - number > 5");
});
it("public key serialisation", async () => {
  strictEqual(
    await wasm.public_key(
      "PUB_R1_6FPFZqw5ahYrR9jD96yDbbDNTdKtNqRbze6oTDLntrsANgQKZu"
    ),
    "0102b323ea27d191143eb9ad27c96db15d8b129d3096a0cb17ae11ae26abce803340"
  );

  strictEqual(
    await wasm.public_key(
      "PUB_WA_323xpHU17pKZ6VsygcdXxq7cgosxSyRU5KGevyjUNtw4m9Y63EzPs3SEVpsf7rjeVLa7"
    ),
    "0202d2f1a8ab432274ba21081fe5e1601c379e0e41dba2740b3fdc7f5f43240b1944020b776562617574682e636f6d"
  );

  strictEqual(
    await wasm.public_key(
      "EOS518vvdSbDRUkPTXhMaGf2hNGN8RPvHGXdkr2YDsLPh81tDbg7D"
    ),
    await wasm.public_key(
      "PUB_K1_518vvdSbDRUkPTXhMaGf2hNGN8RPvHGXdkr2YDsLPh81sS6DGm"
    )
  );
  strictEqual(
    await wasm.public_key(
      "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
    ),
    "0002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf",
    "Expected output 1"
  );
  strictEqual(
    await public_key("EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"),
    "0002c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cf",
    "Expected output 1"
  );
  strictEqual(
    await public_key("EOS6hMLF2sPrxhu9SK4dJ9LaZimfzgfmP7uX1ahUPJUcUpS4p2G39"),
    "0002ee19f0d3ca1c117ce6e066d57fbb3b1bab6db917d60fc22d501d97857e01ef14",
    "Expected output 1"
  );

  rejects(
    async () =>
      public_key("6hMLF2sPrxhu9SK4dJ9LaZimfzgfmP7uX1ahUPJUcUpS4p2G39"),
    "Missing prefix"
  );
  rejects(
    async () =>
      public_key("EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5KK"),
    "Invalid checksum"
  );
});
it("varint32 serialisation", () => {
  strictEqual(wasm.varuint32(512), "8004", "Expected output 1");
  strictEqual(varuint32(512), "8004", "Expected output 1");
  strictEqual(varuint32(15), "0f", "Expected output 2");
  strictEqual(varuint32(255), "ff01", "Expected output 3");
  strictEqual(varuint32(512), "8004", "Expected output 4");
  strictEqual(varuint32(1024), "8008", "Expected output 5");
  strictEqual(varuint32(2055), "8710", "Expected output 6");
});
it("varuint32 serialisation", () => {
  strictEqual(wasm.varint32(-127), "fd01");
  strictEqual(varint32(-127), "fd01");
  strictEqual(varint32(-256), "ff03");
  strictEqual(varint32(256), "8004");
  strictEqual(varint32(127), "fe01");
  strictEqual(varint32(429496729), "b2e6cc9903");
});
it("boolean serialisation", () => {
  strictEqual(wasm.bool(1), "01");
  strictEqual(bool(true), "01");
  strictEqual(bool("true"), "01");
  strictEqual(bool(0), "00");
  strictEqual(bool(false), "00");
});
it("symbol code serialisation", () => {
  strictEqual(wasm.symbol_code("EOS"), "454f530000000000");
  strictEqual(symbol_code("EOS"), "454f530000000000");
  strictEqual(symbol_code("KEK"), "4b454b0000000000");
  strictEqual(symbol_code("ABCDEFG"), "4142434445464700");
  strictEqual(symbol_code("HIJKLMN"), "48494a4b4c4d4e00");
  strictEqual(symbol_code("OPQRSTU"), "4f50515253545500");
  strictEqual(symbol_code("UVWXYZ"), "55565758595a0000");
  strictEqual(symbol_code("Q"), "5100000000000000");
  throws(() => symbol_code("AAAAAAAA"));
  throws(() => symbol_code("4"));
  throws(() => symbol_code("a"));
});
it("String serialisation", () => {
  strictEqual(
    wasm.string("The quick brown fox jumps over the lazy dog."),
    "2c54686520717569636b2062726f776e20666f78206a756d7073206f76657220746865206c617a7920646f672e"
  );
  strictEqual(
    string("The quick brown fox jumps over the lazy dog."),
    "2c54686520717569636b2062726f776e20666f78206a756d7073206f76657220746865206c617a7920646f672e"
  );
  strictEqual(string(""), "00");
});
it("float serialisation", () => {
  strictEqual(wasm.float32(1.25), "0000a03f");
  strictEqual(wasm.float64(1111111.1111111), "edc6711c47f43041");
  strictEqual(float32(1.25), "0000a03f");
  strictEqual(float32(55.25123), "42015d42");
  strictEqual(float32(214748364), "cdcc4c4d");
  strictEqual(float32(2147483648), "0000004f");
  strictEqual(float32(0.00000000000000001), "aa773823");
  strictEqual(float32(0.0000000000000000999999999), "9595e624");
  strictEqual(float64(1111111.1111111), "edc6711c47f43041");
  strictEqual(
    wasm.float128("ff01203040506070890ffaa000000122"),
    "ff01203040506070890ffaa000000122"
  );
  strictEqual(
    float128("ff01203040506070890ffaa000000122"),
    "ff01203040506070890ffaa000000122"
  );
  throws(() => strictEqual(float128(10.8)));
  throws(() => strictEqual(float128("apple")));
});
it("Time point serialisation", () => {
  strictEqual(wasm.time_point("2021-03-01T11:15:49.170"), "50db73bd77bc0500");
  strictEqual(time_point("2021-03-01T11:15:49.170"), "50db73bd77bc0500");
  strictEqual(time_point("1970-01-01T00:00:00.000"), "0000000000000000");
  strictEqual(time_point("2000-01-01T11:15:49.170"), "501b23ac0a5d0300");
  throws(() => time_point("ASDAS"));
  strictEqual(wasm.time_point_sec("2000-01-01T11:15:49.170"), "e5e16d38");
  strictEqual(time_point_sec("2000-01-01T11:15:49.170"), "e5e16d38");
  strictEqual(time_point_sec("1970-01-01T00:00:00.000"), "00000000");
  strictEqual(time_point_sec("2021-03-01T11:15:49.170"), "e5cc3c60");
  strictEqual(wasm.block_timestamp_type("2021-03-01T11:15:49.170"), "ca129f4f");
  strictEqual(block_time_stamp("2021-03-01T12:26:42.147"), "04349f4f");
});
it("Checksum serialisation", () => {
  strictEqual(
    wasm.checksum160("ff"),
    "ff00000000000000000000000000000000000000"
  );
  strictEqual(checksum("ff", 20), "ff00000000000000000000000000000000000000");
  strictEqual(checksum("ff1f", 20), "ff1f000000000000000000000000000000000000");
  strictEqual(checksum("f", 20), "0f00000000000000000000000000000000000000");
  strictEqual(
    wasm.checksum256("f5f4f3e1a0"),
    "f5f4f3e1a0000000000000000000000000000000000000000000000000000000"
  );
  strictEqual(
    checksum("f5f4f3e1a0", 32),
    "f5f4f3e1a0000000000000000000000000000000000000000000000000000000"
  );
  strictEqual(
    checksum("f", 32),
    "0f00000000000000000000000000000000000000000000000000000000000000"
  );

  strictEqual(
    checksum("f5f4f3e1a0", 64),
    "f5f4f3e1a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  );
  strictEqual(
    wasm.checksum512("f5f4f3e1a0"),
    "f5f4f3e1a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  );
  throws(() =>
    strictEqual(checksum("ff1f0000000000000000000000000000000000009", 20))
  );
  throws(() => strictEqual(checksum("INVALID CHECKSUM", 20)));
});
it("Signature serialisation", async () => {
  strictEqual(
    await wasm.signature(
      "SIG_K1_K4jhCs4S3hVfXNhX4t6QSSGgdYTYNk6LhKTphcYoLH6EYatq3zvU38CNEj7VDtMmHWq24KhmR6CLBqyT5tFiFmXndthr7X"
    ),
    "001f4878b56b046993bc2936bfa0b2625d1da2aac56af84af4546124551d20c7153c1a6dd493be595f1fa143161a04f109170050bf66b882415be72115c0a6fa8d58",
    "Expected equality 1."
  );
  strictEqual(
    await signature(
      "SIG_K1_K4jhCs4S3hVfXNhX4t6QSSGgdYTYNk6LhKTphcYoLH6EYatq3zvU38CNEj7VDtMmHWq24KhmR6CLBqyT5tFiFmXndthr7X"
    ),
    "001f4878b56b046993bc2936bfa0b2625d1da2aac56af84af4546124551d20c7153c1a6dd493be595f1fa143161a04f109170050bf66b882415be72115c0a6fa8d58",
    "Expected equality 1."
  );
  rejects(async () => signature("NOT A VALID SIG"), "Expected reject 1.");
  rejects(
    async () =>
      signature(
        "SIG_K1_K4jhCs4S3hVfXNhX4t6QSSGgdYTYNk6LhKTphcYoLH6EYatq3zvU38CNEj7VDtMmHWq24KhmR6CLBqyT5tFiFmXndthDDD"
      ),
    "Expected reject 2."
  );
});
it("Bytes serialisation", () => {
  strictEqual(bytes("AAFF"), "02aaff");
  strictEqual(wasm.bytes("AAFF"), "02aaff");
  throws(() => bytes("AAFFGK"));
});

it("Extended asset", () => {
  strictEqual(
    wasm.extended_asset("1.0000 EOS@eosio.token"),
    "102700000000000004454f530000000000a6823403ea3055"
  );
  strictEqual(
    extended_asset("1.0000 EOS@eosio.token"),
    "102700000000000004454f530000000000a6823403ea3055"
  );
  strictEqual(
    extended_asset("40 KEKS@lexluthor"),
    "2800000000000000004b454b530000000000b8b4651dbb8a"
  );
  throws(() => extended_asset("40 KEKS"));
});

it("Serialize actions", () => {
  const actions = [
    {
      account: "nutrijournal",
      action: "login",
      authorization: [
        {
          actor: "nutrijournal",
          permission: "owner",
        },
      ],
      hex_data: "10CDBC9A3E77B39E".toLowerCase(),
    },
    {
      account: "eosio.token",
      action: "transfer",
      authorization: [
        {
          actor: "nutrijournal",
          permission: "owner",
        },
        {
          actor: "relockeblock",
          permission: "active",
        },
      ],
      hex_data:
        "10CDBC9A3E77B39E00118D474144A3BA010000000000000004454F530000000000".toLowerCase(),
    },
  ];

  deepStrictEqual(
    wasm.actions(actions),
    "0210cdbc9a3e77b39e0000000080e9188d0110cdbc9a3e77b39e0000000080ab26a70810cdbc9a3e77b39e00a6823403ea3055000000572d3ccdcd0210cdbc9a3e77b39e0000000080ab26a700118d474144a3ba00000000a8ed32322110cdbc9a3e77b39e00118d474144a3ba010000000000000004454f530000000000",
    "Serialized actions"
  );
});

it("Serializee transaction header", () => {
  const Transaction_header_object = {
    expiration: 1670089081,
    ref_block_num: 42562,
    ref_block_prefix: 2492874965,
    max_net_usage_words: 0,
    max_cpu_usage_ms: 0,
    delay_sec: 0,
  };

  deepStrictEqual(
    transaction_header(Transaction_header_object),
    "79898b6342a6d5409694000000",
    "Transaction header"
  );

  deepStrictEqual(
    transaction_header({
      expiration: 1670096442,
      ref_block_num: 57208,
      ref_block_prefix: 1939363295,
      max_net_usage_words: 400,
      max_cpu_usage_ms: 33,
      delay_sec: 56,
    }),
    "3aa68b6378dfdf55987390032138",
    "Transaction header 2"
  );
});
