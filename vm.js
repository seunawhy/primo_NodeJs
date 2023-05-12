/*
  Module Name: Vm
  Description: It provides an interface for running JavaScript code within a sandboxed environment. It allows you to execute 
  code dynamically and provides a way to isolate the code from the rest of your application.
  
  It can be accessed with require('vm').
 
 */
  const vm = require('vm');

  // Create a new context (sandbox)
  const context = vm.createContext({
    console: {
      log: message => {
        // Custom console.log implementation within the sandbox
        console.log('Sandboxed log:', message);
      }
    }
  });
  
  // JavaScript code to be executed within the sandbox
  const code = `
    console.log('Hello, world!');
  `;
  
  // Run the code within the sandboxed context
  vm.runInContext(code, context);