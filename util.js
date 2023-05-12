/*
  Module Name: Util	

  Description:  the util module provides various utility functions that can be used for debugging, 
  formatting, and other miscellaneous tasks. 
  One of the commonly used functions from this module is util.format() which is used for string formatting.
  
  It is also useful for debugging. It can be accessed with require('util').
 */
  const util = require('util');

  const name = 'John';
  const age = 30;
  const message = util.format('My name is %s and I am %d years old.', name, age);
  
  console.log(message);