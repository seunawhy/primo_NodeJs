/*
  Module Name: Buffer
  Description: It is used to perform operations on raw bytes of data which reside in memory. 
  It can be accessed with require('buffer').
 */

// Creating a buffer
const buffer = Buffer.alloc(8); // Allocating 8 bytes of memory

// Writing data to the buffer
buffer.writeUInt16BE(0x1234, 0); // Writing a 16-bit unsigned integer at index 0
buffer.writeUInt32BE(0x56789ABC, 2); // Writing a 32-bit unsigned integer at index 2

// Reading data from the buffer
const value1 = buffer.readUInt16BE(0); // Reading a 16-bit unsigned integer from index 0
const value2 = buffer.readUInt32BE(2); // Reading a 32-bit unsigned integer from index 2

console.log(value1.toString(16)); // Output: 1234
console.log(value2.toString(16)); // Output: 56789abc