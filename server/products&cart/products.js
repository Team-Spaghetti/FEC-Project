const routes = require("express").Router();
const axios = require("axios");
const token = require("../../config");
const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

//List Products
routes.get(`/`, (req, res) => {
  axios
    .get(`http://localhost:8080/products`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err + `Error on server side!`);
    });
});

//Product Information
routes.get(`/:product_id`, (req, res) => {
  axios
    .get(`http://localhost:8080/products/${req.params.product_id}`)
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
  axios
    .get(`http://localhost:8080/products/${req.params.product_id}/related`)
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err + `Error on server side!`);
    });
});

module.exports = routes;
