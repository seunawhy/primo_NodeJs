/*
  Module Name: Zlib
  Description:  This provides functionality for compression and decompression using the zlib library.  
  
  It can be accessed with require('zlib').

 */

  const zlib = require('zlib');

const inputString = 'This is the input string that we want to compress';

// Compress the input string
zlib.deflate(inputString, (err, compressedData) => {
  if (err) {
    console.error('Compression error:', err);
    return;
  }

  console.log('Compressed data:', compressedData);

  // Decompress the compressed data
  zlib.inflate(compressedData, (err, decompressedData) => {
    if (err) {
      console.error('Decompression error:', err);
      return;
    }

    console.log('Decompressed data:', decompressedData.toString());
  });
});
