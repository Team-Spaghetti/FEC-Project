var routes = require('express').Router();
var axios = require('axios');
var url = require('url');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-atx/qa/answers';

// answer_id = 5087337

var auth = { headers: { 'Authorization': `${config}` } };

routes.put(`/:answer_id/*`, (req, res) => {
  var path = url.parse(req.url, true).path.split('/').at(-1);
  axios
    .put(endPoint + `/${req.params.answer_id}/${path}`,
     { answer_id: req.params.answer_id }, auth)
    .then(response => res.status(200).send(response.statusText))
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})


module.exports = routes;