var routes = require('express').Router();
var axios = require('axios');
var token = require('../config.js').API_KEY;
var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/reviews';


//route for product reviews
routes.get('/', (req, res) => {
  axios.get(url, {
    params : {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id
    },
    headers: {
      Authorization: token
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
routes.get('/meta', (req,res) => {
  axios.get(`${url}/meta`, {
    params: {
      product_id: req.query.product_id
    },
    headers: {
      Authorization: token
    }
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((err) => {
    res.status(400).send(err);
  });
});

//route to post new review
routes.post('/', (req, res) => {
  console.log(req.body)
  axios.post(url, {
    product_id: req.body.product_id,
    rating: req.body.rating,
    summary: req.body.summary,
    body: req.body.body,
    recommend: req.body.recommend,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos,
    characteristics: req.body.characteristics
  },
  {
    headers: {
      Authorization: token
    }
  })
    .then((response) => {
      res.status(201).send('Created!');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

//route to mark review as helpful
routes.put('/:review_id/helpful', (req, res) => {
  axios.put(`${url}/${req.params.review_id}/helpful`,  {
    review_id: req.params.review_id
  }, {
    headers: {
      Authorization: token
    }
  })
    .then((response) => {
      console.log(req.params.review_id);
      res.status(204).send(response.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err);
    })
})

//route to report review
routes.put('/:review_id/report', (req, res) => {
  axios.put(`${url}/${req.params.review_id}/report`, {
    review_id: req.params.review_id
  }, {
    headers: {
      Authorization: token
    }
  })
    .then((response) => {
      res.status(204).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

module.exports = routes;