
/*
  Module Name: Cluster	

  Description: This module is used by Node.js  for creating scalable network applications and  to take advantage of multi-core systems, 
  so that it can handle more load. It can be accessed with require('cluster').

 */

  const cluster = require('cluster');
  const http = require('http');
  const numCPUs = require('os').cpus().length;
  
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
  } else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('Hello from worker!');
    }).listen(8000);
  
    console.log(`Worker ${process.pid} started`);
  }

