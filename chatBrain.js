const data = require('./data.json');
// takes user message as input. First attempts to match to data.json records by productName, then brand, then type.

module.exports.replyToUser = (query) => {
  var queryRegEx = new RegExp( query, 'i' );

  let reply ='';
  data.products.forEach((product) => {

    // match brand + productName in case user types 'samsung galaxy' for example.
    let nameWithBrand = `${product.brand} ${product.productName}`

    if(product.productName.match(queryRegEx)) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

    else if (nameWithBrand.match(queryRegEx)) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

    else if (product.brand.match(queryRegEx)) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

     else if (product.category.match(queryRegEx)) {
        reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
    }

  })

  if (reply) {
    return 'Currently available: ' + reply
  } else {
    return 'Sorry, i don\'t understand.';
  }

}
