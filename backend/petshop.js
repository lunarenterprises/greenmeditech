var express = require("express");
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
var http = require('http')
var https = require('https')
const fs = require('fs');
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.use(bodyparser.json());
app.use(cors());
app.use(express.static('./'));
app.all("/*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

var privateKey = fs.readFileSync('/etc/ssl/private.key', 'utf8').toString();

var certificate = fs.readFileSync('/etc/ssl/certificate.crt', 'utf8').toString();

var ca = fs.readFileSync('/etc/ssl/ca_bundle.crt').toString();

var options = { key: privateKey, cert: certificate, ca: ca };

//var server = http.createServer(app);
var server = https.createServer(options, app);

var io = require("socket.io")(server, {
  maxHttpBufferSize: 10e7,
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

var mainRoute = require("./router");
app.use("/petshop",mainRoute);

// global.myVar = io;

// require('./sockets/wish/wishcount')(io);

server.listen(5007, () => {
  console.log("server running on port 5007");
});
