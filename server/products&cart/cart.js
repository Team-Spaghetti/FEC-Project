const routes = require("express").Router();
const axios = require("axios");
const token = require("../../config");
const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

routes.get("/", (req, res) => {
  axios
    .get(`${url}/cart`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send("Error: ", err);
    });
});

routes.post("/", (req, res) => {
  var sku_id = req.body.sku_id;
  axios({
    url: `${url}/cart`,
    method: "post",
    data: {
      sku_id: req.body.sku_id,
    },
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      res.status(201).send(`CREATED`);
    })
    .catch((err) => {
      res.status(500).send("Error: ", err);
    });
});

module.exports = routes;
