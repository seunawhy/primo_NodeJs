/*
  Module Name: Url
  Description: The url module in Node.js provides utilities for URL parsing and formatting. 
  
  It can be accessed with require('url').

 */

  const url = require('url');

const urlString = 'https://www.example.com/search?q=nodejs&page=1';

// Parse the URL string
const parsedUrl = new URL(urlString);

console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Path:', parsedUrl.pathname);
console.log('Query:', parsedUrl.searchParams.get('q'));
console.log('Page:', parsedUrl.searchParams.get('page'));