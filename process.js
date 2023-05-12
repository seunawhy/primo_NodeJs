/*
  Module Name: Process
  Description:  module provides information and control over the current Node.js process. 
  It allows you to access various properties and methods related to the process, 
  such as command-line arguments, environment variables, and process termination. 
  You do not need to load it using require() method.
 */

  // Accessing command-line arguments
console.log('Command-line arguments:', process.argv);

// Accessing environment variables
console.log('Environment variables:', process.env);

// Terminating the process
setTimeout(() => {
  console.log('Exiting...');
  process.exit(0);
}, 5000);