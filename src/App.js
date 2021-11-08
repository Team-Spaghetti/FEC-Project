import Button from '@mui/material/Button';
import React from "react";
import RatingsAndReviews from './components/RatingsAndReviews/ratingsAndReviews.js';
import Overview from './components/overview/overview.js'
import { ProductProvider } from './contexts/ProductContext.js';
import QandA from './components/QandA/QandA'

function App() {
  return (
    <div>
    <ProductProvider>
      <Overview />
      <RatingsAndReviews />
      <QandA />
    </ProductProvider>
    </div>
  )
}

export default (App);
