/*
  Module Name:  DNS	
  Description: The dns module provides functions for working with DNS (Domain Name System) operations. 
  It allows you to perform DNS lookups, resolve domain names, and perform other DNS-related tasks. 
  It can be accessed with require('dns').
 
 */

  const dns = require('dns');

// Resolving a domain name to an IP address
dns.resolve4('www.example.com', (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('IP addresses:', addresses);
});

// Performing a reverse DNS lookup for an IP address
dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Hostnames:', hostnames);
});

// Resolving a domain name to an IP address synchronously
try {
  const addresses = dns.resolve4Sync('www.example.com');
  console.log('IP addresses (sync):', addresses);
} catch (err) {
  console.error(err);
}