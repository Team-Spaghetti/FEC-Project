const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 8080;
const {findPhotos, findSkus} = require('./helpers');

const {
  RelatedProducts,
  Products,
  Photos,
  Features,
  Styles,
  Skus
} = require('../etlMachinery/mongo/Models/models');

app.use(morgan('dev'))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const url = 'mongodb://localhost:27017/fec';

const mongoose = require('mongoose');
const connect = mongoose.connect(url);

connect
  .then(db => console.log('Connected!'))
  .catch(err => console.error(err))

//routes

// get products
app.get('/products', (req, res) => {
  Products
    .find({})
    .sort({'id': 1})
    .limit(10)
    .then(products => {
      // it appears you can't edit arguments or objects in node so had to map object to modify it
      let newProducts = JSON.parse(JSON.stringify(products));
      for (product of newProducts) {
        delete product._id;
        product.default_price = product.default_price.toString();
      }
      res.send(newProducts)
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
});

// // get a particular product
app.get('/products/:product_id', (req, res) => {
  let id = req.params.product_id;
  Products.findOne({id})
    .then(product => {
      let newProduct = JSON.parse(JSON.stringify(product));
      delete newProduct._id;
      newProduct.default_price = product.default_price.toString();
      Features.find({productId: id})
        .then(features => {
          let newFeats = JSON.parse(JSON.stringify(features));
          for (newFeat of newFeats) {
            delete newFeat._id;
            delete newFeat.id;
            delete newFeat.productId;
          }
          newProduct.features = newFeats;
          res.send(newProduct);
        })
        .catch(err => console.error('Features error', err))
    })
    .catch(err => console.error('Products error',err))
});

// // get styles for a particular product
// app.get('/products/:product_id/styles', (req, res) => {
//   let product_id = req.params.product_id
//   let response = {
//     product_id,
//   };
//   async function findStyles(product_id) {
//     Styles.find({product_id})
//       .then(styles => {
//         async function findStyle(styles) {
//           let newStyles = JSON.parse(JSON.stringify(styles));
//           for (style of newStyles) {
//             let styleId = style.id;
//             await findPhotos(styleId)
//               .then(newPhotos => style.photos = newPhotos)
//               .catch(err => {
//                 console.error(err);
//                 res.status(400).end()
//               })
//             await findSkus(styleId)
//               .then(newSkus => style.skus = newSkus)
//               .catch(err => {
//                 console.error(err);
//                 res.status(400).end()
//               })
//           }
//           response.results = push(newStyles);
//           res.send(response);
//         }
//         await(findStyle(styles));
//       })
//       .catch(err => console.error('Skus Error:', err))
//   }
// });

// // get related products for a particular product
app.get('/products/:product_id/related', (req, res) => {
  let current_product_id = req.params.product_id
  RelatedProducts
    .find({ current_product_id})
    .limit(10)
    .then(products => {
      let newProducts = products.map(product => product.related_product_id)
      res.send([...new Set(newProducts)]);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
 });


app.listen(port, () =>
  console.log(`server is running and listening on http://localhost:${port}`));
