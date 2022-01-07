import React from 'react';
import {useState} from 'react';
import ReviewList from './reviewList.js';
import Sort from './sort.js'
import RatingBreakdown from './ratingBreakdown.js';
import ProductBreakdown from './productBreakdown.js';
import ReviewForm from './reviewForm.js'
import { useProduct } from '../../contexts/ProductContext.js';
import Grid from '@mui/material/Grid';

export default function RatingsAndReviews(props) {
  const productContext = useProduct();
  const [sort, setSort] = useState('relevant');
  const [filters, setFilters] = useState([false, false, false, false, false]);
  return (
    <Grid container>
      <Grid item xs={4}>
        {JSON.stringify(productContext.meta)=== '{}' ? <div></div> :
        <div><RatingBreakdown sort={sort} setSort={setSort} productContext={productContext} filters={filters} setFilters={setFilters}/>
        <ProductBreakdown productContext={productContext}/></div>}
      </Grid>
      <Grid item xs={8}>
        <Sort sort={sort} setSort={setSort} productContext={productContext}/>
        <ReviewList sort={sort} setSort={setSort} productContext={productContext} filters={filters}/>
        {JSON.stringify(productContext.meta)=== '{}' ? <div></div> :
          <Grid container>
            <Grid item xs={3}/>
            <Grid item xs={6}>
              <ReviewForm characteristics={productContext.meta.meta.characteristics} name={productContext.product.name}></ReviewForm>
            </Grid>
            <Grid item xs={3}/>
          </Grid>}
      </Grid>
    </Grid>
  );

}