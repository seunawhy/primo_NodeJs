/*
Module Name: Child Process	

Description: It is used by node.js for managing child processes. 
It can be accessed with It can be accessed with require('child_process').
*/

const { spawn } = require('child_process');

// Spawn a child process
const childProcess = spawn('ls', ['-lh', '/path/to/directory']);

// Listen for data events from the child process stdout
childProcess.stdout.on('data', (data) => {
  console.log(`Child process stdout: ${data}`);
});

// Listen for data events from the child process stderr
childProcess.stderr.on('data', (data) => {
  console.error(`Child process stderr: ${data}`);
});

// Listen for the child process to exit
childProcess.on('exit', (code, signal) => {
  console.log(`Child process exited with code ${code} and signal ${signal}`);
});

// You can also send data to the child process stdin
childProcess.stdin.write('Some data to send to child process');
childProcess.stdin.end();