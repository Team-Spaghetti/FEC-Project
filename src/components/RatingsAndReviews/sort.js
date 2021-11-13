import React from 'react';
import Grid from '@mui/material/Grid'

export default function Sort(props) {
  const handleChange = (event) => {
    props.setSort(event.target.value);
  }
  return (
    <div className="sort">
      <Grid container>
        <Grid item xs={3}>
          <p>{props.productContext.meta.totalRatings} reviews, sorted by</p>
        </Grid>
        <Grid item xs={9}>
          <select value={props.sort} onChange={handleChange}>
            <option>relevant</option>
            <option>newest</option>
            <option>helpful</option>
          </select>
        </Grid>
      </Grid>
    </div>
  )
}