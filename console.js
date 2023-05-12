/*
  Module Name: Console
  Description: It is used to write data to console. Node.js has a Console object which contains functions to write data to console. It can be accessed with require('console').

  
 */
// Import the console module
const console = require('console');

// Log a simple message
console.log('Hello, world!');

// Log an error message
console.error('Something went wrong!');

// Log an object
const person = {
    name: 'John Doe',
    age: 30,
  };
  console.log(person);