const data = require('./data.json');
// takes user message as input. First attempts to match to data.json records by productName, then brand, then type.

module.exports.replyToUser = (query) => {
  var queryRegEx = new RegExp(query, 'i');
  let FilteredProductResults = [];
  let reply = '';
  let specificNameMatched = false;
  data.products.forEach((product) => {


    let brandWithName = `${product.brand} ${product.productName}`
    let brandWithCategory = `${product.brand} ${product.category}`

    if (product.productName.match(queryRegEx)) {
      reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
      if (!specificNameMatched) {
          reply = 'Currently available: ' + reply
          specificNameMatched = true;
      }
    }

    else if (product.brand.match(queryRegEx)) {
      if (FilteredProductResults.indexOf(product.category) == -1) {
        FilteredProductResults.push(product.category);
      }
      reply = `OK, for ${product.brand} we have the following categories: ` +
      FilteredProductResults.join(', ') + '.'
    }

    else if (product.category.match(queryRegEx)) {
      if (FilteredProductResults.indexOf(product.brand) == -1) {
        FilteredProductResults.push(product.brand);
      }
      reply = `OK, for ${product.category} we have the following brands: `
      + FilteredProductResults.join(', ') + '.'
    }

// match brand with name (e.g apple iphone 7)
    else if (brandWithName.match(queryRegEx)) {
      reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
      if (!specificNameMatched) {
          reply = 'Currently available: ' + reply
          specificNameMatched = true;
      }
    }

  // match brand with category (e.g apple wearables)
    else if (brandWithCategory.match(queryRegEx)) {
      reply += `<p>${product.productName} for ${product.subscriptionPrice}.<p>`;
      if (!specificNameMatched) {
          reply = 'Currently available: ' + reply
          specificNameMatched = true;
      }
    }

  })

  if (reply) {
    return reply
  } else {
    return 'Sorry, i\'m having trouble finding that!';
  }

}
