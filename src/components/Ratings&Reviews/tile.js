import React from 'react';
import StarRating from './starRating.js';
import Rating from '@mui/material/Rating'

export default function Tile(props) {
  // console.log(props);
  return(
    <div>
      <h3>{props.review.summary}</h3>
      {/* <Rating value={props.review.rating} precision={0.25} sx={{color:'black'}}/> */}
      <StarRating/>
      <p>{props.review.date}</p>
    </div>
  )
}