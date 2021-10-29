var routes = require('express').Router();
var axios = require('axios');
var config = require('../../config');
var endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions';

// capture productID in variable

var auth = { headers: { 'Authorization': `${config}` }};
var authWithProductId = { headers: { 'Authorization': `${config}` }, params: { product_id: 38323 } };

routes.get('/', (req, res) => {
  axios.get(endPoint, authWithProductId)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
});

// on client side, will replace 1 by productId
routes.get(`/${1}/answers`, (req, res) => {
  axios.get(endPoint + `/542798/answers`, auth)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

// on client side, will replace 1 by productId
// testing: body: {
// "body": "Please Proceed with caution, coders they be right with me",
//   "name": "Spaghetti-PhiAgent",
//     "email": "phiAgent@spaghetti.com",
// "product_id": 1
// }
routes.post(`/${1}/question`, (req, res) => {
  let body = req.body.body, name = req.body.name, email = req.body.email, product_id = req.body.product_id;
  axios.post(endPoint, { body: body, name: name, email: email, product_id: product_id }, auth)
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.log(err);
      res.status(400).end();
    })
})

// remember to put the question_id in the body on the client side
// postman testing:
// include params in auth
routes.post(`/${1}/answers`, (req, res) => {
  axios.post(endPoint + `/542798/answers`, { body: req.body.body, name: req.body.name, email: req.body.email, photos: req.body.photos }, { headers: { 'Authorization': `${config}` }, params: { question_id: req.query.question_id } })
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

routes.put(`/${1}/helpful`, (req, res) => {
  axios.put(endPoint + `/${1}/helpful`, { question_id: req.body.question_id }, { headers: { 'Authorization': `${config}` } })
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

routes.put(`/${1}/report`, (req, res) => {
  axios.put(endPoint + `/${1}/report`, { question_id: req.body.question_id }, { headers: { 'Authorization': `${config}` }})
    .then(response => {
      res.status(200).send(response.statusText);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
})

module.exports = routes;