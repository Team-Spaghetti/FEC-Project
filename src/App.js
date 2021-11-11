import Button from '@mui/material/Button';
import React from "react";
import RatingsAndReviews from './components/RatingsAndReviews/ratingsAndReviews.js';
import Overview from './components/overview/overview.js'
import { ProductProvider } from './contexts/ProductContext.js';
import QandA from './components/QandA/QandA'
import Container from '@mui/material/Container';

function App() {
  return (
    <Container>
      <ProductProvider>
        <Overview />
        <RatingsAndReviews />
        <QandA />
      </ProductProvider>
    </Container>
  )
}

export default (App);
