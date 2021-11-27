
//it appears you need the path to file to read
//from the path, you also need the columns names
// of that file
// you also need the table name of that file

module.exports = {
  products: ['id', 'name', 'slogan', 'description', 'category', 'default_price'],
  photos: ['id', 'styleId', 'url', 'thumbnail_url'],
  features: ['id', 'productId', 'feature', 'value'],
  relatedproducts: ['id', 'current_product_id', 'related_product_id'],
  skus: ['id', 'styleId', 'size', 'quantity'],
  styles: ['id', 'productId', 'name', 'sale_price', 'original_price', 'default_style']
}


// client.query(query, datum)
//   .then(res => {
//     console.log(`Inserted ${i + 1} items!`);
//     if (updateQuery) {
//       let first = updateQuery === 'relatedProducts' ? 2 : 0;
//       let sanitizer = [`${datum[first]}`, `${datum[1]}`];
//       client.query(updateQuery, sanitizer)
//         .then(res => console.log(`Updated ${i + 1} items!`))
//         (err => console.error(err.stack))
//     }
//   })
//   .catch(err => console.error(err.stack));