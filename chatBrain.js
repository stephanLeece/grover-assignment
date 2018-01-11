const data = require('./data.json');

module.exports.sayHello = (query) => {
  let reply ='';
  data.products.forEach((product) => {

// chat queries. First attempts to match by productName, then brand, then type .

    if (product.productName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `The ${product.productName} for ${product.subscriptionPrice}. `;
    }


    else if (product.brand.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `The ${product.productName} for ${product.subscriptionPrice}. `;
    }

     else if (product.category.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `The ${product.productName} for ${product.subscriptionPrice}. `;
    }

  })

  if (reply) {
    return 'Currently we have ' + reply
  } else {
    return 'sorry, i don\'t understand.';
  }

}
