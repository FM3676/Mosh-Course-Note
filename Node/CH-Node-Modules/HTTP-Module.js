const http = require("http");

const server = http.createServer();

server.on("connection", (socket) => {
  console.log("New connection...");
});

server.listen(3000);

console.log("Listening on port 3000....");

// Now we run the code, and visit localhost:3000, see what it happens

// In real application, we're not going to response to the 'connection' event to build an
// http service. It's very low level. So let's do like this...

const newServer = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello World");
    response.end();
    // Run and visit localhost:3000
  }

  if (request.url === "/api/courses") {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
    // Run and visit localhost:3000/api/courses
  }
});

newServer.listen(3000);

console.log("Listening on port 3000....");
