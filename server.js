const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const apiai = require('apiai');
const botChat = apiai('4c6b4f2cd5dc4e87b871026a524c5b08');







server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + `/public`));




server.get('/', function(req, res) {
    (res.sendFile('index.html'));
});


server.post("/chat", function(request, response) {
  console.log(request.body);
  var request = botChat.textRequest(request.body.userMessage, {
      sessionId: '1'
  });

  request.on('response', function(reply) {
      response.send(reply.result.fulfillment.speech);
  });

  request.on('error', function(error) {
      console.log(error);
  });

  request.end();


  });




server.listen(8080, () => console.log('Listening'));
