import React from 'react';
import { useState, useEffect } from 'react';
import Tile from './tile.js';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';


export default function ReviewList(props) {
  const [count, setCount] = useState(2);
  const [reviews, setReviews] = useState([]);

  //updates Reviews when sort, count, or product_id is changed
  useEffect(()=>{
    axios.get(`http://localhost:3000/reviews/?count=${count}&sort=${props.sort}&product_id=${38322}`)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(err => {
        console.error(err);
    });
  }, [props.sort, count]);

  const handleShowMore = () => {
    if (count > 2) {
      setCount(props.productContext.meta.totalRatings);
    } else {
      setCount(count + 2);
    }
  }
  return (
    <React.Fragment>
      <List sx={{maxHeight:650, overflow:'auto'}}>
      {reviews.map((review) => {
        if(props.filters.indexOf(true)!== -1) {
          if (props.filters[review.rating - 1]) {
            return (
              <ListItem key ={review.review_id}>
                <Tile review={review} key={review.review_id}/>
              </ListItem>
            )
          } else {
            return;
          }
        } else {
          return (
            <ListItem key ={review.review_id}>
              <Tile review={review} key={review.review_id}/>
            </ListItem>
          )
        }
      })}
      </List>
      <Grid container>
        <Grid item xs={3}/>
        <Grid item xs={6}>
          {props.productContext.meta.totalRatings > count ? <button className="reviewButton" onClick={handleShowMore}>Show More</button>: <div></div>}
        </Grid>
        <Grid item xs={3}/>
      </Grid>
    </React.Fragment>
  )
}