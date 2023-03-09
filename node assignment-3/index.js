// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => { //function
//   fs.readFile('index.html', (err, data) => {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     res.end();
//   });
// });

// const port = 5000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// //ANOTHER CODE

const http = require('http');
const fs = require('fs');
const { generateKeyPair } = require('crypto');

const PORT = 5000;
const print = fs.readFile('./index.html', Renderinghtml)

function Renderinghtml(err, html) {  //focus
  if (err) {
    throw err
  } 
  else {
    const Server = http.createServer(function (request, response) {  //function
      //response.writeHeader(200,{"Content-Type": "text/html"});  
      response.write(html);
      response.end();
    })

    Server.listen(PORT, () => {
      console.log("http://localhost:5000/")
    });
  }

};

// Q: SIMPLE HTTP SERVER TO PRINT 

// ye error show kiya but browser par localhost:5000 dala tha output aa gya:

// C:\Users\pc\Desktop\Node js\node assignment -3>node index.js
// node:events:491
//       throw er; // Unhandled 'error' event
//       ^
// Error: listen EADDRINUSE: address already in use :::5000