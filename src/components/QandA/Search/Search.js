import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

var Search = ({handleSearch, setText}) => {

  var handleSubmit = e => {
    // will take method passed from qandq then use
    // method to modify what questions will be passed to question list
    e.preventDefault();
    setText('');
  }
  var handleChange = e => {
    let freshText = e.target.value
    setText(freshText);
    handleSearch(freshText);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={handleChange}
        color="secondary"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form >
  )
}

export default Search;