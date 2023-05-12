/*
  Module Name: Timers
  Description: this provides functions to schedule the execution of code in the future or at recurring intervals. 
  It offers several methods to handle time-related operations, such as setTimeout, setInterval, and setImmediate
  
  You do not need to load it using require() method.
  
 */
// Importing the timers module
const { setTimeout, setInterval, setImmediate } = require('timers');

// Example 1: setTimeout
console.log('Before setTimeout');

// Schedule a function to execute after 2 seconds
setTimeout(() => {
  console.log('Inside setTimeout');
}, 2000);

console.log('After setTimeout');

// Example 2: setInterval
let counter = 0;

// Execute a function every 1 second
const interval = setInterval(() => {
  console.log(`Interval ${counter}`);
  counter++;

  // Stop the interval after 5 executions
  if (counter === 5) {
    clearInterval(interval);
    console.log('Interval stopped');
  }
}, 1000);

// Example 3: setImmediate
console.log('Before setImmediate');

// Execute a function immediately after the current operation
setImmediate(() => {
  console.log('Inside setImmediate');
});

console.log('After setImmediate');



