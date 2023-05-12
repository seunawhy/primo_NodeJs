/*
  Module Name: Path
  Description: This provides a set of utility functions for working with file and directory paths. It is a core module that comes pre-installed with Node.js, so you can use it without any additional installations.
  It can be accessed with require('path').

  
 */
  const path = require('path');

  // Example 1: Joining file paths
  const dirPath = '/path/to/directory';
  const filePath = 'file.txt';
  
  const fullPath = path.join(dirPath, filePath);
  console.log(fullPath);
  // Output: /path/to/directory/file.txt
  
