var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
const path  = require('path');

var questions = require('./QuestionsAndAnswers/questions');
var answers = require('./QuestionsAndAnswers/answers');
var reviews = require('./reviews/reviews.js');
var products = require('./products&cart/products.js');
var cart = require('./products&cart/cart.js');
var interactions = require ('./interactions/interactions.js');

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));


app.use('/qa/questions', questions);
app.use('/qa/answers', answers);
app.use('/reviews', reviews);
app.use('/products', products);
app.use('/cart', cart);
app.use('/interactions', interactions);

var port = process.env.PORT || 5000;

app.listen(port, () =>
{
  console.log(`listening on http://127.0.0.1:${port}`)
});
