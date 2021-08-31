// CS 55.13 Week 2 Assignment
// Professor Wilde
// Last edited: August 30, 2021

const http = require("http");

const fs = require('fs').promises;

const requestListener = function (req, res){
  console.log(req);
  if (req.url === "/") {
    fs.readFile(__dirname + "/pagesample.html")
      .then(contents => {
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });
    /*fs.readFile(__dirname + "/style.css")
      .then(contents => {
        res.setHeader("Content-Type", "text/css; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });*/

} else {
    fs.readFile(__dirname + "/top.json")
      .then(contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });
  
}
};

const myServer = http.createServer(requestListener);

const myHost = "0.0.0.0";
const myPort = "8080";

myServer.listen(
  myPort, myHost, () => {
    console.log(`My server is running on http://${myHost}:${myPort}`);
  }
);