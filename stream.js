/*
  Module Name: Stream	
  Description: module is a core module that provides an implementation of streaming data, 
  allowing you to efficiently process data in chunks as it is being read or written, 
  instead of loading the entire data into memory at once. 
  This is especially useful when dealing with large files or when handling data over networks.
  
  It can be accessed with require('stream').

 */
  const fs = require('fs');
  const { Readable, Writable } = require('stream');
  
  // Creating a readable stream
  const readableStream = new Readable({
    read(size) {
      // Pushing data into the stream
      this.push('Hello, ');
      this.push('world!');
      this.push(null); // Signaling the end of data
    }
  });
  
  // Creating a writable stream
  const writableStream = new Writable({
    write(chunk, encoding, callback) {
      // Writing data to the stream
      console.log(chunk.toString());
      callback();
    }
  });
  
  // Piping the readable stream to the writable stream
  readableStream.pipe(writableStream);