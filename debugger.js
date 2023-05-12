/*
  Module Name: Debugger
  Description:  provides a way to start a debugging session and interact with the debugger from within your code. It allows you to set breakpoints, 
  step through code, inspect variables, and perform other debugging operations. 
  To use this, start Node.js with the debug argument and for debugging add debugger; statement in your code.
 
 */

  const debug = require('debug')('myapp:server');
const http = require('http');

function debugMiddleware(req, res, next) {
  // Some custom logic
  debug('Received request:', req.method, req.url);

  next();
}

const server = http.createServer((req, res) => {
  debug('Processing request...');

  // Your code logic goes here

  res.end('Hello, World!');
});

server.listen(3000, () => {
  debug('Server listening on port 3000');
});