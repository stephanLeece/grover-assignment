const data = require('./data.json');

module.exports.sayHello = (query) => {
  console.log('hello from the chatBrain');
  let reply;
  if (query.contains("iphone")) {
    reply = 'iphone'
  }




  return reply;
}
