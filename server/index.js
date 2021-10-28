var express = require('express');
var axios = require('axios');
var cors = require('cors');
var app = express();

app.use(express.json());
app.use(cors());

var port = 3000;

app.listen(port, () =>
  {console.log('server is running')
});

