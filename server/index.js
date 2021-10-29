var express = require('express');
var axios = require('axios');
var cors = require('cors');
var app = express();
var api = 'https://app-hrsei-api.herokuapp.com/api/fec2/:hr-atx';
var gitToken = require('../config.js').API_KEY;



app.use(express.json());
app.use(cors());

var port = 3000;

app.listen(port, () =>
  {console.log('server is running');
});

//route for product reviews
app.get('/reviews', (req, res) => {
  axios.get(`${api}/reviews/`, {
    params : {
      page: req.body.page,
      count: req.body.count,
      sort: req.body.sort,
      product_id: req.body.product_id
    },
    headers: {
      Authorization: gitToken
    }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
});

//route for product metadata
app.get('/reviews/meta', (req, res) => {
  axios.get(`${api}/reviews/meta`, {
    params: {
      product_id: req.body.product_id
    },
    headers: {
      Authorization: gitToken
    }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// app.post('/reviews', (req, res) => {
//   axios.post(`${api}/reviews/`, {
//     params: {
//       product_id: req.body.product_id,
//       rating: req.body.rating,
//       summary: req.body.summary,
//       body: req.body.body,
//       recommend: req.body.recommend,
//       name: req.body.name,
//       email: req.body.email,
//       photos: req.body.photos,
//       characteristics: req.body.characteristics
//     },
//     headers: {
//       Authorization: gitToken
//     }
//   })
//     .then((response) => {
//       res.status(201).send(response.data);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// })
