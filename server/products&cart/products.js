//environment
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../../config.env") });


const routes = require("express").Router();
const axios = require("axios");
const token = require("../../config");
const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

const {
  RelatedProducts,
  Products,
  Photos,
  Features,
  Styles,
  Skus
} = require('../../etlMachinery/mongo/Models/models');


const mongoose = require('mongoose');
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// UNCOMMENT TO USE LOCAL DATABASE
// const urlLocal = 'mongodb://localhost:27017/fec';
// const connect = mongoose.connect(urlLocal, config);

// UNCOMMENT TO USE REMOTE DATABASE
const remoteUrl = process.env.MONGO_URI;
const connect = mongoose.connect(remoteUrl, config);

connect
  .then(db => console.log('Connected!'))
  .catch(err => console.error(err))


//List Products
routes.get(`/`, (req, res) => {
  Products
    .find({})
    .sort({ 'id': 1 })
    .limit(10)
    .then(products => {
      // it appears you can't edit arguments or objects in node so had to map object to modify it
      let newProducts = JSON.parse(JSON.stringify(products));
      for (product of newProducts) {
        delete product._id;
        product.default_price = product.default_price.toString();
      }
      res.send(newProducts)
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
});

//Product Information
routes.get(`/:product_id`, (req, res) => {
  axios
    .get(`${url}/products/${req.params.product_id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err + `Error on server side!`);
    });
});

//Product Styles
routes.get(`/:product_id/styles`, (req, res) => {
  axios
    .get(`${url}/products/${req.params.product_id}/styles`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err + `Error on server side!`);
    });
});

//Related Products
routes.get(`/:product_id/related`, (req, res) => {
  let current_product_id = req.params.product_id
  RelatedProducts
    .find({ current_product_id })
    .limit(10)
    .then(products => {
      let newProducts = products.map(product => product.related_product_id)
      res.send([...new Set(newProducts)]);
    })
    .catch(err => {
      console.error(err);
      res.status(400).end();
    })
});

module.exports = routes;
