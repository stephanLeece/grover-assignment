const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const chatBrain = require('./chatBrain.js');










server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + `/public`));




server.get('/', function(req, res) {
    (res.sendFile('index.html'));
});


server.post("/chat", function(req, res) {
  console.log(req.body.userMessage);
  const reply = chatBrain.sayHello(req.body.userMessage)
res.send(reply);
  });






server.listen(8080, () => console.log('Listening'));
