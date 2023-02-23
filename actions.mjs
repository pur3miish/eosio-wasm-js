import serialize_name from "./name.mjs";
import serialize_permission from "./permission.mjs";
import serialize_varuint32 from "./varuint32.mjs";

/**
 * Serializes EOSIO actions to a WASM hex string for mutating the state of a smart contract.
 * @name actions
 * @kind function
 * @param {Objext} arg Argument.
 * @param {string} arg.account The account name of the smart contract.
 * @param {string} arg.action The name of the action on the contract to interact with.
 * @param {Array<Authorization>} arg.authorization List of authorizations.
 * @param {string} arg.hex_data The hex string data to push to the contract.
 * @returns {sting} A hex string of the actions to
 * @ignore
 */
export function serialize_action({ account, action, authorization, hex_data }) {
  let hex_str = serialize_name(account) + serialize_name(action);
  if (authorization) {
    hex_str += serialize_varuint32(authorization.length);
    for (const perm of authorization) hex_str += serialize_permission(perm);
  }
  hex_str += serialize_varuint32(hex_data.length / 2) + hex_data;
  return hex_str;
}

/**
 * Serializes a list of EOSIO actions.
 * @kind function
 * @name serialize_actions
 * @param {actions} action_list List of actions to serialize.
 * @returns {string} Serialized actions.
 */
export function serialize_actions(action_list) {
  let hex_str = serialize_varuint32(action_list.length);
  for (const action of action_list) hex_str += serialize_action(action);
  return hex_str;
}
