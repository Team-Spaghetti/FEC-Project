var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
var token = require('../config.js')
var products = require('./products&cart/products.js');
var cart = require('./products&cart/cart.js');

app.use(express.json());
app.use(cors());

app.use('/products', products);
app.use('/cart', cart);


var port = 3000;

app.listen(port, () =>
  {console.log(`server is running at http://localhost:${port}`)
});


