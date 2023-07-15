const router = require("./routes/index");
const express = require("express");
const bodyParser = require("body-parser")
const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(function (req, res){
  res.setHeader("Content-Type","text/plain")
  res.write("you posted:\n")
  res.end(JSON.stringify(req.body, null, 2))
})

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
// server.use(express.json());
server.use("/rickandmorty", router);
module.exports = server;

