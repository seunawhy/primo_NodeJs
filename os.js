/*
  Module Name: OS
  Description: the os module provides a set of utility methods for interacting with the operating system. It allows you to access various operating system-related information, 
  such as network interfaces, CPU architecture, memory, and more.
   It can be accessed with require('os').
 */

   const os = require('os');

// Get the platform (operating system)
console.log('Platform:', os.platform());

// Get the CPU architecture
console.log('Architecture:', os.arch());

// Get the number of available CPU cores
console.log('CPU Cores:', os.cpus().length);

// Get the total system memory in bytes
console.log('Total Memory:', os.totalmem());

// Get the free system memory in bytes
console.log('Free Memory:', os.freemem());

// Get network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:');
console.log(networkInterfaces);
  