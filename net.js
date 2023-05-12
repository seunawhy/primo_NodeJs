/*
  Module Name: Net
  Description: This is used to create both servers and clients for TCP (Transmission Control Protocol) connections. 
  It provides an asynchronous network API for creating stream-based TCP or IPC (Inter-Process Communication) servers and clients. 
*/

const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Handle incoming data from clients
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    // Process the data or perform any necessary operations

    // Send a response back to the client
    socket.write('Message received by the server.');
  });

  // Handle client disconnection
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server and listen on a specific port
const port = 3000;
server.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});