import React from 'react';
import Rating from '@mui/material/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Recommended from './recommended.js';
import Grid from '@mui/material/Grid'
import { withStyles } from '@material-ui/styles';

// function StyledLinProg(styles) {
//   const { classes } = styles;
//   return (
//     <LinearProgress variant="determinate" >
//   )
// };

function RatingBar(props) {
  const handleFilterClick = () => {
    var newFilter = [...props.filters];
    newFilter[props.stars-1] = !newFilter[props.stars-1]
    console.log(newFilter);
    props.setFilters(newFilter);
  }
  const StyledLinearProgress = withStyles({
    root: {
      height:10,
      borderRadius:5,
    },
    colorPrimary: {
      backgroundColor: 'grey',
    },
    barColorPrimary: {
      backgroundColor: 'purple'
      }
  })(LinearProgress);

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <u className="filters" onClick={handleFilterClick}>{props.stars} stars</u>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ width: '95%', mr: 1, mt: 1}}>
            <StyledLinearProgress variant="determinate" value={props.value}/>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Typography sx={{mt:0.5}} className="filters" variant="body2" color="text.secondary">{`${props.numOfRatings}`}</Typography>
        </Grid>
      </Grid>
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
      <h4 className="ratingsHeader">Ratings and Reviews </h4>
      <Grid container>
        <Grid item xs={3}>
          <h1 className="averageRating">{props.productContext.meta.averageRating}</h1>
        </Grid>
        <Grid item xs={9}>
          <Rating size="large" value={props.productContext.meta.starRating || 0} precision={0.25} sx={{color:'purple', margin:1.25}} readOnly/>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <h5 className="ratingsHeader">Ratings Breakdown</h5>
        </Grid>
      </Grid>
      {(props.filters.indexOf(true) !== -1) ? <div>
        <Grid container>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={12}>
                <p className="filterText">Showing:</p>
              </Grid>
              <Grid item xs={12}>
                <button className="removeFilter" onClick={handleRemoveFilters}>Remove Filters</button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            {props.filters.map((filter, index) => {
              if (filter) {
                return (
                  <p className="filterText" key={index + 1}>{index + 1} Star Reviews </p>
                )
              }
            })}
            </Grid>
          </Grid>
        </div>: <div></div>}
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