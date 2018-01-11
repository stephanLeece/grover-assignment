const data = require('./data.json');

module.exports.sayHello = (query) => {
  console.log('hello from the chatBrain');
  let reply;
  // conditions for apple products
  if (query.match(/^.*iPhone 7 Plus.*$/i)) {
    reply = 'iphone 7 plus'
  } else if (query.match(/^.*iPhone 7.*$/i)) {
      reply = 'iphone 7'
  } else if (query.match(/^.*iPhone.*$/i)) {
      reply = 'iphone'
  }

  // conditions for brands
  else if (query.match(/^.*apple.*$/i)) {
      reply = 'apple'
  } else if (query.match(/^.*Samsung.*$/i)) {
      reply = 'Samsung'
  } else if (query.match(/^.*Parrot.*$/i)) {
      reply = 'Parrot'
  } else if (query.match(/^.*HTC.*$/i)) {
      reply = 'HTC'
  }  else if (query.match(/^.*Occulus.*$/i)) {
      reply = 'Occulus'
  }  else if (query.match(/^.*Microsoft.*$/i)) {
      reply = 'Microsoft'
  }

// conditions for type
else if (query.match(/^.*phone.*$/i)) {
    reply = 'phone'
} else if (query.match(/^.*tablet.*$/i)) {
    reply = 'tablet'
} else if (query.match(/^.*drone.*$/i)) {
    reply = 'drone'
} else if (query.match(/^.*vr.*$/i)) {
    reply = 'vr'
}  else if (query.match(/^.*Wearables.*$/i)) {
    reply = 'Wearables'
}  else if (query.match(/^.*computing.*$/i)) {
    reply = 'computing'
}

// default
 else {
   reply = 'not sure';
 }
  return reply;
}
