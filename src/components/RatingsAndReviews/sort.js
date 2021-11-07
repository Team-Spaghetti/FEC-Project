import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Sort(props) {
  const handleChange = (event) => {
    props.setSort(event.target.value);
  }
  return (
    <div>{props.productContext.meta.totalRatings} reviews, sorted by
      <Select value={props.sort} onChange={handleChange}>
        <MenuItem value='relevant'>relevant</MenuItem>
        <MenuItem value='newest'>newest</MenuItem>
        <MenuItem value='helpful'>helpful</MenuItem>
      </Select>
    </div>
  )
}