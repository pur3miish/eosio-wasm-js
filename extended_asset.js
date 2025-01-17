import asset from "./asset.js";
import name from "./name.js";

/**
 * Serialises an extended asset to WASM hex string.
 * @param {string} ea_string Extended asset string.
 * @returns {string} Wasm hex string.
 */
function extended_asset(ea_string) {
  const [quant, contract] = ea_string.split("@");
  if (!quant || !contract)
    throw new Error("Invalid extended asset string, expected “asset@account”.");

  return asset(quant) + name(contract);
}

export default extended_asset;
