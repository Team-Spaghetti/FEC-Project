import Button from '@mui/material/Button';
import React from "react";
import Overview from './components/overview/overview.js';
import { ProductProvider } from './contexts/ProductContext.js';
import { ReviewProvider } from './contexts/ReviewContext.js';
import ReviewList from './components/Ratings&Reviews/reviewList.js';

function App() {
  return (
    <div>
    <ProductProvider>
      <Overview />
    </ProductProvider>
    <ReviewProvider>
      <ReviewList />
    </ReviewProvider>
    </div>
  )
}

export default (App);

/**
 * Context:
 *    Product_id: int, because we're working with one product
 *    Product Styles
 *    Reviews Array
 *    Questions Array
 *    Answers Array
 */