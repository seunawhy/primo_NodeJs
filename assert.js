/*
  Module Name: Assert
  Description: Assert	It is used by Node.js for testing itself. It can be accessed with require('assert').
 */

const assert = require('assert');

function add(a, b) {
  return a + b;
}

// Simple assertion to check if the result of add(2, 3) is equal to 5
assert.strictEqual(add(2, 3), 5);

// Assertion with a custom error message
assert.strictEqual(add(2, 3), 5, 'The result of add(2, 3) should be 5');

// Assertion that expects an error to be thrown
assert.throws(() => {
  throw new Error('This is an error');
}, Error);