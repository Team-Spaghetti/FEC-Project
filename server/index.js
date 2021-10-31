var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');

var questions = require('./QuestionsAndAnswers/questions');
var answers = require('./QuestionsAndAnswers/answers');
var reviews = require('./reviews.js');
var products = require('./products&cart/products.js');
var cart = require('./products&cart/cart.js');

app.use(express.json());
app.use(cors());

app.use('/qa/questions', questions);
app.use('/qa/answers', answers);
app.use('/reviews', reviews);
app.use('/products', products);
app.use('/cart', cart);

var port = 3000;

app.listen(port, () =>
  {console.log(`server is running and listening on http://localhost:${port}`)
});
