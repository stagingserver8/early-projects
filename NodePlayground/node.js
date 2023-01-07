const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // If there was an error reading the file, send an error response
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end(err);
      
    } else {
      // If the file was read successfully, send the contents as the response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
    
  });
  }).listen(4041);


  console.log("hello");
  


