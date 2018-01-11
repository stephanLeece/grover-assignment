const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const chatBrain = require('./chatBrain.js');
const fs = require("fs");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + `/public`));

server.get('/', function(req, res) {
  (res.sendFile('index.html'));
});

// append users message to records.json, then call replyToUser, append bots message to records.json.
server.post("/chat", function(req, res) {
  console.log(req.body.userMessage);
  fs.appendFileSync(__dirname + '/records.json', `user: ${req.body.userMessage}\n`, "UTF-8");
  const reply = chatBrain.replyToUser(req.body.userMessage);
  fs.appendFileSync(__dirname + '/records.json', `grobot: ${reply}\n`, "UTF-8");
  res.send(reply)
});

server.listen(8080, () => console.log('Listening'));
