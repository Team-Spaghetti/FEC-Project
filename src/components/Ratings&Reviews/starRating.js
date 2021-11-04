import React from 'react';
import { useReview } from '../../contexts/ReviewContext.js';
import Rating from '@mui/material/Rating'

export default function StarRating() {
  const reviewContext = useReview();
  return (
    <Rating value={2.5} precision={0.25} sx={{color:'black'}}/>
  )
}