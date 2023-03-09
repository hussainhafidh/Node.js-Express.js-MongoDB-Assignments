var http = require("http");

const PORT = 8081;
const hostname = 'localhost'
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    const url = req.url
    if (url === '/welcome') {
        res.statusCode = 201;
        res.end("Welcome to Dominos!");
    }
    else if (url === "/contact") {
        res.statusCode = 200;
        res.end(
            {
                phone: "18602100000",
                email: "guestcaredominos@jublfood.com",
            }
        );
    } else {
        res.statusCode = 404;
        res.end(`Error 404 Page Not Found!!`);
    }
}
httpServer.listen(PORT, hostname, () => {
    console.log(`server is running on http://${hostname}:${PORT}`);
})
//for output
// type in browser
// http://localhost:8081/welcome


//---------------------------another code

// var http = require("http");
// const url = require("url");

// const httpServer = http.createServer(handleServer);
// const Port = 8081;

// function handleServer(req, res) {
//   const Url = url.parse(req.url, true);
//   const path = Url.pathname;
//   const delpath = path.replace(/^\/+|\/+$/g, "");
//   if (delpath === "welcome") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to Dominos!");
//   }
//   else if (delpath === "contact") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(`{  
//         phone: '18602100000', 
//   	    email: 'guestcaredominos@jublfood.com' 
//     }`)
//   }
//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("error 404")
//   }
// }

// httpServer.listen(Port, () => {
//   console.log(`The server running on ${Port}`)
// })

// module.exports = httpServer;

//--------------------------------------------------
//Q ; create server with two endpoints welcome and contact.
// another Q: Can u create another endpoint home and connect that to contact
 
// for output
// node index.js
// type in browser
// http://localhost:8081/welcome