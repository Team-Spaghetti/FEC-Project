var express = require('express');
var app = express();
var axios = require('axios');
var cors = require('cors');

var token = require('../config.js')


app.use(express.json());
app.use(cors());

var port = 3000;

app.listen(port, () =>
  {console.log(`server is running at http://localhost:${port}`)
});

var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx'

app.get('/', (req, res) => {
  res.status(200).send('Hello world!')
});

app.get(`/products`, (req, res) => {
  console.log(req.query)
  axios.get(`${url}/products`,{
    params: {
      page: req.query.page? req.query.page : null,
      count: req.query.count? req.query.count : null
    },
    headers: {
      'Authorization': `${token}`
    }
  })
  .then(response => {
    res.status(200).send(response.data)
  })
  .catch(err => {
    res.status(500).send(err + `Error on server side!`)
  })
})

app.get(`/products/:product_id`, (req, res) => {
  console.log(req.params)
  axios.get(`${url}/products`,{
    params: {
      product_id: req.params.product_id
    },
    headers: {
      'Authorization': `${token}`
    }
  })
  .then(response => {
    res.status(200).send(response.data)
  })
  .catch(err => {
    res.status(500).send(err + `Error on server side!`)
  })
})

//route for product reviews
app.get('/reviews', (req, res) => {
  axios.get(`${url}/reviews/`, {
    params : {
      page: req.body.page,
      count: req.body.count,
      sort: req.body.sort,
      product_id: req.body.product_id
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
      res.status(400).send('failed :(');
    });
});

//route for product metadata
app.get('/reviews/meta', (req, res) => {
  axios.get(`${url}/reviews/meta`, {
    params: {
      product_id: req.body.product_id
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

