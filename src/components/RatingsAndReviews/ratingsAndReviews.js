import React from 'react';
import {useState} from 'react';
import ReviewList from './reviewList.js';
import Sort from './sort.js'
import RatingBreakdown from './ratingBreakdown.js';
import ProductBreakdown from './productBreakdown.js';
import ReviewForm from './reviewForm.js'
import { useProduct } from '../../contexts/ProductContext.js';

export default function RatingsAndReviews(props) {
  const productContext = useProduct();
  const [sort, setSort] = useState('relevant');
  const [filters, setFilters] = useState([false, false, false, false, false]);
  return (
    <div onClick={props.onClick}>
      {JSON.stringify(productContext.meta)=== '{}' ? <div></div> :
      <div><RatingBreakdown sort={sort} setSort={setSort} productContext={productContext} filters={filters} setFilters={setFilters}/>
      <ProductBreakdown productContext={productContext}/></div>}

      <Sort sort={sort} setSort={setSort} productContext={productContext}/>
      <ReviewList sort={sort} setSort={setSort} productContext={productContext} filters={filters}/>
      {JSON.stringify(productContext.meta)=== '{}' ? <div></div> :
      <ReviewForm characteristics={productContext.meta.meta.characteristics}></ReviewForm>}
    </div>
  );

}