import React from 'react';
import { useReview } from '../../contexts/ReviewContext.js';
import Tile from './tile.js';


export default function ReviewList() {
  const reviewContext = useReview();
  return (
    <div>
      <button onClick={reviewContext.setNewMeta}>Get Reviews</button>
      {reviewContext.reviews.map((review) => {
        console.log(review);
        return (
          <Tile review={review} key={review.review_id}/>
        )
      })}
      <h1>{reviewContext.sort}</h1>
      <h1>{reviewContext.count}</h1>
    </div>
  )
}