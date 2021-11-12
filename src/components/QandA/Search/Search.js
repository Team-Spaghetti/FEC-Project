import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

var Search = ({handleSearch, setText}) => {

  var handleSubmit = e => {
    // will take method passed from qandq then use
    // method to modify what questions will be passed to question list
    e.preventDefault();
    setText('');
  }
  var handleChange = e => {
    setText(e.target.value);
    handleSearch();
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={handleChange}
        color="secondary"
        fullWidth
        endAdornment={<SearchIcon fontSize='small' />}
      />
    </form >
  )
}

export default Search;