var express = require('express');
var axios = require('axios');
var cors = require('cors');
var app = express();
var questions = require('./QuestionsAndAnswers/questions');
var answers = require('./QuestionsAndAnswers/answers');

app.use(express.json());
app.use(cors());

app.use('/qa/questions', questions);
app.use('/qa/answers', answers);

var port = 3000;

app.listen(port, () =>
  {console.log(`server is running and listening on http://localhost:${port}`)
});
