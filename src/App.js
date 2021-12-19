import Button from '@mui/material/Button';
import React from "react";
import RatingsAndReviews from './components/RatingsAndReviews/ratingsAndReviews.js';
import Overview from './components/overview/overview.js'
import { ProductProvider } from './contexts/ProductContext.js';
import QandA from './components/QandA/QandA'
import axios from 'axios';
import Container from '@mui/material/Container'

function App() {

  function sendInteraction(element, widget, time) {
    axios({
      url: "http://localhost:3000/interactions",
      method: "post",
      data: {
        element: element,
        widget: widget,
        time: time
      }
    })
      .then((response) => {
        console.log('Sent interaction with the following data: ', element, widget, time)
      })
      .catch((err) => {
        console.error("Error: ", err)
      })
  }

  function onClickOverview(e) {
    var time = Math.round(e.timeStamp).toString();
    var timeToSecs = time.slice(0, -3) + '.' + time.slice(-3) + ' seconds';
    var element = e.target.outerHTML;
    sendInteraction(element, 'Overview module', timeToSecs)
  }

  function onClickRatings(e) {
    var time = Math.round(e.timeStamp).toString();
    var timeToSecs = time.slice(0, -3) + '.' + time.slice(-3) + ' seconds';
    var element = e.target.outerHTML;
    sendInteraction(element, 'Ratings module', timeToSecs)
  }

  function onClickQuestions(e) {
    var time = Math.round(e.timeStamp).toString();
    var timeToSecs = time.slice(0, -3) + '.' + time.slice(-3) + ' seconds';
    var element = e.target.outerHTML;
    sendInteraction(element, 'Questions module', timeToSecs)
  }

  return (
  <React.Fragment>
    <div class="title-header"> 
      <h2>Urban Octo Chainsaw Clothing</h2>
    </div>
    <Container>
      <ProductProvider>
        <Overview onClick={onClickOverview}/>
        <hr></hr>
        <QandA onClick={onClickQuestions} />
        <hr></hr>
        <RatingsAndReviews onClick={onClickRatings} />
      </ProductProvider>
    </Container>
  </React.Fragment>
  )
}

export default (App);
