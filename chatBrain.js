const data = require('./data.json');
// takes user message as input. First attempts to match to data.json records by productName, then brand, then type.
/*  ideA: record previous brand/category search reulsts. On subsequent brand/category searches, return products that match that
parameter e.g search for apple, next search for wearables only returns apple wearables */
module.exports.replyToUser = (query) => {
  var queryRegEx = new RegExp(query, 'i');
  let FilteredProductResults = [];
  let reply = '';
  let specificNameMatched = false;
  data.products.forEach((product) => {


    let nameWithBrand = `${product.brand} ${product.productName}`

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

    else if (nameWithBrand.match(queryRegEx)) {
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
