import React from 'react';
import { useReview } from '../../contexts/ReviewContext.js'

export default function ReviewList() {
  const reviewContext = useReview();
  return (
    <div>
      <h1>{reviewContext.sort}</h1>
      <h1>{reviewContext.quantity}</h1>
    </div>
  )
}