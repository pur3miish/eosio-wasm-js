import serialize_name from "./name.mjs";

/**
 * Serializes EOS permission.
 * @param {object} arg Argument.
 * @param {string} arg.actor Name of the account to authorize the transaction.
 * @param {string} arg.permission Name of the permission.
 * @returns {string} Hex string for the serialized persmission.
 */
function serialize_permission({ actor, permission }) {
  return serialize_name(actor) + serialize_name(permission);
}

export default serialize_permission;
