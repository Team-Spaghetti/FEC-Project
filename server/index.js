var express = require('express');
var axios = require('axios');
var cors = require('cors');
var { urlencoded } = require('body-parser');
var app = express();
var questions = require('./qtns&ans/questions');
var answers = require('./qtns&ans/answers');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.use('/qa/questions', questions);
app.use('/qa/answers', answers);

var port = 3000;

app.listen(port, () =>
  {console.log(`server is running and listening on http://localhost:${port}`)
});

