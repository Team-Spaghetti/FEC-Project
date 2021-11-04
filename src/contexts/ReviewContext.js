import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useProduct } from './ProductContext.js';

const ReviewContext = React.createContext();

export function useReview() {
  return useContext(ReviewContext);
}

export function ReviewProvider({children}) {
  const [sort, setSort] = useState('relevant');
  const [count, setCount] = useState(2);
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState();
  const [avgRating, setAvgRating] = useState();
  const [starsFilled, setStarsFilled] = useState();
  const productContext = useProduct();

  function setNewSort(sortOn) {
    setSort(sortOn);
  }

  function setNewCount(newCount) {
    setQuantity(newCount);
  }

  function setNewReviews() {
    axios.get(`http://localhost:3000/reviews/?count=${count}&sort=${sort}&product_id=${productContext.product}`)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function setNewMeta() {
    axios.get(`http://localhost:3000/reviews/meta?product_id=${productContext.product}`)
      .then(response => {
        setMeta(response.data);
        const ratings = Object.values(response.data.ratings);
        var totalRatings = 0;
        var averageRating = 0;
        for (let i=0; i<ratings.length; i++) {
          var value = i+1;
          var numOfRatings = parseInt(ratings[i]);
          averageRating += value*numOfRatings;
          totalRatings += numOfRatings;
        }
        averageRating /= totalRatings;
        setAvgRating((Math.round(averageRating*10))/10);
        setStarsFilled((Math.round(averageRating * 4))/4);
      })
      .then(response => {
          setNewReviews();
      })
      .catch(err=> {
        console.error(err);
      });
  }

  return (
    <ReviewContext.Provider value = { {sort: sort, setNewSort:setNewSort, count: count, setNewCount: setNewCount, reviews: reviews, setNewReviews:setNewReviews, meta: meta, setNewMeta:setNewMeta, avgRating: avgRating, avgRating: avgRating, starsFilled: starsFilled}}>
      {children}
    </ReviewContext.Provider>
  )
}