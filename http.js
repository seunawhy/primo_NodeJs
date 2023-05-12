/*
  Module Name: HTTP
  Description: It is used to create Http server and Http client. 
    It can be accessed with require('http').
 */

// Server Example
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

// Client Example
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET'
};
    
const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`Response Body: ${data}`);
  });
});

req.on('error', (error) => {
  console.error(`Request Error: ${error}`);
});

req.end();