var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
var path = require('path');

app.use(express.static(__dirname + '/../dist'))
app.use(express.json());
app.use(cors());

var questions = require('./QuestionsAndAnswers/questions');
var answers = require('./QuestionsAndAnswers/answers');
var reviews = require('./reviews/reviews.js');
var products = require('./products&cart/products.js');
var cart = require('./products&cart/cart.js');
var interactions = require ('./interactions/interactions.js');

app.use('/qa/questions', questions);
app.use('/qa/answers', answers);
app.use('/reviews', reviews);
app.use('/products', products);
app.use('/cart', cart);
app.use('/interactions', interactions);

var port = 3000;

app.listen(port, () =>
  {console.log(`server is running and listening on http://localhost:${port}`)
});
