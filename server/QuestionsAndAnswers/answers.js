var routes = require('express').Router();
var axios = require('axios');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-atx/qa/answers'

var auth = { headers: { 'Authorization': `${config}` }, params: { product_id: 1 } };

routes.put(`/${1}/helpful`, (req, res) => {
  axios.put(endPoint + `/${1}/helpful`, { answer_id: req.body.answer_id }, auth)
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

routes.put(`/${1}/report`, (req, res) => {
  axios.put(endPoint + `/${1}/report`, { answer_id: req.body.answer_id }, auth)
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})


module.exports = routes;