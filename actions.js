'use strict'

const serialize_name = require('./name.js')
const serialize_permission = require('./permission.js')
const serialize_varuint32 = require('./varuint32.js')

/**
 * Serializes EOSIO actions to a WASM hex string for mutating the state of a smart contract.
 * @name actions
 * @kind function
 * @param {Objext} arg Argument.
 * @param {string} arg.account The account name of the smart contract.
 * @param {string} arg.action The name of the action on the contract to interact with.
 * @param {Array<Authorization>} arg.authorization List of authorizations.
 * @param {string} arg.data The hex string data to push to the contract.
 * @returns {sting} A hex string of the actions to
 * @ignore
 */
function serialize_action({ account, action, authorization, data }) {
  let hex_str = serialize_name(account) + serialize_name(action)
  if (authorization) {
    hex_str += serialize_varuint32(authorization.length)
    for (const perm of authorization) hex_str += serialize_permission(perm)
  }
  hex_str += serialize_varuint32(data.length / 2) + data
  return hex_str
}

/**
 * Serializes a list of EOSIO actions.
 * @kind function
 * @name serialize_actions
 * @param {actions} action_list List of actions to serialize.
 * @returns {string} Serialized actions.
 */
function serialize_actions(action_list) {
  let hex_str = serialize_varuint32(action_list.length)
  for (const action of action_list) hex_str += serialize_action(action)
  return hex_str
}

module.exports = { serialize_action, serialize_actions }
