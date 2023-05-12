/*
  Module Name: Query String
  Description: The querystring module is used to parse and manipulate query strings. 
  It provides methods for encoding and decoding URL query strings
  It is used to deal with query strings.
 */
  const querystring = require('querystring');

  // Parsing a query string
  const queryString = 'name=John&age=30&city=New+York';
  const parsedQuery = querystring.parse(queryString);
  console.log(parsedQuery);
  // Output: { name: 'John', age: '30', city: 'New York' }
  
  // Creating a query string
  const objectToQueryString = { name: 'John', age: 30, city: 'New York' };
  const createdQuery = querystring.stringify(objectToQueryString);
  console.log(createdQuery);
  // Output: 'name=John&age=30&city=New%20York'
  
  // Encoding and decoding query strings
  const encodedValue = querystring.escape('This is a test');
  console.log(encodedValue);
  // Output: 'This%20is%20a%20test'
  
  const decodedValue = querystring.unescape('This%20is%20a%20test');
  console.log(decodedValue);
  // Output: 'This is a test'