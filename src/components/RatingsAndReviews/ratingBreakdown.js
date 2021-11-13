import React from 'react';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Recommended from './recommended.js';


function RatingBar(props) {
  const handleFilterClick = () => {
    var newFilter = [...props.filters];
    newFilter[props.stars-1] = !newFilter[props.stars-1]
    console.log(newFilter);
    props.setFilters(newFilter);
  }
  return (
    <div>
      <u onClick={handleFilterClick}>{props.stars} stars</u>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '50%', mr: 1 }}>
          <LinearProgress variant="determinate" value={props.value} />
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">{`${props.numOfRatings}`}</Typography>
        </Box>
      </Box>
      </div>
  )
}

export default function RatingBreakdown(props) {
  const stars = [1,2,3,4,5];
  const handleRemoveFilters = () => {
    props.setFilters([false, false, false, false, false]);
  };
  return (
    <div>
      <a name="reviews"></a>
      <h2>Rating Breakdown</h2>
      {(props.filters.indexOf(true) !== -1) ? <div>Showing{
        props.filters.map((filter, index) => {
          if (filter) {
            return (
              <p key={index + 1}>{index + 1} Star Reviews </p>
            )
          }
        })
      }<button onClick={handleRemoveFilters}>Remove Filters</button></div> : <div></div>}
      <h2>{props.productContext.meta.averageRating}</h2>
      <Rating value={props.productContext.meta.starRating || 0} precision={0.25} sx={{color:'black'}} readOnly/>
      {stars.map((rating) => {
        var numOfRatings = props.productContext.meta.meta.ratings[rating];
        var ratingPercentage = (numOfRatings/props.productContext.meta.totalRatings)*100;
        return (
          <RatingBar key={rating} value={ratingPercentage} stars={rating} numOfRatings={numOfRatings} filters={props.filters} setFilters={props.setFilters}/>
        )
      })}
      <Recommended recommend={props.productContext.meta.meta.recommended}/>
    </div>

  )
}