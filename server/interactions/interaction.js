const routes = require("express").Router();
const axios = require("axios");
const token = require("../../config");
const url = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx";

routes.post("/", (req, res) => {
  axios({
    url: `${url}/interactions`,
    method: "post",
    data: {
      element: req.body.element,
      widget: req.body.widget,
      time: req.body.time
    },
    headers: {
      Authorization: `${token}`
    }
  })
    .then((reponse) => {
      res.status(201).send('CREATED');
    })
    .catch((err) => {
      res.status(500).send("Error: ", err);
    })
})

module.exports = routes;