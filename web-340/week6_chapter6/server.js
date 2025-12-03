const http = require('http');
const url = require('url');

// TODO: Implement your server here
const http = require("http");
let character = null;

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/create-character") {
    const charClass = url.searchParams.get("class");
    const gender = url.searchParams.get("gender");
    const funFact = url.searchParams.get("funFact");

    character = { class: charClass, gender, funFact };

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Character created: ${charClass}, ${gender}, ${funFact}`);
  }

  else if (req.method === "POST" && url.pathname === "/confirm-character") {
    if (character) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Character confirmed!");
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("No character to confirm.");
    }
  }
   else if (req.method === "GET" && url.pathname === "/view-character") {
    if (character) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("No character found.");
    }
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server;

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;