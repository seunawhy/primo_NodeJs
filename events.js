/*
  Module Name:  Events	
  Description: This is a core module that provides an event-driven architecture, allowing you to handle and emit events in your applications. 
  It provides a way for different parts of your code to communicate and react to specific events. 
  In node.js, events are emitted by other node objects. It can be accessed with require('events').

 */

// Import the events module
const EventEmitter = require('events');

// Create a new event emitter instance
const myEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = (message) => {
  console.log('Event occurred:', message);
};

// Register the event handler for a specific event
myEmitter.on('myEvent', eventHandler);

// Emit the event with a message
myEmitter.emit('myEvent', 'Hello, world!');