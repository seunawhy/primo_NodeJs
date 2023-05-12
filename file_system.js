/*
  Module Name: File System
  Description: the File System module (fs) is a built-in module that provides various methods for interacting with the file system. It allows you to read from and write to files, 
  create and delete files and directories, and perform other file-related operations.
  It can be accessed with require('fs').
 
 */

  const fs = require('fs');

// Read from a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File content:', data);
});

// Write to a file
const content = 'Hello, world!';
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File has been written successfully.');
});

// Create a directory
fs.mkdir('example-dir', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Directory has been created successfully.');
});

// Delete a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File has been deleted successfully.');
});