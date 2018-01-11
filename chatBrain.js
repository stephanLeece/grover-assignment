const data = require('./data.json');


// takes user message as input. First attempts to match to data.json records by productName, then brand, then type.

module.exports.replyToUser = (query) => {
  let reply ='';
  data.products.forEach((product) => {



    if (product.productName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }


    else if (product.brand.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

     else if (product.category.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

  })

  if (reply) {
    return 'Currently available: ' + reply
  } else {
    return 'Sorry, i don\'t understand.';
  }

}
