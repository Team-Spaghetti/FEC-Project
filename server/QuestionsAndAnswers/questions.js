var routes = require('express').Router();
var axios = require('axios');
var url = require('url');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions';

var auth = { headers: { 'Authorization': `${config}` }};
// product_id = 38323, question_id = 542812

routes.get('/', (req, res) => {
  axios.get(endPoint, { headers: { 'Authorization': `${config}` }, params: { product_id: req.query.product_id } })
    .then(response => res.status(200).send(response.data))
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
});

routes.get(`/:question_id/answers`, (req, res) => {
  axios.get(endPoint + `/${req.params.question_id}/answers`, auth)
    .then(response => res.status(200).send(response.data))
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

routes.post(`/:product_id/question`, (req, res) => {
  let body = req.body.body, name = req.body.name, email = req.body.email, product_id = req.body.product_id;
  axios.post(endPoint, { body, name, email, product_id }, auth)
    .then(response => res.status(200).send(response.statusText))
    .catch(err => {
      console.log(err.response.status);
      res.status(400).end();
    })
})

routes.post(`/:question_id/answer`, (req, res) => {
  axios.post(endPoint + `/${req.params.question_id}/answers`, { body: req.body.body, name: req.body.name, email: req.body.email, photos: req.body.photos }, { headers: { 'Authorization': `${config}` }, params: { question_id: req.params.question_id } })
    .then(response => res.status(200).send(response.statusText))
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

routes.put(`/:question_id/*`, (req, res) => {
  var path = url.parse(req.url, true).path.split('/').at(-1);
  axios.put(endPoint + `/${req.params.question_id}/${path}`, { question_id: req.params.question_id }, auth)
    .then(response => res.status(200).send(response.statusText))
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

module.exports = routes;