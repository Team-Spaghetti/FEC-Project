var routes = require('express').Router();
var axios = require('axios');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-atx/qa/questions'

var auth = {headers: {'Authorization': `${config}`}, params:{product_id:1}};

routes.get('/', (req, res) => {
  axios.get(endPoint, auth)
    .then(response => {
      console.log(response.data)
      res.status(200).end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
});

// on client side, will replace 1 by productId
routes.get(`/${1}/answers`, (req, res) => {
  axios.get(endPoint + `/${1}/answers`, auth)
    .then(response => {
      console.log(response.data)
      res.status(200).end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
})

// on client side, will replace 1 by productId
routes.post(`/${1}/question`, (req, res) => {
  var body = req.body.body, name = req.body.name, email = req.body.email, product_id=req.body.product_id;
  console.log([body, name, email, product_id])
  axios.post(endPoint, { body, name, email, product_id }, { headers: { 'Authorization': `${config}` }})
    .then(response => {
      console.log(response.data);
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
})

// remember to put the question_id in the body on the client side
routes.post(`/${1}/answers`, (req, res) => {
  axios.post(endPoint + `/${1}/answers`, { body: req.body.body, name: req.body.name, email: req.body.email, photos: req.body.photos }, { headers: { 'Authorization': `${config}` }, params: { question_id: req.body.question_id } })
    .then(response => {
      console.log(response.data);
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
})

routes.put(`/${1}/helpful`, (req, res) => {
  axios.put(endPoint + `/${1}/helpful`, { question_id: req.body.question_id }, { headers: { 'Authorization': `${config}` }})
    .then(response => {
      console.log(response.data)
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
})

routes.put(`/${1}/report`, (req, res) => {
  axios.put(endPoint + `/${1}/report`, { question_id: req.body.question_id }, { headers: { 'Authorization': `${config}` } })
    .then(response => {
      console.log(response.data)
      res.end();
    })
    .catch(err => {
      console.error(err);
      res.end();
    })
})

module.exports = routes;
