var routes = require('express').Router();
var axios = require('axios');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-atx/qa/answers'

var auth = { headers: { 'Authorization': `${config}` }, params: { product_id: 1 } };

routes.put(`/${1}/helpful`, (req, res) => {
  axios.put(endPoint + `/${1}/helpful`, { answer_id: req.body.answer_id }, { headers: { 'Authorization': `${config}` } })
    .then(response => {
      console.log(response.data)
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();;
    })
})

routes.put(`/${1}/report`, (req, res) => {
  axios.put(endPoint + `/${1}/report`, { answer_id: req.body.answer_id }, { headers: { 'Authorization': `${config}` } })
    .then(response => {
      console.log(response.data)
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();;
    })
})


module.exports = routes;