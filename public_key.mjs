import base58_to_binary from "base58-js/base58_to_binary.mjs";
import ripemd160 from "ripemd160-js/ripemd160.mjs";
/**
 * Serilaises Antelope public keys to WASM hex string.
 * @name public_key
 * @kind function
 * @param {string} AntelopePub Antelope public key,
 * @returns {Promise} Resolves to a hex string if valid WIF key is supplied.
 * @ignore
 */
async function public_key(AntelopePub) {
  const K1_type = "00";
  const R1_type = "01";
  const WA_type = "02";

  const slice = AntelopePub.startsWith("EOS") ? 3 : 7;
  let type;
  let keyNonce = [];

  if (AntelopePub.startsWith("EOS")) type = K1_type;
  else if (AntelopePub.startsWith("PUB_K1_")) {
    type = K1_type;
    keyNonce = [75, 49];
  } else if (AntelopePub.startsWith("PUB_R1_")) {
    type = R1_type;
    keyNonce = [82, 49];
  } else if (AntelopePub.startsWith("PUB_WA_")) {
    type = WA_type;
    keyNonce = [87, 65];
  } else throw new Error("Public key type is not supported");

  const decoded_key = base58_to_binary(AntelopePub.slice(slice));

  const checksum = decoded_key.slice(-4);
  const raw_key = decoded_key.slice(0, -4);
  const hash_of_key = await ripemd160(
    Uint8Array.from([...raw_key, ...keyNonce])
  );

  checksum.forEach((i, x) => {
    if (i != hash_of_key[x]) throw new Error("Invalid public key checksum.");
  });

  const hex_key = Array.from(raw_key).reduce(
    (acc, x) => (acc += x.toString("16").padStart(2, "00")),
    type
  );

  return hex_key;
}

export default public_key;
