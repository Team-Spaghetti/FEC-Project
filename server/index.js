var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');
var reviews = require('./reviews.js');

var token = require('../config.js').API_KEY;


app.use(express.json());
app.use(cors());
app.use('/reviews', reviews);
var port = 3000;

app.listen(port, () =>
  {console.log(`server is running at http://localhost:${port}`)
});

