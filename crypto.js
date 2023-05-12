/*
  Module Name:  Crypto
  Description: It is used to support cryptography including methods for generating secure hashes, creating and verifying digital signatures, 
  encrypting and decrypting data, and more. It can be accessed with require('crypto').
    
 */

// Import the crypto module
const crypto = require('crypto');

// Define the data to be hashed
const data = 'Hello, world!';

// Create a hash object
const hash = crypto.createHash('sha256');

// Update the hash object with the data
hash.update(data);

// Generate the hash digest (result)
const hashDigest = hash.digest('hex');

// Output the hash digest
console.log('Hash:', hashDigest);