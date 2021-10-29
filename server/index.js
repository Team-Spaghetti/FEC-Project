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
